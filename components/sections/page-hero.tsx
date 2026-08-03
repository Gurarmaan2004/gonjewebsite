import type { PageIntro } from "@/content/types";
import { Container } from "@/components/ui/container";
import { MarkerSwipe } from "@/components/ui/marker";
import { Reveal } from "@/components/ui/reveal";
import { TornEdge } from "@/components/ui/torn-edge";
import { cn } from "@/lib/utils";

/**
 * Shared masthead for the inner marketing pages.
 *
 * Given the same layered ground as the home hero (DESIGN.md §8) — paper fibre,
 * a turmeric field on an organic curve, a produce-tile blob and a torn bottom
 * edge — so the inner pages carry the same level of detail rather than sitting
 * on one flat tonal band.
 */
export function PageHero({
  intro,
  children,
  aside,
  /** Optional word or phrase within the title to carry the marker swipe. */
  highlight,
}: {
  intro: PageIntro;
  /** Optional CTA row or supporting content below the lead. */
  children?: React.ReactNode;
  /** Optional panel alongside the intro — switches the masthead to two columns. */
  aside?: React.ReactNode;
  highlight?: string;
}) {
  /* Split around the highlight so the swipe lands on real words, rather than
     forcing /content to pre-chop every title into fragments. */
  const at = highlight ? intro.title.indexOf(highlight) : -1;
  const before = at === -1 ? intro.title : intro.title.slice(0, at);
  const after =
    at === -1 || !highlight ? "" : intro.title.slice(at + highlight.length);

  return (
    <section className="relative isolate overflow-hidden bg-spice-cream-deep">
      <div
        aria-hidden="true"
        className="bg-paper pointer-events-none absolute inset-0 -z-30 opacity-25 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="blob-b pointer-events-none absolute -top-48 -right-40 -z-20 hidden size-[42rem] bg-spice-turmeric/30 lg:block"
      />
      <div
        aria-hidden="true"
        className="bg-produce blob-c pointer-events-none absolute -bottom-32 -left-44 -z-20 size-[30rem] rotate-12 opacity-25"
      />
      <TornEdge position="bottom" tone="cream" />

      <Container
        className={cn(
          "py-14 sm:py-20 lg:py-24",
          aside &&
            "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        )}
      >
        <div>
          <Reveal variant="left" className={cn(!aside && "max-w-3xl")}>
            <p className="font-marker text-2xl text-spice-terracotta sm:text-3xl">
              {intro.eyebrow}
            </p>
            <h1 className="font-display mt-1 text-4xl leading-[1.08] text-balance text-spice-ink sm:text-5xl lg:text-6xl">
              {at === -1 || !highlight ? (
                intro.title
              ) : (
                <>
                  {before}
                  <MarkerSwipe color="turmeric" delay={0.5}>
                    {highlight}
                  </MarkerSwipe>
                  {after}
                </>
              )}
            </h1>
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed text-pretty text-spice-ink/85 sm:text-xl",
                !aside && "max-w-2xl"
              )}
            >
              {intro.lead}
            </p>
          </Reveal>

          {children ? (
            <Reveal delay={0.16} variant="left">
              {children}
            </Reveal>
          ) : null}
        </div>

        {aside ? (
          <Reveal delay={0.24} variant="scale" className="lg:justify-self-end">
            {aside}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
