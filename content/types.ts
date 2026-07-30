/**
 * Shared shapes for everything under /content.
 *
 * Content files are plain typed TypeScript objects. If a CMS is introduced
 * later, it should be fetched behind lib/ and mapped into these same types so
 * components never learn where the copy came from.
 */

/** A lucide-react icon name, kept as a string so /content stays free of imports. */
export type IconName =
  | "map-pin"
  | "store"
  | "shopping-basket"
  | "credit-card"
  | "clock"
  | "shield-check"
  | "leaf"
  | "heart-handshake"
  | "truck"
  | "package"
  | "sparkles"
  | "users"
  | "line-chart"
  | "wallet"
  | "headphones"
  | "megaphone";

export type Cta = {
  label: string;
  href: string;
  /** Set for links that leave gonje.com (marketplace, vendor signup). */
  external?: boolean;
};

export type Step = {
  title: string;
  description: string;
  icon: IconName;
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type Category = {
  name: string;
  description: string;
  /** Rendered as a small type-set tile; no stock photography required. */
  examples: readonly string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Testimonials are only ever rendered from real, supplied quotes.
 * See content/testimonials.ts — the list is intentionally empty for now.
 */
export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  /** Optional order-status style badge, e.g. "Delivered in 38 min". */
  status?: string;
};

export type PageIntro = {
  eyebrow: string;
  title: string;
  lead: string;
};
