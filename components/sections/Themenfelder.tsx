import { THEMENFELDER } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Themenfelder() {
  return (
    <section className="section-pad">
      <div className="container-content">
        <div className="max-w-[60ch]">
          <Kicker className="mb-6">{THEMENFELDER.kicker}</Kicker>
          <h2 className="t-h2 text-ink">{THEMENFELDER.headline}</h2>
          <p className="t-lead mt-5 text-slate">{THEMENFELDER.sub}</p>
          <p className="t-body mt-5 text-slate">{THEMENFELDER.body}</p>
        </div>

        <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {THEMENFELDER.items.map((item, i) => (
            <article
              key={i}
              data-reveal-item
              data-cursor="hover"
              className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-paper p-6 transition-colors duration-500 hover:border-sage/40"
            >
              <span className="t-kicker shrink-0 text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="t-body text-ink">{item}</p>
            </article>
          ))}
        </Reveal>

        <div className="mt-12">
          <MagneticButton href={THEMENFELDER.cta.href} variant="secondary">
            {THEMENFELDER.cta.label}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
