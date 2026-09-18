import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { GrowthRings } from "@/components/growth-rings";
import { SectionHeading } from "@/components/section-heading";
import { roleGroups, roles } from "@/data/roles";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the founding team building ONKUR — Bangladesh Fund I.",
};

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="careers-hero__grid">
          <div>
            <p className="eyebrow eyebrow--line">Careers at BSIC</p>
            <h1><BrandTitle>Build the institution backing Bangladesh’s founders.</BrandTitle></h1>
            <p className="lede">Join the founding team of ONKUR — Bangladesh Fund I.</p>
            <div className="careers-hero__meta">
              <span><MapPin aria-hidden="true" size={17} /> Dhaka</span>
              <span><BriefcaseBusiness aria-hidden="true" size={17} /> Full-time</span>
              <span>High ownership</span>
            </div>
            <a className="button button--primary" href="#open-roles">View open roles <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
          <div className="home-hero__panel careers-hero__panel">
            <GrowthRings />
            <div className="home-hero__panel-content">
              <p className="mono-label mono-label--light">Founding team · Now hiring</p>
              <dl className="careers-hero__stats">
                <div><dt>Fund I</dt><dd>USD 35M</dd></div>
                <div><dt>Shareholder banks</dt><dd>39</dd></div>
                <div><dt>Open roles</dt><dd>{String(roles.length).padStart(2, "0")}</dd></div>
              </dl>
              <div className="home-hero__panel-divider" />
              <p className="careers-hero__note">Small, senior and built from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white open-roles" id="open-roles">
        <div className="shell">
          <SectionHeading
            eyebrow="Open roles"
            title="Founding team — now hiring."
            copy="Every role carries real ownership. Every hire shapes how BSIC invests, supports founders and earns institutional trust."
          />
          <div className="role-groups">
            {roleGroups.map((group) => (
              <section key={group} className="role-group">
                <div className="role-group__heading">
                  <p className="mono-label">{group}</p>
                  <span>{String(roles.filter((role) => role.group === group).length).padStart(2, "0")}</span>
                </div>
                <div>
                  {roles.filter((role) => role.group === group).map((role) => (
                    <Link className="role-row" href={`/careers/${role.slug}`} key={role.slug}>
                      <p className="role-row__number">{role.order}</p>
                      <div className="role-row__main">
                        <h3>{role.title}</h3>
                        <p>{role.summary}</p>
                        <div><span>{role.level}</span><span>{role.location}</span><span>{role.status}</span></div>
                      </div>
                      <span className="role-row__cta">
                        View role <ArrowRight aria-hidden="true" size={17} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream hiring-process">
        <div className="shell">
          <SectionHeading eyebrow="How we hire" title="Transparent, demanding and respectful of your time." />
          <ol className="hiring-grid">
            <li><span>01</span><h3>Application review</h3><p>Experience, role fit and evidence of the craft the position requires.</p></li>
            <li><span>02</span><h3>Structured conversation</h3><p>Motivation, judgement, operating style and the realities of building from zero.</p></li>
            <li><span>03</span><h3>Role-based work</h3><p>A focused case or working session designed around the actual job.</p></li>
            <li><span>04</span><h3>Leadership decision</h3><p>Final discussion, references, alignment and a clear decision communicated directly.</p></li>
          </ol>
        </div>
      </section>

      <section className="section section--green careers-principles">
        <div className="shell">
          <SectionHeading eyebrow="Working at BSIC" title="High standards. Clear ownership. Long-term thinking." />
          <div className="careers-principles__grid">
            <article><h3>Work mode</h3><p>Roles are based in Dhaka and built around close, in-person collaboration. Ask about flexibility during the hiring process.</p></article>
            <article><h3>Compensation</h3><p>Packages are role-appropriate and internationally or regionally benchmarked, with performance alignment where applicable.</p></article>
            <article><h3>Equal opportunity</h3><p>Candidates are assessed on ability and integrity. Ask for an adjustment to the process at any point.</p></article>
            <article><h3>Candidate respect</h3><p>You get a timeline up front and an answer at the end, whichever way it goes.</p></article>
          </div>
          <Link className="button button--light" href="/contact?for=recruiting">Recruiting & accessibility contact <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
