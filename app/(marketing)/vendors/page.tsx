import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import {
  benefits,
  closingCta,
  included,
  intro,
  introCtas,
  plans,
  steps,
} from "@/content/vendors";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sell on Gonje",
  description: intro.lead,
};

export default function VendorsPage() {
  return (
    <>
      <PageHero intro={intro}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={introCtas.primary.href}
            external={introCtas.primary.external}
            size="lg"
          >
            {introCtas.primary.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
          <Button
            href={introCtas.secondary.href}
            variant="outline"
            size="lg"
            className="border-ink-950/25 hover:bg-brand-200"
          >
            {introCtas.secondary.label}
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Why sell here"
          title="What you get on day one"
          lead="Gonje handles the parts of online retail that are expensive to build and boring to run."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={index * 0.12}>
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-2xl border-2",
                  produceAccent(index).tile,
                )}
              >
                <Icon name={benefit.icon} className="size-6" />
              </span>
              <h3 className="font-display mt-4 text-xl text-ink-950">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Pricing — figures are published on the marketplace vendor application */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={plans.eyebrow}
          title={plans.title}
          lead={plans.lead}
          align="center"
        />

        <Reveal delay={0.08}>
          <div className="mt-8 flex justify-center">
            <Badge tone="success" dot>
              {plans.offer.label}
            </Badge>
          </div>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-ink-600">
            {plans.offer.detail}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.items.map((plan, index) => (
            <Reveal as="li" key={plan.name} delay={index * 0.14}>
              <Card
                className={cn(
                  "flex h-full flex-col",
                  /* The featured plan is marked by a heavier border and lift,
                     not by a different fill — DESIGN.md §4. */
                  plan.featured && "border-ink-950 shadow-lift",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink-950">
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <Badge tone="brand">Most popular</Badge>
                  ) : null}
                </div>

                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl text-ink-950">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-600">{plan.period}</span>
                </p>

                <ul className="mt-6 space-y-3 border-t border-ink-200 pt-6 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent-600"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-ink-900">
                      {plan.commission}
                    </span>
                  </li>
                  {plan.warehousing ? (
                    <li className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent-600"
                        aria-hidden="true"
                      />
                      <span className="text-ink-700">{plan.warehousing}</span>
                    </li>
                  ) : null}
                </ul>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-600">
                  {plan.description}
                </p>

                <Button
                  href={closingCta.primaryCta.href}
                  external
                  variant={plan.featured ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Choose {plan.name}
                </Button>
              </Card>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-600">
            {plans.footnote}
          </p>
        </Reveal>
      </Section>

      <Section id="included">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow={included.eyebrow}
            title={included.title}
            lead={included.lead}
          />

          <Reveal delay={0.1}>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {included.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-100">
                    <Check
                      className="size-3.5 text-accent-700"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-base text-ink-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink" grain>
        <SectionHeading
          eyebrow={steps.eyebrow}
          title={steps.title}
          tone="inverse"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.14}>
              <Card tone="ink" className="h-full">
                <span
                  aria-hidden="true"
                  className="font-display text-2xl text-accent-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl text-ink-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {step.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        title={closingCta.title}
        lead={closingCta.lead}
        primaryCta={closingCta.primaryCta}
      />
    </>
  );
}
