import { AI_MEDIA } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Sichtbare KI-Kennzeichnung (EU AI Act Art. 50) — dezenter Chip in der Ecke
 * des Medien-Containers (der Container braucht position:relative).
 * Für Screenreader übernehmen die Alt-Texte die Offenlegung; der Chip bleibt
 * deshalb aria-hidden, sonst würde jedes Bild doppelt angekündigt.
 * Glas-Optik (Kundenwunsch): milchig + Blur statt dunklem Chip — der volle
 * Ink-Text auf dem aufgehellten Untergrund hält die Kennzeichnung lesbar
 * („klar erkennbar" ist Pflicht nach Art. 50 AI Act).
 */
export function MediaBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-2 right-2 z-10 rounded-full border border-white/50 bg-white/30 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-ink backdrop-blur-md",
        className,
      )}
    >
      {AI_MEDIA.badge}
    </span>
  );
}
