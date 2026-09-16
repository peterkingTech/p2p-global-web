import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { growthStages, treeAnatomy } from "@/content/copy";

export const metadata: Metadata = {
  title: "Your Living Tree",
  description: "Every stage of the Living Tree explained — from Seed to Forest of Nations.",
};

export default function LivingTreePage() {
  return (
    <>
      <PageHero
        eyebrow="Your Living Tree"
        title="Not decoration. Every part means something."
        subtitle="Your tree grows in real time as you learn, guide, and multiply."
      />

      <Prose eyebrow="What Is the Living Tree" heading="A real-time picture of your journey">
        <p>
          Every believer on P2P Global has a Living Tree — a visualization that reflects your actual discipleship
          journey. It is not a gamification system. It is not points. It is a mirror. Your roots show doctrinal
          depth. Your trunk shows faithfulness. Your branches show who you are guiding. Your fruit shows what you
          have accomplished. Your grain shows who you have brought in.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">Growth Stages</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">Six stages. One direction.</h2>
          </Reveal>

          <div className="flex flex-col gap-16">
            {growthStages.map((stage, i) => (
              <Reveal key={stage.stage} className="flex gap-6">
                <div className="w-16 shrink-0 text-center">
                  <span className="text-4xl" aria-hidden="true">
                    {stage.emoji}
                  </span>
                  <p className="mt-2 text-xs text-paper/40">{`0${i + 1}`}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs tracking-[0.3em] text-gold-soft/80 uppercase">{stage.subtitle}</p>
                  <h3 className="font-display text-2xl">{stage.title}</h3>
                  <p className="mt-1 text-lg text-gold-soft/70 italic">{stage.headline}</p>
                  <p className="mt-4 leading-relaxed text-paper/70">{stage.body}</p>
                  <div className="mt-4 rounded-lg border border-paper/10 bg-paper/5 px-4 py-3">
                    <p className="text-xs text-paper/50">
                      <span className="font-medium text-paper/70">In the app: </span>
                      {stage.what_it_means}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">The Anatomy</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">Every part of your tree explained</h2>
          </Reveal>

          <div className="flex flex-col gap-10">
            {treeAnatomy.map((part) => (
              <Reveal key={part.part} className="flex gap-6 border-b border-ink/10 pb-10 last:border-0">
                <span className="shrink-0 text-3xl" aria-hidden="true">
                  {part.icon}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{part.part}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{part.explanation}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
