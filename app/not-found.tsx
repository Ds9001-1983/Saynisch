import Link from "next/link";
import { SITE } from "@/lib/content";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center justify-center px-6 text-center"
    >
      <span className="t-kicker text-sage-deep">Fehler 404</span>
      <h1 className="t-mega mt-4 font-display font-light text-ink">Verlaufen.</h1>
      <p className="t-lead mt-6 max-w-[42ch] text-slate">
        Diese Seite gibt es nicht (mehr). Kein Grund zur Unruhe — zurück zum
        Anfang geht es hier.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-[44px] items-center rounded-[10px] bg-sage-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#48594f]"
        data-cursor="hover"
        data-cursor-label="Start"
      >
        Zur Startseite
      </Link>
      <p className="t-kicker mt-16 text-slate">{SITE.brand}</p>
    </main>
  );
}
