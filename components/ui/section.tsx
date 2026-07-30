import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionSize = "sm" | "md" | "lg";
type SectionTone =
  "default" | "muted" | "brand" | "brandStrong" | "ink" | "leaf";

const sizes: Record<SectionSize, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

const tones: Record<SectionTone, string> = {
  default: "bg-ink-50 text-ink-950",
  muted: "bg-ink-100 text-ink-950",
  brand: "bg-brand-100 text-ink-950",
  brandStrong: "bg-brand-200 text-ink-950",
  ink: "bg-ink-950 text-ink-50",
  leaf: "bg-accent-50 text-ink-950",
};

/**
 * Owns all vertical rhythm on the site. Alternate `tone` between adjacent
 * sections so pages read as bands rather than one undifferentiated scroll.
 */
export function Section({
  size = "md",
  tone = "default",
  grain = false,
  pattern = false,
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  size?: SectionSize;
  tone?: SectionTone;
  /** Adds the paper-grain overlay. Only worth it on `brand*` and `ink` tones. */
  grain?: boolean;
  /**
   * Tiles the line-art produce pattern behind the content. Held at low opacity
   * so body copy sitting directly on it keeps its contrast — the pattern is
   * texture, not an illustration.
   */
  pattern?: boolean;
  containerClassName?: string;
}) {
  return (
    <section
      className={cn("relative isolate", sizes[size], tones[tone], className)}
      {...props}
    >
      {pattern ? (
        <div
          aria-hidden="true"
          className="bg-produce pointer-events-none absolute inset-0 -z-10 opacity-35"
        />
      ) : null}

      {grain ? (
        <div
          aria-hidden="true"
          className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-multiply"
        />
      ) : null}

      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
