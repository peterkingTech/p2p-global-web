import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { profileFeatures } from "@/content/copy";

export const metadata: Metadata = {
  title: "Profile and Identity",
  description: "@username, the blue tick, GPS verification, and your public profile on P2P Global.",
};

export default function ProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Profile and Identity"
        title="A real identity, in a real network."
        subtitle="Who you are on P2P Global — and why the network can trust it."
      />

      <Prose eyebrow="Why Identity Matters" heading="Real people, not anonymous accounts">
        <p>
          Discipleship is relational — it doesn&rsquo;t work well between strangers hiding behind anonymous
          handles. P2P Global builds identity and trust into the profile itself, without turning it into a
          public performance.
        </p>
      </Prose>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">On Your Profile</p>
            <h2 className="font-display text-3xl tracking-tight">What makes up your profile</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {profileFeatures.map((f) => (
              <Reveal key={f.title} className="flex gap-5 border-b border-ink/10 pb-8 last:border-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-lg font-medium" aria-hidden="true">
                  {f.icon}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
