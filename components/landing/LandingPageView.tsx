import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ALT,
  CONTACT,
  FORMATE,
  LANDING_UI,
  LANDINGPAGES,
  type LandingPage,
} from "@/lib/content";
import { MEDIA } from "@/lib/assets";
import { landingJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MediaBadge } from "@/components/ui/MediaBadge";
import { Faq } from "@/components/ui/Faq";

/** Hintergrund wechselt Abschnitt für Abschnitt (Sand ↔ Papier). */
const bg = (i: number) => (i % 2 === 0 ? "" : "bg-paper");

function SectionHead({
  kicker,
  headline,
  body,
}: {
  kicker: string;
  headline: string;
  body?: string;
}) {
  return (
    <div className="max-w-[60ch]">
      <Kicker className="mb-6">{kicker}</Kicker>
      <h2 className="t-h2 text-ink">{headline}</h2>
      {body && <p className="t-body mt-5 text-slate">{body}</p>}
    </div>
  );
}

function Hero({ page }: { page: LandingPage }) {
  const { hero } = page;
  return (
    <section className="pb-[clamp(56px,9vh,120px)] pt-32 lg:pt-40">
      <div
        className={cn(
          "container-content grid items-center gap-12",
          hero.image && "lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
        )}
      >
        <div>
          <nav aria-label={LANDING_UI.breadcrumbLabel}>
            <ol className="t-caption flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="link-underline hover:text-ink" data-cursor="hover">
                  {LANDING_UI.home}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">
                {page.link.label}
              </li>
            </ol>
          </nav>

          <Kicker className="mb-6 mt-10">{hero.kicker}</Kicker>
          <h1 className="t-h1 max-w-[18ch] text-ink">{hero.headline}</h1>
          <p className="t-lead mt-7 max-w-[48ch] text-slate">{hero.lead}</p>
          {hero.note && (
            <p className="t-small mt-6 max-w-[56ch] border-l-2 border-sage pl-4 text-slate">
              {hero.note}
            </p>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton
              href={LANDING_UI.ctaPrimary.href}
              variant="primary"
              cursorLabel="Anfragen"
            >
              {LANDING_UI.ctaPrimary.label}
            </MagneticButton>
            <MagneticButton href={LANDING_UI.ctaSecondary.href} variant="secondary">
              {LANDING_UI.ctaSecondary.label}
            </MagneticButton>
          </div>
        </div>

        {hero.image && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-clay">
            <Image
              src={MEDIA.img[hero.image as keyof typeof MEDIA.img]}
              alt={ALT[hero.image]}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <MediaBadge />
          </div>
        )}
      </div>
    </section>
  );
}

export function LandingPageView({ page }: { page: LandingPage }) {
  const methods = page.methods
    ? FORMATE.methoden.items.filter((m) => page.methods!.keys.includes(m.image))
    : [];
  const related = LANDINGPAGES.filter((p) => p.slug !== page.slug);

  // Reihenfolge der Abschnitte nach dem Hero — der Index steuert den Hintergrund.
  const sections: { key: string; render: (cls: string) => React.ReactNode }[] = [
    {
      key: "intro",
      render: (cls) => (
        <section className={cn("section-pad", cls)}>
          <div className="container-content grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="t-h2 max-w-[16ch] text-ink">{page.intro.headline}</h2>
            <Reveal stagger className="flex flex-col gap-5">
              {page.intro.paragraphs.map((para, i) => (
                <p key={i} data-reveal-item className="t-body max-w-[62ch] text-slate">
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ),
    },
    {
      key: "points",
      render: (cls) => {
        const List = page.points.numbered ? "ol" : "ul";
        return (
          <section className={cn("section-pad", cls)}>
            <div className="container-content">
              <SectionHead
                kicker={page.points.kicker}
                headline={page.points.headline}
                body={page.points.body}
              />
              <Reveal
                stagger
                as={List}
                className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {page.points.items.map((item, i) => (
                  <li
                    key={item.title}
                    data-reveal-item
                    className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-sand p-7"
                  >
                    {page.points.numbered ? (
                      <span aria-hidden className="t-kicker text-sage-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    ) : (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" />
                    )}
                    <h3 className="t-h4 text-ink">{item.title}</h3>
                    <p className="t-body text-slate">{item.text}</p>
                  </li>
                ))}
              </Reveal>
            </div>
          </section>
        );
      },
    },
    {
      key: "audience",
      render: (cls) => {
        const List = page.audience.numbered ? "ol" : "ul";
        return (
          <section className={cn("section-pad", cls)}>
            <div className="container-content">
              <SectionHead
                kicker={page.audience.kicker}
                headline={page.audience.headline}
                body={page.audience.body}
              />
              <List className="mt-12 grid gap-8 border-t border-ink/10 pt-10 md:grid-cols-3">
                {page.audience.items.map((item, i) => (
                  <li key={item.title} className="flex flex-col gap-2">
                    {page.audience.numbered && (
                      <span aria-hidden className="t-kicker text-sage-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                    <h3 className="t-h4 text-ink">{item.title}</h3>
                    <p className="t-body text-slate">{item.text}</p>
                  </li>
                ))}
              </List>
            </div>
          </section>
        );
      },
    },
    ...(page.methods && methods.length
      ? [
          {
            key: "methods",
            render: (cls: string) => (
              <section className={cn("section-pad", cls)}>
                <div className="container-content">
                  <SectionHead
                    kicker={LANDING_UI.methodsKicker}
                    headline={page.methods!.headline}
                    body={page.methods!.body}
                  />
                  <Reveal
                    stagger
                    as="ul"
                    className={cn(
                      "mt-12 grid gap-6 sm:grid-cols-2",
                      methods.length > 2 && "lg:grid-cols-3",
                    )}
                  >
                    {methods.map((m) => (
                      <li key={m.image} data-reveal-item className="flex flex-col">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-clay">
                          <Image
                            src={MEDIA.img[m.image]}
                            alt={ALT[m.image]}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                          <MediaBadge />
                        </div>
                        <h3 className="t-h4 mt-5 text-ink">{m.title}</h3>
                        <p className="t-body mt-2 text-slate">{m.text}</p>
                      </li>
                    ))}
                  </Reveal>
                  <p className="t-caption mt-8 max-w-[60ch]">{FORMATE.methoden.footnote}</p>
                </div>
              </section>
            ),
          },
        ]
      : []),
    {
      key: "faq",
      render: (cls) => (
        <section className={cn("section-pad", cls)}>
          <div className="container-content max-w-[860px]">
            <Kicker className="mb-6">{LANDING_UI.faqKicker}</Kicker>
            <h2 className="t-h2 mb-10 text-ink">{LANDING_UI.faqHeadline}</h2>
            <Faq items={page.faq} idPrefix={`faq-${page.slug}`} />
          </div>
        </section>
      ),
    },
    {
      key: "related",
      render: (cls) => (
        <section className={cn("section-pad", cls)}>
          <div className="container-content">
            <SectionHead
              kicker={LANDING_UI.relatedKicker}
              headline={LANDING_UI.relatedHeadline}
            />
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    data-cursor="hover"
                    className="group flex h-full items-start justify-between gap-6 rounded-2xl border border-ink/10 p-6 transition-colors duration-500 hover:border-sage/40"
                  >
                    <span>
                      <span className="t-h4 block text-ink">{p.link.label}</span>
                      <span className="t-small mt-2 block text-slate">{p.link.teaser}</span>
                    </span>
                    <ArrowRight
                      size={18}
                      aria-hidden
                      className="mt-2 shrink-0 text-sage-deep transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ),
    },
    {
      key: "closing",
      render: (cls) => (
        <section className={cn("section-pad", cls)}>
          <div className="container-content flex max-w-[860px] flex-col items-center text-center">
            <Kicker className="mb-6">{LANDING_UI.closingKicker}</Kicker>
            <h2 className="t-h2 max-w-[20ch] text-ink">{page.closing.headline}</h2>
            <p className="t-lead mt-6 max-w-[52ch] text-slate">{page.closing.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton
                href={LANDING_UI.ctaPrimary.href}
                variant="primary"
                cursorLabel="Anfragen"
              >
                {LANDING_UI.ctaPrimary.label}
              </MagneticButton>
              <a
                href={`mailto:${CONTACT.email}`}
                data-cursor="hover"
                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-ink/35 px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/60"
              >
                {LANDING_UI.closingMail}
              </a>
            </div>
            <p className="t-caption mt-12 max-w-[60ch]">{page.footnote}</p>
          </div>
        </section>
      ),
    },
  ];

  return (
    <>
      <JsonLd data={landingJsonLd(page)} />
      <Nav />
      <main id="main">
        <Hero page={page} />
        {sections.map((s, i) => (
          <Fragment key={s.key}>{s.render(bg(i))}</Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
}
