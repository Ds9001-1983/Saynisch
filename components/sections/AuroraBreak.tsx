"use client";

import dynamic from "next/dynamic";
import { RevealText } from "@/components/motion/RevealText";

const AuroraCanvas = dynamic(
  () => import("@/components/webgl/AuroraCanvas").then((m) => m.AuroraCanvas),
  { ssr: false },
);

/** Zweiter, sehr dezenter WebGL-Auftritt: Atempause vor dem Kontakt. */
export function AuroraBreak() {
  return (
    <section className="on-dark relative flex min-h-[52svh] items-center justify-center overflow-hidden bg-forest text-sand-light">
      <AuroraCanvas variant="dark" />
      <div className="container-content relative z-10 text-center">
        <RevealText as="p" className="t-h1 mx-auto max-w-[18ch] font-display font-light">
          Lassen Sie uns in Ruhe darüber sprechen.
        </RevealText>
      </div>
    </section>
  );
}
