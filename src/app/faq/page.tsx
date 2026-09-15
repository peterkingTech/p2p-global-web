import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about P2P — what it is, what it isn't, and how it relates to your church.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common Questions" mediaKey="about" />
      <Faq />
    </>
  );
}
