import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import CinematicMedia from "@/components/media/CinematicMedia";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Missions",
  description: "See the field. Hear the story. Pray for the workers. Learn from the work. Go where God sends you.",
};

const journey = [
  { key: "missions", title: "FIELD", body: "See where God is at work around the world." },
  { key: "kingdomStories", title: "STORY", body: "Hear how He is moving, told honestly and without exaggeration." },
  { key: "study", title: "SCRIPTURE", body: "Ground every mission in the Word, not just in urgency." },
  { key: "prayer", title: "PRAYER", body: "Pray specifically for the workers, not just the need." },
  { key: "discipleGrow", title: "LEARNING", body: "Learn what cross-cultural, faithful mission actually requires." },
  { key: "discipleHelp", title: "RESPONSE", body: "Respond as God leads you — in prayer, giving, or going." },
];

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Missions"
        title="See the Mission. Hear the Story."
        subtitle="Pray for the workers. Learn from the work. Go where God sends you."
        mediaKey="missions"
      />

      <Prose eyebrow="Not P2P's Call to Make" heading="P2P does not determine your calling">
        <p>
          Mission work belongs to God, carried out through the local church and the people He sends. P2P&rsquo;s
          role is simply to help believers see the field, learn well, pray specifically, and stay connected to
          what He is doing — never to decide someone&rsquo;s calling for them.
        </p>
      </Prose>

      <section className="bg-ink py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="relative min-h-[260px] overflow-hidden rounded-lg">
              <CinematicMedia mediaKey={step.key} />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-paper">
                <span className="text-xs tracking-[0.3em] text-gold-soft/80 uppercase">0{i + 1}</span>
                <h3 className="font-display mt-2 text-xl tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Prose eyebrow="Preparation Matters" heading="Faithful, not just urgent">
        <p>
          A heart for missions isn&rsquo;t enough on its own &mdash; the workers who last are the ones who prepared
          well: in Scripture, in character, in cross-cultural humility, and in real accountability to a sending
          church. P2P&rsquo;s discipleship pathway exists partly to build that foundation before anyone goes.
        </p>
      </Prose>

      <div className="bg-paper px-6 py-20 text-center">
        <p className="text-lg text-ink/70">Pray for the workers. Give as you&rsquo;re able. Go where He sends you.</p>
        <Link
          href="/join"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-paper transition-transform hover:scale-[1.03]"
        >
          Start With Discipleship
        </Link>
      </div>
    </>
  );
}
