# better-bsic

An unofficial redesign of the [BSIC website](https://www.bsic.vc/).

## What BSIC is

The Bangladesh Startup Investment Company (BSIC) is a venture capital firm backed by 39 commercial banks. Its first fund, ONKUR — Bangladesh Fund I, is a USD 35 million pool of institutional capital. BSIC does not lead rounds. A founder secures a global or regional lead investor, and BSIC matches that commitment, runs diligence on the ground and brings local investors into the round.

## Why we redesigned it

We saw a BSIC recruitment post and went to the site to read the roles. The writing read as machine-generated, and the career pages were hard to get through — you could not tell what any of the jobs actually involved.

The work is good and the mandate matters. The site was not doing it justice. So we spent a weekend rebuilding it.

## What changed

- **Structure.** Back to the original's shape: one landing page with About, Structure, Co-investment, Ecosystem and Impact as sections, plus a separate careers page. No invented pages.
- **Writing.** Every claim traces to the live site. The AI-sounding copy is rewritten in plain institutional English.
- **Careers.** Each role gets a readable page — what the job is, what you would do, who they are looking for, what it pays — beside a sticky facts panel.
- **Branding.** Unchanged. Same Playfair Display, DM Sans and DM Mono; same green, cream and coral; same wordmark and fund facts.

The forms are a frontend prototype. Nothing is sent anywhere.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
