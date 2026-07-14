import Image from "next/image";
import { ALT, FUER_WEN } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MediaBadge } from "@/components/ui/MediaBadge";

export function FuerWen() {
  return (
    <section id="fuer-wen" className="section-pad bg-paper">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-20">
          <div className="max-w-[62ch]">
            <Kicker className="mb-6">{FUER_WEN.kicker}</Kicker>
            <RevealText as="h2" className="t-h2 text-ink">
              {FUER_WEN.headline}
            </RevealText>
            <p className="t-body mt-6 text-slate">{FUER_WEN.body}</p>
          </div>

          <Reveal className="relative aspect-square overflow-hidden rounded-3xl bg-clay">
            <Image
              src={MEDIA.img.beratungstresen}
              alt={ALT.beratungstresen}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <MediaBadge />
          </Reveal>
        </div>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {FUER_WEN.groups.map((g, i) => (
            <article
              key={i}
              data-reveal-item
              className="flex flex-col rounded-2xl border border-ink/10 bg-sand p-8"
            >
              <span className="t-kicker text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h3 mt-4 text-ink">{g.title}</h3>
              <p className="t-body mt-3 text-slate">{g.text}</p>
            </article>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="t-caption mr-2">Beispiel-Arbeitsfelder:</span>
          {FUER_WEN.branchen.map((b) => (
            <span
              key={b}
              className="rounded-full border border-ink/10 bg-paper px-4 py-1.5 text-sm text-ink/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
