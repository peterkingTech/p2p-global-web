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
    <section className="bg-ink py-28">
      <div className="px-6 pb-16 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{tSection("eyebrow")}</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">{tSection("heading")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-paper/70">{tSection("body")}</p>
        </Reveal>
      </div>

      <StageSequence stages={stages} />
    </section>
  );
}
