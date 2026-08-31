import { BrandTitle } from "@/components/brand-title";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "section-heading is-centered" : "section-heading"}>
      <p className="eyebrow eyebrow--line">{eyebrow}</p>
      <h2><BrandTitle>{title}</BrandTitle></h2>
      {copy ? <p className="section-heading__copy">{copy}</p> : null}
    </div>
  );
}
