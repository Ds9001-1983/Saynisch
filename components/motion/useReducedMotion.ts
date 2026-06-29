"use client";

import { useEffect, useState } from "react";

/**
 * Reagiert auf BEIDE Quellen:
 *  - System: prefers-reduced-motion
 *  - Manuell: <html data-motion="off"> (Footer-Toggle, in localStorage persistiert)
 *
 * Animations-Komponenten nutzen den Rückgabewert in ihren Effect-Deps, damit
 * ein Umschalten ScrollTrigger/Pins sauber neu aufbaut (cleanup → setup).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const compute = () =>
      setReduced(mq.matches || document.documentElement.dataset.motion === "off");

    compute();
    mq.addEventListener("change", compute);

    const observer = new MutationObserver(compute);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });

    return () => {
      mq.removeEventListener("change", compute);
      observer.disconnect();
    };
  }, []);

  return reduced;
}
