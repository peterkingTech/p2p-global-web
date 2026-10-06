import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import HeroVideo from "@/components/sections/HeroVideo";
import HowItActuallyWorks from "@/components/sections/HowItActuallyWorks";
import ExploreFurther from "@/components/sections/ExploreFurther";
import JesusCenter from "@/components/sections/JesusCenter";
import ScriptureFull from "@/components/sections/ScriptureFull";
import SeedToNations from "@/components/sections/SeedToNations";
import DiscipleMultiplication from "@/components/sections/DiscipleMultiplication";
import TreeJourney from "@/components/sections/TreeJourney";
import BodyOfChristEngine from "@/components/sections/BodyOfChristEngine";
import KingdomServiceNetwork from "@/components/sections/KingdomServiceNetwork";
import EcosystemStrip from "@/components/sections/EcosystemStrip";
import GlobalCommunity from "@/components/sections/GlobalCommunity";
import KingdomStoriesPreview from "@/components/sections/KingdomStoriesPreview";
import Faq from "@/components/sections/Faq";
import FinalCTA from "@/components/sections/FinalCTA";

export default async function Home() {
  const tVision = await getTranslations("Scripture.vision");
  const tMission = await getTranslations("Scripture.mission");

  return (
    <>
      <Hero />
      <HeroVideo />
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
      />
      <JesusCenter />
      <div id="how-it-works">
        <HowItActuallyWorks />
      </div>
      <ExploreFurther />
      <SeedToNations />
      <DiscipleMultiplication />
      <TreeJourney />
      <BodyOfChristEngine />
      <KingdomServiceNetwork />
      <EcosystemStrip />
      <GlobalCommunity />
      <div id="stories">
        <KingdomStoriesPreview />
      </div>
      <Faq />
      <FinalCTA />
    </>
  );
}
