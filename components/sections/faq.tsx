import { Plus } from "lucide-react";
import { faqs } from "@/content/faq";
import { company } from "@/lib/site";
import { ProseLink } from "@/components/ui/prose-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/**
 * Built on native <details>/<summary>: keyboard and screen-reader accessible
 * with no client JavaScript, which keeps this a fully static section.
 */
export function Faq() {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          lead={
            <>
              Can&apos;t find it here? Email{" "}
              <ProseLink href={`mailto:${company.supportEmail}`}>
                {company.supportEmail}
              </ProseLink>{" "}
              or call {company.phone}.
            </>
          }
        />

        <Reveal delay={0.1}>
          <ul className="divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((faq) => (
              <li key={faq.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg text-ink-950 transition-colors group-hover:text-accent-700">
                      {faq.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-ink-300 text-ink-700 transition-transform duration-200 group-open:rotate-45 group-hover:border-ink-400"
                    >
                      <Plus className="size-4" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-700">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
