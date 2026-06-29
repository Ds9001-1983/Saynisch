"use client";

import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import { HERO } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { Kicker } from "@/components/ui/Kicker";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/motion/RevealText";
import { useLoading } from "@/components/providers/LoadingContext";

const AuroraCanvas = dynamic(
  () => import("@/components/webgl/AuroraCanvas").then((m) => m.AuroraCanvas),
  { ssr: false },
);

export function Hero() {
  const { ready } = useLoading();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* WebGL-Aurora-Backdrop (mit CSS-Fallback) */}
      <AuroraCanvas variant="light" />

      {/* Atmosphärisches Hero-Video (self-hosted) über der Aurora */}
      <video
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
