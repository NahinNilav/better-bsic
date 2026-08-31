import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PressWall } from "@/components/press-wall";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Insights & News",
  description: "BSIC news, institutional updates and thinking on Bangladesh’s venture ecosystem.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & news"
        title="Signal over volume."
        description="Research, institutional updates and meaningful coverage that help founders and investors understand the opportunity in Bangladesh."
        note="The archive is intentionally focused at launch. New analysis should be sourced, dated and useful — not content for content’s sake."
      />
      <section className="section section--white">
        <div className="shell">
          <SectionHeading eyebrow="Launch coverage" title="ONKUR — Bangladesh Fund I in the press." copy="Coverage of the May 2026 launch and the financing gap the institution is designed to address." />
          <PressWall />
        </div>
      </section>
      <section className="section section--cream editorial-roadmap">
        <div className="shell">
          <SectionHeading eyebrow="Editorial roadmap" title="The knowledge layer BSIC should build next." />
          <div>
            <article><span>01</span><h3>Investment thesis notes</h3><p>Sector-specific views grounded in Bangladesh data and direct market work.</p></article>
            <article><span>02</span><h3>Founder operating guides</h3><p>Practical institutional-readiness guidance for governance, metrics and fundraising.</p></article>
            <article><span>03</span><h3>Ecosystem research</h3><p>Regional, university and capital-market analysis with transparent methodology.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
