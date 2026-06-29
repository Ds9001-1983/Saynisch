import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-bewusstes className-Merge */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/** Wert aus einem Bereich in einen anderen mappen */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);

/** SSR-sicherer Check auf reduzierte Bewegung (System + manueller Toggle) */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  const system = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const manual = document.documentElement.dataset.motion === "off";
  return system || manual;
}
