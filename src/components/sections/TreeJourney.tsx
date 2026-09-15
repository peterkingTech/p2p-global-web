import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { treeJourney } from "@/content/copy";

const mediaKeys = ["seedSoil", "seedSprout", "discipleGrow", "seedForest", "discipleMultiply", "seedEarth"];

/** Horizontal, snap-scrolling filmstrip — deliberately not a card grid. */
export default function TreeJourney() {
  return (
    <section className="bg-paper py-28">
      <div className="px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-water uppercase">Your Journey of Growth</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-ink sm:text-6xl">A Journey, Not a Status</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Growth is not about status. It is about becoming rooted, fruitful, and able to help others grow.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          role="group"
          aria-label="Stages of the P2P discipleship journey"
          className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {treeJourney.map((stage, i) => (
            <div key={stage.title} className="w-[78vw] shrink-0 snap-start sm:w-[300px]">
              <MediaCard mediaKey={mediaKeys[i]} imgHeight="h-56">
                <span className="text-3xl" aria-hidden="true">
                  {stage.icon}
                </span>
                <h3 className="font-display mt-3 text-xl tracking-tight">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{stage.body}</p>
              </MediaCard>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
