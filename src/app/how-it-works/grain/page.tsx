import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";

export const metadata: Metadata = {
  title: "Grain and Invitations",
  description: "Your personal harvest record and how to invite others to Kingdom School.",
};

export default function GrainPage() {
  return (
    <>
      <PageHero
        eyebrow="Grain and Invitations"
        title="A grain of wheat that falls into the earth."
        subtitle="Your personal record of who you've invited into this — and the fruit that follows."
      />

      <Prose eyebrow="What Grain Is" heading="Not a score. A testimony.">
        <p>
          Every person who joins P2P Global through your personal invite link adds one Grain to your profile.
          It&rsquo;s based on John 12:24 — a grain of wheat that falls into the earth and dies bears much fruit.
          Grain isn&rsquo;t a leaderboard number or a currency you spend. It&rsquo;s a quiet, permanent record of
          who you brought into the journey with you.
        </p>
        <p>
          Your personal invite link lives in your profile. Share it with someone, and if they join, that&rsquo;s
          a Grain — a small, specific memory of one more person now walking this road.
        </p>
      </Prose>
    </>
  );
}
