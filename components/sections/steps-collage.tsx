import type { Step } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

/**
 * Spice Pantry step row (DESIGN.md §8). Used by the home page and
 * /how-it-works, so the two never drift apart.
 *
 * Steps sit on a single baseline and stay upright — the earlier staggered,
 * tilted arrangement read as busy. Character now comes from the tiles
 * themselves rather than from their placement:
 *  - each step takes a different spice colour and organic blob silhouette
 *  - numerals are large and handwritten, not faint grey counters
 *  - tiles carry an ink outline and a hard offset shadow
 *
 * Hover still springs (lift + scale via <Tilt>); it just no longer rotates.
 */

const looks = [
  {
    tile: "bg-spice-turmeric text-spice-ink",
    blob: "blob-a",
    numeral: "text-spice-chili",
  },
  {
    tile: "bg-spice-green text-spice-cream",
    blob: "blob-b",
    numeral: "text-spice-turmeric",
  },
  {
    tile: "bg-spice-chili text-spice-cream",
    blob: "blob-c",
    numeral: "text-spice-turmeric",
  },
  {
    tile: "bg-spice-terracotta text-spice-cream",
    blob: "blob-d",
    numeral: "text-spice-turmeric",
  },
] as const;

export function StepsCollage({
  steps,
  className,
}: {
  steps: readonly Step[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "grid items-start gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5",
        className
      )}
    >
      {steps.map((step, index) => {
        const look = looks[index % looks.length];

        return (
          <Reveal as="li" key={step.title} variant="scale" delay={index * 0.14}>
            {/* rest={0} keeps the tile upright; hover still lifts and scales. */}
            <Tilt rest={0} lift={8}>
              <div className="flex flex-col items-start">
                {/* Organic colour tile carrying the icon + handwritten numeral */}
                <div
                  className={cn(
                    "relative grid size-28 shrink-0 place-items-center border-4 border-spice-ink shadow-stamp",
                    look.blob,
                    look.tile
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="bg-paper absolute inset-0 opacity-20 mix-blend-multiply"
                    style={{ borderRadius: "inherit" }}
                  />
                  <Icon name={step.icon} className="relative size-11" />

                  <span
                    aria-hidden="true"
                    className={cn(
                      "font-marker absolute -top-4 -right-3 text-5xl leading-none font-bold",
                      look.numeral
                    )}
                  >
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-spice mt-6 text-2xl font-bold text-spice-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-spice-ink/75">
                  {step.description}
                </p>
              </div>
            </Tilt>
          </Reveal>
        );
      })}
    </ol>
  );
}
