/**
 * Illustrative example numbers, requested in review to show cost-per-plate at
 * a glance for different household sizes. These are NOT figures pulled from
 * real order data — CLAUDE.md §7 says not to invent factual claims, so this
 * is presented on-page as a worked example rather than a verified average.
 * Replace with real order data once it exists.
 */
export const savings = {
  eyebrow: "What it costs, per plate",
  title: "See it as cost per plate, not just the weekly shop",
  lead: "A worked example of what a week of Gonje orders can look like by household size — not a quote, but a feel for the maths.",
  disclaimer: "Illustrative example only. Actual spend depends on the vendors and items you choose.",
  rows: [
    { people: 1, weeklySpend: 150, spendLabel: "$150/week", plates: 14 },
    { people: 2, weeklySpend: 220, spendLabel: "$220/week", plates: 28 },
    { people: 3, weeklySpend: 300, spendLabel: "$300/week", plates: 42 },
    { people: 4, weeklySpend: 380, spendLabel: "$380/week", plates: 56 },
    { people: 5, weeklySpend: 500, spendLabel: "$500+/week", plates: 70 },
  ],
} as const;
