# InterpretNext — Website

Marketing site for **InterpretNext**, a Bayantech specialized interpretation brand.
Built from the [InterpretNext Figma design](https://www.figma.com/design/1ajrgXbLk8Ga3SWa7WMG9S/InterpretNext?node-id=49-11933) (home page, node `49:11933`).

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
