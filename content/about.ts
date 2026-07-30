import { company, companyAddressLine, externalLinks, service } from "@/lib/site";
import type { Cta, Feature, PageIntro } from "./types";

export const intro: PageIntro = {
  eyebrow: "About Gonje",
  title: "A Melbourne delivery platform built around local shops",
  lead: "Gonje connects people with the restaurants, grocers and specialty suppliers already in their neighbourhood — and gives those businesses a way to sell online without building the machinery themselves.",
};

export const story = {
  eyebrow: "What we do",
  title: "Two sides of the same street",
  /** Paragraphs stay descriptive of what Gonje demonstrably does today. */
  paragraphs: [
    "Gonje runs a marketplace where independent Australian businesses sell directly to customers nearby. Restaurants send meals out hot, grocers fill weekly shops, and specialty suppliers stock the things that are hard to find in one place — halal, kosher, organic, gluten free, baby essentials.",
    `Customers order for delivery — ${service.foodDeliveryWindow} for most food, ${service.groceryDeliveryWindow} for groceries — or collect from a designated pickup centre. Vendors get a storefront, fulfilment, promotion and payouts, on a plan that starts free.`,
    "The company is based in West Footscray in Melbourne's inner west, and much of what we carry reflects the communities around us. We support multicultural food businesses and back local cultural events, including African music and cultural festivals.",
  ],
} as const;

export const values: readonly Feature[] = [
  {
    title: "Local first",
    description:
      "We'd rather have the good shop three suburbs over than a national chain. Vendors set their own range and prices.",
    icon: "store",
  },
  {
    title: "Community over scale",
    description:
      "Our differentiation isn't fleet size. It's the relationships we have with the businesses and communities we serve.",
    icon: "heart-handshake",
  },
  {
    title: "Straight answers",
    description:
      "Published delivery windows, published vendor commission, published fees. No surprises at checkout or at settlement.",
    icon: "shield-check",
  },
  {
    title: "Room for the specific",
    description:
      "Dietary, cultural and specialty ranges aren't an afterthought category — they're a large part of why people use us.",
    icon: "leaf",
  },
];

/** Verified company details, surfaced for press, compliance and support readers. */
export const details = {
  eyebrow: "Company details",
  title: "The formal bits",
  rows: [
    { label: "Trading name", value: company.legalName },
    { label: "ABN", value: company.abn },
    { label: "Head office", value: companyAddressLine },
    { label: "Phone", value: company.phone, href: `tel:${company.phoneHref}` },
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    {
      label: "Support",
      value: company.supportEmail,
      href: `mailto:${company.supportEmail}`,
    },
    { label: "Marketplace", value: "marketplace.gonje.com", href: externalLinks.marketplace },
  ],
} as const;

export const closingCta = {
  title: "Order, or come and sell",
  lead: "Whichever side of the marketplace you're on, it starts in the same place.",
  primaryCta: {
    label: "Browse the marketplace",
    href: externalLinks.marketplace,
    external: true,
  } satisfies Cta,
  secondaryCta: { label: "Become a vendor", href: "/vendors" } satisfies Cta,
} as const;
