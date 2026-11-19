# Content status

The live preview now follows **Copy Deck v1** (Mariam, 17 Nov 2026), the **Master Language List** (draft v1) and the
**Portal Roles Matrix v3**, applied on 19 Nov 2026.

Rules applied from the deck: no bracketed value is ever published, only **Safe** claims appear, nothing beyond release
R1 is promised, no competitor names, no slogans or "X, not Y", no em dashes.

Status key: **LIVE** = approved copy is on the site · **HIDDEN** = ready, but nothing shows until the data arrives · **HELD** = left out until the owner confirms

## Waiting for an owner

| # | Item | Status | Owner | What unlocks it | Where it changes |
|---|------|--------|-------|-----------------|------------------|
| 1 | **"Staffable today" and "Service modes"** for each language. Until any row is filled, all 290 languages are searchable, each says "Ask us to confirm availability", and no count is shown. Once filled, the site switches automatically: only Yes / On request rows are published, with real labels and a public count. | HIDDEN | Operations | Fill the yellow columns, then run `python3 -I scripts/import-languages.py <workbook.xlsx>` | `scripts/import-languages.py` → `src/data/languages.master.ts` |
| 2 | **Native review** of language names, scripts and diacritics (Igbo and Hausa first). 123 of 288 rows have a native name. | LIVE as draft | Localization (Mariam) | "Native reviewed" column | same workbook |
| 3 | **ASL** added by the website team as "to be confirmed". It is searchable but not advertised as a service. | HELD | Operations / Eng. Ouf | Confirm delivery | `scripts/import-languages.py` (web rows), `src/data/services.ts` |
| 4 | **English** added by the website team (Europe region, en-US / en-GB / en-CA / en-AU). | LIVE | Localization | Add it to the master workbook | `scripts/import-languages.py` |
| 5 | **Proof strip numbers**: [N] languages, [N] interpreters vetted, [N] hours since [year]. Only "Sessions are not recorded by default" and the tier line show, as the deck instructs. | HELD | Localization and Operations | Verified figures | `src/data/content.ts` → `PROOF` |
| 6 | **Response time** ("A specialist replies within [response time]", "within [one business day]", "by [time]"). Every response-time promise was removed. | HELD | Sales | Confirmed response time | `content.ts` FAQ, `QuoteFlow.tsx`, `LanguageChecker.tsx`, contact page |
| 7 | **Pricing paragraph** (per minute or hourly, minimums, after-hours and rare-language surcharges). The pricing page shows only the general drivers. | HELD | Sales | One short paragraph | `src/data/content.ts` → `PRICING`, `FAQ` |
| 8 | **Integrations** (Zoom, Teams, telehealth). The integrations list and the quote-form platform question were removed. | HELD | Eng. Ouf | Confirmed list | `src/data/content.ts` |
| 9 | **Encryption** in transit and at rest, including the audio and video path. | HELD | Eng. Ouf | Sign-off | `src/data/content.ts` → `PLATFORM_CONTROLS` |
| 10 | **Hosting provider and region, BAA availability**. The site says "Ask us about business associate agreements". | HELD | Eng. Ouf | Hosting confirmed and BAA signable | `content.ts`, `trust.ts` |
| 11 | **HIPAA final wording**. Interim wording used everywhere: "Built around HIPAA safeguards", status "In progress". | LIVE (interim) | Legal | Legal review | `src/data/trust.ts` → `IN_PROGRESS`, `content.ts` |
| 12 | **ISO 27001** (certified or "aligned with") and **ISO 18841** wording. ISO 17100, ISO 27001, GDPR and ATA badges were removed. | HELD | Compliance | Wording from compliance | `src/data/trust.ts` |
| 13 | **Simultaneous interpreting** is shown as "On request" (RSI console is R3 in the matrix). | LIVE | Operations / Eng. Ouf | Confirm delivery | `src/data/site.ts` → `RELEASES["conference-hybrid"]` |
| 14 | **Two-factor sign-in** is listed only as "Later release" (R2). | LIVE | Eng. Ouf | Ships in R2 | `src/data/trust.ts` → `IN_PROGRESS` |
| 15 | **Client quote** (named, with role and organization). The block stays hidden. No anonymous quotes. | HIDDEN | Sales and clients | Approved quote | `src/data/content.ts` → `TESTIMONIAL` |
| 16 | **Client logos**. | HIDDEN | Sales and clients (written permission) | Approved logos | `src/data/content.ts` → `CLIENT_LOGOS` |
| 17 | **Phone, email and address** in the footer and contact page. | HIDDEN | Operations | Contact details | `src/data/site.ts` → `CONTACT` |
| 18 | **Client portal URL**. "Client login" opens `/client-login/`. | HIDDEN | Product | Portal URL | `src/data/site.ts` → `CLIENT_PORTAL_URL` |
| 19 | **Hero video** (under 3 MB on mobile, muted, still fallback, never plays under reduced motion). | HIDDEN | Marketing | Video file and poster | `src/data/site.ts` → `HERO_VIDEO` |
| 20 | **Security summary for IT teams** (one page). Visitors can request it; there is no download yet. | HELD | Eng. Ouf and Legal | Approved PDF | `src/data/trust.ts` → `LEGAL_DOCS` |
| 21 | **On-demand date** ("On-demand access is planned for [date]"). The site says "planned for a later release". | HELD | Eng. Ouf / Sales | Date | `src/data/content.ts` → `FAQ` |
| 22 | **Forms have no backend**: quote, contact, language request, interpreter application, portal access, document request. They validate and confirm on screen, but nothing is sent yet. | HIDDEN | Engineering | Endpoint or CRM | `LeadForm.tsx`, `QuoteFlow.tsx`, `DocRequest.tsx` (`TODO(backend)`) |

## What changed on 19 Nov 2026

- **Navigation** follows deck section 5: Services, Industries, Languages (regions plus "Check a language"), Secure Platform, Interpreters, Trust Center, Resources, plus Client login and Request a quote.
- **Homepage** follows deck section 6 in order: hero, proof strip, service finder, industries, hard-to-staff languages (no ticker), interpreters and tiers, secure platform, four-step flow, trust summary, FAQ, closing call to action.
- **New pages**: `/secure-platform/` (deck section 8), `/interpreters/` (with "Apply to join"), `/resources/`. `/platform/` was renamed to `/secure-platform/`.
- **Services** match R1: remote interpreting by video, on-site, conference and event interpreting (on request), document translation. Sign language and captioning were removed until confirmed. Later: on-demand (R2), phone dial-in (R3), recording and transcripts (R3).
- **Industries**: the five sectors in deck section 6.4.
- **Languages page** follows deck section 7: search, availability labels, 10 regions from the master list (each language once), "Dialects matter", and a request form with language, dialect or region, service type and expected volume.
- **Quote form** follows deck section 9: "Language and dialect", date, time and time zone, expected duration, "Is this urgent?", subject area, video-only remote option, confidentiality line under the button, new confirmation text.
- **Removed**: comparison table, "Typical engagements", the Figma testimonial, integrations, 200+ claims, "one business day" promises, ISO / GDPR / ATA badges.
