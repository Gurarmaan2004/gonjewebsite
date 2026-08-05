"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { headerCta, primaryNav } from "@/content/nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Escape closes the overlay, and the page behind it shouldn't scroll.
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

  /* Overlay stagger. Under reduced motion every duration collapses to 0 rather
     than the panel being removed, so open/close still works — it just cuts. */
  const panel = {
    hidden: { opacity: 0, y: reduced ? 0 : -16 },
    shown: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.4, ease: EASE_EXPO, staggerChildren: 0.06, delayChildren: 0.1 },
    },
    leaving: {
      opacity: 0,
      y: reduced ? 0 : -12,
      transition: reduced ? { duration: 0 } : { duration: 0.25, ease: "easeIn" as const },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    shown: { opacity: 1, y: 0 },
    leaving: { opacity: 0 },
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-spice-ink/85 bg-spice-cream/95 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
          <Logo priority />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {primaryNav.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                aria-current={isActive(navItem.href) ? "page" : undefined}
                className={cn(
                  "font-display rounded-lg px-3 py-2 text-base font-bold transition-colors",
                  isActive(navItem.href)
                    ? "marker-swipe marker-turmeric text-spice-ink"
                    : "text-spice-ink/70 hover:text-spice-ink"
                )}
              >
                {navItem.label}
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
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-xl border-2 border-spice-ink text-spice-ink shadow-stamp-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen translucent overlay. Sits above the sticky header (z-60)
          and carries its own logo + close control, so the header underneath
          doesn't show through as a second, conflicting bar. */}
      <AnimatePresence
        onExitComplete={() => {
          // Return focus to the trigger once the panel has actually gone.
          triggerRef.current?.focus();
        }}
      >
        {open ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            variants={panel}
            initial="hidden"
            animate="shown"
            exit="leaving"
            onAnimationComplete={(definition) => {
              if (definition === "shown") closeRef.current?.focus();
            }}
            className="fixed inset-0 z-60 flex flex-col bg-spice-cream/92 backdrop-blur-xl md:hidden"
          >
            <div
              aria-hidden="true"
              className="bg-produce pointer-events-none absolute inset-0 -z-10 opacity-15"
            />

            <Container className="flex h-16 shrink-0 items-center justify-between sm:h-18">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-xl border-2 border-spice-ink bg-spice-cream text-spice-ink shadow-stamp-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </Container>

            <Container className="flex flex-1 flex-col justify-center gap-2 pb-24">
              <nav aria-label="Primary" className="flex flex-col gap-2">
                {primaryNav.map((navItem) => (
                  <motion.div key={navItem.href} variants={item}>
                    <Link
                      href={navItem.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(navItem.href) ? "page" : undefined}
                      className={cn(
                        "font-display block py-3 text-4xl font-bold transition-colors",
                        isActive(navItem.href)
                          ? "marker-swipe marker-turmeric text-spice-ink"
                          : "text-spice-ink/75 hover:text-spice-ink"
                      )}
                    >
                      {navItem.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div variants={item} className="mt-8">
                <Button
                  href={headerCta.href}
                  external={headerCta.external}
                  size="lg"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {headerCta.label}
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </Button>
              </motion.div>

              <motion.p
                variants={item}
                className="font-marker mt-6 text-xl text-spice-terracotta"
              >
                Hello from the Gonje Team!
              </motion.p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
