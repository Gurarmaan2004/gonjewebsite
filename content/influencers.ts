import { company } from "@/lib/site";
import type { Cta, Feature, PageIntro } from "./types";

/**
 * Influencer storefronts — live, per review (2026-09-29). Plan terms
 * (unlimited products/revenue, 10% transaction fee) as supplied in review;
 * there's no public marketplace page to cross-check them against yet, so
 * they're presented as Gonje's stated terms rather than independently
 * verified. There's also no confirmed self-serve sign-up URL, so the CTA
 * routes to an application email rather than a guessed marketplace link.
 */
export const intro: PageIntro = {
  eyebrow: "For influencers",
  title: "Sell through your own storefront",
  lead: "Gonje gives influencers and content creators their own storefront to curate and on-sell products from participating suppliers — reaching your audience without running fulfilment or delivery yourself.",
};

export const benefits: readonly Feature[] = [
  {
    title: "Your own storefront",
    description:
      "Curate a shopfront of Gonje vendor products under your own name, for the audience you've already built.",
    icon: "sparkles",
  },
  {
    title: "No fulfilment to run",
    description:
      "Delivery, payments and vendor relationships stay with Gonje — you focus on what you recommend.",
    icon: "truck",
  },
  {
    title: "Built on real vendors",
    description:
      "Every product on an influencer storefront comes from an independent Gonje vendor, not a dropship catalogue.",
    icon: "heart-handshake",
  },
];

export const plan = {
  eyebrow: "The influencer plan",
  title: "One plan, unlimited potential",
  lead: "Every influencer storefront runs on the same terms.",
  points: [
    {
      title: "Your own storefront",
      description: "A dedicated storefront on Gonje, under your own name.",
      icon: "sparkles",
    },
    {
      title: "Unlimited products",
      description: "Sell as many products as you want from participating suppliers — no catalogue cap.",
      icon: "package",
    },
    {
      title: "Unlimited revenue potential",
      description: "No cap on what you can earn — it scales with what you sell.",
      icon: "line-chart",
    },
  ] satisfies readonly Feature[],
  fee: {
    label: "Transaction fee",
    value: "10%",
    note: "Charged per transaction. No monthly cost to maintain your storefront.",
  },
} as const;

export const cta = {
  title: "Ready to start selling?",
  lead: "Apply for your Gonje influencer storefront and we'll get you set up.",
  primaryCta: {
    label: "Apply to become an influencer",
    href: `mailto:${company.email}?subject=${encodeURIComponent("Influencer storefront application")}`,
  } satisfies Cta,
} as const;
