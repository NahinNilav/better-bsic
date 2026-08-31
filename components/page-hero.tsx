import { BrandTitle } from "@/components/brand-title";
import { GrowthRings } from "@/components/growth-rings";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const fundFacts = [
  ["Fund I", "USD 35M"],
  ["Shareholder banks", "39"],
  ["Paid-up capital", "Tk 4.25Bn"],
  ["Launched", "12 May 2026"],
];

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
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
          <p className="mono-label">ONKUR · Bangladesh Fund I</p>
          <dl className="page-hero__facts">
            {fundFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
