import Reveal from "@/components/motion/Reveal";
import { faqItems, faqItemsAdditional } from "@/content/copy";

const allFaqItems = [...faqItems, ...faqItemsAdditional];

type Props = {
  tone?: "light" | "dark";
};

/** Native <details>/<summary> accordion — accessible and functional with zero JS. */
export default function Faq({ tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-ink py-24 text-paper" : "bg-paper py-24 text-ink"}>
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="text-center">
          <p className={`text-xs tracking-[0.35em] uppercase ${isDark ? "text-gold-soft/90" : "text-water"}`}>
            Questions
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        </Reveal>

        <div className={`mt-12 divide-y ${isDark ? "divide-paper/15" : "divide-ink/10"}`}>
          {allFaqItems.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium marker:content-none">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className={`mt-3 max-w-xl text-base leading-relaxed ${isDark ? "text-paper/70" : "text-ink/70"}`}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
