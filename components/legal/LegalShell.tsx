import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/content";
import { Footer } from "@/components/sections/Footer";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ink/10">
        <div className="container-content flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-light tracking-[0.18em] text-ink"
            data-cursor="hover"
          >
            {SITE.brand}
          </Link>
          <Link
            href="/"
            className="link-underline t-small inline-flex items-center gap-2 text-ink"
            data-cursor="hover"
          >
            <ArrowLeft size={16} />
            Zurück
          </Link>
        </div>
      </header>

      <main id="main" className="section-pad">
        <div className="container-content max-w-[760px]">
          <h1 className="t-h1 mb-12 text-ink">{title}</h1>
          <div className="legal-prose flex flex-col gap-4">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
