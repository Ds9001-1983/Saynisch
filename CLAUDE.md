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

## Platzhalter (vor Launch ersetzen)
`CONTACT` und `SITE.url` in `lib/content.ts` sowie Impressum/Datenschutz enthalten
`[PLATZHALTER]`. Echte Kontakt-/Rechtsdaten + reale Qualifikation eintragen.

## Befehle
`npm run dev` · `npm run build` · `npm run lint` · Medien: `scripts/gen-media.mjs`.
