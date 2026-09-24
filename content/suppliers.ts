import { externalLinks } from "@/lib/site";
import type { PageIntro } from "./types";

export const intro: PageIntro = {
  eyebrow: "Suppliers",
  title: "The suppliers behind Melbourne's ethnic food shelves",
  lead: "Gonje works with specialty suppliers who import, make and distribute the ethnic foods that are hard to find in a standard supermarket — from West African snacks to fresh juices and catering.",
};

/**
 * Current Gonje suppliers, as named in review. Role descriptions are a
 * reasonable starting draft based on each supplier's own public branding —
 * not verified copy from the suppliers themselves. Replace with their
 * approved wording when it's supplied.
 *
 * Logos live in /public/company_logos/suppliers. Nana Africa's logo hasn't
 * been supplied yet, so it renders via <LogoSlot> with no `src`. Every logo
 * links to marketplace.gonje.com — per review feedback, not a per-vendor
 * storefront URL, until those are supplied.
 */
export const suppliers: readonly {
  name: string;
  description: string;
  logo?: string;
  href: string;
}[] = [
  {
    name: "Estelle's Delight",
    description:
      "Chin-chin and West African snack specialists, supplying the sweet fried snacks that are a staple of West African celebrations and everyday snacking.",
    logo: "/company_logos/suppliers/Estelles.webp",
    href: externalLinks.marketplace,
  },
  {
    name: "Felicio's",
    description:
      "A long-running multicultural snack and provisions brand, stocking the branded pantry staples familiar to Melbourne's African and Caribbean communities.",
    logo: "/company_logos/suppliers/Felicios.webp",
    href: externalLinks.marketplace,
  },
  {
    name: "Nana Africa",
    description:
      "African grocery and pantry supplier, stocking the everyday ingredients used in West and East African home cooking.",
    href: externalLinks.marketplace,
  },
  {
    name: "Gonje Juices",
    description:
      "Fresh, natural juices inspired by traditional West African recipes, supplied through the Gonje network.",
    logo: "/company_logos/suppliers/GonjeJuices.webp",
    href: externalLinks.marketplace,
  },
  {
    name: "Olori Afrikitchen",
    description:
      "Indoor and outdoor African catering, supplying prepared dishes for events, functions and everyday orders.",
    logo: "/company_logos/suppliers/Olori.webp",
    href: externalLinks.marketplace,
  },
];

export const closing = {
  title: "See the full supplier range",
  lead: "The complete, current list of suppliers and their stock lives on the marketplace.",
  cta: { label: "Browse suppliers on the marketplace", href: externalLinks.suppliers },
} as const;
