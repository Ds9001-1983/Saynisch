import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

/**
 * Alles crawlbar: Impressum, Datenschutz & Co. halten sich per
 * <meta name="robots" content="noindex"> aus dem Index. Ein Disallow würde
 * genau dieses noindex vor Google verstecken — die URLs könnten dann ohne
 * Inhalt („durch robots.txt blockiert“) im Index landen.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
