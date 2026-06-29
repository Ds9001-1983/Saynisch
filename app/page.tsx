import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { Leitsatz } from "@/components/sections/Leitsatz";
import { Uebersicht } from "@/components/sections/Uebersicht";
import { Schwerpunkte } from "@/components/sections/Schwerpunkte";
import { Formate } from "@/components/sections/Formate";
import { Themenfelder } from "@/components/sections/Themenfelder";
import { FuerWen } from "@/components/sections/FuerWen";
import { Ansatz } from "@/components/sections/Ansatz";
import { FaqSection } from "@/components/sections/FaqSection";
import { AuroraBreak } from "@/components/sections/AuroraBreak";
import { Kontakt } from "@/components/sections/Kontakt";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Leitsatz />
        <Uebersicht />
        <Schwerpunkte />
        <Formate />
        <Themenfelder />
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
