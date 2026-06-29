"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

interface LenisCtx {
  scrollTo: (target: string | number | HTMLElement, opts?: { offset?: number }) => void;
}

const Ctx = createContext<LenisCtx>({ scrollTo: () => {} });
export const useSmoothScroll = () => useContext(Ctx);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Reduced Motion → natives Scrollen, kein Lenis
    if (reduced) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    // Tastatur-Fokus-Sync: fokussiertes Element in den Viewport holen (Lenis/Pin-A11y)
    const onFocusIn = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || el.closest("[data-cursor]") === el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < 80 || rect.bottom > window.innerHeight - 80) {
        lenis.scrollTo(el, { offset: -120 });
      }
    };
    document.addEventListener("focusin", onFocusIn);

    return () => {
      document.removeEventListener("focusin", onFocusIn);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  const scrollTo: LenisCtx["scrollTo"] = (target, opts) => {
    const offset = opts?.offset ?? -80;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset, duration: 1.4 });
    } else if (typeof target !== "number") {
      const el =
        typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo({ top: target });
    }
  };

  return <Ctx.Provider value={{ scrollTo }}>{children}</Ctx.Provider>;
}
