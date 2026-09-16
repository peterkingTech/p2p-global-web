import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Reveal from "@/components/motion/Reveal";
import { messagingFeatures, inboxTabs } from "@/content/copy";

export const metadata: Metadata = {
  title: "Messaging and Calls",
  description: "The complete communication system inside P2P Global — messages, audio, video, group calls, and break rooms.",
};

const callDetails = [
  {
    title: "Audio calls",
    body: "One-tap audio with your peer guide directly from the conversation. No scheduling required. Works on low-bandwidth connections in any country. Mute, speakerphone, end — simple controls. The call duration appears in the conversation thread afterward.",
  },
  {
    title: "Video calls",
    body: "Face to face with your peer guide. A floating self-view in the corner. Flip camera. Blur your background if you need privacy. If your connection drops — the call automatically switches to audio only rather than disconnecting.",
  },
  {
    title: "Group calls for Peer Circles",
    body: "Up to 8 participants in a grid view. The circle leader controls the flow. Discussion questions appear on screen — the leader advances them. A raise-hand system queues speakers so everyone is heard. When the session ends the attendance is logged automatically in the circle's record.",
  },
  {
    title: "Break Rooms",
    body: "Spontaneous audio rooms visible in the Discover tab. Morning Prayer. Bible Q&A. Kingdom Men. Kingdom Women. Language rooms. Topic rooms tied to plan categories. Anyone can create a room. It disappears when the last person leaves. Maximum 20 participants. A flag button for inappropriate content is always visible.",
  },
];

export default function MessagingPage() {
  return (
    <>
      <PageHero
        eyebrow="Messaging and Calls"
        title="All communication in one place."
        subtitle="Messages, calls, and community — built for a discipleship relationship, not a social feed."
      />

      {/* Inbox tabs */}
      <section className="bg-paper py-24 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Your Inbox</p>
            <h2 className="font-display text-3xl tracking-tight">Five tabs, one inbox</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Every conversation you have on P2P Global — with your peer guide, your Peer Circle, or anyone else
              in your network — lives in one inbox, organized into five tabs so the conversation that matters
              most is never buried.
            </p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {inboxTabs.map((t) => (
              <Reveal key={t.tab} className="flex gap-6 border-b border-ink/10 pb-6 last:border-0">
                <div className="w-32 shrink-0 font-medium text-water">{t.tab}</div>
                <p className="leading-relaxed text-ink/70">{t.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All features grid */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-gold-soft/90 uppercase">Every Way to Connect</p>
            <h2 className="font-display text-3xl tracking-tight">Messages, calls, and community</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {messagingFeatures.map((f) => (
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

      {/* Crisis response / official account messages */}
      <Prose eyebrow="Official Messages" heading="When P2P Global messages you directly">
        <p>
          If the P2P Global team ever reaches out to you — in response to a Help Request, Crisis Response,
          Support, or Marketing message you sent through Contact P2P Global, or for a safety or moderation
          reason — it will always come from a verified official account, carrying the same blue tick used to
          verify real members across the network.
        </p>
        <p>
          Crisis Response is treated as its own priority department, not a general inbox. That said, P2P Global
          is a peer discipleship network, not an emergency service: anyone in immediate danger or crisis should
          still contact local emergency services or a licensed professional directly, alongside reaching out
          here.
        </p>
      </Prose>

      {/* Calls detail */}
      <section className="bg-paper px-6 py-24 text-ink">
        <div className="mx-auto max-w-2xl">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs tracking-[0.35em] text-water uppercase">Audio and Video</p>
            <h2 className="font-display text-3xl tracking-tight">Calls that serve discipleship.</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Every call type in P2P Global is designed for discipleship — not casual chat. The lesson is always
              accessible. The conversation has purpose.
            </p>
          </Reveal>

          <div className="flex flex-col gap-10">
            {callDetails.map((item) => (
              <Reveal key={item.title} className="border-b border-ink/10 pb-10 last:border-0">
                <h3 className="mb-3 text-xl font-medium">{item.title}</h3>
                <p className="leading-relaxed text-ink/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
