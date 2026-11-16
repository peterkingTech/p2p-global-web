import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { NextArrow } from "@/components/ui/DirArrow";

const stepKeys = ["learn", "grow", "guide"] as const;

/** What peer-to-peer discipleship means — three movements, and what P2P never replaces. */
export default async function HowItActuallyWorks({ showLink = true }: { showLink?: boolean }) {
  const t = await getTranslations("HowItActuallyWorks");
  const notItems = t.raw("notItems") as string[];

  return (
    <section className="bg-white py-28 text-ink">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="type-eyebrow text-emerald">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{t("subheading")}</p>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {stepKeys.map((key, i) => (
            <li key={key} className="bg-paper">
              <Reveal delay={i * 0.08} className="flex h-full flex-col gap-4 p-8 sm:p-10">
                <span className="font-display text-6xl leading-none text-ink/15">{`0${i + 1}`}</span>
                <h3 className="type-card mt-2">{t(`steps.${key}.title`)}</h3>
                <p className="leading-relaxed text-ink/70">{t(`steps.${key}.body`)}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl rounded-2xl bg-ink px-8 py-10 text-paper sm:px-12">
          <p className="type-eyebrow text-sage">{t("notEyebrow")}</p>
          <ul className="mt-6 space-y-4">
            {notItems.map((item) => (
              <li key={item} className="border-s border-paper/25 ps-5 leading-relaxed text-paper/85">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {showLink && (
          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              href="/how-it-works"
              className="inline-block rounded-full border border-ink/25 px-8 py-3 text-sm tracking-wide transition hover:bg-ink hover:text-paper"
            >
              {t("learnMore")} <NextArrow />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
