import { cn } from "@/lib/utils";

type CardTone = "default" | "brand" | "ink" | "outline";

const tones: Record<CardTone, string> = {
  default: "border-spice-ink/85 bg-spice-cream shadow-stamp-sm",
  brand: "border-spice-ink/85 bg-spice-cream shadow-stamp-sm",
  ink: "border-spice-cream/30 bg-spice-green text-spice-cream",
  outline: "border-spice-ink/30 bg-transparent",
};

/**
 * The card surface used across every section. Rounded hard and given a 2px
 * border so cards read as friendly "stickers" rather than as a spec sheet —
 * see DESIGN.md §4.
 *
 * `tone="brand"` is a white card sat on a brand-toned section; `tone="ink"` is
 * for inverted sections. `interactive` adds the hover lift for linked cards.
 */
export function Card({
  tone = "default",
  interactive = false,
  as: Component = "div",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  tone?: CardTone;
  interactive?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Component
      className={cn(
        "shape-card border-2 p-6 sm:p-7",
        tones[tone],
        interactive &&
          "transition-[box-shadow,transform] duration-200 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-stamp",
        className,
      )}
      {...props}
    />
  );
}
