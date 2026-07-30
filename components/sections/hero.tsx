import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { hero } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import basketSrc from "@/public/grocery-2.webp";

/**
 * Full-bleed butter wash — the brand colour used as a surface rather than as a
 * button fill (DESIGN.md §1). The basket illustration is a transparent PNG-style
 * cutout, so it sits directly on the wash with no card or frame around it.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-300 bg-brand-200">
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
      />

      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <Badge tone="brand" className="border-brand-400/70 bg-brand-100/80">
              {hero.eyebrow}
            </Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 text-4xl leading-[1.05] text-balance text-ink-950 sm:text-5xl lg:text-6xl">
              {hero.title}{" "}
              <span className="underline-brush">{hero.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-800 sm:text-xl">
              {hero.lead}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={hero.primaryCta.href}
                external={hero.primaryCta.external}
                size="lg"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-ink-950/25 hover:bg-brand-100"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {hero.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-ink-800"
                >
                  <Check className="size-4 text-accent-600" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:justify-self-end">
          <Image
            src={basketSrc}
            alt="An illustrated shopping basket filled with fresh produce, bread and groceries."
            priority
            sizes="(min-width: 1024px) 34rem, (min-width: 640px) 26rem, 80vw"
            className="mx-auto w-full max-w-[20rem] sm:max-w-md lg:max-w-[34rem]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
