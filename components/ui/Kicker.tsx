import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("t-kicker inline-flex items-start gap-3", className)}>
      {/* Strich auf Höhe der ersten Zeile (line-height 1.3 → Mitte bei 0.65em),
          damit er bei umbrechenden Kickern nicht mittig im Block hängt */}
      <span
        aria-hidden
        className={cn("mt-[0.65em] h-px w-6 shrink-0", onDark ? "bg-sage-glow" : "bg-sage")}
      />
      {children}
    </span>
  );
}
