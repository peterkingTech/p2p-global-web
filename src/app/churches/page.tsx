import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { churchPortalFeatures } from "@/content/copy";

export const metadata: Metadata = {
  title: "For Churches",
  description: "The Church Discipleship Portal — completely free for every church, always.",
};

const roles = [
  {
    role: "Senior Pastor or Lead Elder",
    access: "Full access to everything — grove dashboard, all member profiles, all cohorts, all settings.",
  },
  {
    role: "Discipleship Pastor",
    access: "Manage cohorts, see member profiles, assign peer guides, view their group's progress.",
  },
  {
    role: "Small Group Leader",
    access: "Manage their specific group — member progress, cohort activity, check-ins.",
  },
  {
    role: "Church Member",
    access:
      "Standard P2P experience. Church announcements and cohorts appear in their app. They choose whether leadership can see their progress.",
  },
];

const groveStages = [
  { stage: "🌰 Seeds", description: "Members who just joined or have not yet begun Module 1." },
  { stage: "🌱 Sprouts", description: "Members who have started the Foundation and are in the early modules." },
  { stage: "🌿 Young Trees", description: "Members actively working through the middle modules with a peer guide." },
  { stage: "🌳 Fruitful Trees", description: "Members in the later modules who are guiding others and earning fruit." },
  { stage: "🌲 Forest Builders", description: "Members who have completed the Foundation and whose disciples have disciples." },
];

export default function ChurchesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Churches"
        title="The Church Discipleship Portal."
        subtitle="Completely free. Every church. Full access. Always."
      />

      <Prose eyebrow="The Core Commitment" heading="Not a subscription. Not a tier. Free.">
        <p>
          The Church Discipleship Portal is completely free for every church that registers. No subscription. No
          payment. No feature held back behind a paywall. We do not charge for the kingdom. Every church — small
          or large, house church or megachurch, new plant or established congregation — gets full access to
          everything.
        </p>
        <p>P2P Global exists to serve the local church, not to sell to it.</p>
      </Prose>

      <Prose eyebrow="The Most Important Question" heading="Are we actually making disciples?" tone="dark">
        <p>
          Every pastor knows this tension. They can count attendance. They can count giving. They cannot count
          discipleship. They have no visibility into whether their members are actually being formed in the
          Word, whether new believers are being followed up, or whether anyone is being multiplied into
          disciple-makers.
        </p>
        <p>
          The Church Discipleship Portal makes discipleship visible at the congregational level for the first
          time. Not attendance. Not giving. Discipleship — the thing Jesus commanded.
        </p>
      </Prose>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">What You Get</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Everything your church needs to track discipleship.
            </h2>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {churchPortalFeatures.map((feature) => (
              <Reveal key={feature.title}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-ink/10 p-6">
                  <span className="text-2xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-paper">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">The Grove</p>
            <h2 className="font-display text-3xl tracking-tight">Your congregation as a living forest.</h2>
            <p className="mt-4 leading-relaxed text-paper/60">
              Individual users on P2P Global have trees. A church has a grove. The pastor opens the grove
              dashboard and sees the spiritual state of their people — not just who attended, but who is
              growing.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {groveStages.map((item) => (
              <Reveal key={item.stage} className="flex gap-4 border-b border-paper/10 pb-6 last:border-0">
                <span className="w-36 shrink-0 font-medium text-paper/90">{item.stage}</span>
                <p className="text-sm leading-relaxed text-paper/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Church Roles</p>
            <h2 className="font-display text-3xl tracking-tight">Built around your church structure.</h2>
          </Reveal>

          <div className="flex flex-col overflow-hidden rounded-xl border border-ink/10">
            {roles.map((item, i) => (
              <div
                key={item.role}
                className={`flex gap-6 border-b border-ink/10 px-6 py-5 last:border-0 ${i % 2 === 0 ? "bg-paper" : "bg-ink/5"}`}
              >
                <p className="w-44 shrink-0 text-sm font-medium">{item.role}</p>
                <p className="text-sm leading-relaxed text-ink/60">{item.access}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="Privacy" heading="Leadership sees progress. Never private content." tone="dark">
        <p>
          Church leadership can see which module a member is in, whether they have a peer guide, their tree
          stage, and whether they have been active recently. Leadership cannot see the content of session
          discussions, reflection answers, assignments, or prayer journal entries. Member privacy is protected
          by design — not as an add-on.
        </p>
        <p>
          Members can also choose to make their profile invisible to leadership in their privacy settings. When
          they do — only anonymised data appears in the grove.
        </p>
      </Prose>

      <section className="bg-paper px-6 py-20 text-center text-ink">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.35em] text-water uppercase">Get Started</p>
          <h2 className="font-display mb-4 text-3xl tracking-tight">Register your church in minutes.</h2>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-ink/60">
            Any pastor or church leader can register directly from the P2P Global app. Your congregation joins
            using your unique invite link or QR code. Free. Immediate. No approval required.
          </p>
          <Link
            href="/join"
            className="inline-block rounded-full bg-ink px-10 py-4 text-sm font-medium tracking-wide text-paper transition hover:opacity-80"
          >
            Download the app to register →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
