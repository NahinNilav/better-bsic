import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  Landmark,
  Network,
} from "lucide-react";
import { AudienceCta } from "@/components/audience-cta";
import { BankWall } from "@/components/bank-wall";
import { BrandTitle } from "@/components/brand-title";
import { GrowthRings } from "@/components/growth-rings";
import { PressWall } from "@/components/press-wall";
import { SectionHeading } from "@/components/section-heading";
import { investmentCriteria } from "@/data/site";

const process = [
  {
    number: "01",
    title: "Submit",
    copy: "Share your company, traction, financing plan and why this is the right moment.",
    timing: "Structured founder intake",
  },
  {
    number: "02",
    title: "Initial review",
    copy: "The team reviews stage, Bangladesh relevance, round structure and early conviction.",
    timing: "Fit and screening",
  },
  {
    number: "03",
    title: "Joint diligence & IC",
    copy: "Local insight, founder references and market diligence are held to global investment standards.",
    timing: "Evidence before approval",
  },
  {
    number: "04",
    title: "Invest & support",
    copy: "BSIC invests alongside credible leads and supports governance, follow-on capital and local access.",
    timing: "Long-term partnership",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--line">ONKUR · BANGLADESH FUND I</p>
            <h1>
              Bangladesh now backs its own <em>founders.</em>
            </h1>
            <p className="home-hero__lede">
              Institutional capital for Bangladesh’s most ambitious technology
              companies — deployed alongside global venture investors.
            </p>
            <div className="button-row">
              <Link className="button button--primary" href="/pitch">
                Pitch BSIC <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <Link className="button button--secondary" href="/approach">
                Explore our approach <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Fund I</dt>
                <dd>USD 35M</dd>
              </div>
              <div>
                <dt>Shareholder banks</dt>
                <dd>39</dd>
              </div>
              <div>
                <dt>Paid-up capital</dt>
                <dd>Tk 4.25Bn</dd>
              </div>
            </dl>
          </div>

          <div className="home-hero__panel">
            <GrowthRings />
            <div className="home-hero__panel-content">
              <p className="mono-label mono-label--light">ONKUR · “SEEDLING”</p>
              <blockquote>
                “A permanent vehicle for our founders — for Bangladesh to back
                its entrepreneurs for decades to come.”
              </blockquote>
              <div className="home-hero__panel-divider" />
              <ul className="fund-facts">
                <li><strong>Launched</strong><span>12 May 2026 · Dhaka</span></li>
                <li><strong>Co-investment</strong><span>Alongside global VC leads</span></li>
                <li><strong>Portfolio facility</strong><span>Tk 500 Cr non-dilutive</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="thesis">
        <div className="shell">
          <SectionHeading
            eyebrow="01 · Investment thesis"
            title="A precise mandate, visible at a glance."
            copy="BSIC converts institutional banking capital into a durable venture platform for Bangladesh-linked companies with the ambition and structure to scale."
          />
          <dl className="criteria-grid">
            {investmentCriteria.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="thesis-note">
            <p>
              <strong>Founder-first clarification.</strong> Final ticket size,
              ownership and sector thresholds should be published when formally
              approved by the Investment Committee.
            </p>
            <Link href="/approach">See the full approach <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading
            eyebrow="02 · Two-sided value"
            title="Local conviction. Global standards."
            copy="The co-investment model creates a stronger round for founders and better local intelligence for global investors."
          />
          <div className="value-split">
            <article>
              <div className="value-split__icon"><Landmark aria-hidden="true" /></div>
              <p className="eyebrow">For Bangladeshi founders</p>
              <h3>An institutional partner built for this market.</h3>
              <ul className="check-list">
                <li><CheckCircle2 aria-hidden="true" /> Credible local capital alongside an institutional lead</li>
                <li><CheckCircle2 aria-hidden="true" /> On-the-ground diligence that understands context</li>
                <li><CheckCircle2 aria-hidden="true" /> Access to banks, corporates, talent and policy networks</li>
                <li><CheckCircle2 aria-hidden="true" /> A permanent platform designed to support follow-on growth</li>
              </ul>
              <Link href="/pitch">Check fit and pitch BSIC <ArrowRight aria-hidden="true" size={16} /></Link>
            </article>
            <article className="value-split__dark">
              <div className="value-split__icon"><Globe2 aria-hidden="true" /></div>
              <p className="eyebrow">For global co-investors</p>
              <h3>A trusted local partner without diluted standards.</h3>
              <ul className="check-list">
                <li><CheckCircle2 aria-hidden="true" /> Institutional access to Bangladesh’s startup pipeline</li>
                <li><CheckCircle2 aria-hidden="true" /> Shared diligence, founder references and regulatory context</li>
                <li><CheckCircle2 aria-hidden="true" /> Local support through execution, governance and monitoring</li>
                <li><CheckCircle2 aria-hidden="true" /> Independent judgement and fiduciary accountability</li>
              </ul>
              <Link href="/contact?for=co-investor">Discuss co-investment <ArrowRight aria-hidden="true" size={16} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--green process-section">
        <div className="shell">
          <SectionHeading
            eyebrow="03 · Investment process"
            title="Four clear steps from conversation to conviction."
            copy="A legible process respects founder time while protecting institutional investment standards."
          />
          <ol className="process-grid">
            {process.map((step) => (
              <li key={step.number}>
                <p className="process-grid__number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span>{step.timing}</span>
              </li>
            ))}
          </ol>
          <div className="proof-strip">
            <span><Building2 aria-hidden="true" /> Bangladesh-based team</span>
            <span><Network aria-hidden="true" /> Global co-investment</span>
            <span><Landmark aria-hidden="true" /> Independent Investment Committee</span>
          </div>
        </div>
      </section>

      <section className="section section--white portfolio-preview">
        <div className="shell portfolio-preview__grid">
          <div>
            <p className="eyebrow eyebrow--line">04 · Portfolio</p>
            <h2><BrandTitle>Built for proof — never placeholder logos.</BrandTitle></h2>
            <p>
              ONKUR launched in May 2026. Public portfolio companies will appear
              here only after investments are announced and disclosure is approved.
            </p>
            <Link className="button button--secondary" href="/portfolio">
              View launch milestones <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="deployment-state">
            <span className="deployment-state__pulse" />
            <p className="mono-label">DEPLOYING FROM 2026</p>
            <strong>Portfolio in formation</strong>
            <p>Transparent company, stage and partner information will be published as it becomes public.</p>
          </div>
        </div>
      </section>

      <section className="section section--cream national-platform">
        <div className="shell">
          <SectionHeading
            eyebrow="05 · National platform"
            title="39 commercial banks. One national mandate."
            copy="Bangladesh’s leading commercial banks form the institutional foundation of ONKUR — Bangladesh Fund I."
          />
          <BankWall note="Every shareholder bank of ONKUR — Bangladesh Fund I, listed alphabetically and weighted equally." />
        </div>
      </section>

      <section className="section section--white insights-preview">
        <div className="shell">
          <SectionHeading
            eyebrow="06 · In the press"
            title="News with institutional context."
            copy="Coverage of the ONKUR — Bangladesh Fund I launch from regional and global technology media."
          />
          <PressWall />
          <Link className="text-link" href="/insights">
            Explore insights & news <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
