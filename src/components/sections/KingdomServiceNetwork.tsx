import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { serviceQueryKeys, serviceOfferKeys } from "@/content/copy";

export default async function KingdomServiceNetwork() {
  const t = await getTranslations("KingdomServiceNetwork");

  return (
    <section className="relative overflow-hidden bg-paper py-28">
      <div className="px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">{t("heading")}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-left text-lg leading-relaxed text-ink/70">{t("intro")}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        <Reveal>
          <MediaCard mediaKey="serviceNetwork" imgHeight="h-40">
            <span className="text-3xl" aria-hidden="true">
              🔍
            </span>
            <h3 className="font-display mt-3 text-2xl tracking-tight">{t("lookingForHelp")}</h3>
            <ul className="mt-6 space-y-4">
              {serviceQueryKeys.map((key) => (
                <li key={key} className="border-l border-gold-soft/40 pl-4 text-sm text-paper/80 italic">
                  &ldquo;{t(`queries.${key}`)}&rdquo;
                </li>
              ))}
            </ul>
          </MediaCard>
        </Reveal>

        <Reveal delay={0.1}>
          <MediaCard mediaKey="gifts" imgHeight="h-40">
            <span className="text-3xl" aria-hidden="true">
              ✋
            </span>
            <h3 className="font-display mt-3 text-2xl tracking-tight">{t("offeringGift")}</h3>
            <ul className="mt-6 space-y-4">
              {serviceOfferKeys.map((key) => (
                <li key={key} className="border-l border-gold-soft/40 pl-4 text-sm text-paper/80 italic">
                  &ldquo;{t(`offers.${key}`)}&rdquo;
                </li>
              ))}
            </ul>
          </MediaCard>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl px-6">
        <p className="text-left text-sm leading-relaxed text-ink/50">{t("disclaimer")}</p>
      </Reveal>
    </section>
  );
}
