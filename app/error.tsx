"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center justify-center px-6 text-center"
    >
      <span className="t-kicker text-sage-deep">Fehler</span>
      <h1 className="t-mega mt-4 font-display font-light text-ink">
        Kurz durchatmen.
      </h1>
      <p className="t-lead mt-6 max-w-[42ch] text-slate">
        Da ist etwas schiefgelaufen. Ein neuer Versuch hilft meistens.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex min-h-[44px] items-center rounded-[10px] bg-sage-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#48594f]"
      >
        Erneut versuchen
      </button>
    </main>
  );
}
