import { company, externalLinks } from "@/lib/site";
import type { Cta, Feature, PageIntro } from "./types";

export const intro: PageIntro = {
  eyebrow: "For vendors",
  title: "Sell to your suburb without building a delivery business",
  lead: "Gonje gives independent restaurants, grocers and specialty suppliers a storefront, delivery, payments and payouts on one platform — with a plan that starts free.",
};

export const introCtas = {
  primary: {
    label: "Apply to sell",
    href: externalLinks.becomeVendor,
    external: true,
  } satisfies Cta,
  secondary: { label: "See what's included", href: "#included" } satisfies Cta,
};

export const benefits: readonly Feature[] = [
  {
    title: "A customer base already looking",
    description:
      "You list into a marketplace people are already shopping, instead of paying to build an audience from zero.",
    icon: "users",
  },
  {
    title: "Fulfilment handled",
    description:
      "Delivery and logistics run through Gonje, including pickup-centre collection for customers who'd rather collect.",
    icon: "truck",
  },
  {
    title: "Marketing and promotion",
    description:
      "Promotional tools and placement across the marketplace, so a new store isn't invisible on day one.",
    icon: "megaphone",
  },
  {
    title: "Analytics that tell you something",
    description:
      "Performance dashboards, inventory management and quote requests come with the vendor account.",
    icon: "line-chart",
  },
  {
    title: "Paid within 24 hours",
    description:
      "Fast payouts, so cashflow doesn't wait on a fortnightly settlement cycle.",
    icon: "wallet",
  },
  {
    title: "Support when it breaks",
    description:
      "24/7 seller support, plus help with store setup and optimisation when you're getting started.",
    icon: "headphones",
  },
];

/**
 * Live vendor pricing as published on the marketplace vendor application
 * (marketplace.gonje.com, checked 2026-07-28). Commission and fees are factual
 * claims — re-check the source before editing.
 */
export const plans = {
  eyebrow: "Pricing",
  title: "Three plans, no lock-in tier games",
  lead: "Pick the plan that matches your volume. Commission is charged on orders; warehousing applies only if you store stock with us.",
  items: [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      commission: "22.5% commission on orders",
      warehousing: null,
      description: "For testing the water or running a small, low-volume range.",
      featured: false,
    },
    {
      name: "Plus",
      price: "$9.99",
      period: "per month",
      commission: "15% commission on orders",
      warehousing: "+ $3.50/day warehousing",
      description: "For established shops where the commission saving pays for itself.",
      featured: true,
    },
    {
      name: "Super",
      price: "$15",
      period: "per month",
      commission: "10% commission on orders",
      warehousing: "+ $3.50/day warehousing",
      description: "For high-volume vendors who want the lowest per-order rate.",
      featured: false,
    },
  ],
  /** Time-limited offer published on the vendor application page. */
  offer: {
    label: "Onboarding fee waived",
    detail:
      "The $99 onboarding fee is currently free for new vendors until 21 November 2026.",
  },
  footnote:
    "Commission, warehousing and onboarding fees are set on the marketplace and are subject to change — the vendor application page is the authority.",
} as const;

export const included = {
  eyebrow: "What's included",
  title: "Every plan comes with the platform",
  lead: "Regardless of tier, you get the operating pieces of an online shop.",
  items: [
    "Store setup and optimisation",
    "Fulfilment and logistics",
    "Marketing and promotional tools",
    "Analytics and performance dashboards",
    "Inventory management and quote requests",
    "24/7 seller support",
  ],
} as const;

export const steps = {
  eyebrow: "Getting started",
  title: "How you join",
  items: [
    {
      title: "Apply",
      description:
        "Fill in the vendor form with your business details — ABN, contact and what you sell.",
    },
    {
      title: "Choose a plan",
      description: "Start free or pick Plus or Super if your volume justifies it.",
    },
    {
      title: "Set up your store",
      description:
        "We help you load your range, set delivery areas and get the storefront looking right.",
    },
    {
      title: "Start taking orders",
      description: "Go live to customers already browsing the marketplace.",
    },
  ],
} as const;

export const closingCta = {
  title: "Talk to us before you commit",
  lead: `Not sure which plan fits, or want to ask about a specific category? Email ${company.email} or call ${company.phone}.`,
  primaryCta: {
    label: "Apply to sell",
    href: externalLinks.becomeVendor,
    external: true,
  } satisfies Cta,
} as const;
