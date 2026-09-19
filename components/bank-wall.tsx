import Image from "next/image";
import { shareholderBanks } from "@/data/site";

/**
 * All shareholder banks, one uniform cell each, in a fixed alphabetical order.
 * There is deliberately no "featured" subset — every bank holds equal standing
 * in the fund, so every logo gets the same cell, cap height and treatment.
 */
export function BankWall() {
  return (
    <div className="bank-wall">
      <ul className="bank-wall__grid">
        {shareholderBanks.map((bank) => (
          <li className="bank-wall__cell" key={bank.name}>
            <Image
              src={bank.logo}
              alt={bank.name}
              width={bank.width}
              height={bank.height}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
