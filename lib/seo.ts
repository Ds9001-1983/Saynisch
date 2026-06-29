import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE.seoTitle,
      template: `%s — ${SITE.brand}`,
    },
    description: SITE.seoDescription,
    applicationName: SITE.brand,
    authors: [{ name: SITE.brand }],
    keywords: [
      "Seminare",
      "Coaching",
      "Fortbildung",
      "Gesprächsführung",
      "Beratungskompetenz",
      "Stresskompetenz",
      "Kommunikation",
      "Gesundheitsberatung",
      "Apotheke",
      "Pflege",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: SITE.url,
      siteName: SITE.brand,
      title: SITE.ogTitle,
      description: SITE.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.ogTitle,
      description: SITE.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

/** JSON-LD (ProfessionalService). Adresse/Telefon erst mit echten Daten ergänzen. */
export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.brand,
    description: SITE.seoDescription,
    url: SITE.url,
    slogan: SITE.claim,
    areaServed: "DE",
    serviceType: [
      "Seminar",
      "Workshop",
      "Impulsvortrag",
      "Teamfortbildung",
      "Einzelcoaching",
    ],
    knowsAbout: [
      "Gesprächsführung",
      "Beratungskompetenz",
      "Kommunikation in sensiblen Situationen",
      "Stresskompetenz",
      "Selbstregulation",
    ],
  };
}
