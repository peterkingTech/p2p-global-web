import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "The Generational Forest",
  description: "Your full discipleship lineage — who you guided, who they guided, and which nations were reached.",
};

const layers = [
  { label: "Your tree", detail: "At the center. Full size. This is you and your journey." },
  { label: "Generation 1", detail: "Your direct mentees. Smaller trees surrounding yours, connected by glowing root lines underground." },
  { label: "Generation 2", detail: "Your mentees' mentees. People you have never met who are growing because of your faithfulness." },
  { label: "Generation 3+", detail: "Dots and seedlings at the edge of the forest. The harvest you cannot fully see yet." },
  { label: "Your ancestry", detail: "Looking backward — who discipled you, who discipled them. The spiritual genealogy trace going back through the network." },
];

export default function GenerationalForestPage() {
  return (
    <>
      <PageHero
        eyebrow="The Generational Forest"
        title="Your discipleship impact, made visible."
        subtitle="Not just your journey. Everyone your journey has touched."
      />

      <Prose eyebrow="What Is the Generational Forest" heading="Beyond your own tree">
        <p>
          Your Living Tree shows your personal journey. The Generational Forest shows your impact. Every person
          you guided has a tree. Every person they guided has a tree. The forest grows from one act of
          faithfulness — yours.
        </p>
        <Quote reference={scripture.vision.reference} text={scripture.vision.text} />
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">How to Read Your Forest</p>
            <h2 className="font-display text-3xl tracking-tight">What you see in the Generational Forest</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {layers.map((layer) => (
              <Reveal key={layer.label} className="flex gap-6 border-b border-paper/10 pb-8 last:border-0">
                <div className="w-32 shrink-0">
                  <p className="font-medium text-gold-soft/80">{layer.label}</p>
                </div>
                <p className="leading-relaxed text-paper/70">{layer.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="The Global Tab" heading="A world map of your discipleship reach" tone="dark">
        <p>
          Inside the Generational Forest — a second tab shows a world map. Your country is lit in green. Nations
          where your disciples or their disciples are located glow gold. Nations with no P2P presence yet are
          shown in dark — a quiet missions prompt. The earth being filled with His glory, tracked one
          discipleship relationship at a time.
        </p>
      </Prose>

      <Prose eyebrow="The Forest Reveal" heading="When the forest is revealed for the first time">
        <p>
          When you complete all 12 Foundation modules — The Completion Moment fires. Phase 3 is the Forest
          Reveal. The screen zooms out from your tree to show your full forest for the first time — every tree,
          every nation, every root connection. The stats appear one by one. Then the Commission:{" "}
          <em>You are ready. Go find your person.</em>
        </p>
      </Prose>
    </>
  );
}
