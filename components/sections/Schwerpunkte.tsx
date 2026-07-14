"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SCHWERPUNKTE, ALT } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/ui/Kicker";
import { MediaBadge } from "@/components/ui/MediaBadge";

type ImgKey = keyof typeof MEDIA.img;

function PanelBody({ panel }: { panel: (typeof SCHWERPUNKTE.panels)[number] }) {
  return (
    <>
      <span className="t-kicker text-sage-deep">{panel.no}</span>
      <h3 className="t-h2 mt-4 max-w-[14ch] text-ink">{panel.title}</h3>
      <p className="t-lead mt-3 text-slate">{panel.sub}</p>
      <p className="t-body mt-6 max-w-[46ch] text-slate">{panel.body}</p>

      <ul className="mt-7 flex flex-col gap-3">
        {panel.points.map((pt, i) => (
          <li key={i} className="flex gap-3 text-ink">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
            <span className="t-body">{pt}</span>
          </li>
        ))}
      </ul>

      {"box" in panel && panel.box && (
        <div className="mt-8 rounded-2xl border border-sage/30 bg-sage-veil/40 p-7">
          <h4 className="t-h4 text-ink">{panel.box.title}</h4>
          <p className="t-body mt-3 text-slate">{panel.box.text}</p>
          <p className="t-caption mt-4 border-t border-ink/10 pt-3">
            {panel.box.footnote}
          </p>
        </div>
      )}

      {"footnote" in panel && panel.footnote && (
        <p className="t-caption mt-6 max-w-[52ch]">{panel.footnote}</p>
      )}
    </>
  );
}

export function Schwerpunkte() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="schwerpunkte" className="section-pad">
      <div className="container-content">
        <Kicker className="mb-6">{SCHWERPUNKTE.kicker}</Kicker>
        <h2 className="t-h2 mb-4 max-w-[14ch] text-ink">{SCHWERPUNKTE.headline}</h2>
      </div>

      <div className="container-content grid lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Sticky-Medien-Spalte (Desktop) — bleibt, während Text wechselt */}
        <div className="sticky top-0 hidden h-svh items-center lg:flex">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-clay">
            {SCHWERPUNKTE.panels.map((panel, i) => (
              <Image
                key={i}
                src={MEDIA.img[panel.image as ImgKey]}
                alt={ALT[panel.image as keyof typeof ALT]}
                fill
                sizes="(max-width: 1024px) 0px, 45vw"
                className={cn(
                  "object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  active === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <span
              aria-hidden
              className="absolute bottom-6 left-7 font-display text-[5rem] font-light leading-none text-sand-light mix-blend-difference"
            >
              {SCHWERPUNKTE.panels[active].no}
            </span>
            <MediaBadge />
          </div>
        </div>

        {/* Text-Panels */}
        <div className="flex flex-col">
          {SCHWERPUNKTE.panels.map((panel, i) => (
            <div
              key={i}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="flex min-h-svh flex-col justify-center py-16 lg:py-24"
            >
              {/* Bild pro Panel auf Mobile */}
              <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-clay lg:hidden">
                <Image
                  src={MEDIA.img[panel.image as ImgKey]}
                  alt={ALT[panel.image as keyof typeof ALT]}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <MediaBadge />
              </div>
              <PanelBody panel={panel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
