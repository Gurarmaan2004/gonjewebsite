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
      {/* Handwritten kicker, not a pill badge — see DESIGN.md §8. */}
      {eyebrow ? (
        <p
          className={cn(
            "font-marker text-2xl sm:text-3xl",
            inverse ? "text-spice-turmeric" : "text-spice-terracotta",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          "font-display mt-1 text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          inverse ? "text-spice-cream" : "text-spice-ink",
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty sm:text-xl",
            inverse ? "text-spice-cream/75" : "text-spice-ink/75",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
