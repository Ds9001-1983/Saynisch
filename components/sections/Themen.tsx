import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LANDINGPAGES, THEMEN } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";

/** Links auf die Themen-Landingpages — interne Verlinkung mit sprechendem Ankertext. */
export function Themen() {
  const pages = LANDINGPAGES.filter((p) => p.schema.type === "service");

  return (
    <section id="themen" className="section-pad">
      <div className="container-content">
        {/* Haarlinie auf der Inhaltsbreite: trennt vom gleichfarbigen Abschnitt davor */}
        <div className="border-t border-ink/10 pt-[clamp(48px,8vh,96px)]" />
        <div className="max-w-[60ch]">
          <Kicker className="mb-6">{THEMEN.kicker}</Kicker>
          <h2 className="t-h2 text-ink">{THEMEN.headline}</h2>
          <p className="t-body mt-5 text-slate">{THEMEN.body}</p>
        </div>

        <Reveal stagger as="ul" className="mt-12 grid gap-4 md:grid-cols-2">
          {pages.map((page) => (
            <li key={page.slug} data-reveal-item>
              <Link
                href={`/${page.slug}`}
                data-cursor="hover"
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-colors duration-500 hover:border-sage/40"
              >
                <h3 className="t-h4 text-ink">{page.link.label}</h3>
                <p className="t-body mt-3 text-slate">{page.link.teaser}</p>
                <span className="t-small mt-6 inline-flex items-center gap-2 font-medium text-sage-deep">
                  {THEMEN.more}
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
