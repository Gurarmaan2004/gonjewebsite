import type { Metadata } from "next";
import { data } from "@/content/services";
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
  title: "Data as a Service",
  description: data.intro.lead,
};

export default function DataServicePage() {
  return (
    <>
      <PageHero intro={data.intro} highlight="Origin 360 Business Fleet" />

      <Section>
        <p className="text-sm font-bold tracking-wide text-spice-ink/50 uppercase">
          Fleet partner
        </p>
        <div className="mt-4 max-w-xs">
          <LogoSlot name={data.fleetPartner} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Plans"
          title="Two ways to get on the road"
          lead="Both plans are a Gonje vendor/supplier benefit — for staff vehicles or for fulfilling your own deliveries."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {data.plans.map((plan) => (
            <li key={plan.name}>
              <Card className="h-full">
                <h3 className="font-display text-xl text-spice-ink">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
                  {plan.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {data.benefits.map((benefit, index) => (
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
            title={data.closingCta.title}
            lead={data.closingCta.lead}
          />
          <Card className="mt-8">
            <ContactForm subjectPrefix="DaaS enquiry" />
          </Card>
        </div>
      </Section>
    </>
  );
}
