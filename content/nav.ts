import { externalLinks } from "@/lib/site";
import type { Cta } from "./types";

/** Primary navigation. Legal routes are deliberately footer-only. */
export const primaryNav: readonly Cta[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For vendors", href: "/vendors" },
  { label: "About", href: "/about" },
];

export const headerCta: Cta = {
  label: "Start an order",
  href: externalLinks.marketplace,
  external: true,
};

/**
 * Footer link groups. Legal pages are listed but not yet built — CLAUDE.md §7
 * says to build the foundation solidly before fanning out to every subpage, so
 * these are commented out rather than linking to 404s.
 */
export const footerNav: readonly {
  heading: string;
  links: readonly Cta[];
}[] = [
  {
    heading: "Shop",
    links: [
      { label: "Browse the marketplace", href: externalLinks.marketplace, external: true },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    heading: "Sell",
    links: [
      { label: "Become a vendor", href: "/vendors" },
      { label: "Vendor sign-up", href: externalLinks.becomeVendor, external: true },
    ],
  },
  {
    heading: "Company",
    links: [{ label: "About Gonje", href: "/about" }],
  },
];
