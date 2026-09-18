import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PitchForm } from "@/components/pitch-form";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Pitch BSIC",
  description: "Tell BSIC about your round, your lead investor and your company.",
};

const criteria = [
  "A credible institutional lead, committed or in discussion",
  "Bangladesh as a material market or operating base",
  "A technology-enabled model at late-seed or Series A",
  "Operating traction you can evidence",
];

export default function PitchPage() {
  return (
    <section className="form-page pitch-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Founder intake</p>
          <h1><BrandTitle>Pitch BSIC.</BrandTitle></h1>
          <div className="eligibility-card">
            <h2>What BSIC looks for</h2>
            <ul>
              {criteria.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PitchForm />
      </div>
    </section>
  );
}
