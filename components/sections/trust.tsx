import { trust } from "@/content/home";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Trust() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow={trust.eyebrow}
          title={trust.title}
          lead={trust.lead}
        />

        <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {trust.features.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={index * 0.06}>
              <span className="grid size-11 place-items-center rounded-xl border border-accent-200 bg-accent-50 text-accent-700">
                <Icon name={feature.icon} className="size-5" />
              </span>
              <h3 className="font-display mt-4 text-xl text-ink-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
