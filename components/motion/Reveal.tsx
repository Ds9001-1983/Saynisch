"use client";

import {
  useEffect,
  useRef,
  type ComponentType,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { gsap, EASE } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

type PolymorphicProps = HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Staggered Reveal aller Kinder mit [data-reveal-item] */
  stagger?: boolean;
  delay?: number;
  y?: number;
}

/**
 * Sanfter Scroll-Reveal (Fade + Up). Bei reduzierter Bewegung sofort sichtbar.
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = 24,
}: RevealProps) {
  const Tag = (as ?? "div") as unknown as ComponentType<PolymorphicProps>;
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: HTMLElement[] = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-item]"))
      : [el];

    if (reduced) {
      gsap.set(targets, { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    // Trigger per IntersectionObserver statt ScrollTrigger: IO misst echte
    // Sichtbarkeit beim Callback und liefert bei observe() immer einen
    // Initial-Callback — immun gegen Font-Swap/URL-Bar-Resize, bei denen
    // vorberechnete Scroll-Positionen verstalten und once-Trigger nie feuern.
    let io: IntersectionObserver | null = null;
    let failSafe = 0;

    const ctx = gsap.context(() => {
      let tween: gsap.core.Tween | null = null;
      let played = false;

      const play = () => {
        if (played) return;
        played = true;
        io?.disconnect();
        window.clearTimeout(failSafe);
        if (tween) tween.play();
        else gsap.set(targets, { opacity: 1, y: 0 });
      };

      // Fail-safe VOR dem Verstecken scharf stellen: wirft irgendetwas ab
      // hier, ist der Inhalt entweder noch sichtbar oder wird hart gezeigt.
      failSafe = window.setTimeout(play, 10000);
      gsap.set(targets, { opacity: 0, y });
      tween = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE.calm,
        delay,
        stagger: stagger ? 0.1 : 0,
        paused: true,
      });

      if (typeof IntersectionObserver === "undefined") {
        play();
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) play();
        },
        // -15% unten ≙ dem bisherigen ScrollTrigger-Start "top 85%"
        { rootMargin: "0px 0px -15% 0px", threshold: 0 },
      );
      io.observe(el);
    }, el);

    return () => {
      io?.disconnect();
      window.clearTimeout(failSafe);
      ctx.revert();
    };
  }, [reduced, stagger, delay, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
