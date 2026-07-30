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
import { Steps } from "@/components/sections/steps";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "How it works",
  description: intro.lead,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero intro={intro} aside={<DeliveryWindows />} />

      <Section>
        <SectionHeading
          eyebrow="The steps"
          title="Ordering, start to finish"
          lead="Four steps on the marketplace. Nothing to install."
        />
        <Steps steps={steps} className="mt-12" />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={timing.eyebrow}
          title={timing.title}
          lead={timing.lead}
        />

        <Reveal delay={0.1}>
          <dl className="mt-10 divide-y divide-ink-200 border-y border-ink-200">
            {timing.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <dt className="font-display text-lg text-ink-950">{row.label}</dt>
                <dd className="sm:text-right">
                  <span className="block font-semibold text-accent-700">
                    {row.value}
                  </span>
                  <span className="block text-sm text-ink-600">{row.note}</span>
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
            <Reveal as="li" key={group.heading} delay={index * 0.06}>
              <Card className="h-full">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-800">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
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
            <Reveal as="li" key={item.title} delay={index * 0.06}>
              <span className="grid size-11 place-items-center rounded-xl border border-accent-200 bg-accent-50 text-accent-700">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="font-display mt-4 text-xl text-ink-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
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
