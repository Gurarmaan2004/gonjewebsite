import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/content/home";
import { Container } from "@/components/ui/container";
import { MarkerSwipe } from "@/components/ui/marker";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { Reveal } from "@/components/ui/reveal";
import { StampButton } from "@/components/ui/stamp-button";
import { Tilt } from "@/components/ui/tilt";
import boxSrc from "@/public/grocery-1.webp";

/**
 * Spice Pantry hero (DESIGN.md §8).
 *
 * Structural departures from the previous version:
 *  - Layered colour fields (cream / turmeric / green) instead of one pastel wash
 *  - Asymmetric photo collage: three overlapping tilted frames, not a single
 *    centred illustration
 *  - Organic shapes, ink outlines and hard offset shadows instead of soft
 *    rounded-rectangle cards
 *  - Handwritten kicker + marker swipe instead of a pill badge
 *
 * grocery-2.webp (the flat vector basket with radiating lines) is deliberately
 * no longer used here — it is the exact illustration style being moved away from.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-spice-cream">
      {/* Layered ground: paper fibre, a turmeric field on an organic curve, a
          produce-tile blob, and a deep-green strip anchoring the bottom edge. */}
      <div
        aria-hidden="true"
        className="bg-paper pointer-events-none absolute inset-0 -z-30 opacity-[0.28] mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="blob-b pointer-events-none absolute -top-40 -right-32 -z-20 hidden size-[46rem] bg-spice-turmeric/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="bg-produce blob-c pointer-events-none absolute -bottom-24 -left-40 -z-20 size-[34rem] rotate-12 opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-10 bg-spice-green"
      />

      <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-28">
        <div>
          <Reveal variant="left">
            <p className="font-marker text-2xl text-spice-terracotta sm:text-3xl">
              {hero.kicker}
            </p>
          </Reveal>

          <Reveal delay={0.12} variant="left">
            <h1 className="font-spice mt-2 text-[2.5rem] leading-[1.06] font-bold text-balance text-spice-ink sm:text-[3.4rem] lg:text-[3.7rem]">
              {hero.title}{" "}
              <MarkerSwipe color="turmeric" delay={0.65}>
                {hero.titleHighlight}
              </MarkerSwipe>
            </h1>
          </Reveal>

          <Reveal delay={0.24} variant="left">
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-spice-ink/80 sm:text-xl">
              {hero.lead}
            </p>
          </Reveal>

          <Reveal delay={0.36} variant="left">
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <StampButton
                href={hero.primaryCta.href}
                external={hero.primaryCta.external}
                variant="chili"
                size="lg"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </StampButton>
              <StampButton
                href={hero.secondaryCta.href}
                variant="cream"
                size="lg"
              >
                {hero.secondaryCta.label}
              </StampButton>
            </div>
          </Reveal>

          {/* Proof points as a handwritten strip, not a row of corporate ticks. */}
          <Reveal delay={0.48} variant="left">
            <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              {hero.proofPoints.map((point, index) => (
                <li
                  key={point}
                  className="font-marker flex items-center gap-4 text-xl text-spice-green"
                >
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="text-spice-terracotta/60"
                    >
                      ✳
                    </span>
                  ) : null}
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Collage: a filled organic "plate", the real box cutout floating over
            it, and two textured slots waiting on real photography.

            The box is NOT inside a PhotoSlot frame: grocery-1.webp is a
            transparent cutout, so an outlined frame traced an empty shape
            around it and read as broken. It sits loose on the plate instead. */}
        <Reveal variant="scale" delay={0.3} duration={1}>
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
            <div
              aria-hidden="true"
              className="blob-a absolute inset-[6%] border-4 border-spice-ink bg-spice-turmeric shadow-stamp"
            >
              <div
                className="bg-produce absolute inset-0 opacity-30 mix-blend-multiply"
                style={{ borderRadius: "inherit" }}
              />
            </div>

            <Tilt rest={-4} className="absolute inset-x-[4%] top-[10%] bottom-[8%]">
              <Image
                src={boxSrc}
                alt="A Gonje delivery box packed with fresh vegetables, fruit, bread, dairy and meat."
                sizes="(min-width: 1024px) 28rem, 85vw"
                priority
                className="size-full object-contain drop-shadow-[6px_8px_0_rgba(42,29,20,0.18)]"
              />
            </Tilt>

            <Tilt rest={9} className="absolute -bottom-[2%] -left-[4%] size-[38%]">
              <PhotoSlot
                subject="a vendor behind their counter"
                tone="green"
                shape="blob-b"
                className="size-full"
              />
            </Tilt>

            <Tilt rest={-11} className="absolute -top-[2%] -right-[4%] size-[30%]">
              <PhotoSlot
                subject="a cooked dish, close up"
                tone="chili"
                shape="blob-d"
                className="size-full"
              />
            </Tilt>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
