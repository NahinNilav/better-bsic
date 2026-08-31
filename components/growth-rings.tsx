export function GrowthRings({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "growth-rings growth-rings--compact" : "growth-rings"}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
