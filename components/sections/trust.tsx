import { trust } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <Section tone="leaf" pattern>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow={trust.eyebrow}
          title={trust.title}
          lead={trust.lead}
          tone="inverse"
        />

        {/* Cards rather than bare text, so the features stay readable on the
            patterned background. */}
        <ul className="grid gap-5 sm:grid-cols-2">
          {trust.features.map((feature, index) => (
            <Reveal as="li" variant="scale" key={feature.title} delay={index * 0.12}>
              <Card className="h-full">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl border-2",
                    produceAccent(index).tile,
                  )}
                >
                  <Icon name={feature.icon} className="size-6" />
                </span>
                <h3 className="font-display mt-4 text-xl text-spice-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-spice-ink/75">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
