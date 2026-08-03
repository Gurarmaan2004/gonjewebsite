import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { paymentMethods, service } from "@/lib/site";

/**
 * Factual at-a-glance panel. Every value is read from lib/site.ts, so it can't
 * drift from the verified marketplace figures.
 *
 * Lives on the /how-it-works masthead, where timing is what the reader came for.
 */
export function DeliveryWindows({ className }: { className?: string }) {
  const rows = [
    { term: "Restaurant food", detail: service.foodDeliveryWindow },
    { term: "Groceries", detail: service.groceryDeliveryWindow },
    { term: "Pickup", detail: "Designated centres" },
    { term: "Open", detail: service.hours },
  ];

  return (
    <Card
      className={cn("w-full max-w-md border-spice-ink/10 shadow-lift", className)}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-lg text-spice-ink">Delivery windows</h2>
        <Badge tone="success" dot>
          Melbourne
        </Badge>
      </div>

      <dl className="mt-5 divide-y divide-spice-ink/15">
        {rows.map((row) => (
          <div
            key={row.term}
            className="flex items-baseline justify-between gap-4 py-3"
          >
            <dt className="text-sm text-spice-ink/65">{row.term}</dt>
            <dd className="text-sm font-semibold text-spice-ink">{row.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-xl border border-spice-ink/15 bg-spice-cream p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-spice-ink/55">
          Pay with
        </p>
        <p className="mt-2 text-sm leading-relaxed text-spice-ink/75">
          {[
            ...paymentMethods.cards.slice(0, 3),
            ...paymentMethods.wallets.slice(0, 2),
            "PayPal",
            "Afterpay",
          ].join(" · ")}
        </p>
      </div>
    </Card>
  );
}
