import type { Metadata } from "next";
import { Check } from "lucide-react";
import { benefits, cta, intro, plan } from "@/content/influencers";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Influencers",
  description: intro.lead,
};

export default function InfluencersPage() {
  return (
    <>
      <PageHero intro={intro} highlight="own storefront" />

      <Section>
        <SectionHeading
          eyebrow="Why it's different"
          title="Built on real vendors, not a dropship catalogue"
          lead="An influencer storefront curates real Gonje vendor products — Gonje still handles fulfilment, payments and delivery behind it."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={index * 0.12}>
              <span
                className={cn(
                  "grid size-14 place-items-center border-2 shadow-stamp-sm",
                  index % 2 === 0 ? "blob-a" : "blob-c",
                  produceAccent(index).tile,
                )}
              >
                <Icon name={benefit.icon} className="size-7" />
              </span>
              <h3 className="font-display mt-4 text-xl text-spice-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow={plan.eyebrow} title={plan.title} lead={plan.lead} align="center" />

        <Reveal variant="scale" delay={0.1}>
          <Card className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-spice-ink/15 pb-6">
              <p className="font-display text-lg text-spice-ink">{plan.fee.label}</p>
              <p className="font-display text-4xl text-spice-ink">{plan.fee.value}</p>
            </div>
            <p className="mt-3 text-sm text-spice-ink/65">{plan.fee.note}</p>

            <ul className="mt-6 space-y-4 border-t border-spice-ink/15 pt-6">
              {plan.points.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-spice-turmeric/20">
                    <Check className="size-3.5 text-spice-green" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-semibold text-spice-ink">{point.title}</span>
                    <span className="text-spice-ink/75"> — {point.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      <CtaBand title={cta.title} lead={cta.lead} primaryCta={cta.primaryCta} />
    </>
  );
}
