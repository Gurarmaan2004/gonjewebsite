# Gonje Design System

Locked-in foundations for gonje.com. Referenced by `CLAUDE.md` §5. Change values here
and in `app/globals.css` together — `globals.css` is the machine-readable source of truth.

> **Read §8 first.** The Spice Pantry direction is now the site-wide system. §2–§6 still
> describe the structure (container, rhythm, component states, motion), but the colour
> ramps and the display face in those sections were **retuned in §8** — the `ink-*`,
> `brand-*` and `accent-*` hexes quoted below are superseded. `globals.css` is authoritative.

---

## 1. Design direction

Gonje is a **local market**, not a logistics startup — and gonje.com is a user-facing
information site, not a corporate brochure. The visual language is warm, bright and
casual: closer to a good grocer's shopfront than to a SaaS dashboard.

Three rules that keep it off the stock-Tailwind path:

1. **Warm and bright, not cold or muted.** Backgrounds sit on a warm cream (`ink-50`).
   Saturated brand and produce tones do real work — full sections, button fills, icon
   tiles — rather than appearing only as pale washes.
2. **Rounded, friendly type.** A chunky rounded display face (Fredoka) over a rounded
   body face (Nunito). No serif: it read as editorial/corporate.
3. **No floating gradient blobs, no purple, no glassmorphism.** Depth comes from chunky
   2px borders, flat colour blocks and warm-tinted shadows.

## 2. Colour palette

Values live in `app/globals.css` under `@theme`. The two supplied brand colours are
**locked anchors**; everything around them was tuned for vibrancy.

### Brand — butter/gold (`brand-*`)
`#FBDDA2` is anchored at step **200**. The steps above it run hot (gold/amber) rather
than being a pale tint ramp, so the scale has vivid tones to reach for.

| Step | Hex | Use |
|---|---|---|
| 50 | `#FFFBF0` | Faintest wash |
| 100 | `#FEF3D8` | Alternating section background |
| **200** | **`#FBDDA2`** | **Primary brand surface** — hero wash, feature panels |
| 300 | `#FBCB6B` | Borders on butter, decorative rules |
| 400 | `#FBB233` | Vivid gold — accents, hover |
| 500 | `#F59A0B` | Gold button fill (**takes dark text, not white**) |
| 600–900 | `#DB7A06` → `#7A3B10` | Hovers, and text on butter backgrounds |

### Accent — leaf green (`accent-*`)
`#7CB340` anchored at step **400**. Steps 200/300 are punchy enough to fill surfaces.

| Step | Hex | Use |
|---|---|---|
| 50–100 | `#F4FCE8` / `#E6F8CB` | Section tone `leaf`, pill backgrounds |
| 200–300 | `#CDF09D` / `#ABE267` | Pill borders, marker underline |
| **400** | **`#7CB340`** | **Highlight** — icons, markers, dots |
| 500 | `#6DA033` | **Primary button fill** |
| 600–900 | `#557F27` → `#2E421D` | Green **text** (400 fails AA as text) |

### Produce accents
A rotating set that stops the page reading as a single-hue template. Applied via
`lib/produce-accents.ts` — index into it, never hand-pick per component.

| Token | Fill | Surface | Border |
|---|---|---|---|
| `leaf` | `#557F27` | `#F4FCE8` | `#CDF09D` |
| `mango` | `#C9760A` | `#FEF3D8` | `#FBCB6B` |
| `tomato` | `#D94B28` | `#FDECE6` | `#F7C4B4` |
| `berry` | `#B83A75` | `#FBEAF2` | `#F0BDD5` |

Fills are darkened enough to hold AA as text on their own surface.

### Neutrals — warm ink (`ink-*`)
Warm and creamy (`ink-50` is `#FFFBF2`, not a grey). Never use Tailwind's default
cool `gray`/`zinc`/`slate` in this project.

| Step | Hex | Use |
|---|---|---|
| 50 | `#FFFBF2` | Page background |
| 100 | `#FBF3E4` | Subtle surface |
| 200 | `#F0E5D0` | Default border |
| 300 | `#D9C9AC` | Strong border, decorative numerals |
| 400–500 | `#B3A488` / `#8C7F67` | Disabled, placeholder |
| 600 | `#6E6353` | Muted text |
| 700 | `#524A3E` | **Body text** |
| 950 | `#14100B` | **Headings / primary text** (warm black) |

### Semantic
`success` `#557F27` · `warning` `#B4690E` · `error` `#C0392B` · `info` `#2F6FB0`,
each with a matching `-surface` and `-border` token.

---

## 3. Typography

| Role | Family | Loaded as | Notes |
|---|---|---|---|
| Display / headings | **Baloo 2** | `next/font/google` | Superseded Fredoka in §8. Rounder and warmer; the family has Devanagari/Arabic siblings |
| Body / UI | **Nunito** | `next/font/google`, variable | Rounded terminals, warm, very readable at small sizes |

CSS variables: `--font-display` (`--font-fredoka`), `--font-sans` (`--font-nunito`).
Tailwind classes: `font-display`, `font-sans`.

**Scale** — Tailwind's default scale, no invented sizes. Conventional usage:

| Element | Classes |
|---|---|
| Page H1 | `font-display text-4xl sm:text-5xl lg:text-6xl` |
| Section H2 | `font-display text-3xl sm:text-4xl lg:text-[2.75rem]` |
| Card / sub H3 | `font-display text-xl sm:text-2xl` |
| Eyebrow | a **coloured pill**, not a tracked uppercase label — see §5 |
| Lead paragraph | `text-lg sm:text-xl leading-relaxed text-ink-700` |
| Body | `text-base leading-relaxed text-ink-700` |
| Meta / caption | `text-sm text-ink-600` |

Fredoka is a rounded face and is set at its natural width — only a hair of negative
tracking (`-0.005em`, applied globally to h1–h3). Default heading weight is `600`.

---

## 4. Layout rhythm

- **Container** — `components/ui/container.tsx`. `max-w-[76rem]` + `px-5 sm:px-8`.
  Never write ad-hoc `max-w-*` on a page.
- **Section** — `components/ui/section.tsx` owns vertical padding. Sizes `sm` /
  `md` *(default)* / `lg`.
- **Section tones** — `default` (page cream), `muted` (`ink-100`), `brand`
  (`brand-100`), `brandStrong` (`brand-200`), `leaf` (`accent-50`), `ink`
  (`ink-950`, inverted). Alternate tones between adjacent sections.
- **Section pattern** — `<Section pattern>` tiles `public/green-bg1.jpg`, the seamless
  line-art produce texture, at **360px** and **35% opacity**. It is a CSS background
  (`.bg-produce`), because a tiling texture cannot go through `next/image`. Used on the
  home page's *How it works* and *Why Gonje* bands. Keep body copy on a patterned
  section inside cards; the pattern is texture, not a backdrop for long prose.
- **Radii** — `rounded-3xl` for cards, `rounded-2xl` for icon tiles and FAQ rows,
  `rounded-full` for pills and buttons. Casual means rounder.
- **Borders** — cards and pills take a **2px** border. This is the main "sticker"
  cue that keeps the layout from feeling like a spec sheet.
- **Elevation** — `shadow-soft` / `shadow-lift`, both warm-tinted so they don't grey
  the cream background. Cards are defined by border first, shadow second.

---

## 5. Component states

Every interactive element ships hover, focus-visible and disabled from the start.

- **Focus** — one global treatment: 3px `accent-500` outline at 2px offset, applied via
  `:focus-visible` in the base layer so nothing can ship unfocusable.
- **Eyebrows** — rendered as a **coloured pill** (`SectionHeading`, `PageHero`), not as a
  small uppercase letter-spaced label. That label style is the single most
  corporate-reading detail in a marketing layout.
- **Buttons** (`components/ui/button.tsx`):
  | Variant | Rest | Use |
  |---|---|---|
  | `primary` | `spice-chili` fill, cream text | Main CTA → marketplace |
  | `accent` | `spice-turmeric` fill, **dark** text | Secondary conversion |
  | `outline` | white/70 fill, 2px border | Secondary **on light sections** |
  | `outlineInverse` | transparent, `ink-600` border, `ink-50` text | Secondary **on `ink` sections** |
  | `ghost` | transparent | Tertiary, nav |
  | `inverse` | white fill, `ink-950` text | On dark/`ink` sections |
  - `outline` has a white fill, so it **cannot** be recoloured with a text override on a
    dark background — use `outlineInverse` there.
  - Sizes `sm` / `md` / `lg`; disabled → `opacity-50`, `cursor-not-allowed`, no hover.
- **Links in prose** — `accent-700` text, `underline-offset-4`, `decoration-accent-300`,
  going `decoration-accent-600` on hover.
- **Reduced motion** — all Framer Motion reveals are gated on `useReducedMotion()`; the
  base layer also zeroes animation/transition durations under
  `@media (prefers-reduced-motion: reduce)`.

---

## 6. Motion

> **Deliberate departure from `CLAUDE.md` §7** ("don't over-animate"). The client
> asked for dramatic, obvious entrance animation on 2026-07-30. The rules below are
> the agreed replacement; §7's *spirit* still applies in that motion is **entrance
> only** — nothing loops, nothing hijacks scroll, nothing moves on a timer.

Framer Motion (shipped as the `motion` package) stays behind two client components:
`components/ui/reveal.tsx` and `components/ui/brush-underline.tsx`. Everything else is
a CSS transition. Sections using them remain server components.

**`<Reveal>` variants** — pick by role, don't hand-roll transitions:

| Variant | Motion | Use |
|---|---|---|
| `up` *(default)* | 56px rise + scale 0.96 | Body blocks, headings |
| `left` / `right` | 56px slide + scale 0.97 | Two-column halves, opposing directions |
| `scale` | scale 0.82 + 24px rise | Cards in a grid |
| `pop` | scale 0.6, spring with overshoot | Badges, eyebrow pills |
| `tilt` | scale 0.85 + −8° rotate + 40px rise | Hero illustration |

- **Easing** — expo-out `cubic-bezier(0.16, 1, 0.3, 1)`. The long deceleration is what
  reads as dramatic; a linear or `easeOut` curve does not.
- **Duration** — 0.85s default; up to 1.1s for large illustrations. `pop` uses a spring
  (stiffness 320, damping 16) so it overshoots.
- **Stagger** — ~0.12s per item (0.14s for large cards). Below ~0.1s a list reads as
  arriving all at once, which defeats the point.
- **Trigger** — `whileInView`, `once: true`, `margin: "-80px"`. Reveals play once; they
  do **not** replay on every scroll past, which becomes irritating on a long page.
- **Hover** — interactive cards lift 8px and scale 1.02 over 300ms.

**Non-negotiable:** every animated component checks `useReducedMotion()` and renders a
plain, unanimated element when the OS asks for reduced motion. The base layer in
`globals.css` also zeroes durations under `@media (prefers-reduced-motion: reduce)`.

---

## 7. Open items

Tracked from `CLAUDE.md` §8 — all three still need a decision from the client:

1. **Brand asset kit** — the real wordmark (`public/logo.webp`) is now in use in the header
   and footer. Two things still outstanding:
   - It is only **128×70**, so it is rendered small (36px tall) to stay sharp on retina.
     An SVG or larger raster would let it scale up.
   - Its green is `#507229` — near-identical to `accent-600` `#54802A`, which confirms the
     palette. On the `ink-950` footer that green is dark, so the footer logo gets a
     `brightness-125` lift. A proper light/reversed logo variant would be better.
2. **Hosting target** — not confirmed, so `output: 'export'` is **not** enabled. The build
   is a standard Node build. No contact form is wired yet for this reason.
3. **Testimonials** — none supplied. `content/testimonials.ts` exports an empty array and
   the section self-hides; no quotes are fabricated.

---

## 8. Spice Pantry — visual direction (2026-08)

Agreed after the previous look was judged to read as **tech consulting** rather than
hospitality / ethnic-food marketplace. Proven on the home hero and "How it works",
then **rolled out site-wide on 2026-08-02** — every page, the header and the footer.

The rollout worked by retuning the shared layer rather than editing pages one by one:
`ink-*` became a warm brown ramp, `brand-*` a turmeric ramp (still holding the mandated
`#FBDDA2` at step 200), `accent-*` a deep market green, and the produce accent set was
redrawn from the spice palette. `Button`, `Card`, `Badge`, `Section` and `SectionHeading`
were converted in place, so most sections followed automatically.

### Palette
Pulled from real ingredients and used **in combination** — several colour fields per
screen, never one pastel wash. Tokens are `--color-spice-*` in `globals.css`.

| Token | Hex | Role |
|---|---|---|
| `spice-cream` | `#FDF4E3` | Hero ground |
| `spice-cream-deep` | `#F6E7CC` | Adjacent band, so two sections never share a fill |
| `spice-turmeric` | `#E9A21B` | Marker swipes, the hero "plate", torn edges |
| `spice-chili` | `#C8371D` | Primary CTA, scribble circles |
| `spice-terracotta` | `#A8543A` | Handwritten kickers, fourth step |
| `spice-green` | `#1E5A3A` | Anchoring strips, secondary CTA |
| `spice-ink` | `#2A1D14` | All text, and every outline/offset shadow |

### Type
| Role | Family | Notes |
|---|---|---|
| Display | **Baloo 2** (`font-spice`) | Rounder and warmer than Fredoka; the family has Devanagari/Arabic siblings, which suits a multicultural marketplace |
| Accent | **Caveat** (`font-marker`) | Kickers, step numerals, proof points. **Never body copy** |
| Body | **Nunito** (`font-sans`) | Retained |

### Structure
- **No `<Section>`** in these two — that component's job is a flat tonal band, which is
  the thing being moved away from. Grounds are layered instead: paper fibre + produce
  tile + an organic colour field + a torn clip-path edge between bands.
- **Organic shapes** (`.blob-a`–`.blob-d`, `.shape-petal`) instead of rounded rectangles.
- **Asymmetric collage** — tiles differ in colour, size and silhouette. The *step row*
  was later straightened (2026-08-05): steps sit on one baseline and stay upright,
  because the staggered/tilted arrangement read as busy. Character comes from the tiles,
  not their placement. Hover still springs; it just doesn't rotate.
- **No pills.** `StampButton` is a squared, ink-outlined block on a hard offset shadow
  (`--shadow-stamp`) that presses into it on hover.
- **Handwritten numerals**, large and coloured — not faint grey counters.

### Motion
`Tilt` gives collage tiles a resting rotation and springs them toward upright on hover
(stiffness 300, damping 14) — bounce, not a corporate fade. Entrance still uses `Reveal`.

### The SSR `initial` trap — hit three times now
**Every Framer Motion `initial` is server-rendered as an inline style.** If the
animation never runs — reduced motion, or JS disabled/failed — that style is what the
user is left with, and React does *not* strip it on hydration. Each animated property
therefore needs a CSS escape hatch in the `prefers-reduced-motion` block **and** in the
`<noscript>` style in `app/layout.tsx`. Three have bitten so far:

| Property | Attribute | Reset |
|---|---|---|
| `opacity` / `transform` | `data-reveal` | `opacity: 1; transform: none` |
| `background-size` | `data-brush` | `100% 100%`, or `100% 0.46em` for `.marker-swipe` |
| `stroke-dashoffset` | `data-scribble` | `0` |

**Add a row here whenever you animate a new property.** Build and lint both pass while
the bug is live; only rendering the page under those conditions catches it.

Two shape traps as well:

1. **Marker accents must be background-images, not positioned bars.** `MarkerSwipe`
   paints via `.marker-swipe` + `box-decoration-break: clone`. A positioned bar stretches
   the full width of its box the moment the phrase wraps — verified broken at 1440px.
2. **`grocery-1.webp` is a transparent cutout, not a photograph.** Putting it in an
   outlined `PhotoSlot` frame traces an empty shape around it and reads as broken. It
   sits loose on a filled shape instead. Only true edge-to-edge photos get frames.

### Open items
4. **No food or market photography exists.** `PhotoSlot` renders designed textured
   colour tiles for now and takes a real image via `src` with no re-layout. Slots
   currently waiting: *a vendor behind their counter*, *a cooked dish, close up*.
   Photography is the single biggest remaining unlock for this direction.
5. `grocery-2.webp` and `animated-person1–4.svg` are **retired** from the new sections —
   flat vector illustration with radiating accents is the style being moved away from.

### Rollout notes
- **No pills anywhere.** `Button` is now the stamp language site-wide (squared, ink
  border, offset shadow, presses in on hover); `Badge` uses `.shape-tag`; the
  `SectionHeading` eyebrow is a handwritten kicker, not a pill.
- **`Card`** uses `.shape-card` — uneven corner radii, so it reads hand-cut without
  breaking a text box. `.shape-card-alt` mirrors it where a grid would otherwise repeat.
- **Every `Section` carries paper fibre** by default; flat colour fields are gone.
- **Contrast traps found in the sweep**, all fixed — worth re-checking on any new band:
  - `Card tone="ink"` matched the `ink` Section fill exactly, making those cards
    invisible. Card ink is now `spice-green` on a `spice-green-deep` band.
  - Sections on `leaf`/`ink` need `SectionHeading tone="inverse"`, or the heading and
    kicker render dark-on-dark. The home "Why Gonje" band shipped broken until caught.
  - Numerals and small text left on `accent-400` went low-contrast on green.
- **Retired assets**: `grocery-2.webp` and `animated-person1–4.svg` are no longer
  referenced anywhere. The About page figures became `PhotoSlot`s.
- **Photo slots now waiting on real photography**: *a vendor behind their counter*,
  *a cooked dish close up*, *the team packing an order*, *the West Footscray shopfront*.

### Inner-page parity (2026-08-03)
`/about`, `/vendors` and `/how-it-works` were brought up to the home page's density:

- **`PageHero`** now carries the home hero's layered ground — paper fibre, a turmeric
  blob, a produce-tile blob and a torn bottom edge — instead of a flat tonal band. It
  takes an optional `highlight` prop and splits the title around that substring to place
  the marker swipe, so `/content` doesn't have to pre-chop titles into fragments.
  **The highlight must be an exact substring of the title** or it silently no-ops.
- **`TornEdge`** (`components/ui/torn-edge.tsx`) is the shared ragged band edge. The
  `bottom` variant uses a different peak run from `top`, so stacked edges don't look
  like one stamp repeated. Its parent needs `overflow-hidden`.
- **`/how-it-works` now uses `StepsCollage`**, the same staggered component as the home
  page, rather than the old equal-width `Steps` grid.
- Icon tiles across all three pages are organic blobs with ink outlines and offset
  shadows; card grids get `Tilt` with alternating rest angles. On the pricing grid the
  featured plan sits upright at 0° while its neighbours tilt, which reads as emphasis
  without a different fill.

### Mobile menu
Full-screen translucent overlay (`bg-spice-cream/92` + `backdrop-blur-xl`) at `z-60`,
above the sticky header, carrying its own logo and close control so the header doesn't
show through as a second bar. `AnimatePresence` drives entry (fade + 16px drop, expo,
staggered items) and exit (fade + 12px lift, 0.25s). It is a real `role="dialog"`
`aria-modal` panel: Escape closes it, body scroll locks, focus moves to the close button
on open and returns to the trigger on `onExitComplete`. Under reduced motion every
duration collapses to 0 — the panel still opens and closes, it just cuts.

### Imagery
`grocery-1.png` (trolley) and `food-1.webp` (tacos) are both **transparent cutouts**, so
they use `PhotoSlot fit="contain"` — centred on the tone fill with breathing room.
`fit="cover"` is only for true edge-to-edge photographs; using it on a cutout clips the
subject. Two slots remain open: *a vendor behind their counter* and *a cooked dish close
up* in the home hero.
