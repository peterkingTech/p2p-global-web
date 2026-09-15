import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";

export const metadata: Metadata = {
  title: "Kingdom Wins",
  description: "Look what God has done — a place for believers to share stories of His work in their lives.",
};

export default function KingdomWinsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kingdom Wins"
        title="Look What God Has Done"
        subtitle="A space for the community to share what He is doing — in words, pictures, and video."
        mediaKey="kingdomWins"
      />

      <Prose eyebrow="Whose Glory" heading="P2P is not the object of the story">
        <p>
          When someone shares a Kingdom win, the point is never P2P&rsquo;s growth or reach. The story always
          points to Jesus — what He has done in a life, a family, or a community.
        </p>
        <p>
          This page will hold real testimonies from real people as the community grows. Until then, we won&rsquo;t
          fabricate stories, numbers, or partnerships just to make this page feel fuller than it is.
        </p>
      </Prose>
    </>
  );
}
