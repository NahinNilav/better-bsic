import Link from "next/link";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    eyebrow: "For founders",
    title: "Building from Bangladesh?",
    copy: "Share your company, traction and planned round with the investment team.",
    href: "/pitch",
    cta: "Pitch BSIC",
  },
  {
    eyebrow: "For co-investors",
    title: "Looking for local conviction?",
    copy: "Combine global investment standards with institutional local access and diligence.",
    href: "/contact?for=co-investor",
    cta: "Discuss co-investment",
  },
  {
    eyebrow: "For partners",
    title: "Strengthening the ecosystem?",
    copy: "Work with BSIC across universities, accelerators, talent and regional programs.",
    href: "/contact?for=ecosystem",
    cta: "Partner with BSIC",
  },
];

export function AudienceCta() {
  return (
    <section className="audience-cta">
      <div className="shell audience-cta__grid">
        {audiences.map((audience) => (
          <article key={audience.eyebrow}>
            <p className="eyebrow">{audience.eyebrow}</p>
            <h2>{audience.title}</h2>
            <p>{audience.copy}</p>
            <Link href={audience.href}>
              {audience.cta} <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
