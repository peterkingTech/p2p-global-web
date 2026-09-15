import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import DiscipleMultiplication from "@/components/sections/DiscipleMultiplication";
import TreeJourney from "@/components/sections/TreeJourney";
import { scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "Discipleship",
  description: "The P2P discipleship model: peer learning, growth, guidance, and multiplication rooted in 2 Timothy 2:2.",
};

export default function DiscipleshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipleship"
        title="Everyone Is Learning From Someone"
        subtitle="Everyone can help someone grow. That single sentence is the whole P2P model."
        mediaKey="discipleLearn"
      />

      <Prose eyebrow="The Biblical Pattern" heading="The pattern is biblical">
        <Quote reference={scripture.mission.reference} text={scripture.mission.text} />
        <p>
          Paul taught Timothy. Timothy was called to entrust what he&rsquo;d received to faithful people, who would
          then teach others also. That is not a management hierarchy — it is a relational chain of faithfulness
          that Scripture assumes will keep going, generation after generation.
        </p>
        <p>
          P2P exists to make that pattern practical: Scripture, prayer, and community structured around real
          relationships, not passive content consumption.
        </p>
      </Prose>

      <DiscipleMultiplication />

      <Prose eyebrow="Guidance, Not Hierarchy" heading="A guide, not clergy">
        <p>
          In P2P, a &ldquo;peer guide&rdquo; is someone a little further along the road, walking alongside you —
          not a titled authority standing over you. Guiding someone is simply teaching what you were taught, in
          relationship. <strong>Anyone who has grown can help someone else grow.</strong>
        </p>
      </Prose>

      <TreeJourney />

      <div className="bg-paper px-6 py-20 text-center">
        <Link
          href="/join"
          className="inline-block rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-paper transition-transform hover:scale-[1.03]"
        >
          Begin the Journey
        </Link>
      </div>
    </>
  );
}
