import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { messagingFeatures, inboxTabs } from "@/content/copy";

export const metadata: Metadata = {
  title: "Messaging and Calls",
  description: "The complete communication system inside P2P Global — messages, audio, video, group calls, and break rooms.",
};

export default function MessagingPage() {
  return (
    <>
      <PageHero
        eyebrow="Messaging and Calls"
        title="All communication in one place."
        subtitle="Messages, calls, and community — built for a discipleship relationship, not a social feed."
      />

      <Prose eyebrow="Your Inbox" heading="Five tabs, one inbox">
        <p>
          Every conversation you have on P2P Global — with your peer guide, your Peer Circle, or anyone else in
          your network — lives in one inbox, organized into five tabs so the conversation that matters most is
          never buried.
        </p>
      </Prose>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">Inbox Tabs</p>
            <h2 className="font-display text-3xl tracking-tight">How your inbox is organized</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {inboxTabs.map((t) => (
              <Reveal key={t.tab} className="flex gap-6 border-b border-paper/10 pb-6 last:border-0">
                <div className="w-32 shrink-0 font-medium text-gold-soft/80">{t.tab}</div>
                <p className="leading-relaxed text-paper/70">{t.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Every Way to Connect</p>
            <h2 className="font-display text-3xl tracking-tight">Messages, calls, and community</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {messagingFeatures.map((f) => (
              <Reveal key={f.title} className="flex gap-5 border-b border-ink/10 pb-8 last:border-0">
                <span className="shrink-0 text-2xl" aria-hidden="true">
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
