import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import FeatureRow from "@/components/sections/FeatureRow";
import { discipleStepKeys, discipleStepIcons } from "@/content/copy";

const mediaKeys: Record<(typeof discipleStepKeys)[number], string> = {
  learn: "discipleLearn",
  grow: "discipleGrow",
  helpSomeone: "discipleHelp",
  theyHelp: "discipleExpand",
  multiply: "discipleMultiply",
  nations: "discipleNations",
};

export default async function DiscipleMultiplication() {
  const t = await getTranslations("DiscipleMultiplication");
  const tScripture = await getTranslations("Scripture.mission");

  return (
    <section className="bg-paper py-28">
      <div className="px-6 pb-16 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">{t("heading")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-ink/70">{t("body")}</p>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 text-ink">
        {discipleStepKeys.map((key, i) => (
          <FeatureRow
            key={key}
            icon={discipleStepIcons[key]}
            title={t(`steps.${key}.title`)}
            body={t(`steps.${key}.body`)}
            mediaKey={mediaKeys[key]}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <div className="px-6 pt-20 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-water uppercase">{tScripture("reference")}</p>
          <p className="font-display mx-auto mt-4 max-w-2xl text-xl text-ink italic sm:text-2xl">
            &ldquo;{tScripture("text")}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
