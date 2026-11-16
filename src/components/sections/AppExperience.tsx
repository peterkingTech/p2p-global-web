import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";
import { appAreaKeys } from "@/content/copy";

type Props = {
  tone?: "light" | "dark";
  showCta?: boolean;
};

/**
 * Explains the app's main experiences. Deliberately a numbered editorial
 * list, not a tab bar — the website describes the app, it doesn't mimic it.
 */
export default async function AppExperience({ tone = "light", showCta = true }: Props) {
  const t = await getTranslations("AppExperience");
  const isDark = tone === "dark";

  return (
    <section className={isDark ? "bg-ink py-28 text-paper" : "bg-paper py-28 text-ink"}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <Reveal>
            <p className={`type-eyebrow ${isDark ? "text-sage" : "text-emerald"}`}>{t("eyebrow")}</p>
            <h2 className="type-section mt-4">{t("heading")}</h2>
            <p className={`mt-6 text-lg leading-relaxed ${isDark ? "text-paper/70" : "text-ink/70"}`}>{t("body")}</p>
            {showCta && (
              <Link
                href="/join"
                className={`mt-10 inline-block rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                  "bg-emerald-bright text-white hover:bg-emerald"
                }`}
              >
                {t("cta")} <NextArrow />
              </Link>
            )}
          </Reveal>

          <ol className={`divide-y border-y ${isDark ? "divide-paper/10 border-paper/10" : "divide-ink/10 border-ink/10"}`}>
            {appAreaKeys.map((key, i) => (
              <li key={key}>
                <Reveal delay={i * 0.04} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[4rem_10rem_minmax(0,1fr)] sm:gap-6">
                  <span className={`font-display text-2xl ${isDark ? "text-paper/30" : "text-ink/25"}`}>{`0${i + 1}`}</span>
                  <h3 className="type-card">{t(`areas.${key}.title`)}</h3>
                  <p className={`col-start-2 leading-relaxed sm:col-start-3 ${isDark ? "text-paper/70" : "text-ink/70"}`}>
                    {t(`areas.${key}.body`)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
