import { FORMATE } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Formate() {
  return (
    <section id="formate" className="section-pad bg-paper">
      <div className="container-content">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Kicker className="mb-6">{FORMATE.kicker}</Kicker>
            <h2 className="t-h2 max-w-[16ch] text-ink">{FORMATE.headline}</h2>
            <p className="t-lead mt-5 max-w-[44ch] text-slate">{FORMATE.sub}</p>
          </div>
          <p className="t-body max-w-[40ch] text-slate">{FORMATE.body}</p>
        </div>
      </div>

      {/* Einzige Marquee-Instanz der Seite — ruhig & pausierbar */}
      <div className="my-16 border-y border-ink/10 py-5">
        <Marquee items={FORMATE.marquee} />
      </div>

      <div className="container-content">
        <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATE.items.map((item, i) => (
            <article
              key={i}
              data-reveal-item
              data-cursor="hover"
              className="group flex flex-col bg-paper p-8 transition-colors duration-500 hover:bg-sand"
            >
              <span className="t-kicker text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h3 mt-4 text-ink">{item.title}</h3>
              <p className="t-body mt-3 text-slate">{item.text}</p>
            </article>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption max-w-[48ch]">{FORMATE.footnote}</p>
          <MagneticButton href={FORMATE.cta.href} variant="secondary">
            {FORMATE.cta.label}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
