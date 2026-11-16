import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow?: string;
  heading?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

/** Editorial text block used across the interior pages — prose, not cards. */
export default function Prose({ eyebrow, heading, children, tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-ink py-24 text-paper" : "bg-paper py-24 text-ink"}>
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          {eyebrow && (
            <p className={`type-eyebrow ${isDark ? "text-sage/90" : "text-emerald"}`}>
              {eyebrow}
            </p>
          )}
          {heading && <h2 className="type-section mt-4">{heading}</h2>}
          <div
            className={`mt-6 space-y-5 text-lg leading-relaxed [&_strong]:font-semibold ${
              isDark ? "text-paper/80 [&_strong]:text-paper [&_cite]:text-gold" : "text-ink/75 [&_strong]:text-ink [&_cite]:text-gold-deep"
            }`}
          >
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
