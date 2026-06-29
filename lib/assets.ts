/**
 * Zentrale Medien-Pfade (Single Source of Truth).
 * Alle Assets werden self-hosted in /public/media abgelegt (kein externes CDN).
 * Bis die KI-Medien generiert sind, dienen die Pfade als Platzhalter — der
 * Preloader nutzt Promise.allSettled, fehlende Dateien blockieren also nicht.
 */
export const MEDIA = {
  heroPoster: "/media/hero-poster.avif",
  heroVideoWebm: "/media/hero.webm",
  heroVideoMp4: "/media/hero.mp4",
  img: {
    beratung: "/media/img/beratung.avif",
    seminarraum: "/media/img/seminarraum.avif",
    nemGespraech: "/media/img/nem-gespraech.avif",
    salbei: "/media/img/salbei.avif",
    wasser: "/media/img/wasser.avif",
    ansatz: "/media/img/ansatz.avif",
  },
  ogImage: "/media/og.png",
} as const;

export type AssetType = "image" | "video";
export interface CriticalAsset {
  type: AssetType;
  src: string;
}

/** Assets, die der Preloader vor dem Reveal abwartet (best effort). */
export const CRITICAL_ASSETS: CriticalAsset[] = [
  { type: "image", src: MEDIA.heroPoster },
  { type: "video", src: MEDIA.heroVideoWebm },
  { type: "image", src: MEDIA.img.beratung },
];
