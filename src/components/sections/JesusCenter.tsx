import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";

/** Pure typography interstitial — the site's central theological claim, stated plainly. */
export default async function JesusCenter() {
  const t = await getTranslations("JesusCenter");
  const tBrand = await getTranslations("Brand");

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-paper px-6 py-32 text-center">
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-water uppercase">{tBrand("centerLine1")}</p>
        <p className="text-xs tracking-[0.4em] text-water uppercase">{tBrand("centerLine2")}</p>
        <h2 className="font-display mt-8 text-4xl tracking-tight text-ink sm:text-6xl">{t("heading")}</h2>
        <p className="mx-auto mt-8 max-w-lg text-left text-base leading-relaxed text-ink/60">{t("body")}</p>
      </Reveal>
    </section>
  );
}
