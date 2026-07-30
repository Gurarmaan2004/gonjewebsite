import { cn } from "@/lib/utils";

type CardTone = "default" | "brand" | "ink" | "outline";

const tones: Record<CardTone, string> = {
  default: "border-ink-950/10 bg-white shadow-soft",
  brand: "border-brand-300 bg-white shadow-soft",
  ink: "border-ink-800 bg-ink-900 text-ink-100",
  outline: "border-ink-200 bg-transparent",
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
        "rounded-3xl border-2 p-6 sm:p-7",
        tones[tone],
        interactive &&
          "transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-accent-400 hover:shadow-lift",
        className,
      )}
      {...props}
    />
  );
}
