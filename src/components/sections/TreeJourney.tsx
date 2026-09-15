import Reveal from "@/components/motion/Reveal";
import MediaStageSequence from "@/components/motion/MediaStageSequence";
import { treeJourney } from "@/content/copy";

const mediaKeys = ["seedSoil", "seedSprout", "discipleGrow", "seedForest", "discipleMultiply", "seedEarth"];

export default function TreeJourney() {
  const stages = treeJourney.map((stage, i) => ({
    mediaKey: mediaKeys[i],
    icon: stage.icon,
    title: stage.title,
    body: stage.body,
  }));

  return (
    <section className="bg-ink py-28">
      <div className="px-6 pb-16 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">Your Journey of Growth</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-paper sm:text-6xl">
            A Journey, Not a Status
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Growth is not about status. It is about becoming rooted, fruitful, and able to help others grow.
          </p>
        </Reveal>
      </div>

      <MediaStageSequence stages={stages} />
    </section>
  );
}
