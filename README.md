# InterpretNext — Website

Marketing site for **InterpretNext**, a Bayantech specialized interpretation brand.
Built from the [InterpretNext Figma design](https://www.figma.com/design/1ajrgXbLk8Ga3SWa7WMG9S/InterpretNext?node-id=49-11933) (home page, node `49:11933`).

**Live site:** https://mhellawygap-ui.github.io/InterpretNext/

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in `src/app/globals.css` (`@theme`)
- Fonts: Fraunces (display, `WONK` axis on) and Inter, via `next/font`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages
via `.github/workflows/deploy.yml`. The workflow sets `NEXT_PUBLIC_BASE_PATH=/InterpretNext`
because Pages serves the site from that sub-path.

When adding images from `public/`, wrap the path with `asset()` from `src/lib/asset.ts`
(e.g. `src={asset("/images/logo.png")}`) so it resolves under the base path.

To preview the production build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/InterpretNext npm run build
mkdir -p /tmp/site && cp -r out /tmp/site/InterpretNext && npx serve /tmp/site
# then open http://localhost:3000/InterpretNext/
```

## Structure

```
src/
  app/                 layout, page, global tokens
  components/
    ui/                Button, Container, Eyebrow, SectionHeading/GradientText, Pill, IconTile
    sections/          one file per page section, in page order:
                       Header, Hero, TrustedBar, Stats, ServiceFinder (interactive tabs),
                       Industries, LanguageMarquee, WhyUs, Tiers, Compliance,
                       HowItWorks, Testimonial, GetStarted, Footer
public/images/         assets exported from Figma
```

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `brand` | `#080c41` | primary buttons, dark bands |
| `accent-1` | `#6528cb` | eyebrows, borders, links |
| `accent-2` | `#f32f7e` | highlights, rare-language chips |
| `background` | `#faf7ff` | page background |
| `foreground` / `muted` | `#0a0a14` / `#45444a` | text |
| `border` | `#c7c5cc` | card borders, dividers |

Brand gradient (`bg-brand-gradient`, `text-gradient`): `#080c41 → #6528cb → #f32f7e`, left to right.

## Open items

- **Service finder:** Figma only specifies the *Phone Call → OPI* panel. Copy for the VRI, RSI and Docs panels is placeholder (`TODO(content)` in `ServiceFinder.tsx`).
- **Language marquee:** every chip in Figma says "Somali" as a placeholder; it now shows a representative list (`TODO(content)` in `LanguageMarquee.tsx`).
- Nav dropdowns, Client Login, the assistant, and the contact/demo flows link to anchors only; there are no designs for them yet.
