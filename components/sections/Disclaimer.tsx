import { DISCLAIMER } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function Disclaimer() {
  return (
    <section className="section-pad">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-[72ch] rounded-2xl border border-ink/10 bg-clay/50 p-8 text-center sm:p-10">
            <span className="t-kicker text-sage-deep">{DISCLAIMER.label}</span>
            <p className="t-small mt-4 text-slate">{DISCLAIMER.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
