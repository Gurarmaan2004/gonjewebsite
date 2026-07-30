import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Eyebrow + heading + lead, set to the type scale in DESIGN.md §3 so every
 * section opens the same way.
 *
 * The eyebrow is a coloured pill rather than the small uppercase letter-spaced
 * label it used to be — that treatment is the most corporate-reading detail in
 * a marketing layout. `tone="inverse"` is for use on `ink` sections.
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
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "inline-flex rounded-full border-2 px-3.5 py-1 text-sm font-bold",
            inverse
              ? "border-accent-400/40 bg-accent-400/15 text-accent-300"
              : "border-accent-300 bg-accent-100 text-accent-800",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          "font-display mt-4 text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          inverse ? "text-ink-50" : "text-ink-950",
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty sm:text-xl",
            inverse ? "text-ink-300" : "text-ink-700",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
