/**
 * Single source of truth for factual company data and external URLs.
 *
 * Everything in here is a factual claim. Values were taken from Gonje's live
 * marketplace (marketplace.gonje.com) on 2026-07-28. Do not edit these from
 * memory — re-check the source, or mark the value as a placeholder.
 *
 * Marketing *copy* does not belong here; it lives in /content.
 */

export const site = {
  name: "Gonje",
  /** Used by Metadata.metadataBase. Override per environment if needed. */
  url: "https://gonje.com",
  tagline: "Local vendors, delivered across Melbourne.",
  description:
    "Gonje connects you with local restaurants, grocers and specialty suppliers across Melbourne — delivered fast, or ready for pickup.",
  locale: "en-AU",
} as const;

/** Verified from marketplace.gonje.com. */
export const company = {
  legalName: "Gonje",
  abn: "46 649 251 007",
  phone: "03 9969 2891",
  /** Tel: href form — digits only, no spaces. */
  phoneHref: "+61399692891",
  email: "operations@gonje.com",
  supportEmail: "operations@gonje.com.au",
  address: {
    line1: "Unit 12, 442 Geelong Road",
    suburb: "West Footscray",
    state: "VIC",
    postcode: "3013",
    country: "Australia",
  },
  /** Secondary logistics address listed on the marketplace. */
  parcelCollect: "Parcel Collect 10143 43082, 341 Barry Road, Campbellfield VIC 3061",
} as const;

export const companyAddressLine = `${company.address.line1}, ${company.address.suburb}, ${company.address.state} ${company.address.postcode}`;

/**
 * Service claims. Sourced from the marketplace's own delivery information.
 * If these change on the marketplace, change them here — not in a component.
 */
export const service = {
  foodDeliveryWindow: "30–60 minutes",
  foodDeliveryAverage: "under 45 minutes",
  groceryDeliveryWindow: "within 24 hours",
  hours: "7am–10pm daily",
  hoursNote: "Extended hours on weekends.",
} as const;

/** Payment methods accepted at marketplace checkout. */
export const paymentMethods = {
  cards: ["Visa", "Mastercard", "American Express", "Discover"],
  wallets: ["Apple Pay", "Google Pay", "Samsung Pay"],
  buyNowPayLater: ["Afterpay", "Klarna", "Affirm"],
  online: ["PayPal", "Stripe"],
} as const;

/**
 * Outbound links. Every customer conversion path leaves this site for the
 * marketplace — gonje.com explains and hands off, it does not transact.
 */
export const externalLinks = {
  marketplace: "https://marketplace.gonje.com",
  becomeVendor:
    "https://marketplace.gonje.com/index.php?dispatch=companies.apply_for_vendor",
} as const;

/**
 * Social profiles. PLACEHOLDER — no verified profile URLs were supplied.
 * The footer renders nothing while this array is empty; fill it in when the
 * real handles are confirmed rather than guessing at URLs.
 */
export const socialLinks: ReadonlyArray<{
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "youtube";
}> = [];
