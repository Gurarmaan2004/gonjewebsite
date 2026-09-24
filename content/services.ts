import type { Feature, PageIntro } from "./types";

/**
 * Energy as a Service (EaaS) and Data as a Service (DaaS) — two partner-led
 * offers for Gonje vendors/suppliers, not the marketplace itself. Copy here
 * is based on what was supplied in review; partner names (ESQ Energy, Origin,
 * Optus) are named but their logos are deliberately left blank pending real
 * assets, and specifics like pricing/eligibility are marked for follow-up
 * rather than invented.
 */

export const overview: PageIntro = {
  eyebrow: "Services",
  title: "More than a marketplace listing",
  lead: "Gonje partners with energy and fleet providers to bring vendors and suppliers benefits beyond the storefront — energy savings for the premises, and delivery/logistics support for the business.",
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
];

export const energy = {
  intro: {
    eyebrow: "Energy as a Service",
    title: "EaaS, in partnership with ESQ Energy",
    lead: "Powered by Origin and Optus, ESQ Energy's EaaS deal brings EV charging stations to Gonje vendor and supplier sites — as a benefit of joining Gonje, and a reason to.",
  } satisfies PageIntro,
  /** Named per review feedback. Logos intentionally left blank — see LogoSlot. */
  partners: ["ESQ Energy", "Origin", "Optus"],
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
  fleetPartner: "Origin 360 Business Fleet",
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
