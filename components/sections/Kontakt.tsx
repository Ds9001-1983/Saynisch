"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, Check } from "lucide-react";
import { KONTAKT, CONTACT } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { submitKontakt, type KontaktState } from "@/app/actions/kontakt";

const initial: KontaktState = { status: "idle" };

// border-slate statt border-ink/15: Feldgrenzen brauchen 3:1 gegen den
// Hintergrund (WCAG 1.4.11) — ink/15 lag bei 1,38:1.
const inputBase =
  "w-full rounded-[10px] border border-slate bg-clay/40 px-4 py-3 text-ink placeholder:text-slate transition-colors focus:border-sage-deep min-h-[44px]";

const errorText = "t-caption mt-1.5 text-rust";

export function Kontakt() {
  const [state, formAction, pending] = useActionState(submitKontakt, initial);
  const err = state.fieldErrors ?? {};
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Nach fehlgeschlagenem Submit: Fokus aufs erste fehlerhafte Feld (WCAG 3.3.1)
  useEffect(() => {
    if (state.status === "error" && state.fieldErrors) {
      formRef.current
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus();
    }
  }, [state]);

  // Erfolgsbox fokussieren: Live-Regionen, die erst mit Inhalt ins DOM kommen,
  // werden von Screenreadern oft nicht angekündigt (WCAG 4.1.3) — und der
  // Submit-Button ist verschwunden, der Fokus fiele sonst auf <body>.
  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  return (
    <section id="kontakt" className="section-pad">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Einladung + Direktkontakt */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Kicker className="mb-6">{KONTAKT.kicker}</Kicker>
          <h2 className="t-h2 max-w-[16ch] text-ink">{KONTAKT.headline}</h2>
          <p className="t-lead mt-5 max-w-[40ch] text-slate">{KONTAKT.sub}</p>
          <p className="t-body mt-5 max-w-[46ch] text-slate">{KONTAKT.body}</p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline inline-flex items-center gap-3 text-ink"
              data-cursor="hover"
            >
              <Mail size={18} className="text-sage-deep" />
              {CONTACT.email}
            </a>
          </div>
          <p className="t-caption mt-8">{KONTAKT.footnote}</p>
        </div>

        {/* Formular */}
        <div>
          {state.status === "success" ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className="flex flex-col items-start gap-4 rounded-2xl border border-sage/30 bg-sage-veil/40 p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-deep text-white">
                <Check size={22} />
              </span>
              <p className="t-h4 text-ink">{KONTAKT.success}</p>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
              {/* Honeypot (visuell + für AT verborgen) */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div>
                <label htmlFor="name" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.name} *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  aria-invalid={err.name ? true : undefined}
                  aria-describedby={err.name ? "name-error" : undefined}
                  className={inputBase}
                />
                {err.name && (
                  <p id="name-error" className={errorText}>
                    {err.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.email} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={err.email ? true : undefined}
                  aria-describedby={err.email ? "email-error" : undefined}
                  className={inputBase}
                />
                {err.email && (
                  <p id="email-error" className={errorText}>
                    {err.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="org" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.org}
                </label>
                <input id="org" name="org" autoComplete="organization" className={inputBase} />
              </div>

              <div>
                <label htmlFor="format" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.formatLabel}
                </label>
                <select id="format" name="format" className={inputBase} defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {KONTAKT.fields.formatOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="t-small mb-2 block font-medium text-ink">
                  {KONTAKT.fields.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  aria-invalid={err.message ? true : undefined}
                  aria-describedby={err.message ? "message-error" : undefined}
                  className={`${inputBase} resize-y`}
                />
                {err.message && (
                  <p id="message-error" className={errorText}>
                    {err.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  aria-invalid={err.consent ? true : undefined}
                  aria-describedby={err.consent ? "consent-error" : undefined}
                  className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-sage-deep)]"
                />
                <label htmlFor="consent" className="t-caption">
                  {KONTAKT.consentLabel.split("Datenschutzerklärung")[0]}
                  {/* Permanente Unterstreichung: Links im Fließtext dürfen sich
                      nicht nur über Farbe abheben (WCAG 1.4.1). */}
                  <Link
                    href="/datenschutz"
                    className="text-sage-deep underline underline-offset-2"
                  >
                    Datenschutzerklärung
                  </Link>
                  {KONTAKT.consentLabel.split("Datenschutzerklärung")[1]}
                </label>
              </div>
              {err.consent && (
                <p id="consent-error" className={`${errorText} -mt-2`}>
                  {err.consent}
                </p>
              )}

              <p className="t-caption">{KONTAKT.privacyNote}</p>

              {state.status === "error" && state.message && (
                <p role="alert" aria-live="assertive" className="t-small text-rust">
                  {state.message}
                </p>
              )}

              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <MagneticButton type="submit" variant="primary" cursorLabel="Anfragen" disabled={pending}>
                  {pending ? "Wird gesendet …" : KONTAKT.ctaPrimary}
                </MagneticButton>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline t-small text-slate"
                  data-cursor="hover"
                >
                  {KONTAKT.ctaSecondary}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
