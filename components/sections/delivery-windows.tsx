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
    <Card className={cn("w-full max-w-md border-ink-950/10 shadow-lift", className)}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-lg text-ink-950">Delivery windows</h2>
        <Badge tone="success" dot>
          Melbourne
        </Badge>
      </div>

      <dl className="mt-5 divide-y divide-ink-200">
        {rows.map((row) => (
          <div
            key={row.term}
            className="flex items-baseline justify-between gap-4 py-3"
          >
            <dt className="text-sm text-ink-600">{row.term}</dt>
            <dd className="text-sm font-semibold text-ink-950">{row.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-xl border border-ink-200 bg-ink-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
          Pay with
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
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
