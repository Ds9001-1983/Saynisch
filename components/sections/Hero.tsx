"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import { HERO } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { Kicker } from "@/components/ui/Kicker";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MediaBadge } from "@/components/ui/MediaBadge";
import { RevealText } from "@/components/motion/RevealText";
import { useLoading } from "@/components/providers/LoadingContext";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const AuroraCanvas = dynamic(
  () => import("@/components/webgl/AuroraCanvas").then((m) => m.AuroraCanvas),
  { ssr: false },
);

export function Hero() {
  const { ready } = useLoading();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPaused, setVideoPaused] = useState(false);

  // Button-Zustand folgt dem Element — deckt auch Pausen durch den Browser ab.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setVideoPaused(false);
    const onPause = () => setVideoPaused(true);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  // WCAG 2.2.2: CSS-Reduced-Motion-Regeln greifen nicht auf <video> —
  // System-Einstellung und Footer-Toggle müssen das Video selbst stoppen.
  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* WebGL-Aurora-Backdrop (mit CSS-Fallback) */}
      <AuroraCanvas variant="light" />

      {/* Atmosphärisches Hero-Video (self-hosted) über der Aurora */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
        poster={MEDIA.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src={MEDIA.heroVideoWebm} type="video/webm" />
        <source src={MEDIA.heroVideoMp4} type="video/mp4" />
      </video>

      {/* AI Act Art. 50: sichtbare Kennzeichnung des KI-generierten Videos */}
      <MediaBadge className="bottom-6 left-[var(--side-padding)] right-auto" />

      {/* WCAG 2.2.2: sichtbarer Pausier-Mechanismus für das Autoplay-Video */}
      <button
        type="button"
        onClick={toggleVideo}
        aria-pressed={videoPaused}
        aria-label={videoPaused ? HERO.videoPlay : HERO.videoPause}
        data-cursor="hover"
        className="absolute bottom-6 right-[var(--side-padding)] z-10 rounded-full border border-line/60 bg-paper/80 p-2 text-ink/70 backdrop-blur transition-colors hover:text-ink focus-visible:text-ink"
      >
        {videoPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>

      {/* Lesbarkeits-Verlauf */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-sand via-sand/40 to-transparent"
      />

      <div className="container-bleed relative z-10 pb-[clamp(48px,8vh,120px)] pt-32">
        <Kicker className="mb-7">{HERO.kicker}</Kicker>

        <RevealText
          as="h1"
          play={ready}
          className="t-mega max-w-[16ch] font-display text-ink"
        >
          {HERO.headlineLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </RevealText>

        <p className="t-lead mt-8 max-w-[46ch] text-slate">{HERO.subline}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <MagneticButton href={HERO.ctaPrimary.href} variant="primary" cursorLabel="Anfragen">
            {HERO.ctaPrimary.label}
          </MagneticButton>
          <MagneticButton href={HERO.ctaSecondary.href} variant="secondary">
            {HERO.ctaSecondary.label}
          </MagneticButton>
        </div>

        <p className="t-caption mt-12 max-w-[60ch]">{HERO.footnote}</p>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-ink/50 md:flex"
      >
        <ArrowDown size={16} className="animate-bounce" />
        <span className="t-kicker">{HERO.scrollCue}</span>
      </div>
    </section>
  );
}
