type Props = {
  platform: "ios" | "android";
};

/**
 * Generic "coming soon" badge — deliberately not a reproduction of Apple's or
 * Google's actual store marks (those are trademarked), just plain wording and
 * a simple device glyph standing in for the real store buttons.
 */
export default function StoreBadge({ platform }: Props) {
  const label = platform === "ios" ? "iOS" : "Android";

  return (
    <div className="flex items-center gap-3 rounded-lg border border-paper/25 px-5 py-3 text-left text-paper/80">
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M10.5 19h3" strokeLinecap="round" />
      </svg>
      <div>
        <p className="text-[10px] tracking-[0.2em] text-paper/50 uppercase">Coming Soon On</p>
        <p className="font-display text-base leading-tight">{label}</p>
      </div>
    </div>
  );
}
