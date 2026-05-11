# Design System: Nabad

## 1. Visual Theme & Atmosphere

A warm editorial interface with the restraint of a high-end print magazine and the warmth of the Mediterranean. The atmosphere is organic yet precise — like a well-curated wellness studio in Beirut: cream walls, terracotta accents, natural light. Confident asymmetric layouts break the grid deliberately. Motion is fluid but never gratuitous — slow hero zooms, cascading text reveals, infinite marquees that breathe. The product feels lived-in from day one.

- **Density:** 4 / 10 — Art Gallery Airy. Sections breathe. Generous vertical rhythm.
- **Variance:** 7 / 10 — Offset Asymmetric. Split-screen hero, staggered grids, broken columns.
- **Motion:** 6 / 10 — Fluid CSS. Scroll reveals, hero zoom, perpetual marquee, word rotations.

---

## 2. Color Palette & Roles

- **Warm Cream** (`#EDEBE6`) — Primary canvas background. All light-mode sections default here.
- **Cream Deep** (`#E2DFD8`) — Secondary surface, alternate section backgrounds.
- **Warm Parchment** (`#D4CFC8`) — Chip fills, light card surfaces, subtle dividers.
- **Parchment Dark** (`#C2BBB1`) — Borders, muted UI lines, inactive states.
- **Terracotta** (`#B06E52`) — Single accent color. CTAs, active states, serif italics, brand moments. Saturation ~55% — warm but never shouty.
- **Terracotta Light** (`#C98B72`) — Hover states, stat numerals, secondary accent moments.
- **Terracotta Dark** (`#8E5740`) — Pressed states, deep brand accents.
- **Charcoal Ink** (`#1E1A17`) — Primary text, nav, headlines, dark section backgrounds.
- **Steel Slate** (`#717D8A`) — Secondary text, body copy, metadata, captions.
- **Slate Dark** (`#4A535D`) — Tertiary text, labels, form helper text.
- **Structural Line** (`rgba(26,23,20,0.10)`) — 1px dividers, card borders, input outlines.

**Rules:**
- One accent: Terracotta only. No second accent.
- No purple, no blue neon, no gradient text on large headlines.
- No pure black (`#000000`) — use Charcoal Ink (`#1E1A17`) everywhere.
- Warm grays only. Never mix with cool/blue grays.
- Dark sections use Charcoal Ink (`#1E1A17`) background — not `#000` or `#111`.

---

## 3. Typography Rules

- **Display / Hero:** `Fraunces` (optical size 9–144, weight 300–400) — track-tight (`-0.04em`), editorial scale via `clamp()`. Italic variant in Terracotta for emphasis words. Line-height 0.92–1.0 for large display. Never screaming — hierarchy through optical weight and italic contrast, not brute size.
- **Section Headlines:** `Fraunces` weight 400 — `clamp(40px, 5.5vw, 80px)`. Letter-spacing `-0.03em`. Line-height 1.0.
- **Body / UI:** `DM Sans` (optical size 9–40, weight 300–600) — 16px base, line-height 1.5. Max line-length 65 characters. Color: Steel Slate (`#717D8A`) for supporting copy.
- **Labels / Eyebrows:** `DM Sans` weight 600 — 11–13px, letter-spacing `+0.18em`, uppercase. Terracotta color with a `24px` horizontal rule leader.
- **Numerals / Stats:** `Fraunces` italic weight 300 — large tabular numerals. Enable `font-variant-numeric: tabular-nums` on data tables.
- **Monospace fallback:** System monospace for timestamps and credit counts only.

**Banned:**
- `Inter` — too neutral, no character.
- Generic serifs: `Georgia`, `Times New Roman`, `Garamond`, `Palatino`.
- All-caps headers as the primary hierarchy signal — use italic serif contrast instead.
- Orphaned words on last lines — use `text-wrap: balance` on all headlines.

---

## 4. Hero Section

The hero is editorial and immersive. A full-bleed photograph with a cinematic tint overlay. The brand wordmark is the largest typographic element on the page — set in Fraunces at `clamp(140px, 32vw, 260px)` with one letter in Terracotta italic. CTAs sit below the wordmark as a row of pill buttons.

- **Structure:** Centered composition with full-bleed imagery — wordmark dominates, photo recedes. Grain texture overlay (`opacity: 0.06, mix-blend-mode: overlay`) adds tactile depth.
- **Image Overlay:** `linear-gradient(180deg, rgba(30,26,23,.55) 0%, rgba(30,26,23,.35) 40%, rgba(30,26,23,.75) 100%)` — preserves mid-image clarity while grounding top and bottom.
- **Animation:** Hero background image performs a slow zoom-out (`scale(1.06)` → `scale(1)`) over 14s — cinematic, imperceptible, premium.
- **Chips / Social Proof:** Small pill tags below CTAs in frosted glass (`rgba(255,255,255,.08)` background, `backdrop-filter: blur(8px)`).
- **Banned in hero:** Scroll arrows, "Scroll to explore" text, bouncing chevrons, hero videos that auto-play with sound.

---

## 5. Component Stylings

**Buttons:**
- Primary: Terracotta fill (`#B06E52`), white text, `border-radius: 999px` (pill shape), `padding: 16–18px 26–32px`. Shadow: `0 12px 32px rgba(214,119,86,.32)` — tinted, not black.
- Hover: `translateY(-2px)` + elevated tinted shadow. Duration: `200ms ease-out`.
- Active/Press: `scale(0.97)` + `translateY(0)` — tactile feedback. Duration: `120ms`.
- Ghost: `rgba(255,255,255,.08)` background, `1px solid rgba(255,255,255,.2)` border, `backdrop-filter: blur(12px)` — used on dark backgrounds.
- Text link: No border, no background. Terracotta on hover, underline optional.
- **No outer glows. No neon. No custom cursors.**

**Cards (Mission / Studio / Testimonial):**
- Rounded: `border-radius: 14–24px`.
- Background: `#ffffff` on cream canvas. Shadow: `0 12px 30px rgba(30,26,23,.06)` — warm, diffuse, barely-there.
- Border: `1px solid rgba(26,23,20,0.10)` — structural, not decorative.
- Hover: `translateY(-6px)` + slightly elevated warm shadow. Duration `300ms`.
- Only use cards when elevation communicates hierarchy. For editorial text sections, use whitespace and dividers instead.

**Pricing Cards:**
- Standard: white card with ink border on featured card.
- Featured card: Charcoal Ink (`#1E1A17`) background, cream text. Slightly scaled up (`scale(1.04)`) to signal recommendation.
- Badge: Terracotta pill — "Most popular" in small caps.

**FAQ (Details/Summary):**
- `border-radius: 16px`, white background, `1px border`. Terracotta border on open state.
- Toggle indicator: `+` rotates `45deg` on open. Terracotta color.

**Filters / Chips:**
- `border-radius: 100px`, `1px solid` line color, white background. Active: Charcoal Ink fill + cream text.
- Transition: `200ms` all.

**Nav:**
- Fixed, `backdrop-filter: blur(18px)`. Background: `rgba(245,240,232,0.88)` at rest → `0.95` on scroll.
- Scrolled state: `padding` tightens `16px → 12px`, soft box shadow appears.
- Logo: Fraunces 26px, weight 400. Italic letter in Terracotta.
- CTA: Terracotta pill, same button spec as above.

**Phone Mockup (How It Works):**
- Dark chassis (`#1a1715`), `border-radius: 46px`, `padding: 10px`.
- Inner highlight: `0 0 0 1.5px rgba(255,255,255,.06) inset`.
- Ambient glow: `radial-gradient(60% 50%, rgba(217,119,87,.18), transparent 70%)` — terracotta halo behind device.
- Screen: Cream background, full Nabad UI in miniature.

**Loaders:**
- Skeletal shimmer matching exact layout shape — no circular spinners.
- Shimmer uses `background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent)` animated left-to-right.

---

## 6. Layout Principles

- **Container:** `max-width: 1280px`, centered with `margin: 0 auto`.
- **Section Padding:** `96px 48px` desktop → `64px 24px` mobile. Use `clamp()` for fluid transitions.
- **Hero:** `min-height: 100svh` — never `100vh` (iOS Safari viewport jump).
- **Grid:** CSS Grid for multi-column structures. No `calc()` percentage hacks with Flexbox.
- **3-Column Equal Feature Row:** BANNED. Use 2-column zig-zag, asymmetric 1.4fr/1fr split, or horizontal scroll card carousel.
- **Mission Grid:** 3-column on desktop, horizontal scroll-snap on mobile with pip dots.
- **Pricing Grid:** 4-column on desktop, horizontal scroll-snap on mobile (each card `flex: 0 0 78%`).
- **Testimonials:** 3-column grid on desktop, single column stack on mobile.
- **FAQ:** 2-column asymmetric (`1fr 1.4fr`) on desktop, single column on mobile.
- **Footer:** 4-column (`2fr 1fr 1fr 1fr`) on desktop, 2-column on mobile with brand spanning full width.
- **Overlap / Depth:** App section uses `border-radius: 48px 48px 0 0` with negative margin to layer over the section above.
- **Transitions between sections:** Use dedicated transition elements (rotating word bands, discipline chip tickers, SVG wave dividers) rather than abrupt section breaks.

---

## 7. Responsive Rules

- **< 768px (Mobile):** All multi-column grids collapse to single column. Nav links hidden — only logo + CTA visible. Hero switches to stacked vertical layout.
- **Scroll-snap carousels:** Mission cards, pricing cards use `scroll-snap-type: x mandatory` with `overflow-x: auto` and hidden scrollbar (`scrollbar-width: none`).
- **Typography:** All display type uses `clamp()`. Body minimum `14px`. Hero wordmark: `clamp(140px, 32vw, 260px)`.
- **Touch targets:** All interactive elements (buttons, chips, save hearts, nav links) minimum `44px` tap target.
- **Images:** Full-bleed hero image uses `object-fit: cover`, `object-position: center`.
- **Horizontal overflow:** Zero tolerance. Any horizontal scroll on mobile is a critical failure.

---

## 8. Motion & Interaction

**Easing Custom Curves:**
```css
--ease-out-strong: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-in-out-strong: cubic-bezier(0.77, 0, 0.175, 1);
--ease-spring: cubic-bezier(0.32, 0.72, 0, 1);
```

**Scroll Reveals (`.reveal`):**
- Initial: `opacity: 0; transform: translateY(28px)`.
- Triggered by IntersectionObserver at `threshold: 0.12`.
- Enter: `opacity: 1; transform: translateY(0)` in `800ms` with `--ease-out-strong`.
- Never animate `top`, `left`, `width`, `height` — only `transform` and `opacity`.

**Hero Word Reveal:**
- Each headline word: `overflow: hidden` wrapper, child `translateY(105%)` → `translateY(0)`.
- Stagger delay `150ms` between words. Duration `900ms cubic-bezier(.2,.8,.2,1)`.

**Hero Background Zoom:**
- `scale(1.06)` → `scale(1)` over `14s ease-out forwards`. Cinematic, barely perceptible.

**Marquee / Scroll Bands:**
- `animation: scroll-x 30–60s linear infinite`. GPU-accelerated via `will-change: transform`.
- Pause on hover: `animation-play-state: paused`.

**Rotating Word Stack:**
- `translateY` cascade animation, 4 words rotating every 2.25s. Smooth clip via `overflow: hidden` on container.

**Nav Scroll State:**
- Padding: `16px → 12px` via `transition: padding 300ms ease`.
- Background: opacity increase via CSS transition.
- Box shadow: fade in on scroll.

**Button Interactions:**
- Hover: `translateY(-2px)` + elevated shadow — `200ms ease-out`.
- Active: `scale(0.97)` — `120ms ease-out`. Tactile press feedback.

**Perpetual Micro-Interactions:**
- Live indicator dot: `pulse` keyframe — `opacity` + `scale(1.3)` every 2s infinite.
- Phone float: `translateY(-12px) rotate(2deg)` ↔ `translateY(0) rotate(-2deg)` over 6s ease-in-out infinite.

**Prefers Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Anti-Patterns (Banned)

- **No emojis** anywhere in the UI.
- **No `Inter` font** — use `Fraunces` + `DM Sans` exclusively.
- **No generic serifs** (`Georgia`, `Times New Roman`) — only `Fraunces` if serif is needed.
- **No pure black** (`#000000`) — use Charcoal Ink (`#1E1A17`).
- **No neon/outer glow shadows** — tinted warm shadows only.
- **No purple or blue gradients** — this is not a SaaS product.
- **No oversaturated accents** — Terracotta is already dialed to ~55% saturation.
- **No gradient text on large headlines** — color contrast through Terracotta italic, not gradients.
- **No custom mouse cursors.**
- **No 3-column equal-height card feature grids** — use asymmetric layouts.
- **No centered hero** when variance exceeds 4 — exception: Nabad uses wordmark-centered hero by deliberate brand choice.
- **No generic placeholder names** ("John Doe", "Acme Corp", "Nexus") — use culturally specific Lebanese names (Layla, Mira, Yara, Lina).
- **No fake round numbers** (`99.99%`, `50%`) — use organic data (`4.9`, `127 reviews`, `71 234 567`).
- **No AI copywriting clichés**: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry".
- **No filler UI text**: "Scroll to explore", "Swipe down", scroll arrow icons, bouncing chevrons.
- **No broken image links** — use Unsplash with explicit `?w=&q=&auto=format&fit=crop` params, or `picsum.photos` for placeholders.
- **No random dark sections** breaking a cream page without deliberate structural intent (e.g., the app/marquee sections use dark as intentional contrast bands).
- **No `height: 100vh`** — always `min-height: 100svh` or `min-height: 100dvh`.
- **No `transition: all`** — specify exact properties.
- **No animating `top`, `left`, `width`, `height`** — transform + opacity only.
- **No circular spinners** — skeletal loaders only.
- **No accordion FAQ** as the only FAQ pattern — use side-by-side `<details>` layout.
