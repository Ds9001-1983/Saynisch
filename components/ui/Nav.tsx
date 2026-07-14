"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const router = useRouter();
  const { scrollTo, stop, start } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Header-Zustand: solid nach Hero + Auto-Hide beim Runterscrollen
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.7);
      setHidden(y > lastY && y > window.innerHeight && !open);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Aktiver Abschnitt
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const unlock = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.documentElement.style.overscrollBehavior = "";
    start();
  }, [start]);

  // Scroll-Lock bei offenem Mobile-Menü — iOS braucht den Lock auf html UND
  // body, dazu muss Lenis pausieren (läuft sonst hinterm Overlay weiter).
  // inert hält zugleich den Tab-Fokus vorm Wandern hinter das Overlay
  // (WCAG 2.4.3 — das Overlay ist nur per opacity/visibility versteckt).
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    stop();
    const inertTargets = document.querySelectorAll("main, footer");
    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      unlock();
    };
  }, [open, stop, unlock]);

  const go = (href: string) => {
    setOpen(false);
    // Synchron entsperren: Lenis' scrollTo ist ein No-Op solange isStopped,
    // und das Effekt-Cleanup läuft erst nach dem React-Commit.
    unlock();
    // Auf Unterseiten (Impressum/Datenschutz) existieren die Anker nicht —
    // dorthin navigieren statt Klicks ins Leere laufen zu lassen.
    if (!document.querySelector(href)) {
      router.push(`/${href}`);
      return;
    }
    scrollTo(href);
  };

  return (
    <>
      <header
        // Auto-Hide macht die Links nur unsichtbar, nicht unfokussierbar —
        // beim Durchtabben Header wieder einblenden (WCAG 2.4.7).
        onFocus={() => setHidden(false)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled && !open
            ? "border-b border-ink/10 bg-sand/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Hauptnavigation"
          className="container-bleed flex h-[72px] items-center justify-between"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go("#top");
            }}
            className="font-display text-xl font-light tracking-[0.18em] text-ink"
            data-cursor="hover"
          >
            {SITE.brand}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.href);
                  }}
                  className={cn(
                    "link-underline t-small text-ink/70 transition-colors hover:text-ink",
                    active === item.href && "text-ink",
                  )}
                  aria-current={active === item.href ? "true" : undefined}
                  data-cursor="hover"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton
                href="#kontakt"
                variant="primary"
                cursorLabel="Anfragen"
                className="px-5 py-2.5 text-[0.8rem]"
              >
                Anfrage senden
              </MagneticButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className="grid h-11 w-11 place-items-center text-ink lg:hidden"
              data-cursor="hover"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile-Overlay — bewusst GESCHWISTER des Headers: dessen permanente
          translate-/backdrop-filter-Werte machen ihn sonst zum Containing
          Block, und fixed inset-0 clippt auf die 72px-Header-Box. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-sand px-[var(--side-padding)] pb-10 pt-28 transition-[opacity,visibility] duration-400 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex flex-col gap-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.href);
                }}
                className="t-h3 block py-2 font-display text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <MagneticButton
            href="#kontakt"
            variant="primary"
            className="w-full"
            onClick={() => {
              setOpen(false);
              unlock();
            }}
          >
            Anfrage senden
          </MagneticButton>
        </div>
      </div>
    </>
  );
}
