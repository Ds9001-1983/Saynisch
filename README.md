# SAYNISCH — Premium-Website

Seminare, Coaching & Fortbildungen für beratende, gesundheitsnahe und
kundenorientierte Arbeitsfelder. Premium One-Page (Next.js 16 · App Router).

Stil: „Klare Klinik / Trust" — hell, ruhig, vertrauensvoll, ein Salbeigrün-Akzent.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** · **Tailwind v4**
- **GSAP 3.15** (ScrollTrigger, SplitText, CustomEase — seit 3.13 alle Plugins frei)
- **Lenis** (Smooth Scroll) · **three / @react-three/fiber / drei** (WebGL-Aurora)
- **Resend** (Kontaktformular-Versand) · **sharp** (Bild-Komprimierung)
- Fonts self-hosted via `next/font` (Fraunces · Hanken Grotesk · Martian Mono) — kein Google-CDN

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production-Build
npm run lint
```

## Umgebungsvariablen

Siehe [.env.example](.env.example). Für den Formular-Versand `RESEND_API_KEY`
(EU-Region) setzen; ohne Key wird die Anfrage in Entwicklung nur geloggt.

## Medien neu generieren (optional)

KI-Bilder & Hero-Video liegen unter `public/media/`. Neu erzeugen mit
`scripts/gen-media.mjs` (RunPod-Keys via ENV, nicht im Repo):

```bash
RUNPOD_IMG_KEY=… node scripts/gen-media.mjs images
RUNPOD_VID_KEY=… node scripts/gen-media.mjs video "<hero-still-url>"
```

## Vor dem Launch zwingend ausfüllen (Platzhalter)

In [lib/content.ts](lib/content.ts) (`CONTACT`, `SITE.url`) und den Rechtsseiten:

- Voller Name, ladungsfähige Anschrift, E-Mail, Telefon, ggf. USt-IdNr.
- Reale berufliche Qualifikation (Impressum + „Mein Ansatz") — wahrheitsgemäß (UWG)
- Domain bestätigen, `RESEND_API_KEY` + AVV mit Resend, AVV mit dem Hoster
- Impressum & Datenschutz juristisch final prüfen (insb. Health-Claims rund um NEM)

## Struktur

- `app/` — Routen (One-Page, `/impressum`, `/datenschutz`, 404, OG/robots/sitemap, Server Action)
- `components/sections/` — die Sektionen der One-Page
- `components/{ui,motion,webgl,providers}/` — Bausteine
- `lib/` — `content.ts` (alle Texte), `gsap.ts`, `seo.ts`, `assets.ts`, `utils.ts`

---

Made with ❤ by [SUPERBRAND.marketing](https://superbrand.marketing) – Dein Superheld für deine Werbung.
