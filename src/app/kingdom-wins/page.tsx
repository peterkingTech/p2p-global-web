import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import { kingdomWinCategories } from "@/content/copy";

export const metadata: Metadata = {
  title: "Kingdom Wins",
  description: "Look what God has done — a place for believers to share stories of His work in their lives.",
};

const howItWorks = [
  { step: "01", title: "Share", body: "A believer shares what God has done — in words, a photo, or a short video." },
  { step: "02", title: "Reviewed", body: "Shared honestly, with context, before it's published — no exaggeration, no fabrication." },
  { step: "03", title: "Points to Him", body: "Published in a way that gives glory to Jesus, not to P2P or to the person sharing." },
];

export default function KingdomWinsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kingdom Wins"
        title="Look What God Has Done"
        subtitle="A space for the community to share what He is doing — in words, pictures, and video."
        mediaKey="kingdomWins"
      />

      <Prose eyebrow="Whose Glory" heading="P2P is not the object of the story">
        <p>
          When someone shares a Kingdom win, the point is never P2P&rsquo;s growth or reach. The story always
          points to Jesus &mdash; what He has done in a life, a family, or a community.
        </p>
      </Prose>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center text-paper">
          <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">The Shape of a Win</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">What gets shared here</h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/75">
            These are the kinds of stories this page will hold &mdash; categories, not claims. No specific wins are
            published yet.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {kingdomWinCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05} className="relative min-h-[220px] overflow-hidden rounded-lg">
              <CinematicMedia mediaKey={cat.mediaKey} />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-display mt-2 text-lg tracking-tight">{cat.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-paper/70">{cat.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">How It Will Work</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-ink sm:text-4xl">
              A simple, honest process
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06} className="text-center">
                <span className="font-display text-4xl text-gold">{step.step}</span>
                <h3 className="mt-3 text-lg tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="Honesty First" heading="No fabricated stories">
        <p>
          This page will hold real testimonies from real people as the community grows. Until then, we won&rsquo;t
          fabricate stories, numbers, or partnerships just to make this page feel fuller than it is.
        </p>
      </Prose>
    </>
  );
}
