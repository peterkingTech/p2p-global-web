import Hero from "@/components/sections/Hero";
import JesusCenter from "@/components/sections/JesusCenter";
import ScriptureFull from "@/components/sections/ScriptureFull";
import SeedToNations from "@/components/sections/SeedToNations";
import DiscipleMultiplication from "@/components/sections/DiscipleMultiplication";
import TreeJourney from "@/components/sections/TreeJourney";
import BodyOfChristEngine from "@/components/sections/BodyOfChristEngine";
import KingdomServiceNetwork from "@/components/sections/KingdomServiceNetwork";
import EcosystemStrip from "@/components/sections/EcosystemStrip";
import GlobalCommunity from "@/components/sections/GlobalCommunity";
import Faq from "@/components/sections/Faq";
import FinalCTA from "@/components/sections/FinalCTA";
import { scripture } from "@/content/copy";

export default function Home() {
  return (
    <>
      <Hero />
      <JesusCenter />
      <ScriptureFull
        eyebrow="Vision"
        reference={scripture.vision.reference}
        text={scripture.vision.text}
        mediaKey="vision"
      />
      <ScriptureFull
        eyebrow="Mission"
        reference={scripture.mission.reference}
        text={scripture.mission.text}
        mediaKey="mission"
        footer="Everyone is learning from someone and helping someone grow. This is the core P2P discipleship model."
      />
      <SeedToNations />
      <DiscipleMultiplication />
      <TreeJourney />
      <BodyOfChristEngine />
      <KingdomServiceNetwork />
      <EcosystemStrip />
      <GlobalCommunity />
      <Faq />
      <FinalCTA />
    </>
  );
}
