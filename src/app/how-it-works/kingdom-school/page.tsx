import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { orientationModule, gospelSalvationModules, foundationModules, electiveCategories } from "@/content/copy";

export const metadata: Metadata = {
  title: "Kingdom School",
  description: "A short orientation, the Gospel & Salvation track, the 12-module Christian Foundation, and over 144 Electives across 10 categories.",
};

export default function KingdomSchoolPage() {
  return (
    <>
      <PageHero
        eyebrow="Kingdom School"
        title="A Core Curriculum. Over 144 Electives to Keep You Growing."
        subtitle="The complete discipleship curriculum — free, at your pace, in your language."
      />

      <Prose eyebrow="The Path" heading="Three parts. One journey.">
        <p>
          Every believer starts with a short orientation, then the Gospel &amp; Salvation track, then the
          12-module Christian Foundation — the core curriculum this site refers to elsewhere simply as
          &ldquo;the Foundation.&rdquo; None of it is a course to rush through. You go one lesson at a time with
          your peer guide. No deadlines. No rush. In your language. At your pace.
        </p>
        <p>
          When you complete all 12 Christian Foundation modules — The Completion Moment fires. A cinematic
          experience. A letter from your peer guide. The Forest Reveal showing your full discipleship lineage.
          And the Commission.
        </p>
      </Prose>

      {/* Orientation */}
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="flex gap-5 rounded-lg border border-paper/10 bg-paper/5 px-5 py-5">
            <span className="w-8 shrink-0 font-display text-2xl text-gold-soft/50">0</span>
            <div>
              <p className="mb-1 text-xs tracking-[0.3em] text-gold-soft/70 uppercase">Before Module 1</p>
              <h3 className="font-medium text-paper">{orientationModule.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-paper/50">{orientationModule.description}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Gospel & Salvation */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-water uppercase">The Starting Point</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">The Gospel &amp; Salvation</h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {gospelSalvationModules.map((mod) => (
              <Reveal key={mod.title} className="rounded-lg border border-ink/10 px-5 py-4">
                <h3 className="font-medium text-ink">{mod.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{mod.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Christian Foundation */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">12 Modules</p>
            <h2 className="font-display mt-4 text-3xl tracking-tight">The Christian Foundation</h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {foundationModules.map((mod) => (
              <Reveal key={mod.number} className="flex gap-5 rounded-lg border border-paper/10 bg-paper/5 px-5 py-4">
                <span className="w-8 shrink-0 font-display text-2xl text-gold-soft/50">{mod.number}</span>
                <div>
                  <h3 className="font-medium text-paper">{mod.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/50">{mod.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="The Electives" heading="Over 144 plans. Choose what matches your season.">
        <p>
          After — or alongside — the Foundation, every member can choose from over 144 elective plans across 10
          categories. Plans are sequential within each category: complete the first to unlock the next. Start
          with whatever speaks to your current season of life.
        </p>
      </Prose>

      <section className="bg-paper px-6 py-16 text-ink">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {electiveCategories.map((cat) => (
            <Reveal key={cat.name}>
              <div className="flex items-center gap-4 rounded-xl p-4 text-paper" style={{ backgroundColor: cat.color }}>
                <span className="text-2xl" aria-hidden="true">
                  {cat.emoji}
                </span>
                <div>
                  <p className="font-medium">{cat.name}</p>
                  <p className="text-sm text-paper/70">{cat.count} plans</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
