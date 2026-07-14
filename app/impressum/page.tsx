import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { CONTACT, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {CONTACT.name}
        <br />
        {`${SITE.brand} — Seminare, Coaching & Fortbildungen`}
        <br />
        {CONTACT.street}
        <br />
        {CONTACT.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {CONTACT.phone}
        <br />
        E-Mail: {CONTACT.email}
      </p>

      <h2>Berufliche Qualifikation</h2>
      <p>{CONTACT.qualification}</p>
      <p>
        Die Berufsbezeichnung „Heilpraktikerin“ wurde in der Bundesrepublik
        Deutschland verliehen. Zuständige Aufsichtsbehörde: das örtlich
        zuständige Gesundheitsamt. Berufsrechtliche Regelung:
        Heilpraktikergesetz (HeilprG) nebst Durchführungsverordnung, abrufbar
        unter www.gesetze-im-internet.de.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Mein Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
        Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>KI-generierte Inhalte</h2>
      <p>
        Das auf dieser Website verwendete Bild- und Videomaterial ist
        KI-generiert und entsprechend gekennzeichnet (Art. 50 Verordnung (EU)
        2024/1689 — „AI Act“). Die Darstellungen zeigen keine realen Personen,
        Räume oder Ereignisse.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
        solche gekennzeichnet.
      </p>

    </LegalShell>
  );
}
