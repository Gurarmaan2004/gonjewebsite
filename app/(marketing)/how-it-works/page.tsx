import type { Metadata } from "next";
import {
  closingCta,
  help,
  intro,
  payment,
  steps,
  timing,
} from "@/content/how-it-works";
import { CtaBand } from "@/components/sections/cta-band";
import { DeliveryWindows } from "@/components/sections/delivery-windows";
import { PageHero } from "@/components/sections/page-hero";
import { StepsCollage } from "@/components/sections/steps-collage";
import { Card } from "@/components/ui/card";
import { Tilt } from "@/components/ui/tilt";
import { TornEdge } from "@/components/ui/torn-edge";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How it works",
  description: intro.lead,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        intro={intro}
        aside={<DeliveryWindows />}
        highlight="to your door"
      />

      <Section>
        <SectionHeading
          eyebrow="The steps"
          title="Ordering, start to finish"
          lead="Four steps on the marketplace. Nothing to install."
        />
        <StepsCollage steps={steps} className="mt-16" />
      </Section>

      <Section tone="muted" className="overflow-hidden">
        <TornEdge position="top" tone="cream" />
        <TornEdge position="bottom" tone="cream" />
        <SectionHeading
          eyebrow={timing.eyebrow}
          title={timing.title}
          lead={timing.lead}
        />

        <Reveal delay={0.1}>
          <dl className="mt-10 divide-y divide-spice-ink/15 border-y border-spice-ink/15">
            {timing.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <dt className="font-display text-lg text-spice-ink">
                  {row.label}
                </dt>
                <dd className="sm:text-right">
                  <span className="block font-semibold text-spice-green">
                    {row.value}
                  </span>
                  <span className="block text-sm text-spice-ink/65">
                    {row.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={payment.eyebrow}
          title={payment.title}
          lead={payment.lead}
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {payment.groups.map((group, index) => (
            <Reveal
              as="li"
              variant="scale"
              key={group.heading}
              delay={index * 0.12}
            >
              <Tilt rest={index % 2 === 0 ? -2 : 2} lift={8}>
                <Card className="h-full">
                  <h3 className="font-sans text-xs font-bold uppercase tracking-wide text-spice-ink/55">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-spice-ink/85">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Tilt>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Good to know"
          title="Delivery, changes and refunds"
        />

        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {help.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.12}>
              <span
                className={cn(
                  "grid size-14 place-items-center border-2 shadow-stamp-sm",
                  index % 2 === 0 ? "blob-b" : "blob-c",
                  produceAccent(index).tile,
                )}
              >
                <Icon name={item.icon} className="size-7" />
              </span>
              <h3 className="font-display mt-4 text-xl text-spice-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={closingCta.title}
        lead={closingCta.lead}
        primaryCta={closingCta.cta}
      />
    </>
  );
}
