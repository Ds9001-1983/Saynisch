"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Anteil der Sektionshöhe, um den sich das Element verschiebt (dezent: 0.06–0.12) */
  speed?: number;
}

export function Parallax({ children, className, speed = 0.08 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
