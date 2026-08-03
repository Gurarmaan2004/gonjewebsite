import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Cta } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/** Reusable closing call-to-action, used at the foot of the inner pages. */
export function CtaBand({
  title,
  lead,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  lead: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <Section tone="brandStrong" size="sm" grain>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl text-balance text-spice-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-pretty text-spice-ink/85">
            {lead}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="shrink-0">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={primaryCta.href}
              external={primaryCta.external}
              size="lg"
            >
              {primaryCta.label}
              {primaryCta.external ? (
                <ArrowUpRight className="size-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="size-4" aria-hidden="true" />
              )}
            </Button>

            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                external={secondaryCta.external}
                variant="outline"
                size="lg"
                className="border-spice-ink/25 hover:bg-spice-turmeric/20"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
