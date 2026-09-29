import type { Feature, PageIntro } from "./types";

/**
 * Energy as a Service (EaaS) and Data as a Service (DaaS) — two partner-led
 * offers for Gonje vendors/suppliers, not the marketplace itself. Copy here
 * is based on what was supplied in review; specifics like pricing/eligibility
 * are marked for follow-up rather than invented.
 *
 * Partner logos live in /public/company_logos/eaas and /company_logos/daas.
 */

/**
 * Origin's own EV fleet program, as officially described on arena.gov.au
 * (fetched 2026-09-28) — used on both service pages wherever Origin's role
 * is explained, rather than us describing the partnership ourselves.
 */
export const originAccelerate = {
  eyebrow: "Backed by Origin Accelerate",
  title: "Origin's EV fleet program, backed by ARENA",
  description:
    "Origin Energy partners with Custom Fleet on the Origin Accelerate EV Fleet Program — backed by $6.17 million from the Australian Renewable Energy Agency (ARENA) to lease 1,000 battery electric vehicles to Australian businesses and install 1,000 smart chargers, building the charging supply chains and second-hand BEV market needed to make fleet electrification affordable at scale.",
  sourceLabel: "Origin Accelerate EV Fleet Program — arena.gov.au",
  sourceHref: "https://arena.gov.au/projects/origin-accelerate-ev-fleet-program/",
} as const;

export const overview: PageIntro = {
  eyebrow: "Services",
  title: "More than a marketplace listing",
  lead: "Gonje partners with energy and fleet providers, and builds its own software, to bring vendors and suppliers benefits beyond the storefront — energy savings for the premises, logistics support for the business, and the technology to run it.",
};

export const overviewItems: readonly {
  title: string;
  description: string;
  href: string;
  icon: Feature["icon"];
}[] = [
  {
    title: "Energy as a Service (EaaS)",
    description:
      "A partnership bringing energy solutions to local food businesses — hotels, restaurants, grocers, manufacturers and community kitchens.",
    href: "/services/energy",
    icon: "zap",
  },
  {
    title: "Data as a Service (DaaS)",
    description:
      "Fleet and logistics support for vendors and suppliers, including plans for employee and delivery vehicles.",
    href: "/services/data",
    icon: "database",
  },
  {
    title: "Software as a Service (SaaS)",
    description:
      "The software behind Gonje itself — POS, reporting, marketing, e-commerce and AI — extended to your business.",
    href: "/services/saas",
    icon: "code",
  },
];

export const energy = {
  intro: {
    eyebrow: "Energy as a Service",
    title: "EaaS, in partnership with ESQ Energy",
    lead: "Powered by Origin and Optus, ESQ Energy's EaaS deal brings EV charging stations to Gonje vendor and supplier sites — as a benefit of joining Gonje, and a reason to.",
  } satisfies PageIntro,
  partners: [
    { name: "ESQ Energy", logo: "/company_logos/eaas/esq.png" },
    { name: "Origin", logo: "/company_logos/eaas/origin.webp" },
    { name: "Optus", logo: "/company_logos/eaas/optus.png" },
  ],
  /** From eaas.txt (review, 2026-09-25). Pricing and the EV lease/hire option are TBC — shown as such rather than invented. */
  evCharging: {
    eyebrow: "EV charging",
    title: "EV charging stations for your storefront",
    lead: "A payable EV charging station for your customers and the public — DC and AC chargers, with solar and battery systems available, customised to your store and branding, with 24-hour public availability.",
    points: [
      "Additional income from your building space",
      "Branding to your storefront",
      "Increased customer store visits",
      "Low or no maintenance cost",
      "Finance options available",
    ],
    note: "EV cars available for hire or lease for your business, bundled as a subscription — to be confirmed.",
    pricing: "Pricing structure: to be confirmed.",
  },
  audiences: {
    eyebrow: "Who it's for",
    title: "Built for businesses that run on energy-heavy premises",
    lead: "EaaS is aimed at the kind of local business Gonje already works with — and the ones we'd like to.",
    items: [
      "Hotels",
      "Restaurants",
      "Grocery stores",
      "Food manufacturing plants",
      "Packaging facilities",
      "Community & council kitchens",
    ],
  },
  benefits: [
    {
      title: "One partnership, not a new vendor to manage",
      description:
        "EaaS sits alongside your Gonje storefront rather than adding a separate supplier relationship to chase.",
      icon: "heart-handshake",
    },
    {
      title: "Built for food-service premises",
      description:
        "Kitchens, cold storage and manufacturing floors have different energy profiles to a standard office — EaaS is aimed at that load.",
      icon: "zap",
    },
    {
      title: "Another reason to join Gonje",
      description:
        "For prospective vendors and suppliers weighing up the platform, EaaS is part of what joining includes.",
      icon: "sparkles",
    },
  ] satisfies readonly Feature[],
  closingCta: {
    title: "Ask about EaaS for your business",
    lead: "Tell us a bit about your premises and we'll follow up with what's available.",
  },
} as const;

export const data = {
  intro: {
    eyebrow: "Data as a Service",
    title: "DaaS, via the Origin 360 Business Fleet",
    lead: "Origin Energy has committed the Origin 360 Business Fleet of electric vehicles to Gonje. Delivery (Data) as a Service gives Gonje vendors and suppliers access to it — for employee vehicles and for the logistics side of running a delivery business.",
  } satisfies PageIntro,
  fleetPartner: {
    name: "Origin 360 Business Fleet",
    logo: "/company_logos/daas/origin.webp",
  },
  /** From daas.txt (review, 2026-09-25) — the driver app doesn't exist yet, shown as in development rather than a working feature. */
  driverApp: {
    eyebrow: "Driver app",
    title: "A driver app, built around the fleet",
    lead: "Gonje is building a driver app so Gonje employees can use the Origin 360 Business Fleet's electric vehicles to deliver food or take part in ride-sharing.",
    status: "In development",
  },
  plans: [
    {
      name: "Gonje Ride to Own",
      description: "A path to owning the vehicle your business or delivery riders use.",
    },
    {
      name: "Gonje Ride to Share",
      description: "A shared-access plan for businesses that don't need a dedicated vehicle full-time.",
    },
  ],
  benefits: [
    {
      title: "A fleet benefit of joining Gonje",
      description:
        "Available to vendors and suppliers on the platform, not sold as a separate product.",
      icon: "car",
    },
    {
      title: "Covers employees and logistics",
      description:
        "Use it for staff vehicles or for the delivery side of fulfilling Gonje orders.",
      icon: "truck",
    },
    {
      title: "Two ways in",
      description:
        "Ride to Own or Ride to Share — pick the plan that matches how much vehicle access your business actually needs.",
      icon: "line-chart",
    },
  ] satisfies readonly Feature[],
  closingCta: {
    title: "Ask about the fleet plans",
    lead: "Tell us about your vehicle or delivery needs and we'll follow up with the right plan.",
  },
} as const;

/**
 * Software as a Service (SaaS) — Gonje's own technology, offered to vendors
 * and suppliers rather than kept internal. Unlike EaaS/DaaS this isn't a
 * named third-party partnership, so descriptions are framed around what
 * Gonje's software already does (vendor dashboards, order substitution
 * logic, the DaaS driver app) rather than a signed external deal.
 */
export const saas = {
  intro: {
    eyebrow: "Software as a Service",
    title: "The software that runs Gonje, for your business",
    lead: "Gonje is a technology company as much as a marketplace. SaaS makes that same software — the systems behind your storefront, your orders and your payouts — available to run more of your business, not just the part that sells through Gonje.",
  } satisfies PageIntro,
  capabilities: [
    {
      title: "Scan QR to POS",
      description:
        "A customer scans a QR code at your counter to pay or collect a pickup order — it lands in the same Gonje dashboard as your online sales, so in-store and online are never two separate systems to reconcile.",
      icon: "credit-card",
    },
    {
      title: "Sales reporting",
      description:
        "One sales report across your Gonje storefront and in-counter QR/POS sales, building on the performance dashboards already included with your vendor account.",
      icon: "line-chart",
    },
    {
      title: "Customer service",
      description:
        "Helpdesk and live-chat tooling for your own storefront, on top of the 24/7 seller support Gonje already provides — so you're not running support on a spreadsheet and a shared inbox.",
      icon: "headphones",
    },
    {
      title: "Marketing automation",
      description:
        "Automated re-engagement emails, repeat-order reminders and personalised offers, extending the marketing and promotional placement already included with your Gonje storefront.",
      icon: "megaphone",
    },
    {
      title: "E-commerce",
      description:
        "Your Gonje storefront is a full e-commerce shopfront already — listings, checkout and payments, without you building or hosting any of it. SaaS is what lets that same engine power more of your business.",
      icon: "shopping-basket",
    },
    {
      title: "Data analytics",
      description:
        "Deeper trend, demand and customer analysis on top of the inventory management and quote-request reporting already in your vendor account.",
      icon: "database",
    },
    {
      title: "Artificial intelligence",
      description:
        "The same kind of logic already behind order substitutions and payment security checks on the Gonje marketplace — applied to demand forecasting, fraud detection and product recommendations for your own storefront.",
      icon: "sparkles",
    },
    {
      title: "Agentic AI",
      description:
        "An AI agent that can act, not just report — re-ordering stock, adjusting pricing within limits you set, or handling routine customer questions on your behalf.",
      icon: "bot",
    },
    {
      title: "Application development",
      description:
        "The same team building Gonje's driver app (see Data as a Service) is available to build custom features, integrations or internal tools for your business.",
      icon: "code",
    },
  ] satisfies readonly Feature[],
  closingCta: {
    title: "Ask about SaaS for your business",
    lead: "Tell us what you're trying to solve and we'll follow up with what's available.",
  },
} as const;
