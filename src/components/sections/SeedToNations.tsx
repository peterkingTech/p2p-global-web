import { getTranslations } from "next-intl/server";
import Reveal from "@/components/motion/Reveal";
import StageSequence from "@/components/motion/StageSequence";
import { seedToNationsKeys, seedToNationsIcons } from "@/content/copy";

export default async function SeedToNations() {
  const t = await getTranslations("SeedToNations");
  const tSection = await getTranslations("SeedToNationsSection");
  const stages = seedToNationsKeys.map((key) => ({
    icon: seedToNationsIcons[key],
    title: t(`${key}.title`),
    body: t(`${key}.body`),
  }));

  return (
    <section className="bg-forest py-28">
      <div className="px-6 pb-16 text-center text-paper">
        <Reveal>
          <p className="type-eyebrow text-sage">{tSection("eyebrow")}</p>
          <h2 className="type-section mt-4">{tSection("heading")}</h2>
          <p className="type-lead mx-auto mt-6 max-w-xl text-paper/75">{tSection("body")}</p>
        </Reveal>
      </div>

      <StageSequence stages={stages} />
    </section>
  );
}
