"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { credit } from "@/data/credit";

const SEEN_KEY = "bsic-credit-seen";

type Phase = "hidden" | "enter" | "leave";

/**
 * A small card that drops in under the header on the first page of a visit,
 * holds for a moment, then falls out of the bottom of the viewport — towards
 * the footer, where the same credit lives permanently. Plays once per session
 * and not at all for people who prefer reduced motion.
 */
export function CreditBadge() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    const remember = () => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* storage unavailable: the card simply plays again next time */
      }
    };
    if (seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      remember();
      return;
    }

    const timers = [
      window.setTimeout(() => setPhase("enter"), 500),
      window.setTimeout(() => setPhase("leave"), 3900),
      window.setTimeout(() => {
        setPhase("hidden");
        remember();
      }, 5000),
    ];
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  if (phase === "hidden") return null;

  return (
    <a
      className={`credit-pop credit-pop--${phase}`}
      href={credit.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label={`${credit.role} ${credit.name} — LinkedIn`}
    >
      <span className="credit-pop__dot" aria-hidden="true" />
      <span>
        {credit.role} <strong>{credit.name}</strong>
      </span>
      <ArrowUpRight aria-hidden="true" size={14} />
    </a>
  );
}
