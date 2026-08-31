import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Map, Network, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "How BSIC strengthens Bangladesh’s founder, university, accelerator and investor ecosystem.",
};

const programs = [
  { icon: GraduationCap, number: "01", title: "University accelerator programs", copy: "Structured partnerships that identify, train and fast-track student and faculty-led ventures into investable companies." },
  { icon: Users, number: "02", title: "Founder development & mentorship", copy: "Operator, investor and diaspora mentorship that builds company capability before and after investment." },
  { icon: Network, number: "03", title: "Accelerator & incubator partnerships", copy: "Formal pathways for better deal flow, shared programming and a stronger early-stage company pipeline." },
  { icon: Map, number: "04", title: "Regional innovation beyond Dhaka", copy: "Local partnerships in Chattogram, Sylhet, Rajshahi and secondary cities where founder support remains fragmented." },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Build the conditions that let exceptional founders emerge."
        description="BSIC’s mandate extends beyond deploying capital. It strengthens the pathways, knowledge and institutional connections around Bangladesh’s innovation economy."
        note="Every program should have a measurable line to founder quality, investment readiness or portfolio value creation."
      />
      <section className="section section--white">
        <div className="shell">
          <SectionHeading eyebrow="01 · Platform programs" title="Ecosystem infrastructure, not event volume." copy="Four focused program areas connect BSIC’s national mandate to a stronger investment pipeline." />
          <div className="program-grid">
            {programs.map(({ icon: Icon, ...program }) => (
              <article key={program.number}>
                <div><Icon aria-hidden="true" /><span>{program.number}</span></div>
                <h3>{program.title}</h3>
                <p>{program.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--green">
        <div className="shell partner-paths">
          <SectionHeading eyebrow="02 · Partner pathways" title="One platform, multiple ways to contribute." />
          <div>
            <article><p className="eyebrow">Accelerators</p><h3>Build a reliable referral path.</h3><p>Align screening, readiness support and warm founder introductions to reduce friction.</p></article>
            <article><p className="eyebrow">Universities</p><h3>Move talent toward company building.</h3><p>Connect promising teams to structured validation, mentors and investment readiness.</p></article>
            <article><p className="eyebrow">Diaspora</p><h3>Turn distance into leverage.</h3><p>Contribute operator expertise, market access, capital and trusted international networks.</p></article>
            <article><p className="eyebrow">Institutions</p><h3>Coordinate long-term capability.</h3><p>Support program infrastructure, research and regional reach with measurable outcomes.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--cream ecosystem-cta">
        <div className="shell">
          <p className="eyebrow eyebrow--line">Work with BSIC</p>
          <h2><BrandTitle>A clear partnership starts with a concrete outcome.</BrandTitle></h2>
          <p>Share the founders, geography, capability or institutional connection your organisation can help strengthen.</p>
          <Link className="button button--primary" href="/contact?for=ecosystem">Propose a partnership <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
