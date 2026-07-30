import { externalLinks, service } from "@/lib/site";
import type { Category, Cta, Feature, Step } from "./types";

export const hero = {
  eyebrow: "Melbourne · delivery & pickup",
  /** `highlight` is rendered with the brush underline treatment. */
  title: "The local shops you love,",
  titleHighlight: "brought to your door",
  lead: `Order from independent restaurants, grocers and specialty suppliers near you. Most food orders arrive in ${service.foodDeliveryWindow} — groceries ${service.groceryDeliveryWindow}.`,
  primaryCta: {
    label: "Start an order",
    href: externalLinks.marketplace,
    external: true,
  } satisfies Cta,
  secondaryCta: { label: "Sell on Gonje", href: "/vendors" } satisfies Cta,
  /** Short factual proof points sat under the CTAs. */
  proofPoints: [
    `${service.hours}`,
    `Food in ${service.foodDeliveryWindow}`,
    "Delivery or pickup",
  ],
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  title: "Four steps, then dinner",
  lead: "Ordering happens on our marketplace. Here's the shape of it before you go.",
  steps: [
    {
      title: "Enter your address",
      description:
        "We show the vendors that deliver to you, and the pickup centres nearby.",
      icon: "map-pin",
    },
    {
      title: "Pick a vendor",
      description:
        "Browse local restaurants, grocers and specialty suppliers — each one an independent business.",
      icon: "store",
    },
    {
      title: "Fill your basket",
      description:
        "Add what you need. You can order across food and groceries in the same session.",
      icon: "shopping-basket",
    },
    {
      title: "Check out",
      description:
        "Pay by card, digital wallet, PayPal or buy-now-pay-later, then track it to your door.",
      icon: "credit-card",
    },
  ] satisfies readonly Step[],
  cta: { label: "See it in more detail", href: "/how-it-works" } satisfies Cta,
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
