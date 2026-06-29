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

    const targets: gsap.TweenTarget = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-item]"))
      : el;

    if (reduced) {
      gsap.set(targets, { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: EASE.calm,
        delay,
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [reduced, stagger, delay, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
