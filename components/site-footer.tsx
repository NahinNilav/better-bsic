import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerGroups = [
  {
    label: "Invest",
    links: [
      ["Investment approach", "/approach"],
      ["Portfolio", "/portfolio"],
      ["Pitch BSIC", "/pitch"],
      ["Co-invest with us", "/contact?for=co-investor"],
    ],
  },
  {
    label: "Institution",
    links: [
      ["About BSIC", "/about"],
      ["Ecosystem", "/ecosystem"],
      ["Insights & news", "/insights"],
      ["Careers", "/careers"],
    ],
  },
  {
    label: "Information",
    links: [
      ["Contact", "/contact"],
      ["Privacy", "/privacy"],
      ["Accessibility", "/accessibility"],
      ["Disclosures", "/disclosures"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top shell">
        <div className="site-footer__identity">
          <Link className="footer-brand" href="/" aria-label="BSIC home">
            BSIC<span>.</span>
          </Link>
          <p>
            Institutional capital for Bangladesh’s most ambitious technology
            companies.
          </p>
          <Link className="footer-contact-link" href="/contact">
            Dhaka, Bangladesh <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="site-footer__nav">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <p className="footer-label">{group.label}</p>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom shell">
        <p>© 2026 Bangladesh Startup Investment Company PLC</p>
        <p>ONKUR — Bangladesh Fund I · Launched May 2026</p>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
