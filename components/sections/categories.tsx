import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";
import boxSrc from "@/public/grocery-1.webp";

/**
 * A visual snapshot, not a catalogue (CLAUDE.md §6.3). The Gonje box sits
 * opposite the category cards: it shows what an order actually looks like
 * without claiming any specific vendor or product range.
 */
export function Categories() {
  return (
    <Section tone="muted">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={categories.eyebrow}
          title={categories.title}
          lead={categories.lead}
          className="max-w-xl"
        />

        <Reveal delay={0.1} className="shrink-0">
          <Button
            href={categories.cta.href}
            external={categories.cta.external}
            variant="outline"
          >
            {categories.cta.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
        {/* Transparent cutout — sits straight on the section tone, no frame. */}
        <Reveal variant="left" duration={1}>
          <Image
            src={boxSrc}
            alt="A Gonje delivery box packed with fresh vegetables, fruit, bread, dairy and meat."
            sizes="(min-width: 1024px) 34rem, 90vw"
            className="mx-auto w-full max-w-lg lg:max-w-none"
          />
        </Reveal>

        <ul className="grid gap-5">
          {categories.items.map((category, index) => (
            <Reveal as="li" variant="right" key={category.name} delay={index * 0.14}>
              <Card className="h-full">
                <h3 className="font-display text-2xl text-ink-950">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {category.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 border-t-2 border-ink-100 pt-5">
                  {category.examples.map((example, exampleIndex) => (
                    <li
                      key={example}
                      className={cn(
                        "rounded-full border-2 px-3 py-1 text-xs font-bold",
                        produceAccent(exampleIndex).pill,
                      )}
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
