import type { Metadata } from "next";
import { closingCta, details, intro, story, values } from "@/content/about";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { ProseLink } from "@/components/ui/prose-link";
import { Tilt } from "@/components/ui/tilt";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: intro.lead,
};

export default function AboutPage() {
  return (
    <>
      <PageHero intro={intro} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={story.eyebrow} title={story.title} />
            {/* Replaced the flat vector figure with a photo slot — that
                illustration style is the one this direction moved away from. */}
            <Reveal delay={0.16} variant="scale">
              <Tilt rest={-3} className="mt-10 w-full max-w-[17rem]">
                <PhotoSlot
                  subject="the team packing an order"
                  tone="turmeric"
                  shape="blob-a"
                  className="aspect-square w-full"
                />
              </Tilt>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              {story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg leading-relaxed text-pretty text-spice-ink/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="brand" grain>
        <SectionHeading
          eyebrow="What we hold to"
          title="How we work"
          align="center"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 0.12}>
              <Card tone="brand" className="h-full">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl border-2",
                    produceAccent(index).tile,
                  )}
                >
                  <Icon name={value.icon} className="size-6" />
                </span>
                <h3 className="font-display mt-4 text-xl text-spice-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={details.eyebrow} title={details.title} />
            <Reveal delay={0.16} variant="scale">
              <Tilt rest={4} className="mt-10 w-full max-w-[17rem]">
                <PhotoSlot
                  subject="the West Footscray shopfront"
                  tone="green"
                  shape="blob-c"
                  className="aspect-square w-full"
                />
              </Tilt>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-spice-ink/15 border-y border-spice-ink/15">
              {details.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-spice-ink/55">
                    {row.label}
                  </dt>
                  <dd className="text-base text-spice-ink">
                    {"href" in row && row.href ? (
                      <ProseLink
                        href={row.href}
                        external={row.href.startsWith("http")}
                      >
                        {row.value}
                      </ProseLink>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={closingCta.title}
        lead={closingCta.lead}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
