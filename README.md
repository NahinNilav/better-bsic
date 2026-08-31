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

- `/` — redesigned institutional homepage
- `/approach` — thesis, criteria, process and founder FAQ
- `/portfolio` — honest launch/deployment state
- `/ecosystem` — programs and partner pathways
- `/about` — mandate, structure, governance and shareholders
- `/insights` — launch coverage and editorial roadmap
- `/careers` — grouped open roles and hiring process
- `/careers/[slug]` — consistent detail template for all six roles
- `/careers/[slug]/apply` — preselected mock application flow
- `/pitch` — three-step founder intake with save/resume and confirmation
- `/contact` — audience-routed mock enquiry flow
- `/privacy`, `/terms`, `/accessibility`, `/disclosures`
- styled 404 page

## Before a public production launch

- Replace mock form confirmation with approved secure endpoints, spam protection and notification workflows.
- Have BSIC approve exact investment thresholds, governance biographies, privacy/retention language and regulatory disclosures.
- Replace the prototype `noindex` metadata with the final indexing policy.
- Add approved analytics, real-user Core Web Vitals monitoring, link checks and automated accessibility tests.
- Self-host/subset the three brand font families if licensing and asset files are available.
