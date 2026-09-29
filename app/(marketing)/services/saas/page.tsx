import type { Metadata } from "next";
import { saas } from "@/content/services";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Software as a Service",
  description: saas.intro.lead,
};

export default function SaasServicePage() {
  return (
    <>
      <PageHero intro={saas.intro} highlight="for your business" />

      <Section>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {saas.capabilities.map((capability, index) => (
            <Reveal as="li" key={capability.title} delay={index * 0.08}>
              <span
                className={cn(
                  "grid size-14 place-items-center border-2 shadow-stamp-sm",
                  index % 2 === 0 ? "blob-a" : "blob-c",
                  produceAccent(index).tile,
                )}
              >
                <Icon name={capability.icon} className="size-7" />
              </span>
              <h3 className="font-display mt-4 text-xl text-spice-ink">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
                {capability.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-xl">
          <SectionHeading
            eyebrow="Get in touch"
            title={saas.closingCta.title}
            lead={saas.closingCta.lead}
          />
          <Card className="mt-8">
            <ContactForm subjectPrefix="SaaS enquiry" />
          </Card>
        </div>
      </Section>
    </>
  );
}
