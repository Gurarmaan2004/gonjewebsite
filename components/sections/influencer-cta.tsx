import { ArrowRight } from "lucide-react";
import { influencerCta } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/**
 * Teaser for the upcoming influencer storefront feature — a distinct section
 * rather than a footnote, since it's a real forthcoming product surface
 * (per review feedback), even though it isn't live on the marketplace yet.
 */
export function InfluencerCta() {
  return (
    <Section tone="brand">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-xl">
          <Badge tone="warning">{influencerCta.eyebrow}</Badge>
          <h2 className="font-display mt-3 text-3xl text-balance text-spice-ink sm:text-4xl">
            {influencerCta.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-pretty text-spice-ink/75">
            {influencerCta.lead}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="shrink-0">
          <Button href={influencerCta.cta.href} size="lg">
            {influencerCta.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
