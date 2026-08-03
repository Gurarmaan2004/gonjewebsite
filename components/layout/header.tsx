"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { headerCta, primaryNav } from "@/content/nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Escape closes the menu, and the page behind it shouldn't scroll.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-spice-ink/85 bg-spice-cream/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo priority />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "font-display rounded-lg px-3 py-2 text-base font-bold transition-colors",
                isActive(item.href)
                  ? "marker-swipe marker-turmeric text-spice-ink"
                  : "text-spice-ink/70 hover:text-spice-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={headerCta.href}
            external={headerCta.external}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {headerCta.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-xl border-2 border-spice-ink text-spice-ink shadow-stamp-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t-2 border-spice-ink/85 bg-spice-cream md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // Closed on click rather than in a route-change effect.
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "font-display shape-tag px-4 py-3 text-lg font-bold transition-colors",
                  isActive(item.href)
                    ? "bg-spice-turmeric text-spice-ink"
                    : "text-spice-ink/75 hover:bg-spice-cream-deep hover:text-spice-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={headerCta.href}
              external={headerCta.external}
              size="md"
              onClick={() => setOpen(false)}
              className="mt-3 w-full"
            >
              {headerCta.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
