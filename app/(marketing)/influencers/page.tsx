import type { Metadata } from "next";
import { benefits, intro, status } from "@/content/influencers";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Badge } from "@/components/ui/badge";
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
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <Badge tone="warning">{status.title}</Badge>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-spice-ink/75">
            {status.lead}
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title="Want to be first in?"
        lead="Leave your details and we'll reach out as soon as influencer storefronts open."
        primaryCta={status.cta}
      />
    </>
  );
}
