"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";
import { useLoading } from "@/components/providers/LoadingContext";

interface LenisCtx {
  scrollTo: (target: string | number | HTMLElement, opts?: { offset?: number }) => void;
  /** Lenis pausieren (z.B. bei offenem Mobile-Menü). No-Op ohne Lenis. */
  stop: () => void;
  start: () => void;
}

const Ctx = createContext<LenisCtx>({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});
export const useSmoothScroll = () => useContext(Ctx);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const { ready } = useLoading();
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

    // Trigger-Positionen erst berechnen, wenn das Layout stabil ist:
    // Font-Swap und spät dekodierte Bilder verschieben sonst alle Startpunkte.
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

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
      window.removeEventListener("load", onLoad);
      document.removeEventListener("focusin", onFocusIn);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // Preloader weg → Layout hat sich gesetzt → Positionen aktualisieren
  useEffect(() => {
    if (ready) ScrollTrigger.refresh();
  }, [ready]);

  const scrollTo = useCallback<LenisCtx["scrollTo"]>((target, opts) => {
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
  }, []);

  const stop = useCallback(() => lenisRef.current?.stop(), []);
  const start = useCallback(() => lenisRef.current?.start(), []);
  const value = useMemo(() => ({ scrollTo, stop, start }), [scrollTo, stop, start]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
