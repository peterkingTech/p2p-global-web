import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Filmstrip from "@/components/sections/Filmstrip";
import { kingdomStoryCategories } from "@/content/copy";

/** Editorial preview of Kingdom Stories — real church history and revival accounts, not a generic blog feed. */
export default function KingdomStoriesPreview() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-2xl px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-gold-soft/90 uppercase">Real Stories</p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">Discover What God Has Done</h2>
          <p className="mt-6 text-left text-lg leading-relaxed text-paper/75">
            History, revival, the global Church, and the movements that shaped how we follow Jesus today &mdash;
            told carefully, without exaggeration.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        <Filmstrip
          items={kingdomStoryCategories.map((c) => ({ ...c, href: `/kingdom-stories/${c.slug}` }))}
          ariaLabel="Kingdom Stories categories"
        />
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href="/kingdom-stories"
          className="inline-block rounded-full border border-gold-soft/60 px-8 py-3.5 text-sm tracking-wide text-gold-soft transition-colors hover:bg-gold-soft hover:text-ink"
        >
          Explore All Kingdom Stories
        </Link>
      </Reveal>
    </section>
  );
}
