"use client";

import { useEffect } from "react";
import { LoadingProvider } from "./LoadingContext";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Preloader } from "@/components/ui/Preloader";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export function AppProviders({ children }: { children: React.ReactNode }) {
  // Motion-Präferenz früh aus localStorage übernehmen
  useEffect(() => {
    try {
      if (localStorage.getItem("saynisch-motion") === "off") {
        document.documentElement.dataset.motion = "off";
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <LoadingProvider>
      <SmoothScrollProvider>
        <Preloader />
        <Cursor />
        <ScrollProgress />
        {children}
      </SmoothScrollProvider>
    </LoadingProvider>
  );
}
