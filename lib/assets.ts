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
    praxisempfang: "/media/img/praxisempfang.avif",
    beratungstresen: "/media/img/beratungstresen.avif",
    wasser: "/media/img/wasser.avif",
    ansatz: "/media/img/ansatz.avif",
    stresslupe: "/media/img/stresslupe.avif",
    stresslandkarte: "/media/img/stresslandkarte.avif",
    perspektivwechsel: "/media/img/perspektivwechsel.avif",
    formulierungswerkstatt: "/media/img/formulierungswerkstatt.avif",
    methodenkoffer: "/media/img/methodenkoffer.avif",
  },
  ogImage: "/media/og.png",
} as const;

export type AssetType = "image" | "video";
export interface CriticalAsset {
  type: AssetType;
  src: string;
}

/** Assets, die der Preloader vor dem Reveal abwartet (best effort).
 *  Bewusst KEIN Video: Mobile-Browser feuern canplaythrough ohne Interaktion
 *  oft nie → der Loader säße bis zum Timeout fest. Das Hero-Video ist
 *  dekorativ, das Poster deckt den ersten Frame ab, und das <video> im Hero
 *  lädt selbst (preload="metadata") — doppeltes Laden entfällt zugleich. */
export const CRITICAL_ASSETS: CriticalAsset[] = [
  { type: "image", src: MEDIA.heroPoster },
  { type: "image", src: MEDIA.img.beratung },
];
