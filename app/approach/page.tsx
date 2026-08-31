import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AudienceCta } from "@/components/audience-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { investmentCriteria } from "@/data/site";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Investment Approach",
  description: "How BSIC evaluates, co-invests in and supports Bangladesh-linked technology companies.",
};

const fitSignals = [
  "Bangladesh is a material market, operating base or source of defensible advantage.",
  "A technology-enabled model can create durable scale and meaningful productivity gains.",
  "The founding team demonstrates execution speed, market insight and institutional ambition.",
  "The financing round has credible use of funds, governance readiness and a path to follow-on capital.",
];

const faq = [
  ["Does BSIC invest without a global lead?", "The published model prioritises co-investment alongside credible global or regional venture leads. Exact exceptions should be confirmed by the Investment Committee before being presented as policy."],
  ["Which sectors are in scope?", "BSIC has highlighted fintech, agritech, edtech, healthtech, logistics, SaaS/AI and RMG infrastructure. The team should evaluate companies on structural fit rather than treat this as a closed list."],
  ["What happens after I submit?", "The frontend intake structures company, round and founder information. A production process should acknowledge receipt, screen for fit and communicate a clear next step or decline."],
  ["What does BSIC provide beyond capital?", "Local diligence, institutional credibility, governance support, relevant bank and corporate access, ecosystem connections and coordination with co-investors."],
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment approach"
        title="Conviction built locally. Decisions held to global standards."
        description="BSIC invests institutional capital into Bangladesh-linked technology companies through a disciplined, co-investment-led process."
        note="Clear criteria, independent judgement and fiduciary accountability should be visible before a founder enters the process."
      />

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="01 · Mandate"
            title="What BSIC is designed to back."
            copy="The public thesis should be specific enough for founders to self-assess without pretending every investment parameter is already approved."
          />
          <dl className="criteria-grid">
            {investmentCriteria.map((item) => (
              <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
          <div className="content-columns">
            <div>
              <p className="eyebrow">Strong fit signals</p>
              <h3>Evidence of an institution-scale opportunity.</h3>
            </div>
            <ul className="check-list check-list--dark">
              {fitSignals.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading
            eyebrow="02 · Co-investment model"
            title="One round. Complementary conviction."
            copy="BSIC’s local team does not outsource judgement. It contributes market context and diligence while aligning documentation and governance with the institutional lead."
          />
          <ol className="stair-process">
            <li><span>01</span><div><h3>Credible lead</h3><p>A global or regional institutional investor anchors the round and establishes initial terms.</p></div></li>
            <li><span>02</span><div><h3>Independent BSIC review</h3><p>The team assesses mandate fit, founder quality, market structure, risk and return potential.</p></div></li>
            <li><span>03</span><div><h3>Joint diligence</h3><p>Local customer, regulatory and reference work complements the lead’s investment process.</p></div></li>
            <li><span>04</span><div><h3>Investment Committee</h3><p>BSIC’s independent IC weighs the evidence and approves or declines its participation.</p></div></li>
            <li><span>05</span><div><h3>Close and support</h3><p>The round closes to global standards and the team coordinates local portfolio support.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--green">
        <div className="shell due-diligence-grid">
          <div>
            <p className="eyebrow">03 · What to prepare</p>
            <h2><BrandTitle>Make the first conversation useful.</BrandTitle></h2>
            <p>A concise, evidence-led submission lets the team move faster without asking founders to reproduce a full data room before fit is established.</p>
          </div>
          <div className="document-list">
            <div><span>01</span><p><strong>Company</strong>Product, market, Bangladesh relevance and why now.</p></div>
            <div><span>02</span><p><strong>Traction</strong>Revenue or usage growth, retention, customers and unit economics.</p></div>
            <div><span>03</span><p><strong>Round</strong>Target raise, use of funds, lead status and existing ownership.</p></div>
            <div><span>04</span><p><strong>Team</strong>Founder background, key hires and institutional readiness.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--white faq-section">
        <div className="shell faq-grid">
          <SectionHeading eyebrow="04 · Founder FAQ" title="Answers before an application." />
          <div>
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="shell section-action">
          <Link className="button button--primary" href="/pitch">Start a founder submission <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
