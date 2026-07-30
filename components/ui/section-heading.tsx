import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Eyebrow + heading + lead, set to the type scale in DESIGN.md §3 so every
 * section opens the same way. `tone="inverse"` is for use on `ink` sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const inverse = tone === "inverse";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.14em]",
            inverse ? "text-brand-300" : "text-accent-700"
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          "font-display mt-3 text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl",
          inverse ? "text-ink-50" : "text-ink-950"
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty sm:text-xl",
            inverse ? "text-ink-300" : "text-ink-700"
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
