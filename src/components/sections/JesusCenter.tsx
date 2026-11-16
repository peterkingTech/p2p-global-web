import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";

/** Pure typography interstitial — the site's central theological claim, stated plainly. */
export default async function JesusCenter() {
  const t = await getTranslations("JesusCenter");
  const tBrand = await getTranslations("Brand");

  return (
    <section className="flex min-h-[80svh] items-center bg-paper px-6 py-32 text-ink">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="type-eyebrow text-emerald">
          {tBrand("centerLine1")} <span aria-hidden="true">&middot;</span> {tBrand("centerLine2")}
        </p>
        <h2 className="type-hero mt-8">{t("heading")}</h2>
        <p className="type-lead mx-auto mt-10 max-w-2xl text-ink/70">{t("body")}</p>
      </Reveal>
    </section>
  );
}
