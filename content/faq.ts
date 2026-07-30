import { company, service } from "@/lib/site";
import type { FaqItem } from "./types";

/**
 * Short FAQ shown on the home page. Answers stick to facts verified from the
 * marketplace (see lib/site.ts); anything not verified is flagged inline
 * rather than guessed at.
 */
export const faqs: readonly FaqItem[] = [
  {
    question: "How long does delivery take?",
    answer: `Most food orders arrive in ${service.foodDeliveryWindow}, averaging ${service.foodDeliveryAverage}. Grocery orders are delivered ${service.groceryDeliveryWindow}. Delivery runs ${service.hours}, with extended hours on weekends.`,
  },
  {
    question: "Where does Gonje deliver?",
    answer:
      "Across Melbourne. Coverage depends on which vendors deliver to your address, so enter your address on the marketplace to see what's available to you.",
  },
  {
    question: "Can I pick my order up instead?",
    answer:
      "Yes. Pickup is available at designated collection centres — choose it at checkout instead of delivery.",
  },
  {
    question: "How do I pay?",
    answer:
      "Visa, Mastercard, American Express and Discover; Apple Pay, Google Pay and Samsung Pay; PayPal; and buy-now-pay-later through Afterpay, Klarna or Affirm. Payments are processed by PayPal and Stripe.",
  },
  {
    question: "How do I sell on Gonje?",
    answer:
      "Apply through the vendor sign-up form. Plans start at $0/month, and our vendors page breaks down what each tier includes.",
  },
  {
    question: "Something's wrong with my order — who do I talk to?",
    answer: `Contact the Gonje team on ${company.phone} or email ${company.supportEmail}. Refunds and returns are handled through the marketplace where the order was placed.`,
  },
];
