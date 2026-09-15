import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
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
        <div className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] sm:px-[max(1.5rem,calc((100vw-72rem)/2))]">
          {treeJourney.map((stage, i) => (
            <div
              key={stage.title}
              className="relative h-[440px] w-[78vw] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[360px]"
            >
              <CinematicMedia mediaKey={mediaKeys[i]} />
              <div className="relative z-10 flex h-full flex-col justify-end p-7 text-paper">
                <span className="text-4xl">{stage.icon}</span>
                <h3 className="font-display mt-4 text-2xl tracking-tight">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
