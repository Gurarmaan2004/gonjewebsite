/**
 * Rotating accent set used across steps, category cards and feature icons.
 *
 * Cycling through these is what stops the page reading as a single-hue
 * template — it gives the layout a market-stall mix without letting any one
 * component invent its own colour. Index into it with `produceAccent(i)`.
 */
export const produceAccents = [
  {
    /* Icon/number tile */
    tile: "bg-leaf-surface text-leaf border-leaf-border",
    /* Small pill used for examples and tags */
    pill: "border-leaf-border bg-leaf-surface text-leaf",
  },
  {
    tile: "bg-mango-surface text-mango border-mango-border",
    pill: "border-mango-border bg-mango-surface text-mango",
  },
  {
    tile: "bg-tomato-surface text-tomato border-tomato-border",
    pill: "border-tomato-border bg-tomato-surface text-tomato",
  },
  {
    tile: "bg-berry-surface text-berry border-berry-border",
    pill: "border-berry-border bg-berry-surface text-berry",
  },
] as const;

export function produceAccent(index: number) {
  return produceAccents[index % produceAccents.length];
}
