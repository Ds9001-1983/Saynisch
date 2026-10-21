# Projekt-Hinweise SAYNISCH

Premium One-Page (Next.js 16 App Router, React 19, Tailwind v4). Stil „Klare
Klinik / Trust": hell, ruhig, vertrauensvoll, EIN Salbeigrün-Akzent (< 10 %
Fläche). Ansprache **Sie**. Marke = Wortmarke „SAYNISCH", Person in Ich-Form.

## Konventionen
- **Alle Texte** liegen zentral in `lib/content.ts` — UI-Komponenten enthalten
  keine Hardcodes. Alt-Texte, Formular- und DSGVO-Texte ebenfalls dort.
- **Health-Claims-Disziplin (Pflicht):** Nie Produktwirkung (Nahrungsergänzungs-
  mittel) oder Heilung behaupten. Nur Beratungs-/Kommunikations-/Stresskompetenz.
  Verben: stärken/fördern/schulen/begleiten/einordnen — nicht heilen/wirken/vorbeugen.
- **Bewegung:** Jede Animation respektiert `useReducedMotion()` (System + Footer-
  Toggle `data-motion="off"`). Effekte langsam/weich (calm-Eases in `lib/gsap.ts`).
- **WebGL** nur über `AuroraCanvas` (CSS-Fallback bei Mobile/Low-End/Reduced-Motion).
- **Fonts** self-hosted via `next/font` (kein Google-CDN — DSGVO). Kein externes Embed.
- GSAP ≥ 3.13: SplitText/CustomEase sind frei und im Paket — kein Club/Lizenz nötig.

## SEO (Stand Oktober 2026)
- **Landingpages je Suchbegriff** stehen als Daten in `LANDINGPAGES` (`lib/content.ts`)
  und rendern über `app/[slug]/page.tsx` (`dynamicParams = false`). Neue Seite =
  neuer Eintrag; Footer, Startseite („Themen im Detail“), Seitenübersicht, Sitemap
  und JSON-LD ziehen automatisch nach. `updated` nur bei echten Textänderungen setzen.
- **Metadaten je Seite** immer über `pageMetadata()` (`lib/seo.ts`) — Canonical,
  og:url und Vorschaubild sonst falsch (Next merged openGraph nur flach).
- **„Heilpraktikerin“ nur als Qualifikation** — keine Behandlungen im Angebot, keine
  Heilkunde-Sprache. Stress-/Lebensthemen tragen den Satz „Coaching ist keine
  Heilbehandlung …“. Orte nur aus `REGION` (ohne Straße, Kundenwunsch).
- Sitemap enthält nur indexierbare Seiten; Sprungmarken (`HOOKS`) stehen in der
  HTML-Seitenübersicht `/seitenuebersicht`. robots.txt sperrt nichts (noindex-Seiten
  müssen crawlbar bleiben).

## Rechtsdaten (Stand Juli 2026: eingetragen)
Kontakt-/Rechtsdaten in `lib/content.ts` und Impressum/Datenschutz sind real
(Andrea Saynisch; Qualifikation: staatlich examinierte Krankenschwester,
Heilpraktikerin, Coach — inkl. HeilprG-Pflichtangabe). Keine USt-IdNr.
vorhanden. Hosting-Angabe im Datenschutz: Vercel (USA, DPF/SCC).

## Befehle
`npm run dev` · `npm run build` · `npm run lint` · Medien: `scripts/gen-media.mjs`.
