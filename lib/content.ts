/**
 * SAYNISCH — zentrale Inhalts-/Copy-Quelle (DE, Sie-Form, compliance-bewusst).
 *
 * WICHTIG (Recht): Alle Inhalte beschreiben Beratungs-, Kommunikations- und
 * Stresskompetenz — niemals Produktwirkung (Nahrungsergänzungsmittel) oder
 * Heilung. Verben: stärken/fördern/schulen/begleiten/einordnen statt
 * heilen/wirken/vorbeugen. Siehe Disclaimer.
 *
 * [PLATZHALTER] = vor Launch durch echte Kundendaten zu ersetzen.
 */

export const SITE = {
  brand: "SAYNISCH",
  claim: "Klar. Ruhig. Souverän.",
  // [PLATZHALTER] Domain final bestätigen
  url: "https://www.saynisch.de",
  seoTitle:
    "SAYNISCH — Seminare, Workshops & Coaching für Beratungs- und Kommunikationskompetenz",
  seoDescription:
    "Branchenoffene Seminare, Workshops und Coachings für beratende und gesundheitsnahe Berufe. Klare Gesprächsführung, souveräner Umgang mit sensiblen Themen, Ruhe unter Druck — für Einzelpersonen, Teams und Einrichtungen.",
  ogTitle: "SAYNISCH — Klar. Ruhig. Souverän. In jedem Gespräch.",
  ogDescription:
    "Fortbildung für Menschen in beratenden und gesundheitsnahen Arbeitsfeldern: Gesprächssicherheit, Beratungskompetenz und Stresskompetenz — praxisnah, wertschätzend, in den Alltag übertragbar.",
} as const;

/** [PLATZHALTER] — echte Kontakt-/Impressumsdaten vor Launch eintragen */
export const CONTACT = {
  name: "[Vor- und Nachname]",
  role: "Seminare · Coaching · Fortbildungen",
  email: "kontakt@saynisch.de",
  phone: "+49 [Telefonnummer]",
  phoneHref: "tel:+49000000000",
  street: "[Straße und Hausnummer]",
  city: "[PLZ und Ort]",
  vatId: "[USt-IdNr., falls vorhanden]",
  // Echte berufliche Qualifikation (gesundheits-/apothekennah) — wahrheitsgemäß eintragen
  qualification: "[konkrete Qualifikation, z. B. PTA / PKA / Pflegefachkraft]",
} as const;

export const NAV = [
  { label: "Worum es geht", href: "#worum" },
  { label: "Schwerpunkte", href: "#schwerpunkte" },
  { label: "Formate", href: "#formate" },
  { label: "Für wen", href: "#fuer-wen" },
  { label: "Ansatz", href: "#ansatz" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const HERO = {
  kicker: "Seminare · Coaching · Fortbildungen",
  // Zeilenweiser Split-Text-Reveal
  headlineLines: ["Klar.", "Ruhig.", "Souverän."],
  subline:
    "Seminare, Workshops und Coachings für Menschen, die täglich beraten — und dabei Haltung bewahren wollen.",
  body: "Beratung findet selten unter idealen Bedingungen statt. Es ist laut, es ist eng, jemand wartet. Genau hier entscheidet sich, ob ein Gespräch trägt. Ich begleite Sie dabei, in solchen Momenten klar zu bleiben — fachlich sicher, menschlich präsent, ruhig auch unter Druck.",
  ctaPrimary: { label: "Anfrage stellen", href: "#kontakt" },
  ctaSecondary: { label: "Themen ansehen", href: "#schwerpunkte" },
  footnote: "Branchenoffen · Für Einzelpersonen, Teams und Einrichtungen · Inhouse oder online",
  scrollCue: "Weiterlesen",
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
      image: "seminarraum",
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
    contact: "E-Mail oder Telefon",
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

export const FOOTER = {
  claim: "Klar. Ruhig. Souverän.",
  nav: NAV,
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
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

/** Alt-Texte für die KI-Bildwelt (atmosphärisch, ohne Gesichter) */
export const ALT = {
  beratung:
    "Ruhige Beratungssituation an einem hellen Holztisch, Hände in offener Gesprächsgeste, ohne erkennbare Gesichter.",
  seminarraum: "Heller, ruhiger Seminarraum mit hellen Holzstühlen in lockerem Kreis.",
  nemGespraech: "Sachliche Beratungsszene mit Notizbuch und Wasserglas auf hellem Tisch.",
  salbei: "Makroaufnahme eines Salbeiblatts mit Morgentau in weichem Licht.",
  wasser: "Ruhige Makroaufnahme einer einzelnen Welle auf heller, stiller Wasseroberfläche.",
  ansatz: "Weiches Tageslicht in einem ruhigen, hellen Raum mit Pflanze im Hintergrund.",
} as const;

export const MICRO = {
  preloader: "Einen Moment Ruhe",
  cursorView: "Ansehen",
  cursorSend: "Anfragen",
  motionToggle: "Bewegung reduzieren",
  skipLink: "Zum Inhalt springen",
} as const;
