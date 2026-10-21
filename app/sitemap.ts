import type { MetadataRoute } from "next";
import { LANDINGPAGES, SITE } from "@/lib/content";
import { MEDIA } from "@/lib/assets";

/**
 * Nur indexierbare Seiten: Startseite + Landingpages. Impressum, Datenschutz,
 * Barrierefreiheit und Seitenübersicht stehen auf noindex und gehören nicht
 * hinein. Sprungmarken (#…) behandelt Google nicht als eigene URLs — sie
 * stehen in der HTML-Seitenübersicht (/seitenuebersicht).
 * lastModified kommt aus content.ts (echtes Änderungsdatum, nicht Build-Zeit).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${SITE.url}${path}`;

  return [
    {
      url: SITE.url,
      lastModified: SITE.updated,
      changeFrequency: "monthly",
      priority: 1,
      images: [MEDIA.heroPoster, ...Object.values(MEDIA.img)].map(abs),
    },
    ...LANDINGPAGES.map((page) => ({
      url: abs(`/${page.slug}`),
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(page.hero.image ? { images: [abs(MEDIA.img[page.hero.image])] } : {}),
    })),
  ];
}
