import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { alsoCoveredBy, pressItems } from "@/data/site";

/**
 * Launch coverage, led by the masthead of each publication. The logo carries
 * the credibility, so it sits first in the card and the headline follows.
 */
export function PressWall() {
  return (
    <div className="press-wall">
      <ul className="press-wall__grid">
        {pressItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer" className="press-card">
              <span className="press-card__masthead">
                <Image
                  src={item.logo}
                  alt={item.publication}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  unoptimized
                />
              </span>
              <span className="press-card__date">{item.date}</span>
              <h3 className="press-card__headline">{item.title}</h3>
              <span className="press-card__read">
                Read article <ArrowUpRight aria-hidden="true" size={15} />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="press-wall__more">
        <p className="mono-label">Also covered by</p>
        <ul>
          {alsoCoveredBy.map((outlet) => (
            <li key={outlet.href}>
              <a href={outlet.href} target="_blank" rel="noreferrer" title={outlet.publication}>
                <Image
                  src={outlet.logo}
                  alt={outlet.publication}
                  width={outlet.width}
                  height={outlet.height}
                  unoptimized
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
