import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import Quote from "@/components/sections/Quote";
import { peerGuideExplainer, scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "Your Peer Guide",
  description: "What a peer guide is, how matching works, and how to become one.",
};

export default function PeerGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Your Peer Guide"
        title="Someone one step ahead. Walking beside you."
        subtitle="Not a pastor. Not a teacher. A further-along peer who goes through every lesson with you."
      />

      <Prose eyebrow="What Is a Peer Guide" heading="A guide, not clergy">
        <p>{peerGuideExplainer.definition}</p>
        <Quote reference={scripture.mission.reference} text={scripture.mission.text} />
        <p>
          Paul taught Timothy. Timothy taught others. They taught others still. The chain was not institutional —
          it was relational. P2P exists to make that same pattern practical today, across every language and
          timezone.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">What They Do</p>
            <h2 className="font-display text-3xl tracking-tight">What a peer guide actually does</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {peerGuideExplainer.what_they_do.map((item, i) => (
              <Reveal key={i} className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gold-soft/70" aria-hidden="true">
                  →
                </span>
                <p className="leading-relaxed text-paper/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Smart Matching</p>
            <h2 className="font-display text-3xl tracking-tight">How you are matched</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              P2P Global matches you with a peer guide based on five factors. You can also find a guide by their
              @username if you know who you want.
            </p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {peerGuideExplainer.matching_factors.map((factor) => (
              <Reveal key={factor.label} className="flex gap-4 border-b border-ink/10 pb-6 last:border-0">
                <div className="w-36 shrink-0 font-medium">{factor.label}</div>
                <p className="text-ink/60">{factor.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="Becoming a Guide" heading="When you finish — you begin" tone="dark">
        <p>{peerGuideExplainer.becoming_a_guide}</p>
      </Prose>
    </>
  );
}
