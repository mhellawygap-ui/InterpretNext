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

## Pages

| Route | Figma frame | Notes |
| --- | --- | --- |
| `/` | home | |
| `/services/` | services | 9 expandable service cards; *Request Service* pre-selects the modality on the quote form |
| `/industries/` | Industry + sectors section | 8 sector tabs synced to the URL hash (`/industries/#legal`), "all industries" cards |
| `/languages/` | Languages | 6 region cards + searchable directory of 63 languages with region / modality / availability / domain filters (`/languages/?region=African`) |
| `/trust-center/` | trust center | Certifications, security, privacy, quality, accessibility, legal documents, documentation request form |
| `/get-quote/` | get quote + quote steps section | 4-step form with validation, confirmation summary; accepts `?modality=opi\|vri\|rsi\|onsite\|unsure` |

All navigation (header dropdowns, mobile menu, footer) is defined once in `src/lib/nav.ts`.

## Structure

```
src/
  app/                 one folder per route, plus layout (header/footer) and global tokens
  components/
    ui/                Button, Container, Eyebrow, SectionHeading, Pill, IconTile
    sections/          home page sections + Header/Footer
    page/              inner-page building blocks: PageHero, CtaBanner, Faq, Chip,
                       SectorExplorer, LanguageExplorer, DocRequest, QuoteFlow
  data/                page content (services, industries, languages, trust, quote)
  lib/                 nav map, asset() base-path helper
public/images/         assets exported from Figma
```

## Assistant

A floating "Ask InterpretNext" launcher appears on every page (`src/components/assistant/`). It opens a
slide-over chat panel: full screen on phones, a 400px side panel on desktop.

- **Avatar:** the brand's headset mark (`public/images/brand/assistant-avatar.webp`). It does not
  pretend to be a person, and the panel says it is an automated assistant.
- **What it can do today:** answers come only from the site's own data (`engine.ts`). It recommends
  a service from the visitor's situation, checks any of the 63 directory languages (including native
  scripts), answers compliance questions with links to the Trust Center, and hands off to a specialist
  through the quote form.
- **Behaviour:** Esc closes the panel and keyboard focus stays inside while it is open, then returns
  to the launcher. The conversation is kept for the browsing session. With reduced motion, the panel
  fades instead of sliding.
- **Opening it from other buttons:** call `openAssistant("recommend")` from anywhere. The
  "Ask the assistant" buttons already do this.
- **TODO(backend):** to connect a real AI or live chat, replace `respond()` in `engine.ts`; the UI
  stays the same.

## Icon system

All icons come from one component, `src/components/ui/Icon.tsx`. Each icon is a rounded tile
(26% radius) with a top-left → bottom-right gradient and a white glyph. That is the style of the
supplied VRI, RSI, On-site, 24/7 and NDA tiles, which are used as-is from `public/images/brand/`.
See every icon at `/icon-system/` (not linked from the nav).

**Color encodes the dimension (vertical):**

| Family | Color | Used for |
| --- | --- | --- |
| Services | one hue per modality (product identity) | OPI, VRI, RSI, On-site, Conference, ASL, Captioning, Document translation, AI speech, IMS |
| Industries | violet → magenta | the 8 sectors |
| Trust & compliance | NDA blue | certifications, legal documents, accessibility obligations |
| Capabilities & process | 24/7 green | stats, availability, timing, next steps |
| Tiers | metal per tier | Silver, Gold, Platinum |
| Help | indigo | support and "not sure" entry points |

**Rules**

1. Every icon belongs to exactly one family. Don't borrow a glyph from another family.
2. In a section, either every item gets an icon from the same family, or none do.
3. Never mix families in one strip or row. Use `IconStrip` with `SERVICE_STRIP` or
   `TRUST_STRIP`, or build a strip from a single family.
4. No emoji or 3D illustrations as icons.

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

Search the code for `TODO(` to find each of these.

- **Forms have no backend.** The quote form and the security-documentation form validate and show their confirmation screens, but nothing is sent anywhere yet (`QuoteFlow.tsx`, `DocRequest.tsx`).
- **Industry FAQ answers are drafts.** Figma shows the questions collapsed, so the answers were written from the page copy and need approval (`src/data/industries.ts`).
- **Quote dropdown options** (country, industry, duration, volume, frequency, platform, role, "how did you hear") are not in Figma; they are placeholders (`src/data/quote.ts`).
- **Language "Domain" filter** has no per-language data in Figma; it is derived from modalities for now (`src/data/languages.ts`).
- **Sector photos** on `/industries/` were cropped from Figma screenshots (the Figma API rate limit blocked the original image export). Replace the files in `public/images/sectors/` with the source images for full resolution.
- **No pages designed yet** for Client Login, About Bayantech, Careers or Case Studies, so those links point to existing pages.
- Service-finder copy for the VRI/RSI/Docs panels on the home page and the home language marquee are still placeholders.
- The assistant is rule-based (no AI or live-chat backend yet). See **Assistant** above.
