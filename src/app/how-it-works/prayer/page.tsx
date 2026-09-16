import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { prayerFeatures } from "@/content/copy";

export const metadata: Metadata = {
  title: "Prayer",
  description: "The Sinner's Prayer, prayer library, confession builder, and prayer journal inside P2P Global.",
};

export default function PrayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer"
        title="Prayer, built into the app, not bolted on."
        subtitle="From your first prayer of commitment to a daily rhythm you keep for years."
      />

      <Prose eyebrow="Why It's Here" heading="Prayer becomes participation">
        <p>
          Discipleship without prayer is just information. P2P Global keeps prayer close to everything else you
          do — accessible from wherever you are in the app, not tucked away in a separate corner.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">The Prayer Tools</p>
            <h2 className="font-display text-3xl tracking-tight">Four ways to pray</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {prayerFeatures.map((f) => (
              <Reveal key={f.title} className="flex gap-5 border-b border-paper/10 pb-8 last:border-0">
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {f.icon}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-paper/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
