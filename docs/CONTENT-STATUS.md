# Content status: drafts awaiting real data

Everything below is live on the preview as **draft copy or a template**. Each item lists the owner who must
confirm it and the single file where it changes. Replacing a value there updates every page that uses it.

Status key: **DRAFT** = placeholder copy is live · **HIDDEN** = template is ready but nothing shows until data arrives · **HELD** = removed until approved

| # | Item | Status | Owner | Where to change it |
|---|------|--------|-------|--------------------|
| 1 | **Release matrix** (launch vs later). Launch: scheduled video, on-site, simultaneous events, conference, sign language and captioning, documents, rare-language sourcing, online requests. Later: on-demand calls, phone dial-in, session recording, AI speech translation, portal reporting. | DRAFT | Product / Eng. Ouf | `src/data/site.ts` → `RELEASES` |
| 2 | **Copy deck**: homepage, services, industries, platform, pricing, how-it-works, about. Written in buyer vocabulary, without "X, not Y" lines, heavy dashes or competitor names. | DRAFT | Marketing | `src/data/content.ts`, `services.ts`, `industries.ts`, page files in `src/app/` |
| 3 | **Master language list**: 74 languages across 7 regions. Each is marked "core network" or "sourced on request". No speaker counts. Spanish is in Americas only, Urdu in South Asia, and "Sudanese" reads "Arabic (Sudanese)". The directory, checker, assistant and quote form all read this one list. | DRAFT | Operations | `src/data/languages.ts` |
| 4a | **HIPAA wording**: "In progress" everywhere (Trust Center, FAQ, industries, assistant). | DRAFT | Legal | `src/data/trust.ts`, `content.ts` FAQ, `industries.ts` |
| 4b | **ISO 17100**: removed from every page. | HELD | Compliance | re-add in `src/data/trust.ts` → `STANDARDS` |
| 4c | **ISO 27001, GDPR and ATA** claims: listed as Active, with bayanTech as holder. | DRAFT | Legal | `src/data/trust.ts` → `STANDARDS` |
| 4d | **Brand line**: "An interpreting brand by bayanTech". There are no Teqneyat Group mentions anywhere. | DRAFT | Legal | `src/data/site.ts` → `COMPANY` |
| 5 | **Secure platform technical lines**: encryption in transit, role-based access, no recording at launch, access logs, incident response, subprocessor review, encryption at rest. | DRAFT | Eng. Ouf → Legal | `src/data/content.ts` → `PLATFORM`, `src/data/trust.ts` → `SECURITY_ITEMS` |
| 6a | **Contact email, phone and address**: nothing is published until set. The contact page uses a form. | HIDDEN | Operations | `src/data/site.ts` → `CONTACT` |
| 6b | **Client portal URL**: "Client login" opens `/client-login/`, an access-request page. | HIDDEN | Product | `src/data/site.ts` → `CLIENT_PORTAL_URL` |
| 6c | **About page** story and values. | DRAFT | Marketing | `src/app/about/page.tsx` |
| 7a | **Client logos**: the strip shows sectors until approved logos are added. | HIDDEN | Marketing (written permission needed) | `src/data/content.ts` → `CLIENT_LOGOS` |
| 7b | **Testimonial**: the quote from the Figma file, lightly edited. | DRAFT | Marketing (approval and attribution needed) | `src/data/content.ts` → `TESTIMONIAL` |
| 7c | **Case studies**: shown as "Typical engagements", with no client names and no results claimed. | DRAFT | Marketing | `src/data/content.ts` → `ENGAGEMENTS` |
| 8 | **Hero video**: a still product visual is shown. The video plays only when configured, and never for visitors who prefer reduced motion. | HIDDEN | Marketing | `src/data/site.ts` → `HERO_VIDEO` (a 10–15 s silent MP4 of 3 MB or less, plus a poster image, in `public/videos/`) |
| 9a | **Integrations**: described by category; no vendors are named until confirmed. | DRAFT | Product / Eng. Ouf | `src/data/content.ts` → `INTEGRATIONS` |
| 9b | **Pricing drivers, inclusions and procurement FAQ**. | DRAFT | Sales / Finance | `src/data/content.ts` → `PRICING`, `PROCUREMENT_FAQ` |
| 10 | **"200+ languages" and "one business day" claims**. | DRAFT | Operations | `src/data/content.ts`, page copy |
| 11 | **Quote form dropdown options** (country, duration, volume, role…). | DRAFT | Sales | `src/data/quote.ts` |
| 12 | **Forms have no backend**: quote, contact, language request, portal access and document request. They validate and confirm on screen, but nothing is sent yet. | DRAFT | Engineering | `LeadForm.tsx`, `QuoteFlow.tsx`, `DocRequest.tsx` (`TODO(backend)`) |
| 13 | **Assistant** is rule-based and answers only from site data. | DRAFT | Product | `src/components/assistant/engine.ts` |

## Removed in this release

- Mock "live" widgets: the session timer, "Connected in 9s", "Mandarin – 12 online", "<10s average connection" and "Updated Live". The hero now shows a static example in Arabic and French.
- Launch-release claims: "connects in seconds", "no app" and 24/7 or on-demand promises.
- Internal drafting notes on the Trust Center.
- The scrolling language ticker. Its languages now live in the master list.
- Speaker counts.
- The "All languages" menu item.
- Spelling and naming fixes: Mandarin, Wolof, Sinhala, NGOs, bayanTech, "on standby". The tiers are now ordered 1 Silver, 2 Gold, 3 Platinum.
