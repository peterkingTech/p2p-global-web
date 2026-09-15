import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Kingdom Stories",
  description: "Christian history, revival, the global Church, missions, and movements — discover what God has done.",
};

const categories = [
  { title: "Christian History", body: "The long story of the Church, from the early creeds to today." },
  { title: "Revival", body: "Seasons when God moved in unusual, widely-witnessed ways." },
  { title: "The Global Church", body: "How believers across cultures and continents are living out the same faith." },
  { title: "Persecution & Perseverance", body: "The cost some believers carry, and the faith that sustains them." },
];

export default function KingdomStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Kingdom Stories"
        title="Discover What God Has Done"
        subtitle="History, revival, the global Church, and the movements that shaped how we follow Jesus today."
        mediaKey="stories"
      />

      <section className="bg-paper py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05} className="relative min-h-[220px] overflow-hidden rounded-lg">
              <CinematicMedia mediaKey="stories" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
                <h3 className="font-display text-xl tracking-tight">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{cat.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Prose eyebrow="A Note on Accuracy" heading="Stories, told carefully">
        <p>
          This section is a growing editorial library, not a source of fabricated statistics or unverified claims.
          Where a story is shared, we aim to represent it accurately and give proper context — Christian history
          deserves the same honesty we&rsquo;d want applied to our own.
        </p>
      </Prose>
    </>
  );
}
