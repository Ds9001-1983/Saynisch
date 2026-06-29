import { LEITSATZ } from "@/lib/content";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";

export function Leitsatz() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-content flex flex-col items-center text-center">
        <RevealText as="p" className="t-mega max-w-[16ch] font-display text-ink">
          {LEITSATZ.pre}
          <span className="text-sage-deep">{LEITSATZ.accent}</span>
          {LEITSATZ.post}
        </RevealText>
        <Reveal>
          <p className="t-lead mt-10 max-w-[52ch] text-slate">{LEITSATZ.sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
