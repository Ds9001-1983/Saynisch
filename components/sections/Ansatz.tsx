import Image from "next/image";
import { ANSATZ, ALT } from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MediaBadge } from "@/components/ui/MediaBadge";

export function Ansatz() {
  return (
    <section id="ansatz" className="section-pad">
      <div className="container-content grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-clay">
          <Parallax speed={0.08} className="absolute inset-x-0 -top-[8%] h-[116%]">
            <Image
              src={MEDIA.img.ansatz}
              alt={ALT.ansatz}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Parallax>
          <MediaBadge />
        </div>

        <div>
          <Kicker className="mb-6">{ANSATZ.kicker}</Kicker>
          <h2 className="t-h2 text-ink">{ANSATZ.headline}</h2>
          <p className="t-lead mt-4 text-slate">{ANSATZ.sub}</p>

          <Reveal stagger className="mt-7 flex flex-col gap-5">
            {ANSATZ.bio.map((para, i) => (
              <p key={i} data-reveal-item className="t-body max-w-[48ch] text-slate">
                {para}
              </p>
            ))}
          </Reveal>

          <ul className="mt-9 flex flex-col gap-4 border-t border-ink/10 pt-8">
            {ANSATZ.principles.map((p) => (
              <li key={p.title} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <span className="t-h4 w-44 shrink-0 font-display text-ink">
                  {p.title}
                </span>
                <span className="t-body text-slate">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <MagneticButton href={ANSATZ.cta.href} variant="secondary" cursorLabel="Anfragen">
              {ANSATZ.cta.label}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
