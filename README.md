# InterpretNext website

Marketing site for **InterpretNext**, an interpreting brand by bayanTech.

**Live preview:** https://mhellawygap-ui.github.io/InterpretNext/
**Content still awaiting real data:** see [`docs/CONTENT-STATUS.md`](docs/CONTENT-STATUS.md), the QC tracker.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com). Design tokens live in `src/app/globals.css` (`@theme`).
- Fonts: Fraunces for headings and Inter for text, via `next/font`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`, with `NEXT_PUBLIC_BASE_PATH=/InterpretNext`.
Wrap image paths from `public/` in `asset()` (`src/lib/asset.ts`) so they resolve under that path.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero (video slot with a still fallback), proof strip, key facts, services, service finder, language checker, secure platform, how a session works, industries, category comparison, testimonial and engagements, procurement FAQ |
| `/services/` | Launch services, service finder, later-release roadmap |
| `/industries/` | 8 sector tabs, synced to the URL hash (`/industries/#legal`) |
| `/languages/` | Language checker, coverage explained, priority languages by region, request-a-language form (`?request=…` pre-fills it) |
| `/platform/` | Secure platform: protection, booking and management, integrations, security controls |
| `/how-it-works/` | How a session works, by setting |
| `/pricing/` | What affects the price, what's included, how to get a quote, procurement FAQ |
| `/trust-center/` | Certifications, security, privacy, quality and tiers, accessibility, legal documents, document request |
| `/about/`, `/contact/`, `/client-login/` | Company, contact form, portal access request |
| `/get-quote/` | 4-step quote form (launch services only); accepts `?modality=vri\|onsite\|rsi\|docs\|unsure` |
| `/icon-system/` | Icon reference (not in the menu) |

## Where content lives

All copy and facts are in `src/data/`, so pages don't need editing when content changes:

- `site.ts`: brand line, contact details, portal URL, hero video, **release matrix**
- `content.ts`: hero, facts, finder, platform, integrations, session steps, comparison, testimonial, engagements, pricing, procurement FAQ
- `services.ts`, `industries.ts`, `trust.ts`, `quote.ts`
- `languages.ts`: the **master language list**. The directory, checker, assistant and quote form all read it.

**Release rule:** only services and features with status `"launch"` in `RELEASES` may be promised.
Later items appear only as "Later release".

## Design system

- **Look:** white canvas, one subtle surface tone (`surface`), navy text, a single violet accent. Pink only in the logo.
  No gradients on text or buttons, and cards use a 1px border with no shadows.
- **Spacing:** 1200px content width, sections 96px apart on desktop and 64px on mobile.
- **Primitives** in `src/components/ui/`: `Section`, `SectionHeader`, `PageIntro`, `Button`, `Badge`, `Faq`, `CtaBand`, `Icon`.
- **Icons** (`Icon.tsx`): line glyphs (24px grid, 1.75 stroke) on a soft tile. The tile color names the dimension:
  services violet, industries rose, trust blue, capabilities green, tiers metal, help indigo.
  In a section, every item gets an icon from the same family or none do, and one row never mixes families.

## Assistant

A floating "Ask InterpretNext" launcher on every page opens a slide-over panel. It's rule-based and answers
only from site data (`src/components/assistant/engine.ts`). It says plainly that it is automated, and it answers
later-release questions (phone, on-demand, recording, AI) honestly. To connect a real AI or live chat later,
replace `respond()`.

## Quality checks run on every release

- Pages are checked at 1440, 1280, 768 and 390px for sideways overflow and broken images.
- axe-core (WCAG 2.1 AA and best practice) reports no issues on any page at 390 and 1280px.
- Every internal link and anchor resolves.
- No banned claims appear on any page.
- The quote, language request, document request, service finder, sector tabs, assistant and mobile menu flows all work.
