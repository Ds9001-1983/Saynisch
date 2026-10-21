import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { FOOTER, HOOKS, LANDINGPAGES, SEITENUEBERSICHT } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(
    {
      path: SEITENUEBERSICHT.path,
      title: SEITENUEBERSICHT.title,
      description: SEITENUEBERSICHT.description,
      // HTML-Sitemap für Menschen und Crawler-Links — selbst kein Suchtreffer
      noindex: true,
    },
    parent,
  );
}

const services = LANDINGPAGES.filter((p) => p.schema.type === "service");
const person = LANDINGPAGES.filter((p) => p.schema.type === "profile");

export default function SeitenuebersichtPage() {
  return (
    <LegalShell title={SEITENUEBERSICHT.title}>
      <p>{SEITENUEBERSICHT.intro}</p>

      <h2>{SEITENUEBERSICHT.homeTitle}</h2>
      <ul>
        <li>
          <Link href="/">{SEITENUEBERSICHT.homeLink}</Link>
          {/* Sprungmarken („Hooks“) der One-Page */}
          <ul className="mt-2">
            {HOOKS.map((hook) => (
              <li key={hook.href}>
                <a href={`/${hook.href}`}>{hook.label}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <h2>{SEITENUEBERSICHT.topicsTitle}</h2>
      <ul>
        {services.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`}>{p.link.label}</Link> — {p.link.teaser}
          </li>
        ))}
      </ul>

      <h2>{SEITENUEBERSICHT.personTitle}</h2>
      <ul>
        {person.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`}>{p.link.label}</Link> — {p.link.teaser}
          </li>
        ))}
      </ul>

      <h2>{SEITENUEBERSICHT.legalTitle}</h2>
      <ul>
        {FOOTER.legal.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </LegalShell>
  );
}
