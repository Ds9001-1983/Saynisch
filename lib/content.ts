/**
 * SAYNISCH — zentrale Inhalts-/Copy-Quelle (DE, Sie-Form, compliance-bewusst).
 *
 * WICHTIG (Recht): Alle Inhalte beschreiben Beratungs-, Kommunikations- und
 * Stresskompetenz — niemals Produktwirkung (Nahrungsergänzungsmittel) oder
 * Heilung. Verben: stärken/fördern/schulen/begleiten/einordnen statt
 * heilen/wirken/vorbeugen. Siehe Disclaimer.
 *
 */

export const SITE = {
  brand: "SAYNISCH",
  claim: "Klar. Ruhig. Souverän.",
  // www ist die Vercel-Primärdomain (Apex leitet per 308 auf www um)
  url: "https://www.saynisch.com",
  // Letzte inhaltliche Änderung der Startseite (ISO) → <lastmod> in der Sitemap.
  // Nur bei echten Textänderungen anpassen, nicht bei jedem Deploy.
  updated: "2026-10-21",
  // Title ≤ 60 Zeichen, Description ≤ 155 Zeichen (Snippet-Länge bei Google)
  seoTitle: "SAYNISCH — Seminare & Coaching in Nümbrecht und online",
  seoDescription:
    "Seminare und Coaching zu Gesprächsführung, Stressmanagement und Ruhe unter Druck – mit Heilpraktikerin und Coach Andrea Saynisch. Vor Ort oder online.",
  ogTitle: "SAYNISCH — Klar. Ruhig. Souverän. In jedem Gespräch.",
  ogDescription:
    "Fortbildung für Menschen in beratenden und gesundheitsnahen Arbeitsfeldern: Gesprächssicherheit, Beratungskompetenz und Stresskompetenz — praxisnah, wertschätzend, in den Alltag übertragbar.",
  keywords: [
    "Gesprächsführung",
    "Coaching für Stressmanagement",
    "Ruhe unter Druck",
    "Lebensberatung",
    "Heilpraktikerin",
    "Coaching",
    "Seminare",
    "Stresskompetenz",
    "Beratungskompetenz",
    "Nümbrecht",
    "Oberbergischer Kreis",
  ],
  // Strukturdaten (knowsAbout) — Themen, keine Wirkversprechen
  knowsAbout: [
    "Gesprächsführung",
    "Beratungskompetenz",
    "Kommunikation in sensiblen Situationen",
    "Stressmanagement",
    "Stresskompetenz",
    "Selbstregulation",
    "Lebensberatung",
  ],
} as const;

/** Sitz und Einzugsgebiet — bewusst ohne Straße (Kundenwunsch: volle Adresse
 *  nur im Impressum). Speist Texte und Strukturdaten. */
export const REGION = {
  postalCode: "51588",
  locality: "Nümbrecht",
  district: "Oberbergischer Kreis",
  state: "Nordrhein-Westfalen",
  cities: ["Köln", "Bonn"],
} as const;

/** Telefon erscheint NUR im Impressum (Kundenwunsch: Kontakt sonst ausschließlich übers Formular).
 *  Keine USt-IdNr. vorhanden — falls doch, Abschnitt im Impressum wieder ergänzen. */
export const CONTACT = {
  name: "Andrea Saynisch",
  role: "Seminare · Coaching · Fortbildungen",
  email: "kontakt@saynisch.com",
  phone: "02293 816957",
  phoneHref: "tel:+492293816957",
  street: "Am Sonnenhang 16",
  city: "51588 Nümbrecht",
  qualification: "Staatlich examinierte Krankenschwester, Heilpraktikerin, Coach",
  // Strukturdaten (Person) — dieselben Fakten wie qualification
  jobTitles: ["Heilpraktikerin", "Coach"],
  credentials: [
    { name: "Staatlich examinierte Krankenschwester", category: "Berufsabschluss" },
    { name: "Heilpraktikerin", category: "Erlaubnis nach dem Heilpraktikergesetz" },
    { name: "Coach", category: "Weiterbildung" },
  ],
} as const;

export const NAV = [
  { label: "Worum es geht", href: "#worum" },
  { label: "Schwerpunkte", href: "#schwerpunkte" },
  { label: "Formate", href: "#formate" },
  { label: "Für wen", href: "#fuer-wen" },
  { label: "Ansatz", href: "#ansatz" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/** Alle Sprungmarken („Hooks“) der Startseite in Seitenreihenfolge —
 *  Quelle für die Seitenübersicht. NAV oben ist bewusst die kürzere Auswahl. */
export const HOOKS = [
  { label: "Worum es geht", href: "#worum" },
  { label: "Schwerpunkte", href: "#schwerpunkte" },
  { label: "Formate und Methoden", href: "#formate" },
  { label: "Themenfelder", href: "#themenfelder" },
  { label: "Themen im Detail", href: "#themen" },
  { label: "Für wen", href: "#fuer-wen" },
  { label: "Mein Ansatz", href: "#ansatz" },
  { label: "Häufige Fragen", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const HERO = {
  // Steht im <h1> vor dem Claim — trägt die Hauptsuchbegriffe sichtbar
  kicker: "Seminare & Coaching für Gesprächsführung und Ruhe unter Druck",
  // Zeilenweiser Split-Text-Reveal
  headlineLines: ["Klar.", "Ruhig.", "Souverän."],
  subline:
    "Seminare, Workshops und Coachings für Menschen, die täglich beraten — und dabei Haltung bewahren wollen.",
  body: "Beratung findet selten unter idealen Bedingungen statt. Es ist laut, es ist eng, jemand wartet. Genau hier entscheidet sich, ob ein Gespräch trägt. Ich begleite Sie dabei, in solchen Momenten klar zu bleiben — fachlich sicher, menschlich präsent, ruhig auch unter Druck.",
  ctaPrimary: { label: "Anfrage stellen", href: "#kontakt" },
  ctaSecondary: { label: "Themen ansehen", href: "#schwerpunkte" },
  footnote: "Branchenoffen · Für Einzelpersonen, Teams und Einrichtungen · Inhouse oder online",
  scrollCue: "Weiterlesen",
  videoPause: "Hintergrundvideo pausieren",
  videoPlay: "Hintergrundvideo abspielen",
} as const;

export const LEITSATZ = {
  // Salbeigrün-Akzent auf das markierte Schlüsselwort
  pre: "Ruhe ist eine ",
  accent: "Kompetenz",
  post: ". Und Kompetenzen lassen sich trainieren.",
  sub: "Souveränität entsteht nicht im Moment des Drucks — sondern in der Vorbereitung darauf.",
} as const;

export const UEBERSICHT = {
  kicker: "Worum es geht",
  headline: "Drei Felder, die im Beratungsalltag zusammengehören.",
  body: "Wer berät, jongliert ständig mit dreierlei: dem fachlichen Inhalt, der Art zu sprechen und der eigenen Verfassung im Moment. Meine Seminare, Workshops und Coachings setzen genau dort an — branchenoffen, aber immer nah an Ihrem konkreten Arbeitsfeld.",
  pillars: [
    {
      title: "Klare Gesprächsführung",
      text: "Strukturiert durchs Gespräch — auch wenn die Zeit knapp und die Erwartung hoch ist.",
    },
    {
      title: "Sensible Themen souverän einordnen",
      text: "Gesundheitsnahe Anliegen verständlich, differenziert und verantwortungsvoll kommunizieren.",
    },
    {
      title: "Ruhe unter Druck",
      text: "Innere Stabilität und Selbstregulation, wenn der Alltag dicht wird.",
    },
  ],
  footnote: "Branchenoffen — anschlussfähig an Ihren Alltag.",
} as const;

export const SCHWERPUNKTE = {
  kicker: "Schwerpunkte",
  headline: "Worin Sie sicherer werden.",
  panels: [
    {
      no: "01",
      title: "Sensible Themen. Sichere Worte.",
      sub: "Komplexes verständlich machen, ohne zu überfordern.",
      body: "Gesundheitsnahe Fragen sind selten einfach. Menschen kommen mit Sorgen, mit Halbwissen, mit hohen Erwartungen — und Sie sollen in wenigen Minuten Orientierung geben. Hier geht es darum, Informationen verständlich, differenziert und adressatengerecht zu vermitteln: ohne Überforderung, ohne unnötige Zuspitzung, ohne unzulässige Wirkversprechen.",
      points: [
        "Informationen so aufbereiten, dass sie ankommen — passend zum Gegenüber",
        "Erwartungen behutsam einordnen statt enttäuschen",
        "Grenzen der eigenen Beratung klar und respektvoll benennen",
        "Verlässlich bleiben, auch wenn es keine einfache Antwort gibt",
      ],
      // Hervorgehobener NEM-Block mit Compliance-Footnote
      box: {
        title: "Beratungsanliegen rund um Nahrungsergänzungsmittel",
        text: "Fragen zu Nahrungsergänzungsmitteln gehören in vielen Arbeitsfeldern zum Alltag — und sie sind heikel. Hier geht es ausschließlich um Ihre Kommunikations- und Beratungskompetenz: wie Sie Beratungsanliegen strukturiert aufnehmen, Erwartungen sachlich einordnen und das Gespräch über Anwendung, Auswahl und Grenzen verantwortungsvoll führen. Es geht nicht um Produktwirkung und nicht um gesundheitsbezogene Aussagen, sondern um einen klaren, redlichen Umgang mit der Beratungssituation selbst.",
        footnote:
          "Inhaltlicher Fokus: Gesprächs- und Beratungskompetenz — keine Aussagen zur Wirkung einzelner Produkte.",
      },
      image: "beratung",
    },
    {
      no: "02",
      title: "Wenn das Gespräch kippt.",
      sub: "Präsenz und Klarheit, gerade dann, wenn es schwierig wird.",
      body: "Zeitdruck, Emotionen, Unsicherheit, hohe Erwartungen — anspruchsvolle Gespräche kündigen sich selten an. Hier üben Sie, in solchen Momenten zu führen, ohne zu drängen, und Grenzen zu setzen, ohne die Beziehung zu verlieren. Sie gewinnen Sicherheit bei Rückfragen, Einwänden und Unzufriedenheit — und einen Werkzeugkasten, der im echten Alltag funktioniert.",
      points: [
        "Strukturierte Gesprächsführung, die auch unter Druck trägt",
        "Umgang mit anspruchsvollen Gesprächspartnern — sachlich und souverän",
        "Deeskalierende Sprache, die Spannung herausnimmt",
        "Klarheit und Präsenz, wenn es eng wird",
        "Grenzen setzen, ohne den Kontakt zu verlieren",
        "Sicherheit bei Einwänden, Rückfragen und Unzufriedenheit",
      ],
      image: "praxisempfang",
    },
    {
      no: "03",
      title: "Ruhe ist eine Fähigkeit.",
      sub: "Und Fähigkeiten lassen sich trainieren.",
      body: "Belastung gehört zum Beruf — die Frage ist, wie Sie damit umgehen. Hier arbeiten Sie an innerer Stabilität und Selbstregulation: an Strategien für Stressspitzen, an Klarheit unter Zeitdruck und an kurzen, alltagstauglichen Wegen, sich zu entlasten und neu zu fokussieren. Damit nicht jeder dichte Tag an Ihnen zehrt.",
      points: [
        "Umgang mit Stressspitzen im laufenden Betrieb",
        "Selbstregulation: ruhig bleiben, wenn es hektisch wird",
        "Kurze Entlastungs- und Fokussierungsstrategien für zwischendurch",
        "Frühzeichen mentaler Überlastung erkennen und ernst nehmen",
        "Innere Stabilität als verlässliche Grundlage",
      ],
      // Inline-Disclaimer nahe Stress-Inhalt (Compliance)
      footnote:
        "Stresskompetenz im Sinne von Selbstregulation und Orientierung — keine medizinische oder psychotherapeutische Behandlung.",
      image: "wasser",
    },
  ],
} as const;

export const FORMATE = {
  kicker: "Formate",
  headline: "Ein Format, das zu Ihnen passt.",
  sub: "Vom kurzen Impuls bis zur begleiteten Teamentwicklung.",
  body: "Jede Gruppe ist anders, jeder Anlass auch. Deshalb arbeite ich nicht von der Stange. Wir stimmen Format, Umfang und Schwerpunkte auf Ihre Zielgruppe, Ihre Teamgröße und Ihren Anlass ab — und kombinieren die Themen, wo es sinnvoll ist.",
  items: [
    { title: "Seminar", text: "Fundiert und strukturiert, für solides Handwerkszeug." },
    { title: "Workshop", text: "Praktisch und interaktiv, mit viel Raum zum Üben." },
    { title: "Impulsvortrag", text: "Kompakt und prägnant, als Anstoß für mehr." },
    { title: "Teamfortbildung", text: "Gemeinsam wachsen, mit Blick auf die Dynamik im Team." },
    { title: "Einzelcoaching", text: "Vertraulich und individuell, ganz an Ihrem Anliegen." },
    { title: "Inhouse oder online", text: "Bei Ihnen vor Ort oder ortsunabhängig im digitalen Raum." },
  ],
  marquee: ["kombinierbar", "anpassbar", "praxisnah", "branchenoffen", "Inhouse", "online"],
  // Compliance: nur Beratungs-/Kommunikations-/Stresskompetenz — keine Wirk-/Heilversprechen.
  methoden: {
    kicker: "Aus dem Methodenkoffer",
    headline: "So kann das konkret aussehen.",
    body: "Fünf Beispiele dafür, wie wir in Seminaren, Workshops und Coachings arbeiten — anschaulich, alltagsnah und direkt in Ihren Berufsalltag übertragbar.",
    items: [
      {
        image: "stresslupe",
        title: "Stresslupe",
        text: "Gemeinsam genau hinschauen: Was löst Druck aus — und was davon lässt sich beeinflussen?",
      },
      {
        image: "stresslandkarte",
        title: "Stresslandkarte",
        text: "Auslöser, Gedanken, Körperreaktionen und Ressourcen sichtbar ordnen — das schafft Orientierung.",
      },
      {
        image: "perspektivwechsel",
        title: "Perspektivwechsel in 3 Stühlen",
        text: "Der Wechsel zwischen Ich, Gegenüber und Beobachter:in schult Empathie und Klarheit im Gespräch.",
      },
      {
        image: "formulierungswerkstatt",
        title: "Formulierungswerkstatt",
        text: "Schwierige Sätze gemeinsam neu formulieren: zielklar, wertschätzend, lösungsorientiert, verständlich.",
      },
      {
        image: "methodenkoffer",
        title: "Methodenkoffer",
        text: "Reflexionsfragen, Übungen und Visualisierungen — Sie nehmen mit, was zu Ihrem Alltag passt.",
      },
    ],
    footnote:
      "Methoden dienen der Übung und Reflexion — Auswahl und Tiefe stimmen wir auf Ihre Gruppe und Ihren Anlass ab.",
  },
  footnote: "Schwerpunkte sind frei kombinierbar — wir bauen das Passende zusammen.",
  cta: { label: "Format besprechen", href: "#kontakt" },
} as const;

export const THEMENFELDER = {
  kicker: "Themenfelder",
  headline: "Mögliche Themenfelder",
  sub: "Ein Ausgangspunkt — Ihr Bedarf gibt die Richtung vor.",
  body: "Die folgenden Felder lassen sich einzeln buchen oder zu einem größeren Programm verbinden. Was zu Ihnen passt, klären wir im Vorgespräch.",
  items: [
    "Professionelle Gesprächsführung im Beratungsalltag",
    "Kommunikation in sensiblen und anspruchsvollen Situationen",
    "Verantwortungsvoller Umgang mit Fragen zu Nahrungsergänzungsmitteln",
    "Beratungsstruktur und Gesprächssicherheit",
    "Stressmanagement und Selbstregulation",
    "Deeskalation und Umgang mit belastenden Kontakten",
    "Klarheit, Präsenz und innere Stabilität",
  ],
  cta: { label: "Thema anfragen", href: "#kontakt" },
} as const;

export const FUER_WEN = {
  kicker: "Für wen",
  headline: "Für alle, die beraten — und es gut machen wollen.",
  body: "Meine Angebote richten sich an Menschen in beratenden, gesundheitsnahen und kundenorientierten Arbeitsfeldern. Ob Sie für sich selbst Sicherheit gewinnen, ein Team stärken oder eine ganze Einrichtung weiterentwickeln möchten — der Ansatz bleibt derselbe: nah an Ihrem Alltag, anschlussfähig an Ihre Praxis.",
  groups: [
    {
      title: "Einzelpersonen",
      text: "Sie wollen Ihre Beratungs- und Kommunikationskompetenz gezielt stärken.",
    },
    {
      title: "Teams",
      text: "Sie möchten gemeinsam sicherer werden — in Sprache, Struktur und Umgang mit Druck.",
    },
    {
      title: "Einrichtungen",
      text: "Sie wollen Beratungsqualität und Gesprächskultur dauerhaft verankern.",
    },
  ],
  branchen: ["Apotheke", "Drogerie", "Pflege", "Beratung", "Reformhaus", "Gesundheitshandel"],
} as const;

export const ANSATZ = {
  kicker: "Mein Ansatz",
  headline: "Wie ich arbeite",
  sub: "Praxisnah, wertschätzend, klar strukturiert.",
  // Vita: Praxis-/Apothekennähe darf anklingen (echte Quali vorhanden, UWG-konform).
  bio: [
    "Ich komme aus der eigenen Praxisarbeit — ich kenne den Tresen, den Takt und den Moment, in dem ein gutes Wort den Unterschied macht. Was ich vermittle, habe ich selbst gebraucht: Struktur, die im hektischen Alltag hält, eine Sprache, die Nähe schafft, ohne zu verbiegen, und Wege, ruhig zu bleiben, wenn es viel wird.",
    "Mir ist wichtig, dass nichts theoretisch bleibt. Ich arbeite mit dem, was bei Ihnen wirklich passiert — wertschätzend, klar strukturiert und so, dass Sie es am Montag direkt anwenden können. Mein Blick verbindet dreierlei: fachliche Orientierung, kommunikative Kompetenz und einen achtsamen Blick auf Belastung und Dynamik.",
  ],
  principles: [
    { title: "Praxisnah", text: "Alles muss in den echten Alltag passen." },
    { title: "Wertschätzend", text: "Auf Augenhöhe, ohne Belehrung." },
    { title: "Klar strukturiert", text: "Damit Orientierung bleibt, auch im Trubel." },
  ],
  image: "ansatz",
  cta: { label: "Lassen Sie uns sprechen", href: "#kontakt" },
  more: { label: "Mehr über mich", href: "/ueber-mich" },
} as const;

/** Startseiten-Abschnitt mit Links auf die Landingpages (interne Verlinkung). */
export const THEMEN = {
  kicker: "Themen im Detail",
  headline: "Tiefer einsteigen.",
  body: "Zu jedem Schwerpunkt gibt es eine eigene Seite — mit Inhalten, Formaten und Antworten auf häufige Fragen.",
  more: "Mehr erfahren",
} as const;

export const FAQ = {
  kicker: "FAQ",
  headline: "Häufige Fragen",
  items: [
    {
      q: "Für welche Branchen sind die Angebote geeignet?",
      a: "Die Inhalte sind branchenoffen und richten sich an beratende, gesundheitsnahe und kundenorientierte Arbeitsfelder — etwa Apotheke, Drogerie, Pflege, Beratung, Reformhaus oder Gesundheitshandel. Die Beispiele und Übungen passe ich an Ihr konkretes Feld an.",
    },
    {
      q: "Was ist mit dem Schwerpunkt Nahrungsergänzungsmittel gemeint?",
      a: "Es geht ausschließlich um Kommunikations- und Beratungskompetenz: wie Sie Fragen dazu strukturiert aufnehmen, Erwartungen sachlich einordnen und das Gespräch verantwortungsvoll führen. Es geht ausdrücklich nicht um Produktwirkung oder gesundheitsbezogene Aussagen.",
    },
    {
      q: "Bieten Sie auch Inhouse- und Online-Formate an?",
      a: "Ja. Ich komme zu Ihnen vor Ort oder arbeite ortsunabhängig im digitalen Raum — je nachdem, was für Ihre Gruppe und Ihren Anlass besser passt.",
    },
    {
      q: "Können mehrere Themen in einem Format kombiniert werden?",
      a: "Ja. Die Schwerpunkte sind frei kombinierbar. Im Vorgespräch stimmen wir ab, was zu Ihrer Zielgruppe, Ihrer Teamgröße und Ihrem Anlass passt.",
    },
    {
      q: "Kann ich auch als Privatperson ein Coaching buchen?",
      a: "Ja. Einzelcoaching steht auch Privatpersonen offen — etwa bei Stress, in Umbruchphasen oder vor schwierigen Gesprächen. Es ist Coaching zur persönlichen Orientierung, keine Therapie und keine Heilbehandlung.",
    },
    {
      q: "Ersetzt das Angebot eine medizinische oder rechtliche Beratung?",
      a: "Nein. Die Angebote dienen der fachlichen Orientierung und der Weiterentwicklung von Kompetenzen — sie ersetzen keine medizinische, psychotherapeutische, rechtliche oder behördliche Einzelfallprüfung.",
    },
  ],
} as const;

export const KONTAKT = {
  kicker: "Kontakt",
  headline: "Lassen Sie uns Ihr Format finden.",
  sub: "Eine kurze Anfrage genügt — den Rest klären wir gemeinsam.",
  body: "Erzählen Sie mir von Ihrem Anliegen: Wen möchten Sie erreichen, worum geht es, und welcher Rahmen schwebt Ihnen vor? Im Vorgespräch klären wir Format und Inhalte und stimmen die Schwerpunkte auf Ihre Situation ab — unverbindlich und in Ruhe.",
  fields: {
    name: "Ihr Name",
    email: "E-Mail",
    phone: "Telefon (optional)",
    org: "Einrichtung / Team (optional)",
    formatLabel: "Bevorzugtes Format",
    formatOptions: [
      "Seminar",
      "Workshop",
      "Impulsvortrag",
      "Teamfortbildung",
      "Einzelcoaching",
      "Noch offen",
    ],
    message: "Worum geht es? (Anliegen, Zielgruppe, Anlass)",
  },
  // DSGVO-Texte
  privacyNote:
    "Ihre Angaben verwende ich ausschließlich zur Bearbeitung Ihrer Anfrage. Bitte geben Sie keine Gesundheitsdaten an. Weitere Informationen in der Datenschutzerklärung.",
  consentLabel:
    "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.",
  ctaPrimary: "Anfrage senden",
  ctaSecondary: "Per E-Mail schreiben",
  footnote: "Ich melde mich persönlich bei Ihnen zurück.",
  success: "Vielen Dank — Ihre Anfrage ist angekommen. Ich melde mich persönlich bei Ihnen zurück.",
  error:
    "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
} as const;

export const DISCLAIMER = {
  label: "Hinweis",
  text: "Die Angebote von SAYNISCH dienen der fachlichen Orientierung, der Weiterentwicklung von Beratungskompetenz sowie der Förderung von Kommunikations- und Stresskompetenz. Sie ersetzen keine medizinische, psychotherapeutische, rechtliche oder behördliche Einzelfallprüfung.",
} as const;

/** EU AI Act Art. 50 (anwendbar ab 2.8.2026): sichtbare Kennzeichnung
 *  KI-generierter Medien — Badge am Medium + Gesamthinweis. */
export const AI_MEDIA = {
  badge: "KI-generiert",
  notice: "Bild- und Videomaterial dieser Website: KI-generierte Darstellungen.",
} as const;

export const FOOTER = {
  claim: "Klar. Ruhig. Souverän.",
  nav: NAV,
  topicsTitle: "Themen",
  sitemap: { label: "Seitenübersicht", href: "/seitenuebersicht" },
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Erklärung zur Barrierefreiheit", href: "/barrierefreiheit" },
  ],
  superbrand: {
    pre: "Made with",
    heart: "❤",
    by: "by",
    name: "SUPERBRAND.marketing",
    href: "https://superbrand.marketing",
    tagline: "Dein Superheld für deine Werbung.",
  },
} as const;

/** Alt-Texte der Bildwelt (beschreibend, ruhig; Szenen- und Methodenbilder zeigen
 *  Personen bzw. Text als Bedeutungsträger). Der KI-Zusatz ist die barrierefreie
 *  Offenlegung nach AI Act Art. 50 — sichtbar übernimmt das der MediaBadge. */
export const ALT = {
  beratung:
    "Ruhige Beratungssituation an einem hellen Holztisch, Hände in offener Gesprächsgeste, ohne erkennbare Gesichter. KI-generierte Darstellung.",
  praxisempfang:
    "Wartebereich einer Praxis: Ein aufgebrachter Besucher gestikuliert am Empfangstresen, eine Mitarbeiterin reagiert sichtlich angespannt. KI-generierte Darstellung.",
  beratungstresen:
    "Beratungstresen: Eine Mitarbeiterin fasst sich erschöpft an die Stirn, während ein Kunde gestikulierend auf sie einredet. KI-generierte Darstellung.",
  wasser:
    "Ruhige Makroaufnahme einer einzelnen Welle auf heller, stiller Wasseroberfläche. KI-generierte Darstellung.",
  ansatz:
    "Weiches Tageslicht in einem ruhigen, hellen Raum mit Pflanze im Hintergrund. KI-generierte Darstellung.",
  stresslupe:
    "Goldene Lupe über dem handgeschriebenen Wort „Stress“ auf einem hellen Holztisch. KI-generierte Darstellung.",
  stresslandkarte:
    "Handgezeichnete Landkarte mit Fluss und Bergen und den Stationen Auslöser, Gedanken, Emotionen, Körperreaktionen und Ressourcen. KI-generierte Darstellung.",
  perspektivwechsel:
    "Drei Stühle nebeneinander mit beschrifteten Kissen: Ich, andere Person und Beobachter:in. KI-generierte Darstellung.",
  formulierungswerkstatt:
    "Aufgeschlagenes Notizbuch mit den Kriterien zielklar, wertschätzend, lösungsorientiert und verständlich, daneben ein Stift. KI-generierte Darstellung.",
  methodenkoffer:
    "Geöffneter petrolfarbener Koffer mit Methodenkarten für Reflexionsfragen, Übungen, Visualisierung und Ressourcen. KI-generierte Darstellung.",
} as const;

export const MICRO = {
  preloader: "Einen Moment Ruhe",
  cursorView: "Ansehen",
  cursorSend: "Anfragen",
  motionToggle: "Bewegung reduzieren",
  skipLink: "Zum Inhalt springen",
} as const;

/* =========================================================================
   Landingpages je Suchbegriff (SEO) + Seitenübersicht
   Compliance wie oben: Coaching und Kompetenzaufbau — nie Heilung, Wirkung
   oder Diagnose. „Heilpraktikerin“ nur als Qualifikation (keine Behandlungen
   im Angebot). Orte nur dort, wo tatsächlich gearbeitet wird (REGION).
   ========================================================================= */

type ImageKey = keyof typeof ALT;
type MethodKey = (typeof FORMATE.methoden.items)[number]["image"];
interface TextItem {
  title: string;
  text: string;
}

export interface LandingPage {
  slug: string;
  /** Letzte inhaltliche Änderung (ISO) → <lastmod> in der Sitemap. */
  updated: string;
  seo: { title: string; description: string; absoluteTitle?: boolean };
  /** Kurzform für Footer, Seitenübersicht, Startseite und Querverweise. */
  link: { label: string; teaser: string };
  /** Strukturdaten: Service-Seite oder Profilseite der Person. */
  schema:
    | { type: "service"; serviceType: string; audience: string }
    | { type: "profile" };
  hero: { kicker: string; headline: string; lead: string; note?: string; image?: ImageKey };
  intro: { headline: string; paragraphs: readonly string[] };
  points: {
    kicker: string;
    headline: string;
    body?: string;
    numbered?: boolean;
    items: readonly TextItem[];
  };
  audience: {
    kicker: string;
    headline: string;
    body: string;
    /** true: Schritte eines Ablaufs (nummeriert, <ol>). */
    numbered?: boolean;
    items: readonly TextItem[];
  };
  methods?: { headline: string; body: string; keys: readonly MethodKey[] };
  faq: readonly { q: string; a: string }[];
  closing: { headline: string; body: string };
  footnote: string;
}

export const LANDING_UI = {
  breadcrumbLabel: "Sie sind hier",
  home: "Startseite",
  ctaPrimary: { label: "Anfrage stellen", href: "/#kontakt" },
  ctaSecondary: { label: "Alle Schwerpunkte", href: "/#schwerpunkte" },
  methodsKicker: "Aus dem Methodenkoffer",
  faqKicker: "FAQ",
  faqHeadline: "Häufige Fragen",
  relatedKicker: "Weiterlesen",
  relatedHeadline: "Weitere Themen",
  more: "Mehr erfahren",
  closingKicker: "Kontakt",
  closingMail: "Per E-Mail schreiben",
} as const;

/** Pflichtsatz für Seiten mit Stress-/Lebensthemen (Abgrenzung HeilprG/PsychThG). */
const NO_TREATMENT =
  "Coaching ist keine Heilbehandlung und ersetzt keine ärztliche oder psychotherapeutische Behandlung.";

export const LANDINGPAGES: readonly LandingPage[] = [
  {
    slug: "stressmanagement-coaching",
    updated: "2026-10-21",
    seo: {
      title: "Coaching für Stressmanagement – Nümbrecht & online",
      description:
        "Coaching für Stressmanagement: Stressauslöser verstehen, Selbstregulation üben, Belastung anders begegnen. Einzeln oder im Team, vor Ort oder online.",
    },
    link: {
      label: "Coaching für Stressmanagement",
      teaser: "Stressauslöser verstehen, Selbstregulation üben, Belastung im Alltag anders begegnen.",
    },
    schema: {
      type: "service",
      serviceType: "Coaching für Stressmanagement",
      audience: "Einzelpersonen, Teams und Einrichtungen",
    },
    hero: {
      kicker: "Stressmanagement · Coaching",
      headline: "Coaching für Stressmanagement",
      lead: "Stress gehört zum Beruf — und oft auch zum Leben. Im Coaching finden Sie heraus, was Sie unter Druck setzt, und üben Wege, anders damit umzugehen. Damit nicht jeder dichte Tag an Ihnen zehrt.",
      image: "beratungstresen",
    },
    intro: {
      headline: "Stress lässt sich nicht abschalten. Aber anders bewältigen.",
      paragraphs: [
        "Termine, Erwartungen, Menschen, die etwas von Ihnen wollen: Belastung entsteht selten aus einem einzigen Grund. Meist ist es die Summe — und das Gefühl, dass keine Pause mehr bleibt. Stressmanagement heißt für mich nicht, Belastung kleinzureden, sondern sie genau anzusehen: Was setzt Sie unter Druck? Was davon können Sie beeinflussen? Und was gibt Ihnen wieder Boden unter die Füße?",
        "Im Coaching für Stressmanagement arbeiten wir an genau diesen Fragen — strukturiert, alltagsnah und in Ihrem Tempo. Sie lernen Ihre persönlichen Stressmuster kennen, üben kurze Strategien der Selbstregulation und entwickeln einen Umgang mit Belastung, der in Ihren Alltag passt. Dabei verbinde ich meinen Hintergrund als staatlich examinierte Krankenschwester, Heilpraktikerin und Coach: Ich kenne Arbeitsfelder, in denen Druck dazugehört.",
        "Das Coaching richtet sich an Einzelpersonen — beruflich wie privat — und an Teams, die gemeinsam ihre Stresskompetenz stärken möchten. Wir arbeiten online oder nach Absprache vor Ort: Mein Sitz ist Nümbrecht im Oberbergischen Kreis, Einrichtungen besuche ich auch in Köln und Bonn.",
      ],
    },
    points: {
      kicker: "Inhalte",
      headline: "Woran wir im Coaching arbeiten",
      items: [
        {
          title: "Stressauslöser erkennen",
          text: "Gemeinsam ordnen wir, was Sie belastet: Situationen, Gedanken, Erwartungen — und was davon in Ihrer Hand liegt.",
        },
        {
          title: "Frühzeichen ernst nehmen",
          text: "Sie lernen, Warnsignale von Überlastung früh wahrzunehmen, statt erst zu reagieren, wenn nichts mehr geht.",
        },
        {
          title: "Selbstregulation üben",
          text: "Kurze, alltagstaugliche Übungen, mit denen Sie in angespannten Momenten innehalten und wieder klar denken.",
        },
        {
          title: "Grenzen setzen",
          text: "Nein sagen, ohne die Beziehung zu verlieren: Formulierungen, die freundlich und zugleich klar sind.",
        },
        {
          title: "Prioritäten klären",
          text: "Was ist wirklich wichtig, was kann warten? Struktur, die im vollen Alltag Orientierung gibt.",
        },
        {
          title: "Ressourcen stärken",
          text: "Wir schauen, was Ihnen Kraft gibt — und wie Sie es im Alltag verlässlich einplanen.",
        },
      ],
    },
    audience: {
      kicker: "Für wen",
      headline: "Für Menschen, die viel tragen",
      body: "Das Coaching passt, wenn Druck und Tempo Ihnen dauerhaft zusetzen und Sie selbst etwas verändern möchten. Es ist branchenoffen und besonders vertraut mit beratenden und gesundheitsnahen Berufen wie Apotheke, Pflege und Praxis.",
      items: [
        {
          title: "Einzelcoaching",
          text: "Vertraulich und an Ihrem konkreten Anliegen — beruflich oder privat, online oder vor Ort.",
        },
        {
          title: "Teams",
          text: "Gemeinsam Stressmuster im Arbeitsalltag erkennen und Absprachen finden, die den Alltag leichter machen.",
        },
        {
          title: "Einrichtungen",
          text: "Seminare und Workshops zu Stresskompetenz, etwa für Apotheken, Praxen und Pflegeteams — inhouse oder online.",
        },
      ],
    },
    methods: {
      headline: "So kann das konkret aussehen.",
      body: "Drei Beispiele dafür, wie wir im Coaching für Stressmanagement arbeiten — anschaulich und direkt in Ihren Alltag übertragbar.",
      keys: ["stresslupe", "stresslandkarte", "methodenkoffer"],
    },
    faq: [
      {
        q: "Was passiert in einem Coaching für Stressmanagement?",
        a: "Wir schauen gemeinsam auf Ihre Situation: Was belastet Sie, wie reagieren Sie darauf, und was möchten Sie verändern? Daraus entwickeln wir Strategien und kleine Übungen, die Sie direkt im Alltag ausprobieren. Im Mittelpunkt stehen Ihre Ziele — nicht ein Programm von der Stange.",
      },
      {
        q: "Wie viele Termine sind sinnvoll?",
        a: "Das hängt von Ihrem Anliegen ab. Manchen genügen wenige Termine, andere möchten sich über einen längeren Zeitraum begleiten lassen. Im unverbindlichen Vorgespräch klären wir, was für Sie passt.",
      },
      {
        q: "Findet das Coaching online oder vor Ort statt?",
        a: "Beides ist möglich. Online arbeiten wir ortsunabhängig, Termine vor Ort sind nach Absprache möglich — mein Sitz ist Nümbrecht im Oberbergischen Kreis. Teams und Einrichtungen besuche ich inhouse, auch in Köln und Bonn.",
      },
      {
        q: "Ist Stressmanagement-Coaching eine Therapie?",
        a: "Nein. Coaching richtet sich an Menschen, die ihren Umgang mit Belastung selbst gestalten möchten. Es stellt keine Diagnosen und ersetzt keine ärztliche oder psychotherapeutische Behandlung.",
      },
      {
        q: "Wann ist Coaching nicht der richtige Weg?",
        a: "Wenn Sie unter anhaltenden körperlichen oder seelischen Beschwerden leiden, gehört das zuerst in ärztliche Hände. Bitte sprechen Sie dann mit Ihrer Hausärztin oder Ihrem Hausarzt.",
      },
    ],
    closing: {
      headline: "Der erste Schritt: ein Gespräch.",
      body: "Schildern Sie mir kurz, worum es geht — für sich allein, für Ihr Team oder Ihre Einrichtung. Im Vorgespräch klären wir unverbindlich, welches Format passt.",
    },
    footnote: `Stresskompetenz im Sinne von Selbstregulation und Orientierung. ${NO_TREATMENT}`,
  },
  {
    slug: "ruhe-unter-druck",
    updated: "2026-10-21",
    seo: {
      title: "Ruhe unter Druck – Seminar, Workshop & Coaching",
      description:
        "Ruhe unter Druck lässt sich trainieren: sieben Impulse für hektische Momente, dazu Seminare, Workshops und Coaching — in Oberberg, Köln, Bonn oder online.",
    },
    link: {
      label: "Ruhe unter Druck",
      teaser: "Gelassen bleiben, wenn es hektisch wird — sieben Impulse und das passende Training.",
    },
    schema: {
      type: "service",
      serviceType: "Seminar und Coaching zu Stresskompetenz",
      audience: "Beratende und gesundheitsnahe Berufe, Teams und Einzelpersonen",
    },
    hero: {
      kicker: "Stresskompetenz · Seminar & Coaching",
      headline: "Ruhe unter Druck",
      lead: "Ruhe ist keine Charakterfrage, sondern eine Fähigkeit. Und Fähigkeiten lassen sich trainieren — für die Momente, in denen alles gleichzeitig passiert.",
      image: "wasser",
    },
    intro: {
      headline: "Warum manche ruhig bleiben, wenn es eng wird",
      paragraphs: [
        "Das Telefon klingelt, jemand wartet ungeduldig, und die nächste Frage ist schon da. In solchen Momenten schaltet der Körper auf Alarm: Das Tempo steigt, der Blick wird eng, die Worte kommen schneller, als einem lieb ist. Das ist normal. Entscheidend ist, was danach passiert.",
        "Ruhe bewahren heißt nicht, nichts mehr zu spüren. Es heißt, den eigenen Zustand rechtzeitig zu bemerken, kurz innezuhalten und dann bewusst zu handeln, statt nur zu reagieren. Gelassenheit lässt sich üben — mit kleinen Routinen, klaren Sätzen und einem Blick dafür, was Sie unter Spannung setzt.",
        "In meinen Seminaren, Workshops und Coachings trainieren Sie genau diese Fähigkeit: praxisnah, an Situationen aus Ihrem Alltag und so, dass Sie es am nächsten Arbeitstag anwenden können. Die folgenden Impulse geben einen ersten Eindruck.",
      ],
    },
    points: {
      kicker: "Praxisimpulse",
      headline: "Sieben Impulse für mehr Ruhe unter Druck",
      body: "Kleine Schritte, die Sie sofort ausprobieren können. Im Training üben wir sie so lange, bis sie auch in hektischen Momenten abrufbar sind.",
      numbered: true,
      items: [
        {
          title: "Den Moment bemerken",
          text: "Ruhe beginnt mit Wahrnehmung: Woran merken Sie, dass die Anspannung steigt — an der Stimme, am Tempo, an den Schultern? Wer die eigenen Signale kennt, kann früher gegensteuern.",
        },
        {
          title: "Eine Atempause einbauen",
          text: "Ein bewusster, langsamer Atemzug, bevor Sie antworten, schafft Abstand zwischen Reiz und Reaktion. Er fällt niemandem auf — und gibt Ihnen einen Moment Zeit.",
        },
        {
          title: "Einen Satz parat haben, der Zeit gibt",
          text: "„Lassen Sie mich kurz nachsehen.“ oder „Ich bin gleich ganz für Sie da.“ Vorbereitete Sätze tragen, wenn der Kopf voll ist.",
        },
        {
          title: "Langsamer sprechen",
          text: "Unter Druck werden wir schneller. Bewusst ruhiger zu sprechen, sortiert die eigenen Gedanken — und gibt auch Ihrem Gegenüber Orientierung.",
        },
        {
          title: "Eins nach dem anderen",
          text: "Wenn alles gleichzeitig ruft, hilft eine einfache Frage: Was ist jetzt dran, was kann warten? Sprechen Sie die Reihenfolge aus — das ordnet Sie und andere.",
        },
        {
          title: "Kritik nicht persönlich nehmen",
          text: "Unmut gilt meist der Situation, nicht Ihnen. Diese Unterscheidung macht es leichter, sachlich zu bleiben und nicht mitzueskalieren.",
        },
        {
          title: "Den Druck danach ablegen",
          text: "Ein kurzes Ritual am Ende des Tages — ein paar Minuten an der frischen Luft, ein Zettel für Offenes — hilft, abzuschalten und Kraft für morgen zu sammeln.",
        },
      ],
    },
    audience: {
      kicker: "Formate",
      headline: "Gelassenheit trainieren — allein oder im Team",
      body: "Ruhe unter Druck ist überall ein Thema, wo Menschen Menschen beraten, versorgen oder bedienen: in Apotheken, Praxen und Pflege, im Handel und in der Beratung. Und auch privat, wenn das Leben gerade viel verlangt.",
      items: [
        {
          title: "Seminar und Workshop",
          text: "Für Teams und Einrichtungen, inhouse oder online — mit vielen Übungen aus Ihrem Arbeitsalltag.",
        },
        {
          title: "Impulsvortrag",
          text: "Ein kompakter Einstieg ins Thema, etwa für Teamtage, Fortbildungen oder Veranstaltungen.",
        },
        {
          title: "Einzelcoaching",
          text: "Wenn Sie für sich selbst an Ihrer Ruhe unter Druck arbeiten möchten — vertraulich und individuell.",
        },
      ],
    },
    methods: {
      headline: "So kann das konkret aussehen.",
      body: "Zwei Beispiele aus dem Methodenkoffer, mit denen wir Ruhe unter Druck trainieren.",
      keys: ["stresslandkarte", "formulierungswerkstatt"],
    },
    faq: [
      {
        q: "Wie bleibe ich in stressigen Situationen ruhig?",
        a: "Drei Schritte tragen: den eigenen Zustand bemerken, eine kurze Unterbrechung schaffen — etwa einen bewussten Atemzug oder einen Satz, der Zeit gibt — und dann den nächsten kleinen Schritt wählen. Im Training üben wir das, bis es auch unter Druck abrufbar ist.",
      },
      {
        q: "Kann man Gelassenheit lernen?",
        a: "Ja, im Sinne von Wahrnehmung, Routinen und Sprache, die sich trainieren lassen. Niemand wird dadurch unberührt von Stress. Aber Sie gewinnen Spielraum: Sie bemerken Anspannung früher und haben Werkzeuge, mit denen Sie bewusst reagieren.",
      },
      {
        q: "Wie kommuniziere ich klar, wenn ich unter Druck stehe?",
        a: "Kurze Sätze, ein ruhigeres Tempo und eine klare Reihenfolge helfen Ihnen und Ihrem Gegenüber. Vorbereitete Formulierungen für typische Situationen nehmen Druck heraus — sie entwickeln wir im Training gemeinsam.",
      },
      {
        q: "Gibt es das als Teamworkshop oder Impulsvortrag?",
        a: "Ja. Vom kompakten Impulsvortrag über den Workshop bis zur begleiteten Teamfortbildung ist alles möglich — inhouse in Nümbrecht, im Oberbergischen Kreis, in Köln und Bonn oder online. Umfang und Schwerpunkte stimmen wir im Vorgespräch ab.",
      },
    ],
    closing: {
      headline: "Ruhe beginnt mit einem ersten Gespräch.",
      body: "Erzählen Sie mir, in welchen Situationen es bei Ihnen eng wird — für sich allein oder für Ihr Team. Gemeinsam finden wir das passende Format.",
    },
    footnote: `Training von Stresskompetenz und Selbstregulation. ${NO_TREATMENT}`,
  },
  {
    slug: "gespraechsfuehrung",
    updated: "2026-10-21",
    seo: {
      title: "Gesprächsführung: Seminar, Training & Coaching",
      description:
        "Gesprächsführung trainieren: Seminare, Workshops und Coaching für klare Beratungsgespräche — in Apotheke, Pflege und Praxis. Inhouse oder online.",
    },
    link: {
      label: "Gesprächsführung",
      teaser: "Klar, strukturiert und wertschätzend durchs Gespräch — auch wenn es schwierig wird.",
    },
    schema: {
      type: "service",
      serviceType: "Seminar und Training Gesprächsführung",
      audience: "Beratende und gesundheitsnahe Berufe, Teams und Einrichtungen",
    },
    hero: {
      kicker: "Kommunikationstraining · Seminar & Coaching",
      headline: "Gesprächsführung, die auch unter Druck trägt",
      lead: "Ob Beratung am Tresen, Gespräch mit Angehörigen oder Einwand am Telefon: Gute Gesprächsführung gibt Ihnen Struktur, wenn es zählt — und Ihrem Gegenüber das Gefühl, gut aufgehoben zu sein.",
      image: "beratung",
    },
    intro: {
      headline: "Gute Gespräche sind kein Zufall.",
      paragraphs: [
        "Wer berät, führt jeden Tag viele Gespräche — oft unter Zeitdruck, mit wechselnden Menschen und mit Themen, die jemandem nahegehen. Dass dabei nicht jedes Gespräch rund läuft, ist normal. Gesprächsführung ist das Handwerk, das den Unterschied macht: zuhören, strukturieren, Orientierung geben und zu einem guten Abschluss kommen.",
        "In meinen Seminaren, Workshops und Trainings zur Gesprächsführung üben Sie dieses Handwerk an Situationen aus Ihrem Alltag. Sie lernen, Beratungsgespräche bewusst zu eröffnen, Anliegen strukturiert aufzunehmen, Informationen verständlich zu vermitteln und souverän zu bleiben, wenn Ihr Gegenüber unzufrieden, ungeduldig oder verunsichert ist.",
        "Besonders vertraut bin ich mit beratenden und gesundheitsnahen Berufen: Gesprächsführung in der Apotheke, in der Pflege, in Praxis und Drogerie. Die Inhalte sind branchenoffen und lassen sich auf jedes Arbeitsfeld übertragen, in dem Menschen miteinander sprechen.",
      ],
    },
    points: {
      kicker: "Inhalte",
      headline: "Was Sie im Training lernen",
      items: [
        {
          title: "Gespräche strukturieren",
          text: "Ein klarer Ablauf vom Einstieg bis zum Abschluss, der auch bei Zeitdruck Orientierung gibt.",
        },
        {
          title: "Aktiv zuhören, gezielt fragen",
          text: "Anliegen schnell erfassen, passende Fragetechniken einsetzen und Missverständnisse vermeiden.",
        },
        {
          title: "Verständlich erklären",
          text: "Komplexe Inhalte so vermitteln, dass sie ankommen — passend zum Gegenüber.",
        },
        {
          title: "Schwierige Gespräche führen",
          text: "Mit Einwänden, Kritik und Unzufriedenheit sachlich und souverän umgehen.",
        },
        {
          title: "Deeskalierend sprechen",
          text: "Sprache, die Spannung herausnimmt und ein Gespräch wieder in ruhiges Fahrwasser bringt.",
        },
        {
          title: "Grenzen benennen",
          text: "Klar sagen, was Sie leisten können und was nicht — respektvoll und ohne Rechtfertigungsdruck.",
        },
      ],
    },
    audience: {
      kicker: "Formate",
      headline: "Für Einzelne, Teams und ganze Einrichtungen",
      body: "Gesprächsführung lässt sich allein vertiefen oder als Kommunikationstraining im Team üben. Je nach Anlass kombinieren wir die Inhalte mit Stresskompetenz oder Kommunikation in sensiblen Situationen.",
      items: [
        {
          title: "Seminar",
          text: "Fundiertes Handwerkszeug der Gesprächsführung, klar strukturiert aufgebaut.",
        },
        {
          title: "Workshop und Teamfortbildung",
          text: "Viel Übung an Fällen aus Ihrem Alltag — als Inhouse-Schulung bei Ihnen oder online.",
        },
        {
          title: "Einzelcoaching",
          text: "Wenn Sie gezielt an Ihrer Gesprächsführung arbeiten möchten, etwa vor einem schwierigen Gespräch.",
        },
      ],
    },
    methods: {
      headline: "So kann das konkret aussehen.",
      body: "Drei Beispiele dafür, wie wir Gesprächsführung trainieren — anschaulich, alltagsnah und direkt übertragbar.",
      keys: ["perspektivwechsel", "formulierungswerkstatt", "methodenkoffer"],
    },
    faq: [
      {
        q: "Was versteht man unter Gesprächsführung?",
        a: "Gesprächsführung beschreibt, wie Sie ein Gespräch bewusst lenken: vom Einstieg über das Erfassen des Anliegens bis zu einem klaren Abschluss. Dazu gehören aktives Zuhören, Fragetechniken, verständliches Erklären und der Umgang mit Emotionen und Einwänden.",
      },
      {
        q: "Für wen eignet sich ein Seminar zur Gesprächsführung?",
        a: "Für alle, die beruflich viel sprechen und beraten — in Apotheke, Drogerie, Pflege, Praxis, Beratung oder Handel. Die Beispiele und Übungen passe ich an Ihr Arbeitsfeld an.",
      },
      {
        q: "Lernt man auch den Umgang mit schwierigen Gesprächspartnern?",
        a: "Ja, das ist ein Schwerpunkt. Sie üben, ruhig und sachlich zu bleiben, Spannung herauszunehmen und Grenzen zu setzen, ohne den Kontakt zu verlieren — bei Kundinnen und Kunden ebenso wie in Gesprächen mit Angehörigen.",
      },
      {
        q: "Lässt sich das Training auf unser Team zuschneiden?",
        a: "Ja. Inhalte, Umfang und Beispiele stimmen wir im Vorgespräch auf Ihre Einrichtung ab. Ich komme inhouse zu Ihnen — in Nümbrecht, im Oberbergischen Kreis, in Köln und Bonn — oder wir arbeiten online.",
      },
    ],
    closing: {
      headline: "Lassen Sie uns über Ihre Gespräche sprechen.",
      body: "Welche Gespräche fallen Ihnen oder Ihrem Team schwer? Schreiben Sie mir kurz — im Vorgespräch stimmen wir Inhalte und Format auf Ihren Alltag ab.",
    },
    footnote:
      "Inhaltlicher Fokus: Gesprächs- und Beratungskompetenz — keine medizinische oder rechtliche Beratung und keine Aussagen zur Wirkung einzelner Produkte.",
  },
  {
    slug: "lebensberatung",
    updated: "2026-10-21",
    seo: {
      title: "Lebensberatung & Coaching in Nümbrecht und online",
      description:
        "Lebensberatung als Coaching: Orientierung bei Stress, Umbrüchen und Entscheidungen — bodenständig, vertraulich, ohne Esoterik. In Nümbrecht oder online.",
    },
    link: {
      label: "Lebensberatung",
      teaser: "Coaching für Privatpersonen: Orientierung bei Stress, Umbrüchen und Entscheidungen.",
    },
    schema: {
      type: "service",
      serviceType: "Lebensberatung als Coaching",
      audience: "Privatpersonen",
    },
    hero: {
      kicker: "Einzelcoaching · Privat",
      headline: "Lebensberatung als Coaching",
      lead: "Manchmal braucht es einen ruhigen Ort und ein klares Gegenüber, um die eigenen Gedanken zu ordnen. Im Coaching nehmen wir uns Zeit für Ihre Fragen — vertraulich, wertschätzend und mit Blick nach vorn.",
      image: "ansatz",
    },
    intro: {
      headline: "Wenn das Leben gerade viel verlangt",
      paragraphs: [
        "Ein Jobwechsel, der Sie umtreibt. Ein Konflikt in der Familie, der nicht zur Ruhe kommt. Das Gefühl, nur noch zu funktionieren. Oder eine Entscheidung, die Sie seit Wochen vor sich herschieben. Es gibt Phasen, in denen man sich mehr Klarheit wünscht — und jemanden, der zuhört, ohne zu bewerten.",
        "Lebensberatung heißt bei mir: Coaching. Bodenständig, ohne Esoterik und ohne Therapieversprechen. Wir sortieren gemeinsam, was Sie beschäftigt, schauen auf Ihre Möglichkeiten und Ressourcen und entwickeln nächste Schritte, die zu Ihnen passen. Sie bleiben Expertin oder Experte für Ihr Leben — ich begleite Sie mit Struktur, Fragen und Methoden, die Orientierung geben.",
        "Meinen Hintergrund als staatlich examinierte Krankenschwester, Heilpraktikerin und Coach bringe ich als Haltung mit: aufmerksam, ruhig und mit einem achtsamen Blick auf Belastung. Das Coaching findet online statt oder nach Absprache vor Ort in Nümbrecht im Oberbergischen Kreis.",
      ],
    },
    points: {
      kicker: "Anliegen",
      headline: "Womit Sie zu mir kommen können",
      items: [
        {
          title: "Stress und Überlastung",
          text: "Wenn Beruf, Familie und Erwartungen zu viel werden und Sie einen anderen Umgang damit suchen.",
        },
        {
          title: "Umbrüche und Neuorientierung",
          text: "Berufliche Veränderung, neue Lebensphase, Abschied von Gewohntem — Orientierung für den Übergang.",
        },
        {
          title: "Entscheidungen",
          text: "Wenn Sie zwischen Möglichkeiten hin- und hergerissen sind und Klarheit für den nächsten Schritt suchen.",
        },
        {
          title: "Schwierige Gespräche",
          text: "Ein Gespräch, vor dem Sie sich scheuen — in Partnerschaft, Familie oder Beruf. Wir bereiten es gemeinsam vor.",
        },
        {
          title: "Grenzen und Selbstfürsorge",
          text: "Nein sagen, eigene Bedürfnisse ernst nehmen — ohne andere vor den Kopf zu stoßen.",
        },
        {
          title: "Abstand und Klarheit",
          text: "Wieder einen Schritt zurücktreten, den Überblick gewinnen und den Alltag bewusster gestalten.",
        },
      ],
    },
    audience: {
      kicker: "Ablauf",
      headline: "So läuft das Coaching ab",
      body: "Jedes Coaching beginnt mit einem unverbindlichen Vorgespräch. Danach entscheiden Sie, ob und wie wir zusammenarbeiten.",
      numbered: true,
      items: [
        {
          title: "Vorgespräch",
          text: "Sie schildern kurz Ihr Anliegen. Wir klären, ob Coaching der passende Weg ist und was Sie sich wünschen.",
        },
        {
          title: "Gemeinsame Arbeit",
          text: "In vertraulichen Terminen sortieren wir, was Sie beschäftigt — mit Fragen, Übungen und Visualisierungen.",
        },
        {
          title: "Ihre nächsten Schritte",
          text: "Sie nehmen konkrete Ideen und Werkzeuge mit, die zu Ihrem Alltag passen — in Ihrem Tempo.",
        },
      ],
    },
    methods: {
      headline: "So kann das konkret aussehen.",
      body: "Zwei Beispiele dafür, wie wir im Coaching arbeiten — anschaulich und ohne Vorkenntnisse.",
      keys: ["stresslandkarte", "perspektivwechsel"],
    },
    faq: [
      {
        q: "Was unterscheidet Lebensberatung, Coaching und Therapie?",
        a: "Lebensberatung verstehe ich als Coaching: Es richtet sich an Menschen, die vor einer Frage, einer Entscheidung oder einer belastenden Situation stehen und ihren Weg selbst gestalten möchten. Psychotherapie dient der Behandlung psychischer Erkrankungen. Mein Coaching stellt keine Diagnosen und ersetzt keine Therapie.",
      },
      {
        q: "Bei welchen Themen kann Coaching unterstützen?",
        a: "Etwa bei Stress und Überlastung, beruflicher oder privater Neuorientierung, anstehenden Entscheidungen und schwierigen Gesprächen. Im Vorgespräch klären wir, ob Ihr Anliegen gut ins Coaching passt.",
      },
      {
        q: "Findet die Beratung online oder vor Ort statt?",
        a: "Beides ist möglich: online, ortsunabhängig, oder nach Absprache vor Ort in Nümbrecht im Oberbergischen Kreis.",
      },
      {
        q: "Bleibt alles vertraulich?",
        a: "Ja. Was Sie im Coaching besprechen, bleibt zwischen uns.",
      },
      {
        q: "Was, wenn es mir gerade sehr schlecht geht?",
        a: "Dann ist Coaching nicht der richtige erste Schritt. Bitte wenden Sie sich an Ihre Hausärztin oder Ihren Hausarzt. In akuten Krisen erreichen Sie die TelefonSeelsorge rund um die Uhr kostenfrei unter 0800 111 0 111 oder 0800 111 0 222, im Notfall den Notruf 112.",
      },
    ],
    closing: {
      headline: "Der erste Schritt darf klein sein.",
      body: "Schreiben Sie mir in ein paar Sätzen, was Sie beschäftigt — bitte ohne Gesundheitsdaten. Ich melde mich persönlich, und wir klären im Vorgespräch, ob und wie ich Sie begleiten kann.",
    },
    footnote: `Coaching zur persönlichen Orientierung — ohne Diagnose. ${NO_TREATMENT}`,
  },
  {
    slug: "ueber-mich",
    updated: "2026-10-21",
    seo: {
      title: "Andrea Saynisch – Heilpraktikerin & Coach in Nümbrecht",
      description:
        "Andrea Saynisch: staatlich examinierte Krankenschwester, Heilpraktikerin und Coach. Seminare und Coaching zu Gesprächsführung und Stresskompetenz.",
      absoluteTitle: true,
    },
    link: {
      label: "Über mich",
      teaser: "Andrea Saynisch — Krankenschwester, Heilpraktikerin und Coach.",
    },
    schema: { type: "profile" },
    hero: {
      kicker: "Über mich",
      headline: "Andrea Saynisch, Heilpraktikerin und Coach",
      lead: "Staatlich examinierte Krankenschwester, Heilpraktikerin und Coach. Ich begleite Menschen, die beraten, versorgen und Verantwortung tragen — damit sie klar, ruhig und souverän bleiben.",
      note: "Ich biete keine heilkundlichen Behandlungen an. Meine Ausbildung fließt als Wissen und Haltung in Seminare und Coaching ein.",
    },
    intro: {
      headline: "Aus der Praxis, für die Praxis",
      paragraphs: [
        "Als staatlich examinierte Krankenschwester habe ich erlebt, was es heißt, unter Zeitdruck für Menschen da zu sein: aufmerksam, fachlich sicher und menschlich zugewandt. Als Heilpraktikerin habe ich meinen Blick auf Gesundheit und auf die Fragen vertieft, mit denen Menschen in Beratungssituationen kommen. Als Coach begleite ich heute Menschen dabei, in solchen Situationen klar und ruhig zu bleiben.",
        "Aus dieser Verbindung ist mein Angebot entstanden: Seminare, Workshops, Impulsvorträge und Coachings zu Gesprächsführung, Beratungskompetenz und Stresskompetenz. Branchenoffen, besonders vertraut mit Apotheke, Drogerie, Pflege und Beratung — und offen für Privatpersonen, die sich in bewegten Phasen Orientierung wünschen.",
        "Mein Sitz ist Nümbrecht im Oberbergischen Kreis. Ich arbeite inhouse bei Ihnen vor Ort — in der Region, in Köln und Bonn — oder online.",
      ],
    },
    points: {
      kicker: "Qualifikationen",
      headline: "Drei Blickwinkel, ein Anliegen",
      items: [
        {
          title: "Staatlich examinierte Krankenschwester",
          text: "Erfahrung mit Menschen in belastenden Situationen, mit Tempo, Verantwortung und dem Alltag gesundheitsnaher Berufe.",
        },
        {
          title: "Heilpraktikerin",
          text: "Fundiertes Wissen über Gesundheit und ein geschärfter Blick für die Fragen, die Menschen in Beratungssituationen mitbringen.",
        },
        {
          title: "Coach",
          text: "Methoden und Haltung, um Menschen auf ihrem eigenen Weg zu begleiten — strukturiert, wertschätzend und alltagsnah.",
        },
      ],
    },
    audience: {
      kicker: "Haltung",
      headline: "Wie ich arbeite",
      body: "Mir ist wichtig, dass nichts theoretisch bleibt. Wir arbeiten mit dem, was bei Ihnen wirklich passiert — so, dass Sie es am nächsten Tag anwenden können.",
      items: ANSATZ.principles,
    },
    faq: [
      {
        q: "Bieten Sie Heilpraktiker-Behandlungen an?",
        a: "Nein. Mein Angebot sind Seminare, Workshops, Vorträge und Coaching. Meine Qualifikation als Heilpraktikerin fließt als Wissen und Haltung ein — Diagnosen und Heilbehandlungen gehören nicht dazu.",
      },
      {
        q: "Wo arbeiten Sie?",
        a: "Mein Sitz ist Nümbrecht im Oberbergischen Kreis. Seminare und Workshops biete ich inhouse an, auch in Köln und Bonn, oder online. Coachings finden online oder nach Absprache vor Ort statt.",
      },
      {
        q: "Mit welchen Branchen arbeiten Sie?",
        a: "Meine Angebote sind branchenoffen. Besonders vertraut bin ich mit beratenden und gesundheitsnahen Arbeitsfeldern wie Apotheke, Drogerie, Pflege, Reformhaus und Beratung.",
      },
      {
        q: "Wie verbinden Sie Pflegeerfahrung und Coaching?",
        a: "Aus der Pflege kenne ich den Takt, den Druck und die Nähe zu Menschen in schwierigen Momenten. Das hilft mir, Übungen und Beispiele so zu wählen, dass sie im echten Arbeitsalltag tragen.",
      },
    ],
    closing: {
      headline: "Lernen wir uns kennen.",
      body: "Schreiben Sie mir, worum es geht — für sich, Ihr Team oder Ihre Einrichtung. Im Vorgespräch klären wir in Ruhe, wie ich Sie begleiten kann.",
    },
    footnote: "Mein Angebot umfasst Seminare und Coaching — keine Diagnose und keine Heilbehandlung.",
  },
];

export const SEITENUEBERSICHT = {
  path: "/seitenuebersicht",
  title: "Seitenübersicht",
  description: "Alle Seiten und Abschnitte der Website von SAYNISCH auf einen Blick.",
  intro: "Alle Seiten und Abschnitte dieser Website auf einen Blick.",
  homeTitle: "Startseite",
  homeLink: "Zur Startseite",
  topicsTitle: "Themen",
  personTitle: "Person",
  legalTitle: "Rechtliches",
} as const;
