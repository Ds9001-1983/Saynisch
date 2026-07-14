import Link from "next/link";
import { FOOTER, SITE, CONTACT } from "@/lib/content";
import { RevealText } from "@/components/motion/RevealText";
import { MotionToggle } from "@/components/ui/MotionToggle";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-forest text-sand-light">
      <div className="container-bleed py-[clamp(64px,9vh,128px)]">
        <RevealText
          as="p"
          className="t-mega font-display font-light leading-none text-sand-light"
        >
          {SITE.brand}
        </RevealText>
        <p className="t-lead mt-4 text-sage-haze">{FOOTER.claim}</p>

        <div className="mt-16 grid gap-10 border-t border-line-dark/60 pt-12 md:grid-cols-3">
          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h2 className="t-kicker mb-5 text-sage-haze">Navigation</h2>
            <ul className="flex flex-col gap-2.5">
              {FOOTER.nav.map((item) => (
                <li key={item.href}>
                  {/* "/#…" statt "#…": Der Footer erscheint auch auf Impressum/
                      Datenschutz — dort existieren die Anker nicht (WCAG 2.4.4). */}
                  <a
                    href={`/${item.href}`}
                    className="link-underline text-sand-light/80 transition-colors hover:text-sand-light"
                    data-cursor="hover"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt + Recht */}
          <div>
            <h2 className="t-kicker mb-5 text-sage-haze">Kontakt</h2>
            <ul className="flex flex-col gap-2.5 text-sand-light/80">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline hover:text-sand-light"
                  data-cursor="hover"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <h2 className="t-kicker mb-5 mt-8 text-sage-haze">Rechtliches</h2>
            <ul className="flex flex-col gap-2.5 text-sand-light/80">
              {FOOTER.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline hover:text-sand-light"
                    data-cursor="hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Einstellungen */}
          <div>
            <h2 className="t-kicker mb-5 text-sage-haze">Einstellungen</h2>
            <MotionToggle />
          </div>
        </div>

        {/* SUPERBRAND-Pflichtzeile */}
        <div className="mt-14 border-t border-line-dark/60 pt-8">
          <p className="text-sm text-sand-light/70">
            {FOOTER.superbrand.pre}{" "}
            <span aria-hidden>{FOOTER.superbrand.heart}</span>{" "}
            {FOOTER.superbrand.by}{" "}
            <a
              href={FOOTER.superbrand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sand-light hover:text-sage-glow"
              data-cursor="hover"
            >
              {FOOTER.superbrand.name}
            </a>{" "}
            – {FOOTER.superbrand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
