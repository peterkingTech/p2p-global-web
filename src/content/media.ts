import type { SceneVariant } from "@/components/media/Scene";

// Central media registry.
//
// Every entry now points to a real, freely-licensed photo (Pexels License —
// free for commercial use, no attribution required) under
// /public/media/photos, standing in for real P2P photography until the
// ministry has its own library. None of these depict actual P2P members,
// churches, or events — they're real photography of real people/places, just
// not P2P's own. The `scene` line-art glyph (see components/media/Scene) is
// kept as the fallback for any key without a photo yet.
//
// Swapping in official P2P photography/video later means only touching this
// file: replace the `photo`/`video` path and nothing else changes.

export type MediaAsset = {
  /** Layered CSS background-image gradients, painted back to front — fallback when no photo/video is set. */
  gradient: string[];
  /** Base color under the gradients. */
  base: string;
  /** Original line-art emblem shown over the gradient as a fallback. */
  scene?: SceneVariant;
  /** Path under /public to a real photo. Takes priority over gradient/scene. */
  photo?: string;
  /** Path under /public to a real video. Takes priority over photo and gradient/scene. */
  video?: string;
  note: string;
};

const PHOTO = (file: string, note: string): Pick<MediaAsset, "photo" | "note"> => ({
  photo: `/media/photos/${file}`,
  note: `TEMPORARY — free stock photo (Pexels License), standing in for real P2P photography: ${note}`,
});

const VIDEO = (
  file: string,
  posterFile: string,
  note: string
): Pick<MediaAsset, "video" | "photo" | "note"> => ({
  video: `/media/videos/${file}`,
  photo: `/media/photos/${posterFile}`,
  note: `TEMPORARY — free stock video (Pexels License), standing in for real P2P footage: ${note}`,
});

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
    ...PHOTO("worship.jpg", "hands raised in worship gathering"),
  },
  vision: {
    base: "#0f2226",
    gradient: [
      "radial-gradient(140% 100% at 50% 100%, rgba(221,192,125,0.18) 0%, rgba(15,34,38,0) 60%)",
      "linear-gradient(180deg, #0b1517 0%, #12292d 55%, #1f3a3f 100%)",
    ],
    scene: "ocean",
    ...VIDEO("ocean-sunrise.mp4", "ocean-sunrise.jpg", "waves at sunrise, standing in for the Habakkuk 2:14 visual"),
  },
  mission: {
    base: "#14110a",
    gradient: [
      "radial-gradient(100% 80% at 20% 20%, rgba(182,144,63,0.2) 0%, rgba(20,17,10,0) 60%)",
      "linear-gradient(160deg, #1a1610 0%, #14110a 60%, #0b0c0a 100%)",
    ],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  seedSoil: {
    base: "#1c1408",
    gradient: [
      "radial-gradient(60% 60% at 50% 55%, rgba(221,192,125,0.35) 0%, rgba(28,20,8,0) 70%)",
      "linear-gradient(180deg, #241a0c 0%, #140e05 100%)",
    ],
    scene: "seed",
    ...PHOTO("seedling-hands.jpg", "hands holding a seedling in soil"),
  },
  seedSprout: {
    base: "#12200f",
    gradient: [
      "radial-gradient(70% 70% at 50% 40%, rgba(126,166,100,0.25) 0%, rgba(18,32,15,0) 70%)",
      "linear-gradient(180deg, #16260f 0%, #0e1a0c 100%)",
    ],
    scene: "sprout",
    ...PHOTO("sprout.jpg", "a single sprout emerging from soil"),
  },
  seedForest: {
    base: "#0d1a15",
    gradient: [
      "radial-gradient(120% 90% at 50% 0%, rgba(61,96,104,0.3) 0%, rgba(13,26,21,0) 60%)",
      "linear-gradient(200deg, #16271f 0%, #0b1512 100%)",
    ],
    scene: "forest",
    ...PHOTO("forest.jpg", "sunlight through dense forest"),
  },
  seedContinents: {
    base: "#14171a",
    gradient: [
      "linear-gradient(90deg, rgba(182,144,63,0.16) 0%, rgba(20,23,26,0) 45%)",
      "linear-gradient(180deg, #1a1d21 0%, #101214 65%, #0b0c0a 100%)",
    ],
    scene: "city",
    ...PHOTO("city.jpg", "city skyline at sunset"),
  },
  seedEarth: {
    base: "#0e2024",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(221,192,125,0.2) 0%, rgba(14,32,36,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #163135 60%, #1f3a3f 100%)",
    ],
    scene: "globe",
    ...PHOTO("ocean-sunrise.jpg", "wide ocean horizon at sunrise"),
  },
  discipleLearn: {
    base: "#171310",
    gradient: ["linear-gradient(160deg, #1d1712 0%, #100d0a 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  discipleGrow: {
    base: "#10190f",
    gradient: ["linear-gradient(160deg, #16241a 0%, #0d150d 100%)"],
    scene: "sprout",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  discipleHelp: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "small group in conversation"),
  },
  discipleExpand: {
    base: "#101a1d",
    gradient: ["linear-gradient(160deg, #17262a 0%, #0c1416 100%)"],
    scene: "family",
    ...PHOTO("group.jpg", "small group discipleship gathering"),
  },
  discipleMultiply: {
    base: "#0d1a15",
    gradient: ["linear-gradient(160deg, #142822 0%, #0a120e 100%)"],
    scene: "forest",
    ...PHOTO("forest.jpg", "forest, standing in for generational multiplication"),
  },
  discipleNations: {
    base: "#0e2024",
    gradient: ["linear-gradient(160deg, #163135 0%, #0b1517 100%)"],
    scene: "globe",
    ...PHOTO("city.jpg", "city skyline, standing in for the nations"),
  },
  giftCare: {
    base: "#171a1c",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(61,96,104,0.22) 0%, rgba(23,26,28,0) 60%)",
      "linear-gradient(180deg, #1c2124 0%, #0e1113 100%)",
    ],
    scene: "heart",
    ...PHOTO("prayer.jpg", "gentle moment of prayer, standing in for care and wellness"),
  },
  giftTech: {
    base: "#10141a",
    gradient: [
      "radial-gradient(70% 60% at 70% 20%, rgba(182,144,63,0.16) 0%, rgba(16,20,26,0) 60%)",
      "linear-gradient(180deg, #151a21 0%, #0a0c10 100%)",
    ],
    scene: "code",
    ...PHOTO("tech.jpg", "hands coding on a laptop"),
  },
  giftLeadership: {
    base: "#16130a",
    gradient: ["linear-gradient(160deg, #1c1810 0%, #0d0a05 100%)"],
    scene: "target",
    ...PHOTO("leadership.jpg", "team planning around a desk"),
  },
  giftCreative: {
    base: "#1a1210",
    gradient: [
      "radial-gradient(70% 60% at 50% 30%, rgba(182,144,63,0.2) 0%, rgba(26,18,16,0) 60%)",
      "linear-gradient(180deg, #201613 0%, #0f0a09 100%)",
    ],
    scene: "palette",
    ...PHOTO("creative.jpg", "close-up of a painter at work"),
  },
  giftEducation: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    scene: "mortarboard",
    ...PHOTO("education.jpg", "teacher helping a student"),
  },
  giftMinistry: {
    base: "#111418",
    gradient: [
      "radial-gradient(80% 60% at 50% 15%, rgba(221,192,125,0.16) 0%, rgba(17,20,24,0) 60%)",
      "linear-gradient(180deg, #171b20 0%, #0a0c0e 100%)",
    ],
    scene: "flame",
    ...PHOTO("worship.jpg", "worship gathering, standing in for ministry gifts"),
  },
  gifts: {
    base: "#16130a",
    gradient: [
      "radial-gradient(90% 70% at 80% 10%, rgba(182,144,63,0.22) 0%, rgba(22,19,10,0) 60%)",
      "linear-gradient(180deg, #1a1610 0%, #0f0c07 100%)",
    ],
    scene: "gift",
    ...PHOTO("mission.jpg", "volunteers organizing aid, standing in for hands-on service"),
  },
  serviceNetwork: {
    base: "#101418",
    gradient: [
      "linear-gradient(90deg, rgba(31,58,63,0.35) 0%, rgba(16,20,24,0) 50%)",
      "linear-gradient(180deg, #14181c 0%, #0b0d0f 100%)",
    ],
    scene: "network",
    ...PHOTO("group.jpg", "small group in conversation"),
  },
  study: {
    base: "#151107",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(182,144,63,0.18) 0%, rgba(21,17,7,0) 60%)",
      "linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)",
    ],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  prayer: {
    base: "#0d161a",
    gradient: [
      "radial-gradient(90% 70% at 50% 30%, rgba(61,96,104,0.25) 0%, rgba(13,22,26,0) 60%)",
      "linear-gradient(180deg, #12222a 0%, #0a1216 100%)",
    ],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  stories: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    scene: "scroll",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  missions: {
    base: "#0e1a16",
    gradient: [
      "radial-gradient(120% 90% at 50% 100%, rgba(221,192,125,0.16) 0%, rgba(14,26,22,0) 55%)",
      "linear-gradient(180deg, #0c1512 0%, #16241d 100%)",
    ],
    scene: "mission",
    ...PHOTO("mission.jpg", "volunteers organizing aid"),
  },
  kingdomStories: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    scene: "scroll",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  kingdomWins: {
    base: "#0f1a12",
    gradient: ["linear-gradient(160deg, #182a1c 0%, #0c130d 100%)"],
    scene: "flame",
    ...PHOTO("worship.jpg", "worship gathering, standing in for testimony"),
  },
  family: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    scene: "family",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  church: {
    base: "#111418",
    gradient: ["linear-gradient(160deg, #171b20 0%, #0a0c0e 100%)"],
    scene: "church",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  globalCommunity: {
    base: "#0e161a",
    gradient: [
      "radial-gradient(120% 90% at 20% 20%, rgba(182,144,63,0.14) 0%, rgba(14,22,26,0) 55%)",
      "linear-gradient(200deg, #16232a 0%, #0a0f12 100%)",
    ],
    scene: "globe",
    ...PHOTO("city.jpg", "city skyline, standing in for the global community"),
  },
  finalCta: {
    base: "#0b1517",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(221,192,125,0.2) 0%, rgba(11,21,23,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #163135 100%)",
    ],
    scene: "sunrise",
    ...VIDEO("ocean-sunrise.mp4", "ocean-sunrise.jpg", "waves at sunrise, closing image with subtle movement"),
  },
  storyHistory: {
    base: "#171008",
    gradient: ["linear-gradient(160deg, #1e1710 0%, #0f0b07 100%)"],
    scene: "scroll",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  storyRevival: {
    base: "#1a1006",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(182,144,63,0.28) 0%, rgba(26,16,6,0) 65%)",
      "linear-gradient(180deg, #211508 0%, #100a04 100%)",
    ],
    scene: "flame",
    ...PHOTO("worship.jpg", "worship gathering, standing in for revival"),
  },
  storyGlobalChurch: {
    base: "#0e161a",
    gradient: ["linear-gradient(200deg, #16232a 0%, #0a0f12 100%)"],
    scene: "globe",
    ...PHOTO("city.jpg", "city skyline, standing in for the global church"),
  },
  storyMissions: {
    base: "#0e1a16",
    gradient: ["linear-gradient(180deg, #0c1512 0%, #16241d 100%)"],
    scene: "mission",
    ...PHOTO("mission.jpg", "volunteers organizing aid"),
  },
  storyPeople: {
    base: "#14110a",
    gradient: ["linear-gradient(160deg, #1a1610 0%, #0b0c0a 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "people in conversation"),
  },
  storyMovements: {
    base: "#12200f",
    gradient: ["linear-gradient(180deg, #16260f 0%, #0e1a0c 100%)"],
    scene: "forest",
    ...PHOTO("forest.jpg", "forest, standing in for movements"),
  },
  storyPersecution: {
    base: "#14171a",
    gradient: ["linear-gradient(180deg, #1a1d21 0%, #0b0c0a 100%)"],
    scene: "cross",
    ...MOCK("no suitable free stock photo sourced yet — kept as line art out of respect for the subject"),
  },
  storyToday: {
    base: "#0e2024",
    gradient: ["linear-gradient(180deg, #163135 0%, #0b1517 100%)"],
    scene: "book",
    ...PHOTO("group.jpg", "contemporary church life"),
  },
  winPrayer: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  winLife: {
    base: "#171008",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(182,144,63,0.22) 0%, rgba(23,16,8,0) 65%)",
      "linear-gradient(180deg, #1e1710 0%, #0f0b07 100%)",
    ],
    scene: "sunrise",
    ...PHOTO("worship.jpg", "worship gathering, standing in for a changed life"),
  },
  winFamily: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    scene: "family",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  winGroup: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "small group meeting"),
  },
  winChurch: {
    base: "#111418",
    gradient: ["linear-gradient(160deg, #171b20 0%, #0a0c0e 100%)"],
    scene: "church",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  winSent: {
    base: "#0e1a16",
    gradient: ["linear-gradient(180deg, #0c1512 0%, #16241d 100%)"],
    scene: "mission",
    ...PHOTO("mission.jpg", "volunteers organizing aid, standing in for someone sent"),
  },
  familyGather: {
    base: "#191209",
    gradient: ["linear-gradient(160deg, #201709 0%, #100b05 100%)"],
    scene: "book",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  familyPray: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  familyStudy: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  churchCohorts: {
    base: "#151a12",
    gradient: ["linear-gradient(160deg, #1c2417 0%, #10140c 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "small group cohort meeting"),
  },
  churchPlans: {
    base: "#151107",
    gradient: ["linear-gradient(180deg, #1a1610 0%, #0e0b06 100%)"],
    scene: "scroll",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible, standing in for a shared study plan"),
  },
  churchCalls: {
    base: "#0d161a",
    gradient: ["linear-gradient(180deg, #12222a 0%, #0a1216 100%)"],
    scene: "network",
    ...PHOTO("group.jpg", "people in conversation, standing in for check-ins"),
  },
  about: {
    base: "#14110a",
    gradient: ["linear-gradient(160deg, #1a1610 0%, #0b0c0a 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  join: {
    base: "#0e2024",
    gradient: [
      "radial-gradient(140% 100% at 50% 0%, rgba(221,192,125,0.18) 0%, rgba(14,32,36,0) 55%)",
      "linear-gradient(180deg, #0b1517 0%, #1f3a3f 100%)",
    ],
    scene: "sunrise",
    ...PHOTO("ocean-sunrise.jpg", "sunrise over water, closing invitation"),
  },
};

export function getMedia(key: string): MediaAsset {
  return media[key] ?? media.hero;
}
