import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { getRole, roles } from "@/data/roles";
import { BrandTitle } from "@/components/brand-title";

type RolePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return { title: role.title, description: role.summary };
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.summary,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Bangladesh Startup Investment Company PLC",
      sameAs: "https://www.bsic.vc",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
      <section className="role-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/careers"><ArrowLeft aria-hidden="true" size={15} /> All open roles</Link>
            <span aria-hidden="true">/</span>
            <span>{role.group}</span>
          </nav>
          <div className="role-hero__copy">
            <h1><BrandTitle>{role.title}</BrandTitle></h1>
            <p className="lede">{role.summary}</p>
          </div>
        </div>
      </section>

      <section className="role-body section section--white">
        <div className="shell role-body__grid">
          <article className="role-body__column">
            <section className="role-intro-section">
              <p className="eyebrow">The role</p>
              <h2><BrandTitle>{role.roleHeading}</BrandTitle></h2>
              {role.roleCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section>
              <p className="eyebrow">What you’ll do</p>
              <h2><BrandTitle>Scope of the mandate.</BrandTitle></h2>
              <div className="role-sections">
                {role.responsibilities.map((section, index) => (
                  <div key={section.title}>
                    <p className="role-sections__number">{String(index + 1).padStart(2, "0")}</p>
                    <div><h3>{section.title}</h3><ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="eyebrow">Who you are</p>
              <h2><BrandTitle>{role.profileHeading}</BrandTitle></h2>
              <p>{role.profileIntro}</p>
              <div className="profile-grid">
                {role.profile.map((section) => (
                  <div key={section.title}><h3>{section.title}</h3><ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
                ))}
              </div>
            </section>

            <section className="compensation-block">
              <p className="eyebrow">Compensation</p>
              <h2><BrandTitle>{role.compensationHeading}</BrandTitle></h2>
              <p>{role.compensation}</p>
            </section>
          </article>

          <dl className="role-meta-card">
            <div><dt>Location</dt><dd><MapPin aria-hidden="true" size={16} /> {role.location}</dd></div>
            <div><dt>Team</dt><dd>{role.group}</dd></div>
            <div><dt>Reports to</dt><dd>{role.reportsTo}</dd></div>
            <div><dt>Employment</dt><dd>{role.type}</dd></div>
            <div><dt>Status</dt><dd><span className="status-dot" /> {role.status}</dd></div>
            <Link className="button button--primary" href={`/careers/${role.slug}/apply`}>Apply now <ArrowRight aria-hidden="true" size={16} /></Link>
          </dl>
        </div>
      </section>

      <section className="role-closing">
        <div className="shell role-closing__grid">
          <div><p className="eyebrow">Build something enduring</p><h2><BrandTitle>{role.closing}</BrandTitle></h2></div>
          <div><Link className="button button--paper" href={`/careers/${role.slug}/apply`}>Apply for {role.title} <ArrowRight aria-hidden="true" size={17} /></Link></div>
        </div>
      </section>
    </>
  );
}
