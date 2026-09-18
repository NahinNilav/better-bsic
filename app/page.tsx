import Link from "next/link";
import { ArrowRight, ArrowUpRight, GraduationCap, Map, Network, Users } from "lucide-react";
import { AudienceCta } from "@/components/audience-cta";
import { BankWall } from "@/components/bank-wall";
import { GrowthRings } from "@/components/growth-rings";
import { PressWall } from "@/components/press-wall";
import { SectionHeading } from "@/components/section-heading";
import { coInvestmentStages, impactFigures } from "@/data/site";

const programmes = [
  {
    icon: GraduationCap,
    number: "01",
    title: "University accelerator programmes",
    copy: "Partnerships with leading Bangladeshi universities that identify, train and fast-track student and faculty-led ventures into investable startups.",
  },
  {
    icon: Users,
    number: "02",
    title: "Founder development & mentorship",
    copy: "Mentorship tracks connecting early-stage founders with experienced operators, investors and diaspora professionals.",
  },
  {
    icon: Network,
    number: "03",
    title: "Accelerator & incubator partnerships",
    copy: "Co-developed programming with accelerators and incubators across the country, strengthening the early-stage pipeline.",
  },
  {
    icon: Map,
    number: "04",
    title: "Regional innovation beyond Dhaka",
    copy: "Startup support extended to Chattogram, Sylhet, Rajshahi and secondary cities through local partnerships.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--line">ONKUR · Bangladesh Fund I · Launched May 2026</p>
            <h1>
              Bangladesh now backs its own <em>founders.</em>
            </h1>
            <p className="home-hero__lede">
              ONKUR — Bangladesh Fund I is BSIC’s inaugural vehicle: a USD 35
              million pool of institutional capital from 39 commercial banks,
              deployed alongside global venture capital into the country’s most
              ambitious startups.
            </p>
            <div className="button-row">
              <Link className="button button--primary" href="/pitch">
                Pitch BSIC <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <Link className="button button--secondary" href="/co-investment">
                How co-investment works <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Fund I size</dt>
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
              <p className="mono-label mono-label--light">ONKUR — Bangla for “seedling”</p>
              <blockquote>
                “This is a permanent vehicle for our founders — for Bangladesh to
                back its entrepreneurs for decades to come.”
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

      <section className="section section--white" id="about">
        <div className="shell">
          <SectionHeading
            eyebrow="01 · What is BSIC?"
            title="Not a programme. A permanent institution."
            copy="39 commercial banks contribute up to 1% of annual net profits, pooled into BSIC and deployed as institutional venture capital by a professional team, under an independent Investment Committee."
          />
          <dl className="criteria-grid">
            <div><dt>Paid-up capital</dt><dd>Tk 4.25Bn</dd></div>
            <div><dt>Authorised capital</dt><dd>Tk 20Bn</dd></div>
            <div><dt>Stage</dt><dd>Late-seed → Series A</dd></div>
            <div><dt>Instruments</dt><dd>Equity · SAFE · Convertible</dd></div>
            <div><dt>Round</dt><dd>Institutionally led</dd></div>
            <div><dt>Model</dt><dd>Global co-investment</dd></div>
          </dl>
          <div className="thesis-note">
            <p>
              An independent Investment Committee decides every investment, with
              full fiduciary accountability to the shareholder banks.
            </p>
            <Link href="/about">How BSIC is structured <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--green" id="co-investment">
        <div className="shell">
          <SectionHeading
            eyebrow="02 · Co-investment"
            title="A co-investment process that benefits everyone."
            copy="Co-investment isn’t just how BSIC invests — it’s how BSIC accelerates your fundraise. Local institutional capital that matches the foreign lead, opens local doors, and closes rounds at global standards."
          />
          <ol className="process-grid">
            {coInvestmentStages.map((step) => (
              <li key={step.stage}>
                <p className="process-grid__number">{step.stage.replace("Stage ", "")}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="precedent-note">
            <p>
              Singapore’s Temasek and GIC built their ecosystem this way —
              co-investing alongside tier-one firms until their domestic capital
              base could lead on its own. BSIC does the same for Bangladesh.
            </p>
            <Link className="text-link text-link--light" href="/co-investment">
              See the full process <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="ecosystem">
        <div className="shell">
          <SectionHeading
            eyebrow="03 · Beyond capital"
            title="Building the ecosystem, not just funding it."
            copy="BSIC’s mandate goes past deploying capital. It is designed to strengthen the foundations of Bangladesh’s innovation economy, partnering with ecosystem players to develop early-stage founders from the ground up."
          />
          <ul className="program-grid">
            {programmes.map(({ icon: Icon, number, title, copy }) => (
              <li key={number}>
                <div className="program-grid__head">
                  <Icon aria-hidden="true" />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white national-platform" id="banks">
        <div className="shell">
          <SectionHeading
            eyebrow="Shareholder banks"
            title="39 commercial banks. One national mandate."
            copy="BSIC is backed by Bangladesh’s leading commercial banks, whose capital forms the institutional foundation of ONKUR — Bangladesh Fund I."
          />
          <BankWall note="Every shareholder bank of ONKUR — Bangladesh Fund I, listed alphabetically and weighted equally." />
        </div>
      </section>

      <section className="section section--cream insights-preview" id="press">
        <div className="shell">
          <SectionHeading
            eyebrow="In the press"
            title="BSIC in the press."
            copy="Coverage of the ONKUR — Bangladesh Fund I launch from regional and global technology media."
          />
          <PressWall />
        </div>
      </section>

      <section className="section section--white" id="impact">
        <div className="shell">
          <SectionHeading
            eyebrow="04 · Impact"
            title="What USD 35M actually delivers."
            copy="Modelled across fintech, agritech, edtech, healthtech, logistics, SaaS / AI and RMG infrastructure, where Bangladesh’s late-seed → Series B opportunity is concentrated."
          />
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
          <p className="figures-caveat">
            <strong>Modelled projections, not results.</strong> ONKUR launched
            in May 2026. These are BSIC’s ten-year figures for the fund,
            published to show the scale of the opportunity.
          </p>
        </div>
      </section>

      <AudienceCta />
    </>
  );
}
