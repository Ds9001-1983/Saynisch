"use client";

import { useEffect, useState } from "react";
import { getGPUTier } from "detect-gpu";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface GPUState {
  enabled: boolean;
  dpr: [number, number];
  ready: boolean;
}

/**
 * Entscheidet, ob der WebGL-Aurora-Canvas laufen darf.
 * Aus bei: reduzierter Bewegung, Mobile oder GPU-Tier < 2 → CSS-Fallback.
 */
export function useGPUTier(): GPUState {
  const reduced = useReducedMotion();
  const [state, setState] = useState<GPUState>({
    enabled: false,
    dpr: [1, 1.5],
    ready: false,
  });

  useEffect(() => {
    let mounted = true;
    const apply = (s: GPUState) => {
      if (mounted) setState(s);
    };

    if (reduced) {
      apply({ enabled: false, dpr: [1, 1.5], ready: true });
      return;
    }

    getGPUTier()
      .then((t) => {
        const ok = t.tier >= 2 && !t.isMobile;
        apply({ enabled: ok, dpr: [1, t.isMobile ? 1 : 1.5], ready: true });
      })
      .catch(() => apply({ enabled: false, dpr: [1, 1.5], ready: true }));

    return () => {
      mounted = false;
    };
  }, [reduced]);

  return state;
}
