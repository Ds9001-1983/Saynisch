import { FAQ } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { Faq } from "@/components/ui/Faq";

export function FaqSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-content max-w-[860px]">
        <Kicker className="mb-6">{FAQ.kicker}</Kicker>
        <h2 className="t-h2 mb-10 text-ink">{FAQ.headline}</h2>
        <Faq />
      </div>
    </section>
  );
}
