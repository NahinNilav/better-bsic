# BSIC website redesign — V1

A production-shaped frontend redesign for Bangladesh Startup Investment Company PLC and ONKUR — Bangladesh Fund I.

The implementation preserves the live brand’s Playfair Display, DM Sans and DM Mono typography, institutional green/cream/coral palette, BSIC wordmark, key fund facts, shareholder context and published careers content. It rebuilds the experience around clearer information architecture, readable type, consistent templates, accessible interaction and transparent conversion paths.

## Run locally

```bash
npm ci
npm run dev:next
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build:next
npm run start:next
```

## Deploy to Vercel

1. Import this folder as a new Vercel project.
2. Keep the detected framework as **Next.js**.
3. The included `vercel.json` runs `npm ci` and `npm run build:next`.
4. Deploy.

The project is frontend-only. Pitch, contact and job application submissions are intentionally simulated; they do not transmit data. The pitch form’s Save draft action uses browser local storage.

## Implemented routes

The information architecture follows the live site's own content. Every section
maps to something BSIC has actually published; nothing is invented to fill a page.

- `/` — hero, what BSIC is, co-investment, ecosystem, shareholder banks, press, impact
- `/about` — mandate, structure, capital base and all 39 shareholders
- `/co-investment` — the five-stage process, scope and the Temasek/GIC precedent
- `/ecosystem` — the four programme areas and partner pathways
- `/impact` — BSIC's modelled ten-year outcomes, labelled as projections
- `/careers` — grouped open roles and hiring process
- `/careers/[slug]` — role detail for all six roles
- `/careers/[slug]/apply` — preselected mock application flow
- `/pitch` — founder intake, opening with the lead-investor question
- `/contact` — audience-routed mock enquiry flow
- styled 404 page

## The co-investment model

BSIC matches a lead investor the founder has already secured. It does not run an
open application funnel and does not set terms. The five stages — founder secures
lead, BSIC matches, joint diligence, local investors join, round closes — are
stated identically on the homepage, on `/co-investment` and in the pitch form.

## Before a public production launch

- Replace mock form confirmation with approved secure endpoints, spam protection and notification workflows.
- Have BSIC approve exact investment thresholds, governance biographies, privacy/retention language and regulatory disclosures.
- Replace the prototype `noindex` metadata with the final indexing policy.
- Add approved analytics, real-user Core Web Vitals monitoring, link checks and automated accessibility tests.
- Self-host/subset the three brand font families if licensing and asset files are available.
