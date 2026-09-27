import Image from "next/image";
import type { suppliers as suppliersType } from "@/content/suppliers";
import { cn } from "@/lib/utils";

/**
 * Logo-only marquee — per review feedback, no per-supplier card, no border,
 * no manual controls. A pure CSS animation (see .animate-marquee in
 * globals.css) rather than a JS ticker, so it needs no client boundary and
 * degrades gracefully — reduced motion just stops it in place. The list is
 * rendered twice back to back so the -50% loop point is seamless.
 */
export function SupplierCarousel({
  suppliers,
  className,
}: {
  suppliers: typeof suppliersType;
  className?: string;
}) {
  const loop = [...suppliers, ...suppliers];

  return (
    <div className={cn("overflow-hidden", className)}>
      <ul className="animate-marquee flex w-max items-center gap-20">
        {loop.map((supplier, index) => (
          <li key={`${supplier.name}-${index}`} className="shrink-0">
            <a
              href={supplier.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${supplier.name} — ${supplier.description}`}
              className="block h-24 w-44 opacity-90 transition-opacity hover:opacity-100"
            >
              {supplier.logo ? (
                <span className="relative block size-full">
                  <Image
                    src={supplier.logo}
                    alt={supplier.name}
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </span>
              ) : (
                <span className="font-display flex size-full items-center justify-center text-center text-sm font-bold text-spice-ink/40">
                  {supplier.name}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
