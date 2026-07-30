import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { vendorCta } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/**
 * Vendor recruitment as a first-class section on the home page, not a footer
 * link (CLAUDE.md §2). Inverted tone so it reads as its own destination.
 */
export function VendorCta() {
  return (
    <Section tone="ink" grain>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={vendorCta.eyebrow}
            title={vendorCta.title}
            lead={vendorCta.lead}
            tone="inverse"
          />

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={vendorCta.primaryCta.href}
                variant="inverse"
                size="lg"
              >
                {vendorCta.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={vendorCta.secondaryCta.href}
                external={vendorCta.secondaryCta.external}
                variant="outlineInverse"
                size="lg"
              >
                {vendorCta.secondaryCta.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <Card as="ul" tone="ink" className="space-y-4">
            {vendorCta.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-400/15">
                  <Check
                    className="size-3.5 text-accent-400"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-base text-ink-100">{point}</span>
              </li>
            ))}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
