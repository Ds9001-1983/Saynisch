"use client";

import { useEffect, useState } from "react";
import { MICRO } from "@/lib/content";

/**
 * Sichtbarer „Bewegung reduzieren"-Schalter (WCAG 2.2.2 für >5s-Auto-Motion).
 * Setzt <html data-motion="off"> + persistiert in localStorage. Animations-
 * Komponenten reagieren über useReducedMotion.
 */
export function MotionToggle() {
  const [off, setOff] = useState(false);

  useEffect(() => {
    // Initialen Zustand aus dem DOM-Attribut synchronisieren
    const sync = () => setOff(document.documentElement.dataset.motion === "off");
    sync();
  }, []);

  const toggle = () => {
    const next = !off;
    setOff(next);
    if (next) {
      document.documentElement.dataset.motion = "off";
    } else {
      delete document.documentElement.dataset.motion;
    }
    try {
      localStorage.setItem("saynisch-motion", next ? "off" : "on");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={off}
      data-cursor="hover"
      className="inline-flex items-center gap-2 text-sm text-sand-light/70 transition-colors hover:text-sand-light"
    >
      <span
        aria-hidden
        className={`relative h-4 w-7 rounded-full border border-sand-light/40 transition-colors ${
          off ? "bg-transparent" : "bg-sage-glow/60"
        }`}
      >
        <span
          className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-sand-light transition-[left] ${
            off ? "left-0.5" : "left-[14px]"
          }`}
        />
      </span>
      {MICRO.motionToggle}
    </button>
  );
}
