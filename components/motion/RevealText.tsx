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
import { gsap, ScrollTrigger, SplitText, EASE } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

type PolymorphicProps = HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };

interface RevealTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  type?: "lines" | "words";
  /** Wenn gesetzt: Reveal spielt erst, wenn play === true (statt per Scroll). */
  play?: boolean;
  stagger?: number;
}

/**
 * Zeilen-/Wort-Reveal via GSAP SplitText mit Masking (clip).
 * Split-Erzeugung (Effect 1) und Abspielen (Effect 2) sind entkoppelt, damit
 * der play-Wechsel keine Race mit der async Font-/Split-Initialisierung erzeugt.
 */
export function RevealText({
  children,
  as,
  className,
  type = "lines",
  play,
  stagger = 0.08,
}: RevealTextProps) {
  const Tag = (as ?? "div") as unknown as ComponentType<PolymorphicProps>;
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playRef = useRef(play);

  // Effect 1: Split + (pausierte) Timeline einmalig erzeugen
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let split: SplitText | null = null;
    let trigger: ScrollTrigger | null = null;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || !el) return;

      split = new SplitText(el, {
        type,
        mask: type,
        linesClass: "reveal-line",
        wordsClass: "reveal-word",
      });
      const targets = type === "words" ? split.words : split.lines;
      gsap.set(targets, { yPercent: 110 });

      const tl = gsap.timeline({ paused: true });
      tl.to(targets, { yPercent: 0, duration: 0.95, ease: EASE.calm, stagger });
      tlRef.current = tl;

      if (playRef.current === undefined) {
        trigger = ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => tl.play(),
        });
      } else if (playRef.current) {
        tl.play();
      }
    });

    return () => {
      cancelled = true;
      trigger?.kill();
      split?.revert();
      tlRef.current = null;
    };
  }, [reduced, type, stagger]);

  // Effect 2: play-Wert spiegeln + bei Flip abspielen (unabhängig von Effect 1)
  useEffect(() => {
    playRef.current = play;
    if (play) tlRef.current?.play();
  }, [play]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
