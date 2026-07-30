import { cn } from "@/lib/utils";

type BadgeTone =
  | "neutral"
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "info"
  | "tomato"
  | "mango"
  | "berry";

const tones: Record<BadgeTone, string> = {
  neutral: "border-ink-300 bg-ink-100 text-ink-800",
  brand: "border-brand-400 bg-brand-200 text-brand-900",
  accent: "border-accent-300 bg-accent-100 text-accent-800",
  success: "border-success-border bg-success-surface text-success",
  warning: "border-warning-border bg-warning-surface text-warning",
  info: "border-info-border bg-info-surface text-info",
  tomato: "border-tomato-border bg-tomato-surface text-tomato",
  mango: "border-mango-border bg-mango-surface text-mango",
  berry: "border-berry-border bg-berry-surface text-berry",
};

export function Badge({
  tone = "neutral",
  dot = false,
  className,
  children,
  ...props
}: React.ComponentProps<"span"> & {
  tone?: BadgeTone;
  /** Adds the pulsing status dot used for "delivering now" style messaging. */
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1 text-xs font-bold",
        tones[tone],
        className,
      )}
      {...props}
    >
      {dot ? (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
