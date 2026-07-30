import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "brand" | "accent" | "success" | "warning" | "info";

const tones: Record<BadgeTone, string> = {
  neutral: "border-ink-200 bg-ink-100 text-ink-700",
  brand: "border-brand-300 bg-brand-100 text-brand-900",
  accent: "border-accent-200 bg-accent-50 text-accent-700",
  success: "border-success-border bg-success-surface text-success",
  warning: "border-warning-border bg-warning-surface text-warning",
  info: "border-info-border bg-info-surface text-info",
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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
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
