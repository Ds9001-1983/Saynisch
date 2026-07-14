import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { CONTACT, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit",
  robots: { index: false, follow: true },
};

export default function BarrierefreiheitPage() {
  return (
    <LegalShell title="Erklärung zur Barrierefreiheit">
      <p>
        Diese Erklärung gilt für die Website {SITE.url} („{SITE.brand}“). Als
        Kleinstunternehmen ist die Anbieterin von den Pflichten des
        Barrierefreiheitsstärkungsgesetzes (BFSG) für Dienstleistungen
        ausgenommen (§ 3 Abs. 3 BFSG). Diese Erklärung erfolgt freiwillig —
        Barrierefreiheit ist Anspruch dieser Website, unabhängig von einer
        gesetzlichen Pflicht.
      </p>

      <h2>Stand der Vereinbarkeit</h2>
      <p>
        Die Website orientiert sich an den Web Content Accessibility Guidelines
        (WCAG) 2.1, Konformitätsstufe AA, sowie an der europäischen Norm
        EN 301 549. Sie ist mit diesen Anforderungen nach interner Prüfung
        weitgehend vereinbar.
      </p>

      <h2>Nicht barrierefreie Inhalte</h2>
      <p>Folgende Einschränkungen sind bekannt:</p>
      <ul>
        <li>
          Einzelne Bedienelemente (z. B. Links im Fußbereich, der Schalter
          „Bewegung reduzieren“) unterschreiten die empfohlene Zielgröße für
          Touch-Bedienung. Alle Funktionen sind dennoch per Tastatur und
          Zeiger erreichbar.
        </li>
        <li>
          Dekorative Animationen und ein Hintergrundvideo sind Teil der
          Gestaltung. Sie lassen sich über die Systemeinstellung „Bewegung
          reduzieren“, den gleichnamigen Schalter im Fußbereich sowie einen
          Pausier-Knopf im Kopfbereich vollständig deaktivieren.
        </li>
      </ul>

      <h2>Feedback und Kontakt</h2>
      <p>
        Ihnen sind Barrieren aufgefallen, oder Sie benötigen Inhalte in einer
        anderen Form? Schreiben Sie gern an{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> — Hinweise
        werden zeitnah geprüft und nach Möglichkeit behoben.
      </p>

      <h2>Durchsetzungsverfahren</h2>
      <p>
        Unabhängig von der freiwilligen Natur dieser Erklärung können Sie sich
        bei Beschwerden zur Barrierefreiheit an die Marktüberwachungsstelle der
        Länder für die Barrierefreiheit von Produkten und Dienstleistungen
        (MLBF) wenden.
      </p>

      <p className="mt-8 text-sm">
        Diese Erklärung wurde am 14. Juli 2026 auf Grundlage einer internen
        Prüfung nach WCAG 2.1 AA erstellt.
      </p>
    </LegalShell>
  );
}
