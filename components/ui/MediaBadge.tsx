import { AI_MEDIA } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Sichtbare KI-Kennzeichnung (EU AI Act Art. 50) — dezenter Chip in der Ecke
 * des Medien-Containers (der Container braucht position:relative).
 * Für Screenreader übernehmen die Alt-Texte die Offenlegung; der Chip bleibt
 * deshalb aria-hidden, sonst würde jedes Bild doppelt angekündigt.
 * Maximal reduziert (Kundenwunsch): kein Chip, nur gläserne Schrift als
 * Wasserzeichen. Der feine Schatten sichert die Lesbarkeit auf hellen wie
 * dunklen Bildpartien — „klar erkennbar" ist Pflicht nach Art. 50 AI Act,
 * dezenter darf es deshalb nicht werden.
 */
export function MediaBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-2.5 right-3 z-10 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {AI_MEDIA.badge}
    </span>
  );
}
