import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import { serviceQueryKeys, serviceOfferKeys } from "@/content/copy";

/** Two columns of illustrative needs and offers — typography only, clearly labelled as illustrative. */
export default async function KingdomServiceNetwork() {
  const t = await getTranslations("KingdomServiceNetwork");

  const columns = [
    { heading: t("lookingForHelp"), items: serviceQueryKeys.map((k) => t(`queries.${k}`)) },
    { heading: t("offeringGift"), items: serviceOfferKeys.map((k) => t(`offers.${k}`)) },
  ];

  return (
    <section className="bg-paper py-28 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="type-eyebrow text-emerald">{t("eyebrow")}</p>
          <h2 className="type-section mt-4">{t("heading")}</h2>
          <p className="type-lead mt-6 text-ink/70">{t("intro")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {columns.map((col, i) => (
            <Reveal key={col.heading} delay={i * 0.08} className="rounded-2xl border border-ink/10 bg-white p-8 sm:p-10">
              <h3 className="type-card">{col.heading}</h3>
              <ul className="mt-6 space-y-4">
                {col.items.map((item) => (
                  <li key={item} className="border-s-2 border-emerald/30 ps-4 text-ink/75 italic">
                    &ldquo;{item}&rdquo;
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink/60">{t("disclaimer")}</p>
        </Reveal>
      </div>
    </section>
  );
}
