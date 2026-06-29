"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

interface MarqueeProps {
  items: readonly string[];
  durationSeconds?: number;
  className?: string;
}

/**
 * Sehr langsamer, pausierbarer Marquee (einzige Instanz der Seite — Formate).
 * CSS-Animation (globals): pausiert bei Hover/Fokus; zusätzlich manueller
 * Pause-Button (WCAG 2.2.2). Reduced-Motion stoppt die Animation global.
 */
export function Marquee({ items, durationSeconds = 70, className }: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="t-h3 font-display text-slate">{item}</span>
          <span className="text-sage" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee group relative ${className ?? ""}`}>
      <div
        className="marquee-track"
        style={{
          ["--marquee-duration" as string]: `${durationSeconds}s`,
          animationPlayState: paused ? "paused" : undefined,
        }}
      >
        {row(false)}
        {row(true)}
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Laufband abspielen" : "Laufband pausieren"}
        data-cursor="hover"
        className="absolute right-[var(--side-padding)] top-1/2 hidden -translate-y-1/2 rounded-full border border-line/60 bg-paper/80 p-2 text-ink/70 backdrop-blur transition-colors hover:text-ink focus-visible:text-ink md:block"
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}
