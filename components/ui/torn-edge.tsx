import { cn } from "@/lib/utils";

/**
 * Ragged band edge (DESIGN.md §8), so sections meet on a hand-torn line rather
 * than a ruled one. Extracted from the home "How it works" band so the inner
 * pages can share exactly the same silhouette.
 */

type EdgeTone = "turmeric" | "chili" | "green" | "cream" | "cream-deep";

const tones: Record<EdgeTone, string> = {
  turmeric: "bg-spice-turmeric",
  chili: "bg-spice-chili",
  green: "bg-spice-green",
  cream: "bg-spice-cream",
  "cream-deep": "bg-spice-cream-deep",
};

/* Irregular run of peaks. Flipped vertically for the bottom variant so the two
   edges never look like the same stamp repeated. */
const TOP =
  "polygon(0 0,100% 0,100% 40%,92% 100%,78% 45%,61% 100%,44% 50%,29% 100%,14% 48%,0 95%)";
const BOTTOM =
  "polygon(0 100%,100% 100%,100% 60%,88% 0,72% 55%,55% 0,39% 52%,22% 0,9% 58%,0 5%)";

export function TornEdge({
  position = "top",
  tone = "turmeric",
  className,
}: {
  position?: "top" | "bottom";
  tone?: EdgeTone;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 h-6",
        position === "top" ? "top-0" : "bottom-0",
        tones[tone],
        className
      )}
      style={{ clipPath: position === "top" ? TOP : BOTTOM }}
    />
  );
}
