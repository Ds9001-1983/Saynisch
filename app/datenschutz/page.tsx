import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { CONTACT, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen.
        Nachfolgend informiere ich Sie gemäß Art. 13 DSGVO über die Verarbeitung
        personenbezogener Daten beim Besuch dieser Website.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {CONTACT.name}
        <br />
        {SITE.brand}
        <br />
        {CONTACT.street}, {CONTACT.city}
        <br />
        E-Mail: {CONTACT.email}
      </p>

      <h2>2. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
        CA 91789, USA gehostet und über deren Content-Delivery-Netzwerk
        ausgeliefert. Beim Aufruf der Website werden automatisch Informationen
        in sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt:
        IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
        übertragene Datenmenge, Referrer-URL, Browsertyp und Betriebssystem.
        Diese Verarbeitung erfolgt zur Gewährleistung eines störungsfreien
        Betriebs und der Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel
        besteht ein Vertrag zur Auftragsverarbeitung (AVV); soweit Daten in
        die USA übertragen werden, ist Vercel nach dem EU-U.S. Data Privacy
        Framework zertifiziert, ergänzend gelten Standardvertragsklauseln.
      </p>

      <h2>3. Schriftarten (Fonts)</h2>
      <p>
        Die verwendeten Schriftarten werden lokal von diesem Server ausgeliefert
        (self-hosted). Es werden <strong>keine</strong> externen Schrift-CDNs
        (z. B. Google Fonts) eingebunden; es findet daher keine Übertragung Ihrer
        IP-Adresse an Drittanbieter zum Laden von Schriften statt.
      </p>

      <h2>4. Cookies und Tracking</h2>
      <p>
        Diese Website setzt <strong>keine</strong> Tracking- oder Marketing-Cookies
        ein und bindet keine Analyse-Dienste oder externen Inhalte (z. B. YouTube,
        Vimeo, Google Maps, Social-Plugins) ein. Ein Cookie-Banner ist daher nicht
        erforderlich.
      </p>

      <h2>5. Lokale Speicherung (Einstellungen)</h2>
      <p>
        Wenn Sie die Funktion „Bewegung reduzieren“ nutzen, wird diese Präferenz in
        Ihrem Browser (localStorage) gespeichert, damit die Einstellung bei
        späteren Besuchen erhalten bleibt. Dies ist technisch erforderlich, um die
        von Ihnen gewählte Funktion bereitzustellen (§ 25 Abs. 2 TDDDG); es werden
        keine Daten an Dritte übertragen.
      </p>

      <h2>6. Kontaktformular und Kontaktaufnahme</h2>
      <p>
        Wenn Sie mir über das Kontaktformular oder per E-Mail eine Anfrage senden,
        verarbeite ich die von Ihnen angegebenen Daten (Name, E-Mail-Adresse,
        optional Telefonnummer, Einrichtung/Team und Format sowie Ihre
        Nachricht) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen) bzw. lit. a DSGVO (Ihre Einwilligung über die
        Checkbox).
      </p>
      <p>
        Bitte geben Sie im Nachrichtenfeld <strong>keine</strong> Gesundheitsdaten
        oder andere besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) an.
        Der Versand erfolgt über das E-Mail-Postfach meines Hosting-Anbieters
        Alfahosting (Serverstandort Deutschland). Ihre Angaben werden gelöscht,
        sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>7. Empfänger / Auftragsverarbeiter</h2>
      <p>
        Zur Bereitstellung der Website setze ich sorgfältig ausgewählte
        Dienstleister ein (Hosting, E-Mail-Versand). Mit diesen bestehen Verträge
        zur Auftragsverarbeitung nach Art. 28 DSGVO. Eine Übermittlung in Drittländer
        außerhalb der EU/des EWR findet nur statt, wenn geeignete Garantien (z. B.
        Standardvertragsklauseln) vorliegen.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben nach der DSGVO das Recht auf:</p>
      <ul>
        <li>Auskunft (Art. 15)</li>
        <li>Berichtigung (Art. 16)</li>
        <li>Löschung (Art. 17)</li>
        <li>Einschränkung der Verarbeitung (Art. 18)</li>
        <li>Datenübertragbarkeit (Art. 20)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
      </ul>
      <p>
        Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren (Art. 77 DSGVO).
      </p>

      <h2>9. Aktualität</h2>
      <p>
        Diese Datenschutzerklärung wird angepasst, sobald sich die Datenverarbeitung
        oder die Rechtslage ändert.
      </p>

    </LegalShell>
  );
}
