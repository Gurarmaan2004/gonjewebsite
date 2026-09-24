import { Users } from "lucide-react";
import { savings } from "@/content/savings";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/** Cost-per-plate worked example, by household size — see content/savings.ts for the caveat on the numbers. */
export function Savings() {
  return (
    <Section tone="default">
      <SectionHeading
        eyebrow={savings.eyebrow}
        title={savings.title}
        lead={savings.lead}
        align="center"
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {savings.rows.map((row, index) => {
          const perPlate = row.weeklySpend / row.plates;

          return (
            <Reveal as="li" variant="scale" key={row.people} delay={index * 0.1}>
              <Card className="flex h-full flex-col items-center text-center">
                <span className="grid size-12 place-items-center rounded-full border-2 border-spice-ink bg-spice-turmeric/25">
                  <Users className="size-5 text-spice-ink" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <p className="font-display mt-3 text-lg text-spice-ink">
                  {row.people} {row.people === 1 ? "person" : "people"}
                </p>
                <p className="mt-4 text-sm text-spice-ink/60">Example spend</p>
                <p className="font-display text-2xl text-spice-ink">{row.spendLabel}</p>
                <p className="mt-4 text-sm text-spice-ink/60">Cost per plate</p>
                <p className="font-display text-3xl text-spice-green">
                  ${perPlate.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-spice-ink/50">{row.plates} plates/week</p>
              </Card>
            </Reveal>
          );
        })}
      </ul>

      <p className="mt-8 text-center text-xs text-spice-ink/50">
        {savings.disclaimer}
      </p>
    </Section>
  );
}
