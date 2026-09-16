import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { peerCircleExplainer } from "@/content/copy";

export const metadata: Metadata = {
  title: "Peer Circles",
  description: "Group learning for 3 to 8 believers going through the same plan together.",
};

export default function PeerCirclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Peer Circles"
        title="Discipleship does not have to be one-on-one."
        subtitle="Groups of 3 to 8 believers going through the same plan together — from anywhere in the world."
      />

      <Prose eyebrow="What Is a Peer Circle" heading={peerCircleExplainer.definition}>
        <p>
          In a standard peer guide relationship — one guide, one learner. In a circle — everyone contributes to
          everyone else&rsquo;s growth. The discussion is richer. The accountability is shared. The community is
          real. And the nations represented around the circle make the Body of Christ visible in a way
          one-on-one cannot.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">How It Works</p>
            <h2 className="font-display text-3xl tracking-tight">What happens in a circle</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {peerCircleExplainer.how_it_works.map((step, i) => (
              <Reveal key={i} className="flex gap-4">
                <span className="w-8 shrink-0 font-display text-3xl text-gold-soft/30">{i + 1}</span>
                <p className="pt-1 leading-relaxed text-paper/80">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Fruits</p>
            <h2 className="font-display text-3xl tracking-tight">What a circle earns</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {peerCircleExplainer.fruits.map((fruit, i) => (
              <Reveal key={i} className="flex gap-4 rounded-lg border border-ink/10 px-5 py-4">
                <span className="text-xl" aria-hidden="true">
                  🍎
                </span>
                <p className="leading-relaxed text-ink/70">{fruit}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
