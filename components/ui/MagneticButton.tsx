"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn, clamp } from "@/lib/utils";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";

type Variant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  cursorLabel?: string;
  disabled?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  // sage-deep statt sage: Weiß auf #6e8f7d erreicht nur 3,57:1 (WCAG 1.4.3
  // verlangt 4,5:1); auf #566f62 sind es 5,46:1, Hover 7,5:1.
  primary:
    "bg-sage-deep text-white hover:bg-[#48594f] border border-transparent",
  secondary:
    "bg-transparent text-ink border border-ink/35 hover:border-ink/60",
  ghost: "bg-transparent text-sage-deep border border-transparent px-0",
};

export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  cursorLabel,
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollTo } = useSmoothScroll();
  const isAnchor = href?.startsWith("#");

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    // Magnetik nur bei echtem Zeiger — auf Touch erzeugen pointermove-Events
    // beim Tippen sonst x/y-Versätze.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const mx = clamp(e.clientX - (r.left + r.width / 2) * 1, -40, 40);
      const my = clamp(e.clientY - (r.top + r.height / 2) * 1, -40, 40);
      gsap.to(el, {
        x: clamp(mx * 0.25, -8, 8),
        y: clamp(my * 0.25, -8, 8),
        duration: 0.6,
        ease: "power3",
      });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "power3" });

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-sm font-medium transition-colors duration-300",
    "min-h-[44px]",
    VARIANTS[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const cursorProps = {
    "data-cursor": "hover",
    ...(cursorLabel ? { "data-cursor-label": cursorLabel } : {}),
  };

  if (isAnchor) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onClick={(e) => {
          e.preventDefault();
          // onClick zuerst: Aufrufer entsperren hier ggf. den Scroll-Lock —
          // Lenis' scrollTo ist ein No-Op, solange die Instanz gestoppt ist.
          onClick?.();
          scrollTo(href!);
        }}
        {...cursorProps}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...cursorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...cursorProps}
    >
      {children}
    </button>
  );
}
