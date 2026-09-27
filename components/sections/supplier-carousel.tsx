"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { suppliers as suppliersType } from "@/content/suppliers";
import { cn } from "@/lib/utils";

/**
 * Logo-only carousel — per review feedback, the suppliers page shows just the
 * marks (no per-supplier description card), each linking straight out to its
 * marketplace storefront. A native scroll-snap track rather than a JS slide
 * index, so it degrades to plain horizontal scrolling if anything goes wrong.
 */
export function SupplierCarousel({
  suppliers,
  className,
}: {
  suppliers: typeof suppliersType;
  className?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = (card?.clientWidth ?? 320) + 32;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className={cn("relative", className)}>
      <ul
        ref={trackRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-1 py-2"
      >
        {suppliers.map((supplier) => (
          <li key={supplier.name} className="shrink-0 snap-center">
            <a
              href={supplier.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${supplier.name} — ${supplier.description}`}
              className={cn(
                "shape-card group relative flex size-64 items-center justify-center overflow-hidden border-2 border-spice-ink/85 bg-spice-cream shadow-stamp-sm sm:size-72",
                "transition-[box-shadow,transform] duration-200 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-stamp",
              )}
            >
              {supplier.logo ? (
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  sizes="288px"
                  className="object-contain p-10"
                />
              ) : (
                <span className="font-display px-6 text-center text-lg font-bold text-spice-ink/40">
                  {supplier.name}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll to previous supplier"
          className="grid size-11 place-items-center rounded-xl border-2 border-spice-ink text-spice-ink shadow-stamp-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll to next supplier"
          className="grid size-11 place-items-center rounded-xl border-2 border-spice-ink text-spice-ink shadow-stamp-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
