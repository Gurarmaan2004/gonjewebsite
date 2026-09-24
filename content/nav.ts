import { externalLinks } from "@/lib/site";
import type { Cta, NavItem } from "./types";

/** Primary navigation. Legal routes are deliberately footer-only. */
export const primaryNav: readonly NavItem[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For vendors", href: "/vendors" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Energy as a Service", href: "/services/energy" },
      { label: "Data as a Service", href: "/services/data" },
    ],
  },
  { label: "Influencers", href: "/influencers" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "About", href: "/about" },
];

export const headerCta: Cta = {
  label: "Find food near me",
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
      { label: "Suppliers", href: "/suppliers" },
      { label: "Influencers", href: "/influencers" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Energy as a Service", href: "/services/energy" },
      { label: "Data as a Service", href: "/services/data" },
    ],
  },
  {
    heading: "Company",
    links: [{ label: "About Gonje", href: "/about" }],
  },
];
