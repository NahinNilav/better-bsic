const TERMINAL_PUNCTUATION = [".", "?", "!"];

/**
 * The live BSIC brand signature: the final stop of a large title line is set in
 * coral. Titles are authored as plain strings ending in normal punctuation, and
 * the closing mark is split out here so no call site has to hand-write markup.
 */
export function BrandTitle({ children }: { children: string }) {
  const stop = TERMINAL_PUNCTUATION.find((mark) => children.endsWith(mark));

  if (!stop) {
    return <>{children}</>;
  }

  return (
    <>
      {children.slice(0, -stop.length)}
      <span className="brand-dot">{stop}</span>
    </>
  );
}
