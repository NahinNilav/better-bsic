import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AudienceCta } from "@/components/audience-cta";
import { BrandTitle } from "@/components/brand-title";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { coInvestmentStages } from "@/data/site";

export const metadata: Metadata = {
  title: "Co-investment",
  description:
    "BSIC matches the lead investor a founder has already secured, runs local diligence and closes the round to global standards.",
};

const scope = [
  { label: "Geography", value: "Bangladesh-linked" },
  { label: "Stage", value: "Late-seed → Series A" },
  { label: "Model", value: "Tech-enabled growth" },
  { label: "Instruments", value: "Equity · SAFE · Convertible" },
  { label: "Round", value: "Institutionally led" },
  { label: "Approach", value: "Global co-investment" },
];

export default function CoInvestmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Co-investment"
        title="A co-investment process that benefits everyone."
        description="Co-investment isn’t just how BSIC invests — it’s how BSIC accelerates your fundraise. Local institutional capital that matches the foreign lead, opens local doors, and closes rounds at global standards."
      />

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="01 · The process"
            title="Five stages, from lead to close."
            copy="The founder brings the lead. BSIC brings matching capital, diligence on the ground and the local investors who follow it."
          />
          <ol className="stage-list">
            {coInvestmentStages.map((step) => (
              <li key={step.stage}>
                <p className="mono-label">{step.stage}</p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="precedent-note precedent-note--light">
            <p>
              Singapore’s Temasek and GIC built their ecosystem this way —
              co-investing alongside tier-one firms until their domestic capital
              base could lead on its own. BSIC does the same for Bangladesh.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading
            eyebrow="02 · Scope"
            title="What BSIC backs."
            copy="ONKUR — Bangladesh Fund I invests in Bangladesh-linked technology companies raising an institutionally led round."
          />
          <dl className="criteria-grid">
            {scope.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--green">
        <div className="shell due-diligence-grid">
          <div>
            <p className="eyebrow">Before you pitch</p>
            <h2><BrandTitle>Bring a lead, or a conversation about one.</BrandTitle></h2>
            <p>
              BSIC commits alongside a credible institutional lead. If a lead is
              committed or in discussion, the round is ready for a match. If the
              search is still open, the team can talk earlier.
            </p>
            <Link className="button button--primary" href="/pitch">
              Pitch BSIC <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <ul className="check-list">
            <li>A global or regional VC firm willing to anchor the round</li>
            <li>Bangladesh as a material market, operating base or advantage</li>
            <li>A technology-enabled model that can carry institutional capital</li>
            <li>Use of funds and governance ready for a documented close</li>
          </ul>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
