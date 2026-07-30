import type { Step } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Numbered step list, shared by the home page and /how-it-works so the two
 * never drift apart visually.
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
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * 0.08}>
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-100 text-brand-900">
                <Icon name={step.icon} className="size-5" />
              </span>
              <span
                aria-hidden="true"
                className="font-display text-2xl text-ink-300"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="font-display mt-5 text-xl text-ink-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {step.description}
            </p>
          </Card>
        </Reveal>
      ))}
    </ol>
  );
}
