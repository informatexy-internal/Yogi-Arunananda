# Design context — Yogi Arunananda

The single source of truth for how this site looks and feels. **Every new page must follow it.**
When the design changes, update this file in the same commit.

- **Figma:** file `X71FtkervJFtzPr6lBHzV8` ("Yoga"), landing page frame `106:158`
  (https://www.figma.com/design/X71FtkervJFtzPr6lBHzV8/Yoga?node-id=106-158)
- **Design width:** 1440px desktop. Tablet and phone layouts are not in Figma; they follow the rules below.
- **Tokens live in** `src/styles.css` (`:root`). Use the variables; do not hard-code colors or fonts.

## Brand feel

Calm, grounded, spiritual. Deep forest green, warm cream and stone neutrals, classical serif headings,
clean sans body, generous spacing, soft rounded photos. No bright accents, gradients or heavy effects.

## Color

| Token | Hex | Use |
|---|---|---|
| `--green` | `#2f513a` | Hero and footer background, primary buttons, cards, icon discs, active lines |
| `--cream` | `#f7f3ea` | Section background (Teachings, Services) |
| `--stone` | `#f1efee` | Section background (About, Ashram, Journey), icon discs on green |
| `--panel` | `#f5f1ec` | Inner panel behind the About block |
| `--muted` | `#555555` | Body and lead text on light backgrounds |
| `--ink` | `#000000` | Headings on light backgrounds |
| `--text-default` | `#1e1e1e` | Item titles in list rows |
| `--text-brand` | `#2c2c2c` | Text on white buttons |
| `--line-idle` | `#e0e9e3` | Inactive left border on list rows |
| `--brown` | `#7d5a31` | Thin ring on the outlined icon badge only |
| white | `#ffffff` | Text on green, icon badges, photo frames |

Section backgrounds alternate: **green (hero) → stone → cream → stone → cream → stone → green (footer)**.
Keep that rhythm when adding sections.

## Typography

Both fonts are self-hosted through `@fontsource` (imported in `src/main.tsx`). Do not load fonts from a CDN.

- **Headings and labels:** Cormorant Garamond (weights 400, 500, 600, 700)
- **Body, buttons, UI:** Rethink Sans (weights 400, 600)
- All text uses line-height `1.4` unless noted.

| Role | Class | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Page title / big heading | `.h-xl` | Cormorant | 64px | 700 | ink (white on green) |
| Section heading, medium | `.h-lg` | Cormorant | 54px | 700 | ink |
| Service card title | `.service-text h3` | Cormorant | 36px | 700 | ink |
| Kicker (small label above a heading) | `.kicker` | Cormorant | 24px | 400 (600 for `SELFLESS SERVICE`) | ink |
| Card / item title | — | Cormorant | 24px | 600 (500 active, 400 idle) | white or `--text-default` |
| Lead paragraph | `.lead` | Rethink | 24px | 400 | `--muted` (white on green) |
| Card body | — | Rethink | 16px or 20px | 400 | white or `--muted` |
| Nav and big buttons | — | Rethink | 24px | 400 | white |
| Small buttons | — | Rethink | 16px | 400 | white |
| Footer links | — | Cormorant | 14–16px | 400 | white |
| Footer legal | — | Rethink | 14px | 400 | white |

Kickers are written ALL CAPS (`ABOUT`, `ANANDA ASHRAM DANG`, `SELFLESS SERVICE`) except `Teachings`, which
matches the design.

## Layout and spacing

- **Container:** `.container`, max width `1200px`, centered. Sections are full-width bands; content sits in the container.
- **Side gutters:** `24px` on tablet and desktop, `16px` on phones.
- **Section vertical padding:** `70px` for major blocks, `50px` for centered heading blocks, `48px`/`34px` for inner rows.
- **Hero:** top nav padding `40px`, `66px` gap to content, `124px` bottom padding.
- **Gaps used:** 6, 10, 12, 14, 15, 20, 21, 26, 34, 36, 45, 46, 48, 92, 118 (taken straight from Figma; reuse before inventing new values).

### Radii

| Value | Use |
|---|---|
| 2px | small buttons in hero |
| 4px | eyebrow label |
| 10px | standard buttons |
| 14px | hero photo, About photo frame |
| 18px | About cards, service photos |
| 20px | large photos |
| 26px | "Read more" pill |
| 100px | circular icon discs and logo |

### Shadow

About cards only: `--shadow-card` = `0 1px 1px rgba(0,0,0,.3), 0 2px 3px rgba(0,0,0,.15)`.
Nothing else casts a shadow.

## Components

| Component | Markup / class | Notes |
|---|---|---|
| Primary button | `.btn .btn-green` + size (`.btn-md`, `.btn-lg`, `.btn-sm`) | Green fill, white text, `10px` radius, arrow badge on the right |
| Outline button (on green) | `.btn .btn-outline-light` | White 1px border, white text |
| Light button | `.btn .btn-light` | White fill, `--text-brand` text |
| Pill button | `.btn .btn-green .btn-pill` | `26px` radius, text only |
| Arrow badge | `<ArrowBadge src size>` | White circle holding a black arrow; sizes `xs`, `md`, `lg`; the small hero variant is `.badge-dot` |
| Icon disc | `.icon-disc` + `-light` or `-green` | `100px` radius, `12px` padding, 44px icon |
| About card | `.about-card` | Green, `18px` radius, shadow, icon disc left, title + two lines right |
| List row | `.teaching-item` | `4px` left border: `--green` when active, `--line-idle` otherwise |
| Service card | `.service-card` | 368px wide, photo `243px` tall, title, body, pill button |
| Section header | `.section-head` | Centered kicker + heading + lead |
| Footer | `.footer` | Green; brand row, three link columns, legal row |

Interactive states: hover lowers opacity to `.88`; focus shows a `2px --brown` outline with `3px` offset.
Buttons must be `<a>` or `<button>`, never a clickable `<div>`.

## Images

All assets are imported through Vite from `src/assets/` so they get hashed and cached.
**Never** reference Figma asset URLs (they expire after 7 days).

```
src/assets/
  brand/            logo (png, 256px)
  images/
    home/           hero, about, teachings, ashram, journey  (.jpg)
    services/       education, community, relief            (.jpg)
    <new-page>/     one folder per page for new photos
  icons/
    ui/             arrows used inside buttons (arrow-xs / sm / md / md-alt / lg)
    feature/        lotus, book, leaf — `-dark` for light discs, `-light` for green discs
    social/         youtube, instagram, facebook
public/             favicon.png only (files served as-is)
```

Rules:
- Photos are JPEG at quality 95 with no chroma subsampling. Do not re-compress already-compressed files.
- Store photos at **2× the displayed size** so they stay sharp on retina screens. Hero source images must be at
  least 1800px wide; the current hero (600px source) and teachings (452px source) are limited by the Figma originals.
- Photos use `object-fit: cover` inside a fixed-ratio frame. Crops are expressed in `%`, never fixed pixels, so
  they scale on every device (see `.journey-photo`).
- Icons are SVG with their original `width`/`height` kept; do not draw a background rectangle inside an icon.
- Give every `<img>` meaningful `alt` text, or `alt=""` when purely decorative.
- Name files in lowercase kebab-case by what they show, not by where they are used.

## Responsive rules

| Breakpoint | Behavior |
|---|---|
| `> 1100px` | Desktop layout as designed (1440 reference) |
| `≤ 1100px` | Two-column rows stack to one column; heading sizes drop (`.h-xl` 48px, `.h-lg` 42px); nav wraps; service cards wrap and center |
| `≤ 640px` | Gutters 16px; `.h-xl` 36px; main nav links hidden; forced line breaks hidden; buttons shrink |

Rules for new pages:
- Build desktop first from the Figma frame, then make sure nothing overflows at 390px, 820px and 1440px.
- No horizontal scroll at any width.
- Hide hand-placed `<br />` line breaks on phones; write `{" "}` before each `<br />` so words never join.

## Content and voice

- Name used in copy: **Yogi Arunananda Muni**. Short brand mark: **Arunananda**.
- Tone: humble, practical, calm. Short sentences. No hype or marketing language.
- Topics: Yoga, Meditation, Tantra, Ayurveda, spiritual wisdom, selfless service.
- Footer legal text (copyright + YouTube disclaimer) stays on every page.

## Adding a new page

1. Add the Figma frame link to the table below.
2. Reuse the tokens, components and section rhythm above before creating anything new.
3. Put new photos in `src/assets/images/<page-name>/` and icons in the matching `icons/` folder.
4. Reuse the header (brand + nav + "Watch YouTube") and footer exactly.
5. Check 390px, 820px and 1440px, and run `npm run build`.
6. Update this file if you introduce a new color, size, component or breakpoint.

| Page | Figma | Status |
|---|---|---|
| Home (landing) | node `106:158` | Built |

## Intentionally left out for now

These were designed or discussed but removed from the landing page. Re-add them when the site grows more pages.

- Ashram location map and pin — Google Maps link: https://maps.app.goo.gl/xAjotHF2LP7RF91o7
  (place "ANAND ASHRAM", 20.6666006, 73.8133995). The footer "Location" link still points to it.
- WhatsApp channel follow banner — channel: https://whatsapp.com/channel/0029Vb6wcL9GU3BBZR7YyC0w
  (footer WhatsApp entry and "Get in Touch" still link to it).
