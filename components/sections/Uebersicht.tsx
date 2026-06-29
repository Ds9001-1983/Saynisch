import { UEBERSICHT } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";

export function Uebersicht() {
  return (
    <section id="worum" className="section-pad">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Kicker className="mb-6">{UEBERSICHT.kicker}</Kicker>
          <h2 className="t-h2 max-w-[16ch] text-ink">{UEBERSICHT.headline}</h2>
          <p className="t-body mt-7 max-w-[46ch] text-slate">{UEBERSICHT.body}</p>
          <p className="t-caption mt-8">{UEBERSICHT.footnote}</p>
        </div>

        <Reveal stagger className="flex flex-col gap-5">
          {UEBERSICHT.pillars.map((p, i) => (
            <article
              key={i}
              data-reveal-item
              className="rounded-2xl border border-ink/10 bg-paper p-8 transition-shadow duration-500 hover:shadow-[0_2px_6px_rgba(35,38,43,0.05),0_30px_60px_-24px_rgba(35,38,43,0.14)]"
            >
              <span className="t-kicker text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h3 mt-4 text-ink">{p.title}</h3>
              <p className="t-body mt-3 max-w-[42ch] text-slate">{p.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
