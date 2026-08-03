import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/**
 * A shaped, tilted frame for real food/market photography.
 *
 * No photography has been supplied yet (DESIGN.md §8, open item 4). Rather than
 * inventing stock imagery, a slot with no `src` renders a *designed* textured
 * colour field — it reads as intentional collage, not a broken image — and
 * surfaces its intended subject as a dev-only note.
 *
 * Dropping a real photo in later is a one-line change: pass `src`/`alt`. The
 * frame, shape, rotation and sizing all stay put, so nothing re-lays out.
 */

type SlotTone = "turmeric" | "chili" | "green" | "terracotta";
type SlotShape = "petal" | "blob-a" | "blob-b" | "blob-c" | "blob-d";

const tones: Record<SlotTone, string> = {
  turmeric: "bg-spice-turmeric",
  chili: "bg-spice-chili",
  green: "bg-spice-green",
  terracotta: "bg-spice-terracotta",
};

const shapes: Record<SlotShape, string> = {
  petal: "shape-petal",
  "blob-a": "blob-a",
  "blob-b": "blob-b",
  "blob-c": "blob-c",
  "blob-d": "blob-d",
};

export function PhotoSlot({
  src,
  alt,
  /** What this slot is *for*. Shown in dev when empty; also the fallback alt. */
  subject,
  tone = "turmeric",
  shape = "petal",
  sizes,
  priority = false,
  fit = "cover",
  className,
}: {
  src?: StaticImageData | string;
  alt?: string;
  subject: string;
  tone?: SlotTone;
  shape?: SlotShape;
  sizes?: string;
  priority?: boolean;
  /**
   * `cover` for true edge-to-edge photographs.
   * `contain` for transparent cutouts (a plate, a trolley) — the subject is
   * centred on the tone fill with breathing room, because cropping a cutout to
   * the frame just clips it and loses the point of the transparency.
   */
  fit?: "cover" | "contain";
  className?: string;
}) {
  const frame = cn(
    "relative overflow-hidden border-4 border-spice-ink shadow-stamp",
    shapes[shape],
    className
  );

  if (src) {
    const contain = fit === "contain";
    return (
      <div className={cn(frame, contain && tones[tone])}>
        {contain ? (
          <>
            <div
              aria-hidden="true"
              className="bg-produce absolute inset-0 opacity-25 mix-blend-multiply"
            />
            <div
              aria-hidden="true"
              className="bg-paper absolute inset-0 opacity-25 mix-blend-multiply"
            />
          </>
        ) : null}
        <Image
          src={src}
          alt={alt ?? subject}
          sizes={sizes}
          priority={priority}
          className={cn(
            "relative size-full",
            contain
              ? "scale-90 object-contain drop-shadow-[4px_6px_0_rgba(42,29,20,0.20)]"
              : "object-cover"
          )}
        />
      </div>
    );
  }

  /* Empty slot: a light textured base with the produce tile reading clearly
     through a colour wash. Built this way round because a solid dark fill with
     a multiplied pattern just reads as a flat circle — it has to look like a
     deliberate patterned tile, since production hides the dev note below. */
  return (
    <div
      className={cn(frame, "bg-spice-cream-deep")}
      role="img"
      aria-label={subject}
    >
      <div aria-hidden="true" className="bg-produce absolute inset-0 opacity-80" />
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 opacity-55 mix-blend-multiply", tones[tone])}
      />
      <div
        aria-hidden="true"
        className="bg-paper absolute inset-0 opacity-30 mix-blend-multiply"
      />

      {process.env.NODE_ENV !== "production" ? (
        <span className="font-marker absolute inset-x-3 bottom-3 text-center text-lg leading-tight text-spice-ink">
          photo slot — {subject}
        </span>
      ) : null}
    </div>
  );
}
