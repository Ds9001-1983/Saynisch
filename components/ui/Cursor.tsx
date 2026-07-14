"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

/**
 * Custom-Cursor (Dot + Ring) auf der gesamten Site.
 * Aus bei: reduzierter Bewegung oder Touch-Geräten (pointer: coarse) →
 * System-Cursor. Optionales Label über [data-cursor-label="…"].
 *
 * Die Elemente sind immer im DOM (mit opacity 0), damit die Refs im Effect
 * gültig sind; aktiviert wird erst clientseitig auf fine-pointer-Geräten.
 */
export function Cursor() {
  const reduced = useReducedMotion();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine || !ring.current || !dot.current) {
      document.body.classList.remove("cursor-active");
      setActive(false);
      return;
    }

    setActive(true);
    document.body.classList.add("cursor-active");
    gsap.set([ring.current, dot.current], { x: -100, y: -100, opacity: 1 });

    const xR = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yR = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const xD = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const yD = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });

    const move = (e: PointerEvent) => {
      xR(e.clientX);
      yR(e.clientY);
      xD(e.clientX);
      yD(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      // Auf dunklen Sektionen (.on-dark: Footer, AuroraBreak) auf helle
      // Cursor-Farben umschalten — Ink ist dort unsichtbar.
      const dark = !!target?.closest(".on-dark");
      ring.current?.toggleAttribute("data-on-dark", dark);
      dot.current?.toggleAttribute("data-on-dark", dark);
      const el = target?.closest<HTMLElement>('[data-cursor="hover"]');
      if (el) {
        ring.current?.setAttribute("data-variant", "hover");
        setLabel(el.dataset.cursorLabel ?? "");
      }
    };
    const out = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>('[data-cursor="hover"]');
      if (el) {
        ring.current?.removeAttribute("data-variant");
        setLabel("");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.body.classList.remove("cursor-active");
    };
  }, [reduced]);

  return (
    <>
      <div ref={ring} className="cursor-ring" style={{ opacity: active ? undefined : 0 }}>
        {label && (
          <span className="cursor-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
      <div ref={dot} className="cursor-dot" style={{ opacity: active ? undefined : 0 }} />
    </>
  );
}
