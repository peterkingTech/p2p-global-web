import Link from "next/link";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";
import MediaCard from "@/components/sections/MediaCard";
import { giftCategories, giftExamples, scripture } from "@/content/copy";

const exampleMediaKeys = ["discipleHelp", "discipleExpand", "discipleGrow", "discipleLearn"];
const categoryMediaKeys = ["giftCare", "giftTech", "giftLeadership", "giftCreative", "giftEducation", "giftMinistry"];

export default function BodyOfChristEngine() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="px-6 text-center text-paper">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">Every Believer Has Gifts</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-6xl">The Body of Christ Engine</h2>
          <blockquote className="font-display mx-auto mt-8 max-w-2xl text-xl italic text-paper/85 sm:text-2xl">
            &ldquo;{scripture.gifts.text}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm tracking-[0.2em] text-paper/50 uppercase">{scripture.gifts.reference}</p>
          <p className="mx-auto mt-8 max-w-xl text-left text-base leading-relaxed text-paper/70">
            Believers do not only learn Bible lessons — what you learn can shape how you serve, and what God has
            placed in you can strengthen someone else. Discipleship becomes service, service becomes contribution,
            and contribution becomes multiplication.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
        {giftCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05}>
            <MediaCard mediaKey={categoryMediaKeys[i]} imgHeight="h-40">
              <span className="text-3xl" aria-hidden="true">
                {cat.icon}
              </span>
              <h3 className="font-display mt-3 text-lg tracking-tight">{cat.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-paper/70">{cat.examples}</p>
              <p className="mt-3 text-[11px] tracking-[0.2em] text-gold-soft/90 uppercase">→ {cat.outcome}</p>
            </MediaCard>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-28 max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.3em] text-paper/50 uppercase">Illustrative &mdash; Example</p>
          <h3 className="font-display mt-3 text-2xl text-paper sm:text-3xl">Your Gift Can Serve Someone</h3>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16">
          {giftExamples.map((ex, i) => (
            <Reveal key={ex.title} delay={i * 0.05}>
              <div className={`flex flex-col items-center gap-6 sm:flex-row ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:w-64">
                  <CinematicMedia mediaKey={exampleMediaKeys[i % exampleMediaKeys.length]} />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl" aria-hidden="true">
                    {ex.icon}
                  </span>
                  <h4 className="font-display mt-2 text-xl text-paper">{ex.title}</h4>
                  <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {ex.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-paper/20 px-3 py-1 text-[11px] tracking-wide text-paper/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70">{ex.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/gifts"
          className="inline-block rounded-full border border-gold-soft/60 px-8 py-3.5 text-sm tracking-wide text-gold-soft transition-colors hover:bg-gold-soft hover:text-ink"
        >
          Discover the Gifts Vision
        </Link>
      </div>
    </section>
  );
}
