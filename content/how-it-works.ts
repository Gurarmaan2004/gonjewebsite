import { externalLinks, paymentMethods, service } from "@/lib/site";
import type { Cta, Feature, PageIntro, Step } from "./types";

export const intro: PageIntro = {
  eyebrow: "How it works",
  title: "From your address to your door",
  lead: "Gonje.com is where we explain things. The ordering itself happens on our marketplace — here's what to expect when you get there.",
};

export const steps: readonly Step[] = [
  {
    title: "Tell us where you are",
    description:
      "Enter a delivery address and we'll filter the marketplace down to vendors that actually reach you — plus any pickup centres nearby.",
    icon: "map-pin",
  },
  {
    title: "Choose a vendor",
    description:
      "Restaurants, grocers and specialty suppliers each keep their own storefront, range and prices. Browse by category or search for a shop by name.",
    icon: "store",
  },
  {
    title: "Build your basket",
    description:
      "Add items, adjust quantities and leave notes for the vendor. Food and groceries can go in the same session.",
    icon: "shopping-basket",
  },
  {
    title: "Check out and track",
    description:
      "Pick delivery or pickup, pay, and follow the order through to handover.",
    icon: "credit-card",
  },
];

export const timing = {
  eyebrow: "Timing",
  title: "What to expect",
  lead: "Delivery windows differ by what you're ordering.",
  rows: [
    {
      label: "Restaurant food",
      value: service.foodDeliveryWindow,
      note: `Averages ${service.foodDeliveryAverage}.`,
    },
    {
      label: "Groceries",
      value: service.groceryDeliveryWindow,
      note: "Same-day where the vendor supports it.",
    },
    {
      label: "Pickup",
      value: "When the vendor confirms",
      note: "Collect from a designated pickup centre.",
    },
    {
      label: "Service hours",
      value: service.hours,
      note: service.hoursNote,
    },
  ],
} as const;

export const payment = {
  eyebrow: "Payment",
  title: "Ways to pay at checkout",
  lead: "All payments are processed on the marketplace by PayPal and Stripe. Gonje.com never handles your card details.",
  groups: [
    { heading: "Cards", items: paymentMethods.cards },
    { heading: "Digital wallets", items: paymentMethods.wallets },
    { heading: "Buy now, pay later", items: paymentMethods.buyNowPayLater },
    { heading: "Online", items: paymentMethods.online },
  ],
} as const;

export const help: readonly Feature[] = [
  {
    title: "Delivery or pickup",
    description:
      "Choose either at checkout. Pickup collects from a designated centre rather than the vendor's own counter.",
    icon: "truck",
  },
  {
    title: "Order changes",
    description:
      "Changes and cancellations are handled by the vendor through the marketplace, so raise them there as early as you can.",
    icon: "package",
  },
  {
    title: "Refunds",
    description:
      "Refunds are processed back to your original payment method. Contact our team if an order arrives wrong or incomplete.",
    icon: "wallet",
  },
];

export const closingCta = {
  title: "Ready to order?",
  lead: "Enter your address on the marketplace to see who delivers to you right now.",
  cta: {
    label: "Go to the marketplace",
    href: externalLinks.marketplace,
    external: true,
  } satisfies Cta,
} as const;
