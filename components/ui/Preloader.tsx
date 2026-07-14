"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { CRITICAL_ASSETS, type CriticalAsset } from "@/lib/assets";
import { SITE, MICRO } from "@/lib/content";
import { useLoading } from "@/components/providers/LoadingContext";
import { prefersReducedMotion } from "@/lib/utils";

function loadAsset(a: CriticalAsset): Promise<void> {
  return new Promise((resolve) => {
    if (a.type === "image") {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = a.src;
    } else {
      const v = document.createElement("video");
      v.oncanplaythrough = v.onerror = () => resolve();
      v.preload = "auto";
      v.muted = true;
      v.src = a.src;
    }
  });
}

export function Preloader() {
  const { setReady } = useLoading();
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const started = performance.now();
    const tasks = [...CRITICAL_ASSETS.map(loadAsset), document.fonts.ready];
    const total = tasks.length;
    let done = 0;

    const tick = () => {
      done += 1;
      setPct(Math.round((done / total) * 100));
    };

    const trackedTasks = tasks.map((p) => Promise.resolve(p).finally(tick));

    // Harte Timeout-Absicherung: Loader hängt nie (z. B. Netzfehler).
    // 4s statt 7s — es warten nur noch ~30 KB Bilder + Fonts.
    const timeout = new Promise<void>((r) => setTimeout(r, 4000));

    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      setPct(100);
      const elapsed = performance.now() - started;
      const wait = Math.max(0, 600 - elapsed); // Min-Display gegen Flackern

      window.setTimeout(() => {
        if (cancelled) return;
        if (prefersReducedMotion()) {
          setReady(true);
          setHidden(true);
          return;
        }
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 1.1,
          ease: "expo.inOut",
          onStart: () => setReady(true),
          onComplete: () => setHidden(true),
        });
      }, wait);
    };

    Promise.race([Promise.allSettled(trackedTasks), timeout]).then(finish);

    return () => {
      cancelled = true;
    };
  }, [setReady]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      id="preloader"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-sand"
      aria-hidden
    >
      <span className="t-h1 font-display font-light tracking-[0.04em] text-ink">
        {SITE.brand}
      </span>
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="h-px w-[clamp(180px,40vw,280px)] overflow-hidden bg-line/40">
          <div
            className="h-full bg-sage transition-[width] duration-300 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="t-kicker tabular-nums">
          {MICRO.preloader} · {String(pct).padStart(3, "0")}%
        </span>
      </div>
    </div>
  );
}
