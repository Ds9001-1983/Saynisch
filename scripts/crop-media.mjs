/**
 * SAYNISCH — Einmal-Crop der gelieferten Foto-JPEGs → AVIF.
 * Zerschneidet die Methoden-Collage in 5 Einzelkacheln und schneidet die
 * beiden Szenenfotos passend zu (AVIF-Konvention wie gen-media.mjs).
 *
 * Nutzung: node scripts/crop-media.mjs
 * Quellen: assets-src/ (bzw. public/media/img/, solange sie dort liegen)
 */
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG = path.join(ROOT, "public", "media", "img");

/** Quelle in assets-src/ oder (noch) in public/media/img/ finden. */
function src(name) {
  for (const dir of [path.join(ROOT, "assets-src"), IMG]) {
    const p = path.join(dir, name);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`Quelldatei nicht gefunden: ${name}`);
}

const COLLAGE = src("WhatsApp Image 2026-07-08 at 16.17.37.jpeg"); // 1536×1024, 5 Kacheln
const TRESEN = src("WhatsApp Image 2026-07-08 at 16.43.04.jpeg"); // 1536×1024, Du-Text links!
const WARTEZIMMER = src("WhatsApp Image 2026-07-08 at 16.51.57.jpeg"); // 1536×1024

// Rechtecke in Pixeln des 1536×1024-Originals. Kachel-Crops OHNE die weißen
// Beschriftungsbänder (Begriffe stehen als Text in lib/content.ts).
const JOBS = [
  { src: COLLAGE, out: "stresslupe", rect: { left: 14, top: 22, width: 480, height: 400 } },
  { src: COLLAGE, out: "stresslandkarte", rect: { left: 516, top: 22, width: 512, height: 400 } },
  { src: COLLAGE, out: "perspektivwechsel", rect: { left: 1048, top: 22, width: 480, height: 400 } },
  { src: COLLAGE, out: "formulierungswerkstatt", rect: { left: 14, top: 530, width: 480, height: 400 } },
  { src: COLLAGE, out: "methodenkoffer", rect: { left: 516, top: 530, width: 512, height: 400 } },
  // 4:5-Ausschnitt, zentriert auf Besucher + Mitarbeiterin (Schwerpunkte Panel 02):
  { src: WARTEZIMMER, out: "praxisempfang", rect: { left: 340, top: 0, width: 819, height: 1024 } },
  // 1:1-Ausschnitt der rechten Bildhälfte — der Du-Text (x < ~500) muss draußen bleiben:
  { src: TRESEN, out: "beratungstresen", rect: { left: 500, top: 0, width: 1024, height: 1024 } },
];

for (const j of JOBS) {
  const file = path.join(IMG, `${j.out}.avif`);
  await sharp(j.src)
    .extract(j.rect)
    .resize({ width: 1000, withoutEnlargement: true })
    .avif({ quality: 52 })
    .toFile(file);
  console.log("✓", path.relative(ROOT, file));
}
