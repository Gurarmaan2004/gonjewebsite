import type { Testimonial } from "./types";

/**
 * INTENTIONALLY EMPTY.
 *
 * CLAUDE.md §6/§7: do not fabricate testimonials. No real customer quotes have
 * been supplied yet, so this list stays empty and <Testimonials /> renders a
 * clearly-marked placeholder slot instead of invented praise.
 *
 * To go live: drop real quotes in here and the section renders automatically.
 */
export const testimonials: readonly Testimonial[] = [];
