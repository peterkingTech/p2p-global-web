import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import Quote from "@/components/sections/Quote";
import SeedToNations from "@/components/sections/SeedToNations";
import { scripture } from "@/content/copy";

export const metadata: Metadata = {
  title: "Vision",
  description: "For the earth will be filled with the knowledge of the glory of the Lord as the waters cover the sea. The vision behind P2P.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="The Earth Filled With His Glory"
        subtitle="Habakkuk 2:14 is not a slogan for P2P — it is the horizon everything here is aimed at."
        mediaKey="vision"
      />

      <Prose eyebrow="Where This Begins" heading="A vision bigger than a platform">
        <Quote reference={scripture.vision.reference} text={scripture.vision.text} />
        <p>
          P2P is not ultimately about building a bigger platform, a larger user base, or a more impressive product.
          It is about participating — in a small, ordinary, faithful way — in the spread of the knowledge of the
          glory of the Lord across every city and nation.
        </p>
        <p>
          That means the measure of success is never the network itself. It is whether people are actually coming
          to know Jesus Christ more deeply, and helping someone else do the same.
        </p>
      </Prose>

      <SeedToNations />

      <Prose eyebrow="Jesus at the Center" heading="Not our work. His work." tone="dark">
        <p>
          P2P is an instrument — a set of tools and relationships that help believers learn, grow, walk with
          others, serve, disciple, and multiply. It is not a replacement for Jesus, for Scripture, for the Holy
          Spirit, or for the local church. Where this vision succeeds, the glory belongs to Him, not to a
          platform.
        </p>
      </Prose>
    </>
  );
}
