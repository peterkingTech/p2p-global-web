import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Filmstrip from "@/components/sections/Filmstrip";
import { kingdomStoryCategories } from "@/content/copy";

export const metadata: Metadata = {
  title: "Kingdom Stories",
  description: "Christian history, revival, the global Church, missions, and movements — discover what God has done.",
};

export default function KingdomStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Kingdom Stories"
        title="Discover What God Has Done"
        subtitle="History, revival, the global Church, and the movements that shaped how we follow Jesus today."
        mediaKey="stories"
      />

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center text-paper">
          <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">Editorial Discovery</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">Eight ways into the story</h2>
          <p className="mt-6 text-left text-lg leading-relaxed text-paper/75">
            This isn&rsquo;t a feed to scroll past — it&rsquo;s a growing library organized around how the Church
            has actually moved through history, and where it stands today.
          </p>
        </div>
        <div className="mt-14">
          <Filmstrip items={kingdomStoryCategories} ariaLabel="Kingdom Stories categories" />
        </div>
      </section>

      <Prose eyebrow="A Note on Accuracy" heading="Stories, told carefully">
        <p>
          This section is a growing editorial library, not a source of fabricated statistics or unverified claims.
          Where a story is shared, we aim to represent it accurately and give proper context &mdash; Christian
          history deserves the same honesty we&rsquo;d want applied to our own.
        </p>
        <p>
          Categories above are the shape of the library as we build it out. Individual stories will be added over
          time, sourced and reviewed before publishing &mdash; not generated to fill space.
        </p>
      </Prose>
    </>
  );
}
