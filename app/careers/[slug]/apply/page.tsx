import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/application-form";
import { getRole, roles } from "@/data/roles";
import { BrandTitle } from "@/components/brand-title";

type ApplyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  return role ? { title: `Apply — ${role.title}`, description: `Prototype application for ${role.title} at BSIC.` } : {};
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <section className="form-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Careers · Application</p>
          <h1><BrandTitle>Apply.</BrandTitle></h1>
          <p className="lede">The role is preselected. Share only what helps BSIC understand your craft, judgement and motivation.</p>
          <div className="form-page__role"><span>Selected role</span><strong>{role.title}</strong><p>{role.location} · {role.type}</p></div>
        </div>
        <ApplicationForm roleTitle={role.title} roleSlug={role.slug} />
      </div>
    </section>
  );
}
