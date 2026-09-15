import StickySequence from "@/components/motion/StickySequence";
import Reveal from "@/components/motion/Reveal";
import { seedToNations } from "@/content/copy";

const mediaKeys = ["seedSoil", "seedSprout", "seedForest", "seedContinents", "seedEarth"];

export default function SeedToNations() {
  const stages = seedToNations.map((s, i) => ({
    mediaKey: mediaKeys[i],
    icon: s.icon,
    title: s.title,
    body: s.body,
  }));

  return (
    <section className="relative bg-ink">
      <div className="px-6 pt-28 pb-16 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">The Master Metaphor</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">From Seed to Nations</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            God&rsquo;s work often begins in ways that look small. One person. One conversation. One Scripture. One
            act of obedience. Then multiplication begins.
          </p>
        </Reveal>
      </div>
      <StickySequence stages={stages} eyebrow="From Seed to Nations" />
    </section>
  );
}
