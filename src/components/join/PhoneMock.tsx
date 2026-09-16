type Props = {
  platform: "ios" | "android";
};

/** A generic phone-frame mockup with a placeholder app screen inside — not a real screenshot. */
export default function PhoneMock({ platform }: Props) {
  const isIos = platform === "ios";

  return (
    <div
      className={`relative h-[340px] w-[168px] border-4 border-paper/25 bg-ink shadow-2xl shadow-black/40 ${
        isIos ? "rounded-[2.25rem]" : "rounded-[1.5rem]"
      }`}
      role="img"
      aria-label={`Mock ${isIos ? "iOS" : "Android"} app screen — placeholder, not a real screenshot`}
    >
      {isIos ? (
        <div className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-ink" />
      ) : (
        <div className="absolute top-2 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-paper/30" />
      )}

      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] p-4 pt-8">
        <p className="font-display text-center text-xs tracking-[0.25em] text-gold-soft/90">P2P</p>
        <div className="mt-6 space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-paper/20" />
          <div className="h-2 w-1/2 rounded-full bg-paper/15" />
        </div>
        <div className="mt-6 space-y-3">
          <div className="h-16 rounded-lg bg-paper/10" />
          <div className="h-16 rounded-lg bg-paper/10" />
        </div>
        <div className="absolute bottom-5 left-4 right-4 h-9 rounded-full bg-gold-soft/90" />
      </div>
    </div>
  );
}
