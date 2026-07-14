import { AI_MEDIA } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Sichtbare KI-Kennzeichnung (EU AI Act Art. 50) — dezenter Chip in der Ecke
 * des Medien-Containers (der Container braucht position:relative).
 * Für Screenreader übernehmen die Alt-Texte die Offenlegung; der Chip bleibt
 * deshalb aria-hidden, sonst würde jedes Bild doppelt angekündigt.
 * Kontrast: Weiß auf ink/85 bleibt auch über hellen Bildern ≥ 4,5:1.
 */
export function MediaBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-2 right-2 z-10 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-white",
        className,
      )}
    >
      {AI_MEDIA.badge}
    </span>
  );
}
