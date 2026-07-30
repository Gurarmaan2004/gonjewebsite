import { cn } from "@/lib/utils";

type CardTone = "default" | "brand" | "ink" | "outline";

const tones: Record<CardTone, string> = {
  default: "border-ink-200 bg-white shadow-soft",
  brand: "border-brand-300 bg-white",
  ink: "border-ink-800 bg-ink-900 text-ink-100",
  outline: "border-ink-200 bg-transparent",
};

/**
 * The card surface used across every section. Cards are defined by their
 * border first and their shadow second — see DESIGN.md §4.
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
        "rounded-2xl border p-6 sm:p-7",
        tones[tone],
        interactive &&
          "transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lift",
        className
      )}
      {...props}
    />
  );
}
