import Link from "next/link";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    eyebrow: "For founders",
    title: "Raising with a lead investor?",
    copy: "Tell us about the round and who is anchoring it.",
    href: "/pitch",
    cta: "Pitch BSIC",
  },
  {
    eyebrow: "For co-investors",
    title: "Leading a round in Bangladesh?",
    copy: "BSIC matches your commitment and runs diligence on the ground.",
    href: "/contact?for=co-investor",
    cta: "Discuss co-investment",
  },
  {
    eyebrow: "For partners",
    title: "Building the ecosystem?",
    copy: "Universities, accelerators and diaspora networks work with BSIC directly.",
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
