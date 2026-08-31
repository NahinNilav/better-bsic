import type { Metadata } from "next";
import { AudienceCta } from "@/components/audience-cta";
import { PageHero } from "@/components/page-hero";
import { impactFigures } from "@/data/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "BSIC’s modelled ten-year outcomes for ONKUR — Bangladesh Fund I across fintech, agritech, edtech, healthtech, logistics, SaaS / AI and RMG infrastructure.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What USD 35M actually delivers."
        description="Modelled across fintech, agritech, edtech, healthtech, logistics, SaaS / AI and RMG infrastructure — where Bangladesh’s late-seed → Series B opportunity is concentrated. A small fund, compounded through co-investment and ecosystem network effects, delivers outsized outcomes."
      />

      <section className="section section--white">
        <div className="shell">
          <p className="figures-caveat">
            <strong>These are modelled projections, not results.</strong> ONKUR
            launched in May 2026. The figures below are BSIC’s ten-year model for
            the fund, published to show the scale of the opportunity.
          </p>
          <dl className="impact-grid">
            {impactFigures.map((figure) => (
              <div key={figure.value}>
                <dt>{figure.value}</dt>
                <dd>
                  <strong>{figure.label}</strong>
                  <span>{figure.copy}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="impact-note">
            Inclusion-focused sectors compound through agent networks, smallholder
            reach, learner pipelines and digital formalisation — well beyond a
            typical tech-portfolio multiplier.
          </p>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
