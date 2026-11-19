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
| `/` | Copy deck section 6 in order: hero, proof strip, service finder, industries, hard-to-staff languages, interpreters and tiers, secure platform, how a session works, trust summary, FAQ, closing call to action |
| `/services/` | Launch services (R1), service finder, later-release list |
| `/industries/` | 5 sector tabs, synced to the URL hash (`/industries/#legal`) |
| `/languages/` | Language checker, availability labels, all languages by region (10 regions), dialects, request form (`?request=…` pre-fills it) |
| `/secure-platform/` | What the platform does on launch day, controls table, what we keep, security summary request |
| `/interpreters/` | How we choose interpreters, tiers, apply-to-join form |
| `/resources/` | Guides and the full FAQ |
| `/how-it-works/` | The four-step flow (quote, approve, assign, session and follow-up) |
| `/pricing/` | What affects the price and what every booking includes |
| `/trust-center/` | What we do, in progress, interpreters, accessibility, documents you can ask for, document request |
| `/about/`, `/contact/`, `/client-login/` | About bayanTech, contact form, portal access request |
| `/get-quote/` | 4-step quote form; accepts `?modality=vri\|onsite\|rsi\|docs\|unsure` |
| `/icon-system/` | Icon reference (not in the menu) |

## Where content lives

All copy and facts are in `src/data/`, so pages don't need editing when content changes:

- `content.ts`: Copy Deck v1 (hero, proof, finder, languages block, interpreters, platform, steps, trust summary, FAQ, pricing)
- `site.ts`: brand line, contact details, portal URL, hero video, **release matrix** from the Portal Roles Matrix
- `services.ts`, `industries.ts`, `trust.ts`, `quote.ts`
- `languages.ts` + `languages.master.ts`: the **master language list**. The checker, directory, assistant and quote form all read it.

**Updating languages:** run `python3 -I scripts/import-languages.py path/to/InterpretNext_Master_Language_List.xlsx`.
Once any "Staffable today" cell is filled, the site publishes only Yes / On request languages, with labels and a count.

**Release rule:** only items with status `"launch"` (or `"request"`, shown as "On request") in `RELEASES` may be promised.
Later items appear only as "Later release". Open items and owners: [`docs/CONTENT-STATUS.md`](docs/CONTENT-STATUS.md).

## Design system

- **Idea:** two languages meeting through a skilled person. The hero's "conversation bridge" (Arabic and English
  joined through the interpreter, by the logo gradient) is the signature element. Everything around it stays quiet.
- **Rhythm:** sections alternate white, lavender (`surface`) and deep navy glow (`bg-glow`), so a change of
  background marks a new kind of content. Inner pages open on a lavender wash (`bg-wash`).
- **Color:** navy `#0b1045`, violet `#5b2bd1`, pink `#e0336f` (highlights, rare languages, logo gradient `bg-logo`).
- **Type:** Fraunces headings (H1 64px, H2 44px) and Inter text (17px leads).
- **Hierarchy:** featured service card, connected session timeline, highlighted InterpretNext column in the comparison, quote panel.
- **Icons** (`Icon.tsx`): line glyphs on a soft tile, with the tile color naming the dimension. One family per section or row.
- **Motion** (`src/components/motion/`):
  - Scroll progress bar in the header.
  - One-time hero entrance and a voice waveform.
  - Scroll reveals, count-up facts and a timeline that fills.
  - Card lift on hover.
  - Only transform and opacity animate. Everything is static under reduced motion, and content stays visible without JavaScript.

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
