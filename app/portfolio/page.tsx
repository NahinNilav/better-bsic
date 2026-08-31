import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "ONKUR — Bangladesh Fund I portfolio and public investment milestones.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Public proof, published when it is real."
        description="ONKUR launched in May 2026. Portfolio companies will be added after investment announcements and disclosure approvals."
        note="An honest launch state protects institutional credibility and avoids invented logos, testimonials or metrics."
      />
      <section className="section section--white">
        <div className="shell portfolio-empty">
          <div className="portfolio-empty__status">
            <span />
            <p className="mono-label">DEPLOYING FROM 2026</p>
          </div>
          <h2><BrandTitle>Portfolio in formation.</BrandTitle></h2>
          <p>
            BSIC is building the first ONKUR portfolio. When investments become
            public, this page will show company, sector, stage, round, co-investors
            and the specific reason for conviction.
          </p>
          <Link className="button button--primary" href="/pitch">Pitch BSIC <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
      <section className="section section--cream">
        <div className="shell">
          <SectionHeading eyebrow="Launch milestones" title="A platform built before the first logo wall." />
          <ol className="milestone-grid">
            <li><span>12 MAY 2026</span><h3>ONKUR launched in Dhaka</h3><p>BSIC introduced Bangladesh Fund I as a permanent institutional vehicle.</p></li>
            <li><span>FUND I</span><h3>USD 35 million</h3><p>Initial venture capital pool backed by Bangladesh’s commercial banks.</p></li>
            <li><span>PORTFOLIO SUPPORT</span><h3>Tk 500 Cr facility</h3><p>A non-dilutive working-capital facility was announced for the portfolio.</p></li>
            <li><span>MODEL</span><h3>Global co-investment</h3><p>Capital is designed to deploy alongside credible global and regional venture leads.</p></li>
          </ol>
        </div>
      </section>
      <section className="section section--green">
        <div className="shell disclosure-promise">
          <div>
            <p className="eyebrow">Portfolio disclosure standard</p>
            <h2><BrandTitle>Useful to founders, investors and the public.</BrandTitle></h2>
          </div>
          <ul>
            <li><Check aria-hidden="true" /> Company and founder context</li>
            <li><Check aria-hidden="true" /> Stage, sector and round date</li>
            <li><Check aria-hidden="true" /> Lead and participating investors</li>
            <li><Check aria-hidden="true" /> BSIC’s investment thesis</li>
            <li><Check aria-hidden="true" /> Approved, sourced performance updates</li>
          </ul>
        </div>
      </section>
    </>
  );
}
