"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AuroraMesh } from "./AuroraMesh";
import { useGPUTier } from "./useGPUTier";

interface AuroraCanvasProps {
  variant?: "light" | "dark";
  className?: string;
}

const PALETTES = {
  light: { colorA: "#f5f2ec", colorB: "#dce6df", colorC: "#6e8f7d", opacity: 0.55 },
  dark: { colorA: "#1b2420", colorB: "#243029", colorC: "#8fb39c", opacity: 0.5 },
} as const;

/**
 * WebGL-Aurora-Backdrop. Bei abgeschaltetem WebGL (Reduced-Motion / Mobile /
 * Low-End-GPU) → statischer CSS-Gradient (gleiche Palette, kein Layout-Shift).
 * Pausiert, wenn nicht im Viewport (IntersectionObserver → frameloop).
 */
export function AuroraCanvas({ variant = "light", className }: AuroraCanvasProps) {
  const { enabled, dpr, ready } = useGPUTier();
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  const fallbackClass = `aurora-static ${variant === "dark" ? "on-dark" : ""}`;

  if (!ready || !enabled) {
    return (
      <div
        ref={wrap}
        aria-hidden
        className={`absolute inset-0 ${fallbackClass} ${className ?? ""}`}
      />
    );
  }

  const p = PALETTES[variant];

  return (
    <div ref={wrap} aria-hidden className={`absolute inset-0 ${className ?? ""}`}>
      <Canvas
        className="!absolute inset-0"
        dpr={dpr}
        frameloop={active ? "always" : "never"}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 1] }}
      >
        <AuroraMesh
          colorA={p.colorA}
          colorB={p.colorB}
          colorC={p.colorC}
          opacity={p.opacity}
        />
      </Canvas>
    </div>
  );
}
