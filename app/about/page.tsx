import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudienceCta } from "@/components/audience-cta";
import { BankWall } from "@/components/bank-wall";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { structurePillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "BSIC is a permanent, bank-backed national investment institution. Its mandate, structure, capital base and shareholders.",
};

const mandate = [
  {
    label: "Vision",
    title: "Banking capital → startup growth",
    copy: "Convert Bangladesh’s banking sector — the country’s largest pool of institutionally managed capital — into a direct driver of startup growth, job creation and new industry formation.",
  },
  {
    label: "Purpose",
    title: "Three mandates",
    copy: "Direct equity investment into high-growth startups. Co-investment alongside global institutional VC funds. A domestic anchor that brings foreign capital into Bangladesh.",
  },
  {
    label: "Outcome",
    title: "A globally aligned asset class",
    copy: "A credible institutional vehicle delivering financial returns, measurable innovation impact, and Bangladesh’s position as an investable destination for global VC and FDI.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BSIC"
        title="Not a programme. A permanent institution."
        description="39 commercial banks contribute up to 1% of annual net profits, pooled into BSIC with initial paid-up capital of about Tk 4.25Bn and authorised capital of Tk 20Bn, professionally managed and deployed as institutional venture capital — with an independent Investment Committee and full fiduciary accountability."
      />

      <section className="section section--white">
        <div className="shell">
          <SectionHeading eyebrow="01 · Mandate" title="What BSIC exists to do." />
          <div className="mandate-grid">
            {mandate.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading eyebrow="02 · Structure" title="How BSIC operates." />
          <div className="architecture-grid">
            {structurePillars.map((pillar) => (
              <div key={pillar.number}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="shell about-capital">
          <div>
            <p className="eyebrow">03 · Capital base</p>
            <h2>Institutional scale from day one.</h2>
          </div>
          <dl>
            <div><dt>Fund I size</dt><dd>USD 35M</dd></div>
            <div><dt>Paid-up capital</dt><dd>Tk 4.25Bn</dd></div>
            <div><dt>Authorised capital</dt><dd>Tk 20Bn</dd></div>
            <div><dt>Shareholder banks</dt><dd>39</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="04 · Shareholders"
            title="39 commercial banks. One national mandate."
            copy="Bangladesh’s leading commercial banks form the institutional foundation of ONKUR — Bangladesh Fund I."
          />
          <BankWall note="Every shareholder bank of ONKUR — Bangladesh Fund I, listed alphabetically and weighted equally." />
          <Link className="button button--secondary about-enquiry" href="/contact?for=shareholder">
            Institutional enquiries <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
