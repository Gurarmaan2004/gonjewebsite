import type { Step } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Tilt } from "@/components/ui/tilt";
import { cn } from "@/lib/utils";

/**
 * Spice Pantry step collage (DESIGN.md §8).
 *
 * Deliberately NOT the equal-width card grid this replaces:
 *  - each step is a different spice colour, size and resting rotation
 *  - the row is vertically staggered, so nothing lines up on a baseline
 *  - numerals are large and handwritten, not faint grey counters
 *  - tiles are organic blobs with an ink outline and a hard offset shadow
 *
 * The separate `steps.tsx` grid is untouched and still serves /how-it-works,
 * so this direction stays scoped to the home page until it's approved.
 */

const looks = [
  {
    tile: "bg-spice-turmeric text-spice-ink",
    blob: "blob-a",
    rest: -3,
    offset: "lg:translate-y-0",
    numeral: "text-spice-chili",
  },
  {
    tile: "bg-spice-green text-spice-cream",
    blob: "blob-b",
    rest: 4,
    offset: "lg:translate-y-12",
    numeral: "text-spice-turmeric",
  },
  {
    tile: "bg-spice-chili text-spice-cream",
    blob: "blob-c",
    rest: -5,
    offset: "lg:translate-y-4",
    numeral: "text-spice-turmeric",
  },
  {
    tile: "bg-spice-terracotta text-spice-cream",
    blob: "blob-d",
    rest: 3,
    offset: "lg:translate-y-16",
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
        "grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5",
        className
      )}
    >
      {steps.map((step, index) => {
        const look = looks[index % looks.length];

        return (
          <Reveal
            as="li"
            key={step.title}
            variant="scale"
            delay={index * 0.14}
            className={look.offset}
          >
            <Tilt rest={look.rest} lift={8}>
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
