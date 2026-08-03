import { externalLinks, service } from "@/lib/site";
import type { Category, Cta, Feature, Step } from "./types";

export const hero = {
  /** Handwritten kicker above the headline — set in the marker face. */
  kicker: "Hello from West Footscray",
  eyebrow: "Melbourne · delivery & pickup",
  /** `titleHighlight` gets the hand-drawn marker swipe behind it. */
  title: "The shops that stock",
  titleHighlight: "what you actually cook with",
  /* Every category named here is verified on the marketplace — see lib/site.ts.
     Warm phrasing is fine; the nouns are not negotiable. */
  lead: `Halal and kosher shelves, organic growers, fresh produce and kitchens cooking to order — all from independent shops around Melbourne. Food lands in ${service.foodDeliveryWindow}. Groceries ${service.groceryDeliveryWindow}.`,
  primaryCta: {
    label: "Start an order",
    href: externalLinks.marketplace,
    external: true,
  } satisfies Cta,
  secondaryCta: { label: "Sell with us", href: "/vendors" } satisfies Cta,
  /** Short factual proof points sat under the CTAs. */
  proofPoints: [
    `${service.hours}`,
    `Food in ${service.foodDeliveryWindow}`,
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
      title: "Tell us your street",
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
  title: "Groceries, meals and the specific things",
  lead: "A snapshot of what our vendors stock. The full range lives on the marketplace.",
  items: [
    {
      name: "Everyday groceries",
      description: "The weekly shop, from local grocers rather than a warehouse.",
      examples: ["Fresh fruit & veg", "Pantry staples", "Beverages", "Baby essentials"],
    },
    {
      name: "Ready to eat",
      description: "Cooked, packed and sent while it's still hot.",
      examples: ["Restaurant meals", "Sushi", "Pasta", "Desserts"],
    },
    {
      name: "Specialty & dietary",
      description: "The items that are hard to find in one place.",
      examples: ["Halal", "Kosher", "Organic produce", "Gluten free"],
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
      title: "Fast where it matters",
      description: `Food averages ${service.foodDeliveryAverage}. Groceries arrive ${service.groceryDeliveryWindow}. Prefer to collect? Pick up at a designated centre.`,
      icon: "clock",
    },
    {
      title: "Payments handled properly",
      description:
        "Checkout runs on PayPal and Stripe, with cards, Apple Pay, Google Pay and buy-now-pay-later supported.",
      icon: "shield-check",
    },
    {
      title: "Independent vendors",
      description:
        "Every storefront on Gonje is a real local business setting its own range and prices.",
      icon: "heart-handshake",
    },
    {
      title: "Rooted in community",
      description:
        "We back the cultural events and multicultural food businesses that make Melbourne worth eating in.",
      icon: "users",
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
