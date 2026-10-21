import { serializeJsonLd } from "@/lib/seo";

/** Strukturdaten als <script type="application/ld+json"> (server-gerendert). */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
