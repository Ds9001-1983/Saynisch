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
    <span className={cn("t-kicker inline-flex items-center gap-3", className)}>
      <span
        aria-hidden
        className={cn("h-px w-6", onDark ? "bg-sage-glow" : "bg-sage")}
      />
      {children}
    </span>
  );
}
