import Reveal from "@/components/motion/Reveal";
import { seedToNations } from "@/content/copy";

/** Each stage is its own separate card — no overlap means no other stage's text can ever show through. */
export default function SeedToNations() {
  return (
    <section className="bg-ink py-28">
      <div className="px-6 pb-16 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">The Master Metaphor</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">From Seed to Nations</h2>
          <p className="mx-auto mt-6 max-w-xl text-left text-lg leading-relaxed text-paper/70">
            God&rsquo;s work often begins in ways that look small. One person. One conversation. One Scripture. One
            act of obedience. Then multiplication begins.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {seedToNations.map((stage, i) => (
          <Reveal key={stage.title} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-lg border border-paper/10 bg-charcoal p-6 text-center">
              <span className="text-4xl" aria-hidden="true">
                {stage.icon}
              </span>
              <h3 className="font-display mt-4 text-lg tracking-tight text-paper">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">{stage.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
