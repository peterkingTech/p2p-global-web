import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import HowItActuallyWorks from "@/components/sections/HowItActuallyWorks";
import LearningJourney from "@/components/sections/LearningJourney";
import AppExperience from "@/components/sections/AppExperience";
import JesusCenter from "@/components/sections/JesusCenter";
import ScriptureFull from "@/components/sections/ScriptureFull";
import SeedToNations from "@/components/sections/SeedToNations";
import DiscipleMultiplication from "@/components/sections/DiscipleMultiplication";
import TreeJourney from "@/components/sections/TreeJourney";
import BodyOfChristEngine from "@/components/sections/BodyOfChristEngine";
import EcosystemStrip from "@/components/sections/EcosystemStrip";
import GlobalCommunity from "@/components/sections/GlobalCommunity";
import KingdomStoriesPreview from "@/components/sections/KingdomStoriesPreview";
import Faq from "@/components/sections/Faq";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * The homepage is one narrative, in this order:
 *  1–3  who P2P is, its vision and mission, Jesus at the center
 *  4    what peer-to-peer discipleship means
 *  5–7  Scripture and learning, Kingdom School, Kingdom Stories
 *  8    the Living Tree and how growth is evidenced
 *  9    peer guides and generational discipleship (2 Timothy 2:2)
 *  10   families and churches
 *  11   gifts and service
 *  12–13 multiplication and the global vision
 *  14   the app, and the invitation to experience P2P
 */
export default async function Home() {
  const tVision = await getTranslations("Scripture.vision");
  const tMission = await getTranslations("Scripture.mission");

  return (
    <>
      <Hero />
      <div id="vision">
        <ScriptureFull
          eyebrow={tVision("eyebrow")}
          reference={tVision("reference")}
          text={tVision("text")}
          mediaKey="vision"
        />
      </div>
      <ScriptureFull
        eyebrow={tMission("eyebrow")}
        reference={tMission("reference")}
        text={tMission("text")}
        mediaKey="mission"
        footer={tMission("footer")}
        reverse
        tone="forest"
      />
      <JesusCenter />
      <div id="how-it-works">
        <HowItActuallyWorks />
      </div>
      <div id="learning">
        <LearningJourney />
      </div>
      <div id="stories">
        <KingdomStoriesPreview />
      </div>
      <div id="growth">
        <TreeJourney />
      </div>
      <DiscipleMultiplication />
      <EcosystemStrip />
      <BodyOfChristEngine />
      <SeedToNations />
      <GlobalCommunity />
      <div id="app">
        <AppExperience />
      </div>
      <Faq scope="core" tone="dark" />
      <FinalCTA />
    </>
  );
}
