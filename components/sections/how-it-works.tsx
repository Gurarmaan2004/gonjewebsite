import { ArrowRight } from "lucide-react";
import { howItWorks } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Steps } from "./steps";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="leaf" pattern>
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        lead={howItWorks.lead}
      />

      <Steps steps={howItWorks.steps} className="mt-12" />

      <Reveal delay={0.1}>
        <div className="mt-10">
          <Button href={howItWorks.cta.href} variant="outline">
            {howItWorks.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
