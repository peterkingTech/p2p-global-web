// Central mock-media registry.
//
// MOCK / TEMPORARY: every entry below is a placeholder standing in for real
// P2P photography and video, which does not yet exist in this build. Nothing
// here should be read as a claim about real people, places, or footage.
//
// Swapping in real assets later means only touching this file: give an entry
// a `photo` (path under /public) or `video` field and the CinematicMedia
// component will use it instead of the generated gradient.

export type MediaAsset = {
  /** Layered CSS background-image gradients, painted back to front. */
  gradient: string[];
  /** Base color under the gradients. */
  base: string;
  /** Replace with a real photo path (e.g. "/media/hero.jpg") when available. */
  photo?: string;
  /** Replace with a real video path when available. */
  video?: string;
  note: string;
};

const MOCK = (note: string): Pick<MediaAsset, "note"> => ({
  note: `MOCK/TEMPORARY — ${note}`,
});

export const media: Record<string, MediaAsset> = {
  hero: {
    base: "#0b0c0a",
    gradient: [
      "radial-gradient(120% 90% at 50% 15%, rgba(221,192,125,0.22) 0%, rgba(11,12,10,0) 55%)",
      "linear-gradient(180deg, rgba(11,12,10,0.2) 0%, rgba(11,12,10,0.75) 70%, #0b0c0a 100%)",
      "linear-gradient(120deg, #12211f 0%, #0b0c0a 55%, #1a1408 100%)",
    ],
    ...MOCK("wide cinematic shot standing in for global gathering / sunrise footage"),
  },
  vision: {
    base: "#0f2226",
    gradient: [
      "radial-gradient(140% 100% at 50% 100%, rgba(221,192,125,0.18) 0%, rgba(15,34,38,0) 60%)",
      "linear-gradient(180deg, #0b1517 0%, #12292d 55%, #1f3a3f 100%)",
    ],
    ...MOCK("ocean horizon at dawn, standing in for Habakkuk 2:14 visual"),
  },
  mission: {
    base: "#14110a",
    gradient: [
      "radial-gradient(100% 80% at 20% 20%, rgba(182,144,63,0.2) 0%, rgba(20,17,10,0) 60%)",
      "linear-gradient(160deg, #1a1610 0%, #14110a 60%, #0b0c0a 100%)",
    ],
    ...MOCK("two people in Scripture conversation, standing in for 2 Timothy 2:2"),
  },
  seedSoil: {
    base: "#1c1408",
    gradient: [
      "radial-gradient(60% 60% at 50% 55%, rgba(221,192,125,0.35) 0%, rgba(28,20,8,0) 70%)",
      "linear-gradient(180deg, #241a0c 0%, #140e05 100%)",
    ],
    ...MOCK("close-up hands and soil with a single seed"),
  },
  seedSprout: {
    base: "#12200f",
    gradient: [
      "radial-gradient(70% 70% at 50% 40%, rgba(126,166,100,0.25) 0%, rgba(18,32,15,0) 70%)",
      "linear-gradient(180deg, #16260f 0%, #0e1a0c 100%)",
    ],
    ...MOCK("young plant breaking soil, soft morning light"),
  },
  seedForest: {
    base: "#0d1a15",
    gradient: [
      "radial-gradient(120% 90% at 50% 0%, rgba(61,96,104,0.3) 0%, rgba(13,26,21,0) 60%)",
      "linear-gradient(200deg, #16271f 0%, #0b1512 100%)",
    ],
    ...MOCK("dense forest canopy, standing in for generational multiplication"),
  },
  seedContinents: {
    base: "#14171a",
    gradient: [
      "linear-gradient(90deg, rgba(182,144,63,0.16) 0%, rgba(20,23,26,0) 45%)",
      "linear-gradient(180deg, #1a1d21 0%, #101214 65%, #0b0c0a 100%)",
    ],
    ...MOCK("city lights and landscapes across continents"),
  },
  seedEarth: {
    base: "#0e2024",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(221,192,125,0.2) 0%, rgba(14,32,36,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #163135 60%, #1f3a3f 100%)",
    ],
    ...MOCK("wide ocean and horizon at sunrise, full glory imagery"),
  },
  discipleLearn: {
    base: "#171310",
    gradient: ["linear-gradient(160deg, #1d1712 0%, #100d0a 100%)"],
    ...MOCK("two people studying Scripture together"),
  },
  discipleGrow: {
    base: "#10190f",
    gradient: ["linear-gradient(160deg, #16241a 0%, #0d150d 100%)"],
    ...MOCK("person in quiet study and prayer"),
  },
  discipleHelp: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    ...MOCK("mentor and mentee in relational discipleship"),
  },
  discipleExpand: {
    base: "#101a1d",
    gradient: ["linear-gradient(160deg, #17262a 0%, #0c1416 100%)"],
    ...MOCK("small group discipleship gathering"),
  },
  discipleMultiply: {
    base: "#0d1a15",
    gradient: ["linear-gradient(160deg, #142822 0%, #0a120e 100%)"],
    ...MOCK("multiple small groups meeting across a city"),
  },
  discipleNations: {
    base: "#0e2024",
    gradient: ["linear-gradient(160deg, #163135 0%, #0b1517 100%)"],
    ...MOCK("diverse global community, wide shot"),
  },
  giftCare: {
    base: "#171a1c",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(61,96,104,0.22) 0%, rgba(23,26,28,0) 60%)",
      "linear-gradient(180deg, #1c2124 0%, #0e1113 100%)",
    ],
    ...MOCK("gentle, warm-lit conversation — standing in for care and wellness"),
  },
  giftTech: {
    base: "#10141a",
    gradient: [
      "radial-gradient(70% 60% at 70% 20%, rgba(182,144,63,0.16) 0%, rgba(16,20,26,0) 60%)",
      "linear-gradient(180deg, #151a21 0%, #0a0c10 100%)",
    ],
    ...MOCK("close-up of hands at a keyboard, standing in for tech and digital"),
  },
  giftLeadership: {
    base: "#16130a",
    gradient: ["linear-gradient(160deg, #1c1810 0%, #0d0a05 100%)"],
    ...MOCK("planning and coordination, standing in for leadership and admin"),
  },
  giftCreative: {
    base: "#1a1210",
    gradient: [
      "radial-gradient(70% 60% at 50% 30%, rgba(182,144,63,0.2) 0%, rgba(26,18,16,0) 60%)",
      "linear-gradient(180deg, #201613 0%, #0f0a09 100%)",
    ],
    ...MOCK("creative studio light, standing in for creative and media gifts"),
  },
  giftEducation: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    ...MOCK("teaching and tutoring moment, standing in for education gifts"),
  },
  giftMinistry: {
    base: "#111418",
    gradient: [
      "radial-gradient(80% 60% at 50% 15%, rgba(221,192,125,0.16) 0%, rgba(17,20,24,0) 60%)",
      "linear-gradient(180deg, #171b20 0%, #0a0c0e 100%)",
    ],
    ...MOCK("worship and prayer setting, standing in for ministry gifts"),
  },
  gifts: {
    base: "#16130a",
    gradient: [
      "radial-gradient(90% 70% at 80% 10%, rgba(182,144,63,0.22) 0%, rgba(22,19,10,0) 60%)",
      "linear-gradient(180deg, #1a1610 0%, #0f0c07 100%)",
    ],
    ...MOCK("hands at work, standing in for the Body of Christ engine"),
  },
  serviceNetwork: {
    base: "#101418",
    gradient: [
      "linear-gradient(90deg, rgba(31,58,63,0.35) 0%, rgba(16,20,24,0) 50%)",
      "linear-gradient(180deg, #14181c 0%, #0b0d0f 100%)",
    ],
    ...MOCK("split-screen community collaboration"),
  },
  study: {
    base: "#151107",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(182,144,63,0.18) 0%, rgba(21,17,7,0) 60%)",
      "linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)",
    ],
    ...MOCK("open Bible and study notes, close crop"),
  },
  prayer: {
    base: "#0d161a",
    gradient: [
      "radial-gradient(90% 70% at 50% 30%, rgba(61,96,104,0.25) 0%, rgba(13,22,26,0) 60%)",
      "linear-gradient(180deg, #12222a 0%, #0a1216 100%)",
    ],
    ...MOCK("hands folded in prayer, soft light"),
  },
  stories: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    ...MOCK("editorial archive imagery — history, revival, global church"),
  },
  missions: {
    base: "#0e1a16",
    gradient: [
      "radial-gradient(120% 90% at 50% 100%, rgba(221,192,125,0.16) 0%, rgba(14,26,22,0) 55%)",
      "linear-gradient(180deg, #0c1512 0%, #16241d 100%)",
    ],
    ...MOCK("mission field landscape, wide cinematic shot"),
  },
  kingdomStories: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    ...MOCK("editorial archive imagery — history, revival, global church"),
  },
  kingdomWins: {
    base: "#0f1a12",
    gradient: ["linear-gradient(160deg, #182a1c 0%, #0c130d 100%)"],
    ...MOCK("community testimony gathering"),
  },
  family: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    ...MOCK("family Bible study at home"),
  },
  church: {
    base: "#111418",
    gradient: ["linear-gradient(160deg, #171b20 0%, #0a0c0e 100%)"],
    ...MOCK("local church gathering"),
  },
  globalCommunity: {
    base: "#0e161a",
    gradient: [
      "radial-gradient(120% 90% at 20% 20%, rgba(182,144,63,0.14) 0%, rgba(14,22,26,0) 55%)",
      "linear-gradient(200deg, #16232a 0%, #0a0f12 100%)",
    ],
    ...MOCK("diverse global montage of believers"),
  },
  finalCta: {
    base: "#0b1517",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(221,192,125,0.2) 0%, rgba(11,21,23,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #163135 100%)",
    ],
    ...MOCK("ocean horizon at dusk, closing image"),
  },
  storyHistory: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    ...MOCK("archival-style imagery, standing in for Christian history"),
  },
  storyRevival: {
    base: "#1a1006",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(182,144,63,0.28) 0%, rgba(26,16,6,0) 65%)",
      "linear-gradient(180deg, #211508 0%, #100a04 100%)",
    ],
    ...MOCK("warm gathered-crowd light, standing in for revival"),
  },
  storyGlobalChurch: {
    base: "#0e161a",
    gradient: ["linear-gradient(200deg, #16232a 0%, #0a0f12 100%)"],
    ...MOCK("diverse global congregation montage"),
  },
  storyMissions: {
    base: "#0e1a16",
    gradient: ["linear-gradient(180deg, #0c1512 0%, #16241d 100%)"],
    ...MOCK("mission-field landscape"),
  },
  storyPeople: {
    base: "#14110a",
    gradient: ["linear-gradient(160deg, #1a1610 0%, #0b0c0a 100%)"],
    ...MOCK("portrait-style close crop, standing in for a historical figure"),
  },
  storyMovements: {
    base: "#12200f",
    gradient: ["linear-gradient(180deg, #16260f 0%, #0e1a0c 100%)"],
    ...MOCK("growth and multiplication imagery"),
  },
  storyPersecution: {
    base: "#14171a",
    gradient: ["linear-gradient(180deg, #1a1d21 0%, #0b0c0a 100%)"],
    ...MOCK("quiet, solemn tone standing in for persecution and perseverance"),
  },
  storyToday: {
    base: "#0e2024",
    gradient: ["linear-gradient(180deg, #163135 0%, #0b1517 100%)"],
    ...MOCK("contemporary church life, wide shot"),
  },
  winPrayer: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    ...MOCK("hands folded in prayer"),
  },
  winLife: {
    base: "#171008",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(182,144,63,0.22) 0%, rgba(23,16,8,0) 65%)",
      "linear-gradient(180deg, #1e1710 0%, #0f0b07 100%)",
    ],
    ...MOCK("warm light standing in for a changed life"),
  },
  winFamily: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    ...MOCK("family gathered together"),
  },
  winGroup: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    ...MOCK("small group meeting"),
  },
  winChurch: {
    base: "#111418",
    gradient: ["linear-gradient(160deg, #171b20 0%, #0a0c0e 100%)"],
    ...MOCK("congregation gathered"),
  },
  winSent: {
    base: "#0e1a16",
    gradient: ["linear-gradient(180deg, #0c1512 0%, #16241d 100%)"],
    ...MOCK("someone departing for service, wide landscape"),
  },
  familyGather: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    ...MOCK("family around a table with an open Bible"),
  },
  familyPray: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    ...MOCK("family praying together"),
  },
  familyStudy: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    ...MOCK("parent and child reading together"),
  },
  churchCohorts: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    ...MOCK("small group cohort meeting"),
  },
  churchPlans: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    ...MOCK("open study plan and notes"),
  },
  churchCalls: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    ...MOCK("two people in conversation, standing in for check-ins"),
  },
  about: {
    base: "#14110a",
    gradient: ["linear-gradient(160deg, #1a1610 0%, #0b0c0a 100%)"],
    ...MOCK("quiet Scripture reading, close crop"),
  },
  join: {
    base: "#0e2024",
    gradient: [
      "radial-gradient(140% 100% at 50% 0%, rgba(221,192,125,0.18) 0%, rgba(14,32,36,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #1f3a3f 100%)",
    ],
    ...MOCK("sunrise over water, closing invitation"),
  },
};

export function getMedia(key: string): MediaAsset {
  return media[key] ?? media.hero;
}
