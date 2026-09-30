import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { howItWorksTopics } from "@/content/copy";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A complete guide to the P2P Global Kingdom School app — from your first day to guiding others.",
};

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
          {howItWorksTopics.map((s) => (
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
