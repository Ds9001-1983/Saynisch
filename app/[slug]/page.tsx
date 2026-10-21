import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { LANDINGPAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { LandingPageView } from "@/components/landing/LandingPageView";

// Nur die Landingpages aus lib/content.ts — jeder andere Pfad liefert 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGPAGES.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const findPage = (slug: string) => LANDINGPAGES.find((p) => p.slug === slug);

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const page = findPage((await params).slug);
  if (!page) return {};
  return pageMetadata(
    {
      path: `/${page.slug}`,
      title: page.seo.title,
      description: page.seo.description,
      absoluteTitle: page.seo.absoluteTitle,
    },
    parent,
  );
}

export default async function LandingRoute({ params }: Props) {
  const page = findPage((await params).slug);
  if (!page) notFound();
  return <LandingPageView page={page} />;
}
