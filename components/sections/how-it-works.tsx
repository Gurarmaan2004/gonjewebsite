import { ArrowRight } from "lucide-react";
import { howItWorks } from "@/content/home";
import { Container } from "@/components/ui/container";
import { MarkerCircle } from "@/components/ui/marker";
import { Reveal } from "@/components/ui/reveal";
import { StampButton } from "@/components/ui/stamp-button";
import { StepsCollage } from "./steps-collage";

/**
 * Spice Pantry "How it works" (DESIGN.md §8).
 *
 * The section no longer uses <Section>, because that component's job is a flat
 * tonal band — the thing this direction is moving away from. The ground here is
 * layered instead: cream-deep base, paper fibre, produce tile, and a torn
 * turmeric edge where it meets the hero above.
 */
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-spice-cream-deep py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-paper pointer-events-none absolute inset-0 -z-20 opacity-30 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="bg-produce pointer-events-none absolute inset-0 -z-20 opacity-[0.10]"
      />
      {/* Torn top edge, so the band doesn't butt against the hero as a hard rule. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-6 bg-spice-turmeric"
        style={{
          clipPath:
            "polygon(0 0,100% 0,100% 40%,92% 100%,78% 45%,61% 100%,44% 50%,29% 100%,14% 48%,0 95%)",
        }}
      />

      <Container>
        <div className="max-w-2xl">
          <Reveal variant="left">
            <p className="font-marker text-2xl text-spice-terracotta sm:text-3xl">
              {howItWorks.kicker}
            </p>
          </Reveal>

          <Reveal delay={0.12} variant="left">
            <h2 className="font-spice mt-1 text-4xl font-bold text-balance text-spice-ink sm:text-5xl">
              {howItWorks.title}
            </h2>
          </Reveal>

          <Reveal delay={0.24} variant="left">
            <p className="mt-4 text-lg leading-relaxed text-pretty text-spice-ink/75 sm:text-xl">
              {howItWorks.lead}
            </p>
          </Reveal>
        </div>

        <StepsCollage steps={howItWorks.steps} className="mt-16" />

        <Reveal delay={0.2} className="mt-20 lg:mt-28">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <StampButton href={howItWorks.cta.href} variant="green">
              {howItWorks.cta.label}
              <ArrowRight className="size-5" aria-hidden="true" />
            </StampButton>

            <p className="font-marker text-xl text-spice-ink/70">
              <MarkerCircle delay={0.5}>no app to download</MarkerCircle>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
