import type { Metadata } from "next";
import { Check } from "lucide-react";
import { energy } from "@/content/services";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { LogoSlot } from "@/components/ui/logo-slot";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Energy as a Service",
  description: energy.intro.lead,
};

export default function EnergyServicePage() {
  return (
    <>
      <PageHero intro={energy.intro} highlight="ESQ Energy" />

      <Section>
        <p className="text-sm font-bold tracking-wide text-spice-ink/50 uppercase">
          In partnership with
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {energy.partners.map((partner) => (
            <li key={partner}>
              <LogoSlot name={partner} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <SectionHeading
            eyebrow={energy.evCharging.eyebrow}
            title={energy.evCharging.title}
            lead={energy.evCharging.lead}
          />

          <Reveal delay={0.12}>
            <Card>
              <ul className="space-y-3">
                {energy.evCharging.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-spice-green"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-spice-ink/85">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-spice-ink/15 pt-5">
                <p className="flex items-start gap-2 text-sm text-spice-ink/65">
                  <Badge tone="warning" className="shrink-0">TBC</Badge>
                  {energy.evCharging.note}
                </p>
                <p className="text-sm font-semibold text-spice-ink/70">
                  {energy.evCharging.pricing}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={energy.audiences.eyebrow}
          title={energy.audiences.title}
          lead={energy.audiences.lead}
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {energy.audiences.items.map((audience) => (
            <li
              key={audience}
              className="shape-tag border-2 border-spice-ink/25 bg-spice-cream px-4 py-2 text-sm font-bold text-spice-ink"
            >
              {audience}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {energy.benefits.map((benefit, index) => (
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

      <Section>
        <div className="mx-auto max-w-xl">
          <SectionHeading
            eyebrow="Get in touch"
            title={energy.closingCta.title}
            lead={energy.closingCta.lead}
          />
          <Card className="mt-8">
            <ContactForm subjectPrefix="EaaS enquiry" />
          </Card>
        </div>
      </Section>
    </>
  );
}
