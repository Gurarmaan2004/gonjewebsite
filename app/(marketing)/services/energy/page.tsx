import type { Metadata } from "next";
import { energy } from "@/content/services";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
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

      <Section>
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

      <Section tone="muted">
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
