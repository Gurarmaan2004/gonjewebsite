import type { PageIntro } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Shared masthead for the inner marketing pages. */
export function PageHero({
  intro,
  children,
  aside,
}: {
  intro: PageIntro;
  /** Optional CTA row or supporting content below the lead. */
  children?: React.ReactNode;
  /** Optional panel alongside the intro — switches the masthead to two columns. */
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-300 bg-brand-100">
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-15 mix-blend-multiply"
      />

      <Container
        className={cn(
          "py-14 sm:py-20 lg:py-24",
          aside && "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        )}
      >
        <div>
          <Reveal className={cn(!aside && "max-w-3xl")}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
              {intro.eyebrow}
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[1.08] text-balance text-ink-950 sm:text-5xl lg:text-6xl">
              {intro.title}
            </h1>
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed text-pretty text-ink-800 sm:text-xl",
                !aside && "max-w-2xl"
              )}
            >
              {intro.lead}
            </p>
          </Reveal>

          {children ? <Reveal delay={0.1}>{children}</Reveal> : null}
        </div>

        {aside ? (
          <Reveal delay={0.16} className="lg:justify-self-end">
            {aside}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
