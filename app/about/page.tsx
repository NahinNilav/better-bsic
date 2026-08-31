import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { allBanks } from "@/data/site";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "About",
  description: "BSIC’s mandate, institutional architecture and governance model.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BSIC"
        title="Not a program. A permanent institution."
        description="BSIC is an independent, bank-backed national investment platform established to channel institutional capital into high-growth Bangladeshi startups."
        note="Commercial discipline, independent investment decisions and transparent fiduciary accountability are core to the institution’s credibility."
      />
      <section className="section section--white">
        <div className="shell about-mandate">
          <SectionHeading eyebrow="01 · Mandate" title="Banking capital → startup growth." />
          <p className="about-mandate__lead">
            39 commercial banks contribute up to 1% of annual net profits,
            pooled into BSIC and professionally deployed as institutional venture
            capital alongside global investors.
          </p>
          <div className="mandate-grid">
            <article><span>VISION</span><h3>Convert capital into new industries.</h3><p>Use Bangladesh’s largest pool of institutionally managed capital to support startup growth, jobs and global capital inflows.</p></article>
            <article><span>PURPOSE</span><h3>Three connected mandates.</h3><p>Direct equity investment, co-investment with institutional VCs and a credible domestic anchor for foreign capital.</p></article>
            <article><span>OUTCOME</span><h3>A globally aligned asset class.</h3><p>Deliver financial returns, measurable innovation impact and a stronger case for Bangladesh as a venture destination.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="shell">
          <SectionHeading eyebrow="02 · Institutional architecture" title="Built to separate mandate from investment judgement." />
          <div className="architecture-grid">
            <div><span>01</span><h3>Shareholder banks</h3><p>Provide the institutional capital base and shareholder governance.</p></div>
            <div><span>02</span><h3>Board of Directors</h3><p>Sets institutional direction, oversight and accountability frameworks.</p></div>
            <div><span>03</span><h3>Investment Committee</h3><p>Applies independent investment judgement and fiduciary discipline.</p></div>
            <div><span>04</span><h3>BSIC team</h3><p>Sources, diligences, executes and supports the portfolio day to day.</p></div>
          </div>
          <div className="governance-note">
            <p><strong>Disclosure roadmap.</strong> Names and biographies for leadership, the Board and Investment Committee should be published after formal approval, with conflicts and governance policies linked from this page.</p>
          </div>
        </div>
      </section>
      <section className="section section--green">
        <div className="shell about-capital">
          <div><p className="eyebrow">03 · Capital base</p><h2><BrandTitle>Institutional scale from day one.</BrandTitle></h2></div>
          <dl>
            <div><dt>Fund I size</dt><dd>USD 35M</dd></div>
            <div><dt>Paid-up capital</dt><dd>Tk 4.25Bn</dd></div>
            <div><dt>Authorised capital</dt><dd>Tk 20Bn</dd></div>
            <div><dt>Shareholder banks</dt><dd>39</dd></div>
          </dl>
        </div>
      </section>
      <section className="section section--white shareholder-list-section">
        <div className="shell">
          <SectionHeading eyebrow="04 · Shareholders" title="39 commercial banks. One national mandate." />
          <ol className="shareholder-list">{allBanks.map((bank) => <li key={bank}>{bank}</li>)}</ol>
          <Link className="button button--secondary" href="/contact?for=shareholder">Institutional enquiries <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
