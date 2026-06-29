/**
 * SAYNISCH — Medien-Generierung (KI, atmosphärisch, keine Gesichter).
 *
 * Nutzung (Keys NICHT im Repo — via ENV):
 *   RUNPOD_IMG_KEY=… node scripts/gen-media.mjs images
 *   RUNPOD_VID_KEY=… node scripts/gen-media.mjs video "<hero-still-url>"
 *
 * Bilder: RunPod z-image-turbo → Download → sharp → AVIF (web-optimiert).
 * Video : RunPod seedance-i2v aus dem Hero-Still → ffmpeg → mp4 + webm.
 */
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "media");
const IMG = path.join(OUT, "img");
mkdirSync(IMG, { recursive: true });

const NEG =
  "faces, eyes, people, text, words, logos, watermark, saturated colors, neon, cold blue clinical tint, clutter, distorted hands, extra fingers, medical equipment";

const IMAGES = [
  {
    name: "hero",
    poster: true,
    size: "1536*864",
    width: 1536,
    quality: 44,
    prompt:
      "cinematic photorealistic still, a calm light-filled minimalist room in the morning, soft linen curtain, a glass of water and an open notebook on pale oak wood, a blurred sage-green plant in the background, soft volumetric morning daylight, NO people, NO faces, off-white and warm sand palette with a muted sage green accent, low contrast, airy, fine film grain, shot on 35mm, generous empty negative space",
  },
  {
    name: "beratung",
    size: "1024*1280",
    width: 1000,
    quality: 52,
    prompt:
      "photorealistic editorial photograph, two pairs of hands in a calm conversation gesture across a pale oak table, one hand gently open, a notebook and a glass of water nearby, framed from chest down so NO faces are visible, soft window light from the left, off-white and warm sand palette with a muted sage green textile accent, fine film grain, natural skin tones, serene reassuring professional mood",
  },
  {
    name: "seminarraum",
    size: "1024*1280",
    width: 1000,
    quality: 52,
    prompt:
      "photorealistic architectural photograph, an empty bright modern seminar room, a few light wooden chairs in a loose circle, a large window with soft daylight, a single potted sage plant, NO people, lots of air and negative space, off-white walls warm sand floor with a muted sage accent, calm ordered quiet anticipation, fine film grain",
  },
  {
    name: "wasser",
    size: "1024*1280",
    width: 1000,
    quality: 52,
    prompt:
      "photorealistic abstract macro photograph, a single gentle ripple spreading on a still pale water surface, soft reflections, top-down, lots of calm empty surface, off-white and warm sand reflections with a faint sage tint, meditative quiet slow mood, fine film grain",
  },
  {
    name: "ansatz",
    size: "1024*1280",
    width: 1000,
    quality: 52,
    prompt:
      "photorealistic photograph, soft morning daylight falling through a sheer curtain into a quiet minimalist room, a calm corner with a light wooden chair and a sage-green plant, gentle dust motes in a sunbeam, NO people, NO faces, off-white and warm sand palette with a muted sage accent, serene grounding mood, fine film grain, shot on 35mm",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runpod(endpoint, key, input) {
  const auth = { Authorization: `Bearer ${key}` };
  const res = await fetch(`https://api.runpod.ai/v2/${endpoint}/runsync`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...auth },
    body: JSON.stringify({ input }),
    signal: AbortSignal.timeout(600000),
  });
  let json = await res.json();

  // Lange Jobs (Video): runsync kann IN_PROGRESS zurückgeben → Status pollen
  let tries = 0;
  while ((json.status === "IN_PROGRESS" || json.status === "IN_QUEUE") && json.id && tries < 180) {
    await sleep(5000);
    tries++;
    const s = await fetch(`https://api.runpod.ai/v2/${endpoint}/status/${json.id}`, {
      headers: auth,
      signal: AbortSignal.timeout(60000),
    });
    json = await s.json();
    if (tries % 4 === 0) process.stdout.write(`  …${json.status} (${tries * 5}s)\n`);
  }

  if (json.status !== "COMPLETED") {
    throw new Error(`RunPod ${endpoint}: ${JSON.stringify(json).slice(0, 300)}`);
  }
  return json.output;
}

async function download(url) {
  const r = await fetch(url, { signal: AbortSignal.timeout(120000) });
  if (!r.ok) throw new Error(`Download ${url} -> ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

async function genImages() {
  const key = process.env.RUNPOD_IMG_KEY;
  if (!key) throw new Error("RUNPOD_IMG_KEY fehlt");
  const results = {};

  for (const img of IMAGES) {
    process.stdout.write(`→ ${img.name} … `);
    const out = await runpod("z-image-turbo", key, {
      prompt: img.prompt,
      negative_prompt: NEG,
      size: img.size,
      seed: 7,
      output_format: "png",
      enable_safety_checker: true,
    });
    const url = out.result;
    results[img.name] = url;
    const buf = await download(url);

    await sharp(buf)
      .resize({ width: img.width })
      .avif({ quality: img.quality })
      .toFile(path.join(IMG, `${img.name}.avif`));

    if (img.poster) {
      await sharp(buf)
        .resize({ width: img.width })
        .avif({ quality: 40 })
        .toFile(path.join(OUT, "hero-poster.avif"));
    }
    console.log(`ok (${(buf.length / 1024) | 0} KB src) → ${url}`);
  }

  console.log("\nHERO_STILL_URL=" + results.hero);
}

async function genVideo(heroUrl) {
  const key = process.env.RUNPOD_VID_KEY;
  if (!key) throw new Error("RUNPOD_VID_KEY fehlt");
  if (!heroUrl) throw new Error("hero-still-url Argument fehlt");

  console.log("→ seedance i2v …");
  const out = await runpod("seedance-v1-5-pro-i2v", key, {
    prompt:
      "very slow cinematic dolly-in, barely perceptible camera motion, soft morning light shifting gently, dust motes drifting, calm and serene, warm neutral grade, no people",
    image: heroUrl,
    aspect_ratio: "16:9",
    duration: 5,
    resolution: "720p",
    seed: 7,
    camera_fixed: false,
    generate_audio: false,
  });
  const videoUrl = out.result ?? out.video ?? out.url;
  console.log("  video url:", videoUrl);
  const buf = await download(videoUrl);
  const raw = path.join(OUT, "_hero_raw.mp4");
  writeFileSync(raw, buf);
  console.log(`  raw ${(buf.length / 1024 / 1024).toFixed(2)} MB → komprimiere…`);

  // MP4 (H.264)
  execFileSync("ffmpeg", [
    "-y", "-i", raw, "-an",
    "-vf", "scale=1280:-2,fps=25",
    "-c:v", "libx264", "-profile:v", "high", "-crf", "26", "-preset", "slow",
    "-movflags", "+faststart", "-pix_fmt", "yuv420p",
    path.join(OUT, "hero.mp4"),
  ], { stdio: "inherit" });

  // WebM (VP9)
  execFileSync("ffmpeg", [
    "-y", "-i", raw, "-an",
    "-vf", "scale=1280:-2,fps=25",
    "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "36", "-row-mt", "1",
    path.join(OUT, "hero.webm"),
  ], { stdio: "inherit" });

  console.log("  fertig: hero.mp4 + hero.webm");
}

const mode = process.argv[2] ?? "images";
if (mode === "images") await genImages();
else if (mode === "video") await genVideo(process.argv[3]);
else throw new Error("Modus: images | video");
