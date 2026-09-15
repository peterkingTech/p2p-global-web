import Reveal from "@/components/motion/Reveal";
import StageSequence from "@/components/motion/StageSequence";
import { seedToNations } from "@/content/copy";

export default function SeedToNations() {
  return (
    <section className="bg-ink py-28">
      <div className="px-6 pb-16 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">The Master Metaphor</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">From Seed to Nations</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            God&rsquo;s work often begins in ways that look small. One person. One conversation. One Scripture. One
            act of obedience. Then multiplication begins.
          </p>
        </Reveal>
      </div>

      <StageSequence stages={seedToNations} />
    </section>
  );
}
