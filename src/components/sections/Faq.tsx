import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { faqItemKeys, faqItemKeysAdditional } from "@/content/copy";


type Props = {
  tone?: "light" | "dark";
  /** "core" (homepage) shows the essential questions; "all" adds the rest. */
  scope?: "core" | "all";
};

/** Native <details>/<summary> accordion — accessible and functional with zero JS. */
export default async function Faq({ tone = "light", scope = "all" }: Props) {
  const keys = scope === "core" ? faqItemKeys : [...faqItemKeys, ...faqItemKeysAdditional];
  const t = await getTranslations("Faq");
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-forest py-24 text-paper" : "bg-paper py-24 text-ink"}>
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="text-center">
          <p className={`type-eyebrow ${isDark ? "text-sage" : "text-emerald"}`}>
            {t("eyebrow")}
          </p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
        </Reveal>

        <div className={`mt-12 divide-y ${isDark ? "divide-paper/15" : "divide-ink/10"}`}>
          {keys.map((key) => (
            <details key={key} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-lg font-medium marker:content-none">
                {t(`items.${key}.q`)}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className={`mt-3 max-w-xl text-base leading-relaxed ${isDark ? "text-paper/70" : "text-ink/70"}`}>
                {t(`items.${key}.a`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
