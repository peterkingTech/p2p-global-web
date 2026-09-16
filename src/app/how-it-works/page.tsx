import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A complete guide to the P2P Global Kingdom School app — from your first day to guiding others.",
};

const sections = [
  { title: "Getting Started", href: "/how-it-works/getting-started", icon: "🌰", description: "Your first week on P2P Global — step by step." },
  { title: "Your Living Tree", href: "/how-it-works/living-tree", icon: "🌳", description: "What every part of your tree means — roots, trunk, branches, fruit, grain." },
  { title: "Kingdom School", href: "/how-it-works/kingdom-school", icon: "📖", description: "The Foundation (12 modules) and the Electives (144 plans across 10 categories)." },
  { title: "Your Peer Guide", href: "/how-it-works/peer-guide", icon: "🤝", description: "What a peer guide is, how matching works, and how to become one." },
  { title: "Peer Circles", href: "/how-it-works/peer-circles", icon: "👥", description: "Group learning for 3 to 8 believers going through a plan together." },
  { title: "The Generational Forest", href: "/how-it-works/generational-forest", icon: "🌍", description: "Your full discipleship lineage — who you guided, who they guided, which nations were reached." },
  { title: "Messaging and Calls", href: "/how-it-works/messaging", icon: "💬", description: "The inbox, audio calls, video calls, group calls, and break rooms." },
  { title: "Prayer", href: "/how-it-works/prayer", icon: "🙏", description: "The Sinner's Prayer, prayer library, confession builder, and prayer journal." },
  { title: "Profile and Identity", href: "/how-it-works/profile", icon: "✓", description: "@username, the blue tick, GPS verification, and your public profile." },
  { title: "Grain and Invitations", href: "/how-it-works/grain", icon: "🌾", description: "Your personal harvest record and how to invite others to Kingdom School." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="The Manual for the App"
        subtitle="Everything explained — from your first day to guiding others across nations."
      />

      <Prose eyebrow="Before You Begin" heading="The website is the manual. The app is the experience.">
        <p>
          This section explains every feature of P2P Global in plain language so that when you open the app you
          already understand what you are walking into. Read what is relevant to you — or read everything. The
          app will make more sense for it.
        </p>
      </Prose>

      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {sections.map((s) => (
            <Reveal key={s.href}>
              <Link
                href={s.href}
                className="flex h-full gap-4 rounded-xl border border-ink/10 p-6 transition hover:border-ink/30 hover:shadow-sm"
              >
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
