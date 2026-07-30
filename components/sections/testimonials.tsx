import { testimonials } from "@/content/testimonials";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/**
 * Renders only when real, supplied testimonials exist (CLAUDE.md §6.4 — do not
 * fabricate). While content/testimonials.ts is empty this returns null in
 * production, so the page never ships invented quotes.
 *
 * In development it renders a clearly-marked empty slot so the section isn't
 * silently forgotten before launch.
 */
export function Testimonials() {
  if (testimonials.length === 0) {
    if (process.env.NODE_ENV === "production") return null;

    return (
      <Section tone="brand" size="sm">
        <div className="rounded-2xl border border-dashed border-brand-400 p-8 text-center">
          <Badge tone="warning">Placeholder — dev only</Badge>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-700">
            Customer testimonials section. Add real, supplied quotes to{" "}
            <code className="rounded bg-brand-100 px-1.5 py-0.5 text-xs">
              content/testimonials.ts
            </code>{" "}
            and this section renders automatically. Nothing is shown in
            production until then.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="brand" grain>
      <SectionHeading
        eyebrow="Customers"
        title="What people say"
        align="center"
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal as="li" key={testimonial.quote} delay={index * 0.14}>
            <Card as="figure" tone="brand" className="flex h-full flex-col">
              {testimonial.status ? (
                <Badge tone="success" dot className="self-start">
                  {testimonial.status}
                </Badge>
              ) : null}

              <blockquote className="font-display mt-4 flex-1 text-lg leading-relaxed text-ink-900">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-ink-200 pt-4 text-sm">
                <span className="font-semibold text-ink-950">
                  {testimonial.author}
                </span>
                <span className="text-ink-600"> · {testimonial.location}</span>
              </figcaption>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
