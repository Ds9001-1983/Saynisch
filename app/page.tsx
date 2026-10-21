import type { Metadata, ResolvingMetadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { Leitsatz } from "@/components/sections/Leitsatz";
import { Uebersicht } from "@/components/sections/Uebersicht";
import { Schwerpunkte } from "@/components/sections/Schwerpunkte";
import { Formate } from "@/components/sections/Formate";
import { Themenfelder } from "@/components/sections/Themenfelder";
import { Themen } from "@/components/sections/Themen";
import { FuerWen } from "@/components/sections/FuerWen";
import { Ansatz } from "@/components/sections/Ansatz";
import { FaqSection } from "@/components/sections/FaqSection";
import { AuroraBreak } from "@/components/sections/AuroraBreak";
import { Kontakt } from "@/components/sections/Kontakt";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/content";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(
    { path: "/", title: SITE.seoTitle, description: SITE.seoDescription, absoluteTitle: true },
    parent,
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Nav />
      <main id="main">
        <Hero />
        <Leitsatz />
        <Uebersicht />
        <Schwerpunkte />
        <Formate />
        <Themenfelder />
        <Themen />
        <FuerWen />
        <Ansatz />
        <FaqSection />
        <AuroraBreak />
        <Kontakt />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
