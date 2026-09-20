import { company } from "@/lib/site";
import type { Cta, Feature, PageIntro } from "./types";

/**
 * Influencer storefronts. This is an upcoming Gonje feature — checked
 * marketplace.gonje.com on 2026-09-17 and there is no sign-up flow, pricing
 * or live storefront for this yet. Copy here is deliberately framed as
 * "coming soon" rather than describing a product that doesn't exist yet.
 */
export const intro: PageIntro = {
  eyebrow: "Coming soon",
  title: "Sell through your own storefront",
  lead: "Gonje is building a way for influencers and content creators to curate and on-sell vendor products through a storefront of their own — reaching their audience without running fulfilment or delivery themselves.",
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

export const status = {
  title: "This feature isn't live yet",
  lead: `We're building the influencer storefront program now. Register your interest below and we'll be in touch when it opens.`,
  cta: {
    label: "Register your interest",
    href: `mailto:${company.email}?subject=${encodeURIComponent("Influencer storefront — register interest")}`,
  } satisfies Cta,
} as const;
