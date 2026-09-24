import { externalLinks, service } from "@/lib/site";
import { missionStatement } from "./mission";
import type { Category, Cta, Feature, Step } from "./types";

export const hero = {
  /**
   * Handwritten kicker above the headline. Rendered by <LocationGreeting>,
   * which swaps this in for "Hello from {city}!" once IP-based geolocation
   * resolves client-side — this is the fallback shown until then (or if it
   * fails/is blocked).
   */
  kickerFallback: "Discover the food, groceries and flavours that feel like home.",
  /** `titleHighlight` gets the hand-drawn marker swipe behind it. */
  title: "The flavours of home,",
  titleHighlight: "delivered across Melbourne",
  /* Every category named here is verified on the marketplace — see lib/site.ts.
     "Multicultural" is the differentiator CLAUDE.md §1 calls out — this is not
     a generic Melbourne grocery app, so it leads the copy rather than trailing it. */
  lead: `Halal and kosher shelves, organic growers and specialty kitchens cooking the dishes that taste like home — from independent vendors serving Melbourne's multicultural communities. Food arrives ${service.foodDeliveryFrom.toLowerCase()}, groceries ${service.groceryDeliveryWindow}.`,
  mission: missionStatement,
  /** Short factual proof points sat under the lead. CTAs live in the header only. */
  proofPoints: [
    `${service.hours}`,
    `${service.foodDeliveryFrom} for food`,
    "Delivery or pickup",
  ],
} as const;

export const howItWorks = {
  kicker: "Nothing to install",
  eyebrow: "How it works",
  title: "Four steps. Then you eat.",
  lead: "The ordering itself happens over on the marketplace. Here's the whole of it, before you go.",
  steps: [
    {
      title: "Enter your postcode",
      description:
        "We'll show you the shops that actually deliver to your door, plus the pickup centres near you.",
      icon: "map-pin",
    },
    {
      title: "Pick your shop",
      description:
        "Butchers, grocers, bakers and kitchens — every one an independent business, setting its own shelves and its own prices.",
      icon: "store",
    },
    {
      title: "Fill the basket",
      description:
        "Tonight's dinner and the weekly shop can go in together. Leave a note if you want something cut, wrapped or cooked a particular way.",
      icon: "shopping-basket",
    },
    {
      title: "Pay, then watch it come",
      description:
        "Card, digital wallet, PayPal or pay-later. Then track it from the shop counter to your door.",
      icon: "credit-card",
    },
  ] satisfies readonly Step[],
  cta: { label: "See the detail", href: "/how-it-works" } satisfies Cta,
} as const;

export const categories = {
  eyebrow: "What's on Gonje",
  title: "Built for Melbourne's multicultural kitchens",
  lead: "Halal, kosher and home-country staples sit alongside the everyday shop — not an afterthought. The full range lives on the marketplace.",
  items: [
    {
      name: "Multicultural & specialty",
      description: "The staples that are hard to find in one place, from vendors who know the difference.",
      examples: ["Halal", "Kosher", "Organic produce", "Gluten free"],
    },
    {
      name: "Ready to eat",
      description: "Cooked, packed and sent while it's still hot.",
      examples: ["Restaurant meals", "Sushi", "Pasta", "Desserts"],
    },
    {
      name: "Everyday groceries",
      description: "The weekly shop, from local grocers rather than a warehouse.",
      examples: ["Fresh fruit & veg", "Pantry staples", "Beverages", "Baby essentials"],
    },
  ] satisfies readonly Category[],
  cta: {
    label: "Browse the marketplace",
    href: externalLinks.marketplace,
    external: true,
  } satisfies Cta,
} as const;

export const trust = {
  eyebrow: "Why Gonje",
  title: "Built around local businesses",
  lead: "We're a Melbourne company working with the shops in your suburb — not a national app passing through.",
  features: [
    {
      title: "Rooted in community",
      description:
        "We back the cultural events and multicultural food businesses that make Melbourne worth eating in — this isn't a national app passing through.",
      icon: "users",
    },
    {
      title: "Fast where it matters",
      description: `${service.foodDeliveryFrom} for food, averaging ${service.foodDeliveryAverage}. Groceries arrive ${service.groceryDeliveryWindow}. Prefer to collect? Pick up at a designated centre.`,
      icon: "clock",
    },
    {
      title: "Independent vendors",
      description:
        "Every storefront on Gonje is a real local business setting its own range and prices.",
      icon: "heart-handshake",
    },
    {
      title: "Payments handled properly",
      description:
        "Checkout runs on PayPal and Stripe, with cards, Apple Pay, Google Pay and buy-now-pay-later supported.",
      icon: "shield-check",
    },
  ] satisfies readonly Feature[],
} as const;

export const vendorCta = {
  eyebrow: "For vendors",
  title: "Put your shop in front of your suburb",
  lead: "Gonje gives independent restaurants, grocers and suppliers a storefront, delivery and payouts — without building any of it yourself.",
  points: [
    "Plans from $0/month",
    "Payouts within 24 hours",
    "Store setup, logistics and analytics included",
  ],
  primaryCta: { label: "See vendor plans", href: "/vendors" } satisfies Cta,
  secondaryCta: {
    label: "Apply to sell",
    href: externalLinks.becomeVendor,
    external: true,
  } satisfies Cta,
} as const;

/**
 * Influencer storefronts — an upcoming Gonje feature, not yet live on the
 * marketplace (checked 2026-09-17: no influencer sign-up flow or page
 * exists there yet). Framed as "coming soon" rather than a working CTA to
 * a plan or price that hasn't been published.
 */
export const influencerCta = {
  eyebrow: "Coming soon",
  title: "Sell through your own storefront",
  lead: "Influencers will be able to curate and on-sell Gonje vendor products through a storefront of their own — reaching their audience without running fulfilment themselves.",
  cta: { label: "Register your interest", href: "/influencers" } satisfies Cta,
} as const;
