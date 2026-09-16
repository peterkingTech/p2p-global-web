import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { gettingStartedSteps } from "@/content/copy";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Your first week on P2P Global — step by step.",
};

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting Started"
        title="Your first week, step by step."
        subtitle="No deadline. No pressure. No clock. Just a clear path for what happens first."
      />

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex flex-col gap-10">
            {gettingStartedSteps.map((step) => (
              <Reveal key={step.title} className="flex gap-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xs tracking-widest text-ink/40 uppercase">{step.day}</span>
                </div>
                <div className="border-l border-ink/10 pl-6">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow="After Your First Week" heading="The rhythm is yours to keep">
        <p>
          From here, it&rsquo;s simple: one lesson at a time, at whatever pace fits your life. Your peer guide is
          there for every step, and when you&rsquo;re ready, the journey keeps going — through the rest of
          Kingdom School and eventually into guiding someone else.
        </p>
      </Prose>
    </>
  );
}
