/**
 * Rotating accent set used across steps, category cards and feature icons.
 *
 * Cycling through these is what stops the page reading as a single-hue
 * template — it gives the layout a market-stall mix without letting any one
 * component invent its own colour. Index into it with `produceAccent(i)`.
 */
export const produceAccents = [
  {
    /* Icon/number tile — hand-cut silhouette, ink outline, offset shadow. */
    tile: "bg-spice-green text-spice-cream border-spice-ink shadow-stamp-sm",
    /* Small tag used for examples and categories. */
    pill: "border-leaf-border bg-leaf-surface text-leaf",
  },
  {
    tile: "bg-spice-turmeric text-spice-ink border-spice-ink shadow-stamp-sm",
    pill: "border-mango-border bg-mango-surface text-mango",
  },
  {
    tile: "bg-spice-chili text-spice-cream border-spice-ink shadow-stamp-sm",
    pill: "border-tomato-border bg-tomato-surface text-tomato",
  },
  {
    tile: "bg-spice-terracotta text-spice-cream border-spice-ink shadow-stamp-sm",
    pill: "border-berry-border bg-berry-surface text-berry",
  },
] as const;

export function produceAccent(index: number) {
  return produceAccents[index % produceAccents.length];
}
