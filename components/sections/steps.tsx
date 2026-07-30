import type { Step } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

/**
 * Numbered step list, shared by the home page and /how-it-works so the two
 * never drift apart visually. Each step takes the next produce accent.
 */
export function Steps({
  steps,
  className,
}: {
  steps: readonly Step[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, index) => {
        const accent = produceAccent(index);

        return (
          <Reveal as="li" variant="scale" key={step.title} delay={index * 0.14}>
            <Card className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl border-2",
                    accent.tile,
                  )}
                >
                  <Icon name={step.icon} className="size-6" />
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-3xl font-bold text-ink-300"
                >
                  {index + 1}
                </span>
              </div>

              <h3 className="font-display mt-5 text-xl text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-700">
                {step.description}
              </p>
            </Card>
          </Reveal>
        );
      })}
    </ol>
  );
}
