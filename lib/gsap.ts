"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

/**
 * Zentrale GSAP-Registrierung.
 * Seit GSAP 3.13 sind ALLE Plugins (inkl. SplitText/CustomEase) kostenlos und
 * im npm-Paket enthalten — kein Club/Lizenz nötig.
 */
let registered = false;

if (typeof window !== "undefined" && !registered) {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

  // Calm-Eases — exakt deckungsgleich mit den CSS-cubic-beziers in globals.css
  CustomEase.create("calm", "M0,0 C0.22,1 0.36,1 1,1");
  CustomEase.create("calm-inout", "M0,0 C0.65,0 0.35,1 1,1");
  CustomEase.create("micro", "M0,0 C0.33,1 0.68,1 1,1");

  registered = true;
}

/** Benannte Ease-Konstanten für konsistente Nutzung */
export const EASE = {
  calm: "calm",
  calmInOut: "calm-inout",
  micro: "micro",
} as const;

export { gsap, ScrollTrigger, SplitText };
