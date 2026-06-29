"use client";

import { useEffect, useRef } from "react";

/** Dezenter vertikaler Scroll-Progress-Balken (rechts). */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (bar.current) bar.current.style.transform = `scaleY(${p})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed right-0 top-0 z-40 hidden h-screen w-[2px] bg-line/20 md:block"
    >
      <div
        ref={bar}
        className="h-full w-full origin-top bg-sage"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
