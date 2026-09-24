"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Desktop-only dropdown for a primary-nav entry with sub-pages (currently
 * just "Services"). Mobile renders the same children as a flat indented list
 * instead — see header.tsx — since a hover/click panel doesn't translate to
 * touch in a way worth the extra state.
 */
export function NavDropdown({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const children = item.children ?? [];
  const active = isActive(item.href) || children.some((child) => isActive(child.href));

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "font-display inline-flex items-center gap-1 rounded-lg px-3 py-2 text-base font-bold transition-colors",
          active
            ? "marker-swipe marker-turmeric text-spice-ink"
            : "text-spice-ink/70 hover:text-spice-ink"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute top-full left-0 mt-2 w-64 rounded-xl border-2 border-spice-ink bg-spice-cream p-2 shadow-stamp"
        >
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={cn(
                "font-display block rounded-lg px-3 py-2.5 text-sm font-bold transition-colors",
                isActive(child.href)
                  ? "bg-spice-turmeric/25 text-spice-ink"
                  : "text-spice-ink/75 hover:bg-spice-cream-deep hover:text-spice-ink"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
