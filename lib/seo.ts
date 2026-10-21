import type { Metadata, ResolvingMetadata } from "next";
import { CONTACT, LANDINGPAGES, REGION, SITE, type LandingPage } from "@/lib/content";

/**
 * Layout-Metadaten: nur, was für JEDE Seite stimmt. Titel, Beschreibung,
 * Canonical und og:url setzt jede Seite selbst über pageMetadata() — Next
 * merged Ebenen nur flach, ein openGraph im Layout würde sonst og:url der
 * Startseite an alle Unterseiten vererben.
 */
export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE.seoTitle,
      template: `%s — ${SITE.brand}`,
    },
    description: SITE.seoDescription,
    applicationName: SITE.brand,
    authors: [{ name: CONTACT.name }],
    keywords: [...SITE.keywords],
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: SITE.brand,
    },
    twitter: { card: "summary_large_image" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

interface PageSeo {
  path: string;
  title: string;
  description?: string;
  /** true: Titel ohne „— SAYNISCH“-Suffix (z. B. Startseite). */
  absoluteTitle?: boolean;
  noindex?: boolean;
}

/**
 * Metadaten je Seite: Titel, Beschreibung, Canonical, Open Graph und Twitter
 * aus einer Quelle. Das Vorschaubild kommt aus app/opengraph-image.tsx über
 * den Parent — sonst fiele es weg, sobald die Seite openGraph setzt.
 */
export async function pageMetadata(
  page: PageSeo,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const images = (await parent).openGraph?.images ?? [];
  const fullTitle = page.absoluteTitle ? page.title : `${page.title} — ${SITE.brand}`;
  const description = page.description ?? SITE.seoDescription;
  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: SITE.brand,
      url: page.path,
      title: fullTitle,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(page.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* =========================================================================
   Strukturdaten (JSON-LD) — ein @graph mit stabilen @ids. Layout definiert
   Business, Person und WebSite; jede Seite ergänzt nur ihre WebPage (plus
   Service bzw. ProfilePage) und verweist per @id auf die Layout-Knoten.
   ========================================================================= */

const ID = {
  business: `${SITE.url}/#business`,
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
} as const;

const abs = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);

const areaServed = [
  { "@type": "City", name: REGION.locality },
  { "@type": "AdministrativeArea", name: REGION.district },
  ...REGION.cities.map((name) => ({ "@type": "City", name })),
  { "@type": "Country", name: "Deutschland" },
];

/** Adresse bewusst ohne Straße (Kundenwunsch) — vollständig nur im Impressum. */
const address = {
  "@type": "PostalAddress",
  postalCode: REGION.postalCode,
  addressLocality: REGION.locality,
  addressRegion: REGION.state,
  addressCountry: "DE",
};

const servicePages = () => LANDINGPAGES.filter((p) => p.schema.type === "service");
const ABOUT_SLUG = LANDINGPAGES.find((p) => p.schema.type === "profile")?.slug ?? "";

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Organization statt ProfessionalService (bei schema.org veraltet);
        // LocalBusiness verlangt eine Straße, die bewusst fehlt.
        "@type": "Organization",
        "@id": ID.business,
        name: SITE.brand,
        description: SITE.seoDescription,
        url: SITE.url,
        email: CONTACT.email,
        image: `${SITE.url}/opengraph-image`,
        slogan: SITE.claim,
        address,
        areaServed,
        founder: { "@id": ID.person },
        knowsAbout: [...SITE.knowsAbout],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Seminare und Coaching",
          // Der Service-Knoten selbst steht auf seiner Landingpage (@id einmal).
          itemListElement: servicePages().map((p) => ({
            "@type": "Offer",
            name: p.link.label,
            url: abs(`/${p.slug}`),
            itemOffered: { "@id": `${abs(`/${p.slug}`)}#service` },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": ID.person,
        name: CONTACT.name,
        jobTitle: CONTACT.jobTitles.join(", "),
        url: abs(`/${ABOUT_SLUG}`),
        worksFor: { "@id": ID.business },
        address,
        hasCredential: CONTACT.credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.name,
          credentialCategory: c.category,
        })),
        knowsAbout: [...SITE.knowsAbout],
      },
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: SITE.url,
        name: SITE.brand,
        inLanguage: "de-DE",
        publisher: { "@id": ID.business },
      },
    ],
  };
}

interface Crumb {
  name: string;
  path: string;
}

function webPageNode(
  type: string,
  path: string,
  name: string,
  description: string,
  updated: string,
  crumbs: Crumb[],
  extra: Record<string, unknown> = {},
) {
  const url = abs(path);
  // Startseite: "/#…" wie die Layout-Knoten (#business, #website)
  const idBase = path === "/" ? `${SITE.url}/` : url;
  return [
    {
      "@type": type,
      "@id": `${idBase}#webpage`,
      url,
      name,
      description,
      inLanguage: "de-DE",
      dateModified: updated,
      isPartOf: { "@id": ID.website },
      about: { "@id": ID.business },
      breadcrumb: { "@id": `${idBase}#breadcrumb` },
      ...extra,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${idBase}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    },
  ];
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": webPageNode(
      "WebPage",
      "/",
      SITE.seoTitle,
      SITE.seoDescription,
      SITE.updated,
      [{ name: "Startseite", path: "/" }],
    ),
  };
}

export function landingJsonLd(page: LandingPage) {
  const path = `/${page.slug}`;
  const crumbs = [
    { name: "Startseite", path: "/" },
    { name: page.link.label, path },
  ];

  if (page.schema.type === "profile") {
    return {
      "@context": "https://schema.org",
      "@graph": webPageNode(
        "ProfilePage",
        path,
        page.seo.title,
        page.seo.description,
        page.updated,
        crumbs,
        { mainEntity: { "@id": ID.person } },
      ),
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...webPageNode("WebPage", path, page.seo.title, page.seo.description, page.updated, crumbs, {
        mainEntity: { "@id": `${abs(path)}#service` },
      }),
      {
        "@type": "Service",
        "@id": `${abs(path)}#service`,
        name: page.link.label,
        serviceType: page.schema.serviceType,
        description: page.seo.description,
        url: abs(path),
        provider: { "@id": ID.business },
        areaServed,
        audience: { "@type": "Audience", audienceType: page.schema.audience },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE.url}/#kontakt`,
        },
      },
    ],
  };
}

/** JSON für <script type="application/ld+json"> — „<“ maskiert (Next-Doku). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
