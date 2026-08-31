import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Map, Network, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "How BSIC develops early-stage founders alongside universities, accelerators and the diaspora.",
};

const programs = [
  { icon: GraduationCap, number: "01", title: "University accelerator programmes", copy: "Partnerships with leading Bangladeshi universities that identify, train and fast-track student and faculty-led ventures into investable startups." },
  { icon: Users, number: "02", title: "Founder development & mentorship", copy: "Mentorship tracks connecting early-stage founders with experienced operators, investors and diaspora professionals." },
  { icon: Network, number: "03", title: "Accelerator & incubator partnerships", copy: "Co-developed programming with accelerators and incubators across the country, strengthening the early-stage pipeline." },
  { icon: Map, number: "04", title: "Regional innovation beyond Dhaka", copy: "Startup support extended to Chattogram, Sylhet, Rajshahi and secondary cities through local partnerships." },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Building the ecosystem, not just funding it."
        description="BSIC’s mandate goes past deploying capital. It is designed to strengthen the foundations of Bangladesh’s innovation economy, partnering with ecosystem players to develop early-stage founders from the ground up."
      />
      <section className="section section--white">
        <div className="shell">
          <SectionHeading eyebrow="01 · Programmes" title="Four programme areas." copy="Each one feeds the investment pipeline BSIC deploys into." />
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
          <SectionHeading eyebrow="02 · Partner pathways" title="Ways to work with BSIC." />
          <div>
            <article><p className="eyebrow">Accelerators</p><h3>Referral pathways</h3><p>Screening, readiness support and warm founder introductions into the BSIC pipeline.</p></article>
            <article><p className="eyebrow">Universities</p><h3>Student and faculty ventures</h3><p>Structured accelerators that move promising teams toward investable companies.</p></article>
            <article><p className="eyebrow">Diaspora</p><h3>Diaspora operators</h3><p>Operator expertise, market access and international networks from Bangladeshis abroad.</p></article>
            <article><p className="eyebrow">Institutions</p><h3>Programme partners</h3><p>Support for programme delivery, research and reach beyond Dhaka.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--cream ecosystem-cta">
        <div className="shell">
          <p className="eyebrow eyebrow--line">Partner with BSIC</p>
          <h2><BrandTitle>Start with the founders you reach.</BrandTitle></h2>
          <p>Tell us which founders your organisation reaches, and where.</p>
          <Link className="button button--primary" href="/contact?for=ecosystem">Propose a partnership <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
