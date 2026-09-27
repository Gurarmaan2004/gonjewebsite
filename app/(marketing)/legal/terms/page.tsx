import type { Metadata } from "next";
import { definitions, highlights, highlightsClosing, intro, sections } from "@/content/terms";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: intro.lead,
};

export default function TermsPage() {
  return (
    <>
      <PageHero intro={intro} />

      <Section size="sm">
        <Card className="mx-auto max-w-3xl">
          <p className="font-display text-lg text-spice-ink">Key points</p>
          <ul className="mt-4 space-y-4">
            {highlights.map((point) => (
              <li key={point.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-spice-ink/80">
                <span aria-hidden="true" className="mt-1 size-1.5 shrink-0 rounded-full bg-spice-terracotta" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold text-spice-ink/70">{highlightsClosing}</p>
        </Card>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl space-y-14">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl text-spice-ink sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {section.subsections.map((sub) => (
                  <div key={sub.heading}>
                    <h3 className="font-display text-lg text-spice-ink">{sub.heading}</h3>
                    <div className="mt-2 space-y-3">
                      {sub.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="text-base leading-relaxed text-spice-ink/75"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-display text-2xl text-spice-ink sm:text-3xl">
              5. Definitions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-spice-ink/75">
              In these terms and conditions, terms with initial capitalisation carry the following meanings:
            </p>
            <dl className="mt-6 divide-y divide-spice-ink/15 border-y border-spice-ink/15">
              {definitions.map((definition) => (
                <div
                  key={definition.term}
                  className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-spice-ink">{definition.term}</dt>
                  <dd className="text-sm leading-relaxed text-spice-ink/75">
                    {definition.meaning}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
