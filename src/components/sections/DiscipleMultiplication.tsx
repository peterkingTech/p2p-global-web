import Reveal from "@/components/motion/Reveal";
import DiscipleStageSequence from "@/components/motion/DiscipleStageSequence";
import { discipleSteps, scripture } from "@/content/copy";

export default function DiscipleMultiplication() {
  return (
    <section className="bg-paper py-28">
      <div className="px-6 pb-16 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">How Disciples Multiply</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">The Pattern Is Simple</h2>
          <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-ink/70">
            You don&rsquo;t need to know the story of Paul and Timothy to understand the pattern: someone receives,
            someone grows, someone helps, someone teaches, someone multiplies.
          </p>
        </Reveal>
      </div>

      <DiscipleStageSequence steps={discipleSteps} />

      <div className="px-6 pt-20 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-water uppercase">{scripture.mission.reference}</p>
          <p className="font-display mx-auto mt-4 max-w-2xl text-xl text-ink italic sm:text-2xl">
            &ldquo;{scripture.mission.text}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
