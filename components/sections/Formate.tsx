import Image from "next/image";
import { ALT, FORMATE } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { cn } from "@/lib/utils";
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

        {/* Aus dem Methodenkoffer — 5 Praxis-Kacheln (3+2 auf Desktop) */}
        <div className="mt-24">
          <Kicker className="mb-6">{FORMATE.methoden.kicker}</Kicker>
          <h3 className="t-h3 max-w-[24ch] text-ink">{FORMATE.methoden.headline}</h3>
          <p className="t-body mt-4 max-w-[52ch] text-slate">{FORMATE.methoden.body}</p>

          <Reveal stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
            {FORMATE.methoden.items.map((m, i) => (
              <article
                key={m.title}
                data-reveal-item
                data-cursor="hover"
                className={cn(
                  "flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-sand",
                  "transition-colors duration-500 hover:border-sage/40",
                  "col-span-1 lg:col-span-2",
                  i === 3 && "lg:col-start-2",
                  i === 4 && "col-span-2 lg:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "relative w-full bg-clay",
                    i === 4 ? "aspect-[16/10] lg:aspect-[7/6]" : "aspect-[7/6]",
                  )}
                >
                  <Image
                    src={MEDIA.img[m.image]}
                    alt={ALT[m.image]}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 sm:p-6">
                  <span className="t-kicker text-sage-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="t-h4 mt-3 hyphens-auto text-ink">{m.title}</h4>
                  <p className="t-small mt-2 text-slate">{m.text}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <p className="t-caption mt-8 max-w-[60ch]">{FORMATE.methoden.footnote}</p>
        </div>

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
