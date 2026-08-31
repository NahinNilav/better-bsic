import { BrandTitle } from "@/components/brand-title";
import { GrowthRings } from "@/components/growth-rings";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
};

export function PageHero({ eyebrow, title, description, note }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow eyebrow--line">{eyebrow}</p>
          <h1><BrandTitle>{title}</BrandTitle></h1>
          <p className="lede">{description}</p>
        </div>
        <div className="page-hero__panel">
          <GrowthRings compact />
          <p className="mono-label">ONKUR · BANGLADESH FUND I</p>
          <p className="page-hero__panel-title">
            <BrandTitle>Bangladesh-backed. Globally fluent.</BrandTitle>
          </p>
          {note ? <p>{note}</p> : null}
        </div>
      </div>
    </section>
  );
}
