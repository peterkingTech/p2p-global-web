import StickySequence from "@/components/motion/StickySequence";
import Reveal from "@/components/motion/Reveal";
import { discipleSteps, scripture } from "@/content/copy";

const mediaKeys = [
  "discipleLearn",
  "discipleGrow",
  "discipleHelp",
  "discipleExpand",
  "discipleMultiply",
  "discipleNations",
];

export default function DiscipleMultiplication() {
  const stages = discipleSteps.map((s, i) => ({
    mediaKey: mediaKeys[i],
    icon: s.icon,
    title: s.title,
    body: s.body,
  }));

  return (
    <section className="relative bg-ink">
      <div className="px-6 pt-28 pb-16 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">How Disciples Multiply</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">The Pattern Is Simple</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            You don&rsquo;t need to know the story of Paul and Timothy to understand the pattern: someone receives,
            someone grows, someone helps, someone teaches, someone multiplies.
          </p>
        </Reveal>
      </div>
      <StickySequence stages={stages} eyebrow="How Disciples Multiply" />
      <div className="px-6 py-20 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold-soft/90 uppercase">{scripture.mission.reference}</p>
          <p className="font-display mx-auto mt-4 max-w-2xl text-xl italic sm:text-2xl">
            &ldquo;{scripture.mission.text}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
