import type { SceneVariant } from "@/components/media/Scene";

// Central media registry.
//
// Fallback `base`/`gradient` values use the forest palette (they only show
// while a photo loads, or for keys without one). Photos and video always
// keep their natural colour — never filter or tint them.
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
  /** CSS object-position focal point for cover cropping, e.g. "50% 30%". Defaults to centre. */
  position?: string;
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

/** Free photo under the Unsplash License (free commercial use, no permission
 * required). Source and photographer are logged in src/content/IMAGE_CREDITS.md. */
const UNSPLASH = (file: string, note: string): Pick<MediaAsset, "photo" | "note"> => ({
  photo: `/media/photos/${file}`,
  note: `Unsplash License — ${note}`,
});

/** Official P2P-provided artwork — not a stock stand-in. */
const P2P_PHOTO = (file: string, note: string): Pick<MediaAsset, "photo" | "note"> => ({
  photo: `/media/photos/${file}`,
  note: `Official P2P artwork: ${note}`,
});

const MOCK = (note: string): Pick<MediaAsset, "note"> => ({
  note: `MOCK/TEMPORARY — ${note}`,
});

export const media: Record<string, MediaAsset> = {
  discipleshipHero: {
    base: "#0c261d",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "people",
    position: "50% 35%",
    ...UNSPLASH("discipleship-conversation.jpg", "people in conversation, learning from one another — Small Group Network"),
  },
  churchHero: {
    base: "#0c261d",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "church",
    position: "50% 55%",
    ...UNSPLASH("church-congregation.jpg", "a congregation gathered in church — Benito sanity"),
  },
  churchGathered: {
    base: "#0c261d",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "church",
    ...UNSPLASH("church-gathered.jpg", "people seated together in a church service — Christian Harb"),
  },
  familyLearning: {
    base: "#0c261d",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "family",
    position: "50% 40%",
    ...UNSPLASH("family-learning-together.jpg", "a father learning alongside his son at home — Vitaly Gariev"),
  },
  bibleDeepStudy: {
    base: "#0c261d",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "book",
    ...UNSPLASH("bible-deep-study.jpg", "an open Bible beside a notebook and pen — Kelly Sikkema"),
  },
  heroHome: {
    base: "#0c261d",
    position: "50% 60%",
    gradient: ["linear-gradient(180deg, #0c261d 0%, #06130f 100%)"],
    scene: "people",
    ...UNSPLASH("hero-two-reading-bible.jpg", "two people sharing an open Bible — Ben White (homepage hero)"),
  },
  heroVideo: {
    base: "#121e17",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(116,193,151,0.2) 0%, rgba(11,19,15,0) 55%)",
      "linear-gradient(180deg, #16241c 0%, #203529 100%)",
    ],
    scene: "book",
    ...P2P_PHOTO("people-holding-bible.jpg", "many hands together holding up one Bible — a full-screen moment with no text over it"),
  },
  vision: {
    position: "50% 50%",
    base: "#121e17",
    gradient: [
      "radial-gradient(140% 100% at 50% 100%, rgba(116,193,151,0.18) 0%, rgba(18,30,23,0) 60%)",
      "linear-gradient(180deg, #0b130f 0%, #16241c 55%, #203529 100%)",
    ],
    scene: "ocean",
    ...P2P_PHOTO("vision-flags-bible.jpg", "an open Bible circled by the flags of the nations"),
  },
  mission: {
    base: "#0a110d",
    gradient: [
      "radial-gradient(100% 80% at 20% 20%, rgba(88,146,114,0.2) 0%, rgba(10,17,13,0) 60%)",
      "linear-gradient(160deg, #0d1611 0%, #0a110d 60%, #070c09 100%)",
    ],
    scene: "book",
    ...P2P_PHOTO("mission-studying-bible.jpg", "a group studying the Bible together"),
  },
  seedSoil: {
    base: "#0d1510",
    gradient: [
      "radial-gradient(60% 60% at 50% 55%, rgba(116,193,151,0.35) 0%, rgba(13,21,16,0) 70%)",
      "linear-gradient(180deg, #101b15 0%, #090f0c 100%)",
    ],
    scene: "seed",
    ...PHOTO("seedling-hands.jpg", "hands holding a seedling in soil"),
  },
  seedSprout: {
    base: "#111c16",
    gradient: [
      "radial-gradient(70% 70% at 50% 40%, rgba(92,153,119,0.25) 0%, rgba(17,28,22,0) 70%)",
      "linear-gradient(180deg, #14211a 0%, #0d1611 100%)",
    ],
    scene: "sprout",
    ...PHOTO("sprout.jpg", "a single sprout emerging from soil"),
  },
  seedForest: {
    base: "#0e1712",
    gradient: [
      "radial-gradient(120% 90% at 50% 0%, rgba(53,89,69,0.3) 0%, rgba(14,23,18,0) 60%)",
      "linear-gradient(200deg, #15231b 0%, #0b130f 100%)",
    ],
    scene: "forest",
    ...PHOTO("forest.jpg", "sunlight through dense forest"),
  },
  seedContinents: {
    base: "#0e1712",
    gradient: [
      "linear-gradient(90deg, rgba(88,146,114,0.16) 0%, rgba(14,23,18,0) 45%)",
      "linear-gradient(180deg, #111d17 0%, #0b120e 65%, #070c09 100%)",
    ],
    scene: "city",
    ...PHOTO("city.jpg", "city skyline at sunset"),
  },
  seedEarth: {
    position: "50% 65%",
    base: "#111c16",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(116,193,151,0.2) 0%, rgba(17,28,22,0) 55%)",
      "linear-gradient(180deg, #0b130f 0%, #1a2c22 60%, #203529 100%)",
    ],
    scene: "globe",
    ...PHOTO("ocean-sunrise.jpg", "wide ocean horizon at sunrise"),
  },
  discipleLearn: {
    base: "#0c1410",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #080d0a 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  discipleGrow: {
    base: "#0d1611",
    gradient: ["linear-gradient(160deg, #132019 0%, #0b130f 100%)"],
    scene: "sprout",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  discipleHelp: {
    base: "#0e1813",
    gradient: ["linear-gradient(160deg, #14211a 0%, #0b130f 100%)"],
    scene: "people",
    ...P2P_PHOTO("helping-others-rise.jpg", "silhouettes helping one another climb, standing in for helping someone grow"),
  },
  discipleExpand: {
    base: "#0e1813",
    gradient: ["linear-gradient(160deg, #15231b 0%, #0b120e 100%)"],
    scene: "family",
    ...PHOTO("group.jpg", "small group discipleship gathering"),
  },
  discipleMultiply: {
    base: "#0e1712",
    gradient: ["linear-gradient(160deg, #15231b 0%, #0a100c 100%)"],
    scene: "forest",
    ...P2P_PHOTO("disciples-multiply.jpg", "a crowd carrying crosses, standing in for generational multiplication"),
  },
  discipleNations: {
    base: "#111c16",
    gradient: ["linear-gradient(160deg, #1a2c22 0%, #0b130f 100%)"],
    scene: "globe",
    ...PHOTO("city.jpg", "city skyline, standing in for the nations"),
  },
  giftCare: {
    base: "#101a14",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(53,89,69,0.22) 0%, rgba(16,26,20,0) 60%)",
      "linear-gradient(180deg, #132019 0%, #0a110d 100%)",
    ],
    scene: "heart",
    ...P2P_PHOTO("gift-care.jpg", "hands held gently in care, standing in for care and wellness"),
  },
  giftTech: {
    base: "#0c1410",
    gradient: [
      "radial-gradient(70% 60% at 70% 20%, rgba(88,146,114,0.16) 0%, rgba(12,20,16,0) 60%)",
      "linear-gradient(180deg, #0f1914 0%, #070c09 100%)",
    ],
    scene: "code",
    ...PHOTO("tech.jpg", "hands coding on a laptop"),
  },
  giftLeadership: {
    base: "#0b130f",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #060a08 100%)"],
    scene: "target",
    ...P2P_PHOTO("gift-leadership.jpg", "a leadership presentation in a boardroom"),
  },
  giftCreative: {
    base: "#0c1410",
    gradient: [
      "radial-gradient(70% 60% at 50% 30%, rgba(88,146,114,0.2) 0%, rgba(12,20,16,0) 60%)",
      "linear-gradient(180deg, #0e1813 0%, #070b09 100%)",
    ],
    scene: "palette",
    ...P2P_PHOTO("creative-design.jpg", "a stylized brain-and-lightbulb illustration, standing in for creative gifts"),
  },
  giftEducation: {
    base: "#0a110d",
    gradient: ["linear-gradient(180deg, #0d1611 0%, #070b09 100%)"],
    scene: "mortarboard",
    ...PHOTO("education.jpg", "teacher helping a student"),
  },
  giftMinistry: {
    base: "#0c1410",
    gradient: [
      "radial-gradient(80% 60% at 50% 15%, rgba(116,193,151,0.16) 0%, rgba(12,20,16,0) 60%)",
      "linear-gradient(180deg, #101b15 0%, #070c09 100%)",
    ],
    scene: "flame",
    ...P2P_PHOTO("gift-ministry.jpg", "a small group gathered around a table, standing in for ministry gifts"),
  },
  gifts: {
    base: "#0b130f",
    gradient: [
      "radial-gradient(90% 70% at 80% 10%, rgba(88,146,114,0.22) 0%, rgba(11,19,15,0) 60%)",
      "linear-gradient(180deg, #0d1611 0%, #070c09 100%)",
    ],
    scene: "gift",
    ...PHOTO("mission.jpg", "volunteers organizing aid, standing in for hands-on service"),
  },
  serviceNetwork: {
    base: "#0b130f",
    gradient: [
      "linear-gradient(90deg, rgba(32,53,41,0.35) 0%, rgba(11,19,15,0) 50%)",
      "linear-gradient(180deg, #0e1712 0%, #080d0a 100%)",
    ],
    scene: "network",
    ...P2P_PHOTO("service-looking-for-help.jpg", "a diverse group of friends in conversation"),
  },
  study: {
    position: "50% 40%",
    base: "#0a110d",
    gradient: [
      "radial-gradient(80% 60% at 30% 20%, rgba(88,146,114,0.18) 0%, rgba(10,17,13,0) 60%)",
      "linear-gradient(180deg, #0d1611 0%, #070b09 100%)",
    ],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  prayer: {
    base: "#0c1410",
    gradient: [
      "radial-gradient(90% 70% at 50% 30%, rgba(53,89,69,0.25) 0%, rgba(12,20,16,0) 60%)",
      "linear-gradient(180deg, #131f18 0%, #0a110d 100%)",
    ],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  stories: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "scroll",
    ...P2P_PHOTO("stories-photo.jpg", "a 'Stories' title card"),
  },
  missions: {
    position: "50% 45%",
    base: "#0e1712",
    gradient: [
      "radial-gradient(120% 90% at 50% 100%, rgba(116,193,151,0.16) 0%, rgba(14,23,18,0) 55%)",
      "linear-gradient(180deg, #0b130f 0%, #14211a 100%)",
    ],
    scene: "mission",
    ...PHOTO("mission.jpg", "volunteers organizing aid"),
  },
  kingdomStories: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "scroll",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  kingdomWins: {
    base: "#0e1712",
    gradient: ["linear-gradient(160deg, #16251d 0%, #0a110d 100%)"],
    scene: "flame",
    ...PHOTO("worship.jpg", "worship gathering, standing in for testimony"),
  },
  family: {
    position: "50% 35%",
    base: "#0b130f",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "family",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  church: {
    position: "50% 20%",
    base: "#0c1410",
    gradient: ["linear-gradient(160deg, #101b15 0%, #070c09 100%)"],
    scene: "church",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  globalCommunity: {
    base: "#0d1510",
    gradient: [
      "radial-gradient(120% 90% at 20% 20%, rgba(88,146,114,0.14) 0%, rgba(13,21,16,0) 55%)",
      "linear-gradient(200deg, #14211a 0%, #080e0b 100%)",
    ],
    scene: "globe",
    ...PHOTO("tree-forest-nations.jpg", "aerial view of a forest canopy — many trees, one forest"),
  },
  finalCta: {
    position: "50% 45%",
    base: "#0b130f",
    gradient: [
      "radial-gradient(160% 120% at 50% 100%, rgba(116,193,151,0.2) 0%, rgba(11,19,15,0) 55%)",
      "linear-gradient(180deg, #0b130f 0%, #1a2c22 100%)",
    ],
    scene: "sunrise",
    ...P2P_PHOTO("final-cta-praying.jpg", "hands held together in prayer, closing image"),
  },
  storyBiblical: {
    base: "#0a110d",
    position: "50% 65%",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "book",
    ...UNSPLASH("story-jerusalem-western-wall.jpg", "the Western Wall, Old City of Jerusalem — Benjamin Istanbuli"),
  },
  storyJesus: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "cross",
    ...UNSPLASH("story-sea-of-galilee.jpg", "the Sea of Galilee — Paul Moody"),
  },
  storyEarlyChurch: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "people",
    ...UNSPLASH("story-ephesus.jpg", "ruins of Ephesus with the Library of Celsus — Luis Barreto D."),
  },
  storyFathers: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "scroll",
    ...UNSPLASH("story-manuscript.jpg", "an ancient handwritten manuscript, San Millán de la Cogolla — Mark Rasmuson"),
  },
  storyHistory: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "scroll",
    ...UNSPLASH("story-cathedral.jpg", "a cathedral nave — CHUTTERSNAP"),
  },
  storyRevival: {
    base: "#0a110d",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(88,146,114,0.28) 0%, rgba(10,17,13,0) 65%)",
      "linear-gradient(180deg, #0e1712 0%, #070b09 100%)",
    ],
    scene: "flame",
    ...P2P_PHOTO("story-revival.jpg", "a worship crowd bathed in dramatic light, standing in for revival"),
  },
  storyGlobalChurch: {
    base: "#0d1510",
    gradient: ["linear-gradient(200deg, #14211a 0%, #080e0b 100%)"],
    scene: "globe",
    ...P2P_PHOTO("story-global-church.jpg", "a cross resting on a world map, standing in for the global church"),
  },
  storyMissions: {
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #0b130f 0%, #14211a 100%)"],
    scene: "mission",
    ...UNSPLASH("story-antique-globe.jpg", "an antique globe — Bernd Dittrich"),
  },
  storyPeople: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0d1611 0%, #070c09 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "people in conversation"),
  },
  storyMovements: {
    base: "#111c16",
    gradient: ["linear-gradient(180deg, #14211a 0%, #0d1611 100%)"],
    scene: "forest",
    ...P2P_PHOTO("story-movements.jpg", "a packed stadium gathered under the name Jesus, standing in for movements"),
  },
  storyPersecution: {
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #111d17 0%, #070c09 100%)"],
    scene: "cross",
    ...P2P_PHOTO("story-persecution.jpg", "an illustrative depiction of a church under persecution"),
  },
  storyToday: {
    base: "#111c16",
    gradient: ["linear-gradient(180deg, #1a2c22 0%, #0b130f 100%)"],
    scene: "book",
    ...P2P_PHOTO("story-today.jpg", "a stadium crowd gathered beneath a lit cross, standing in for Christianity today"),
  },
  winPrayer: {
    base: "#0c1410",
    gradient: ["linear-gradient(180deg, #131f18 0%, #0a110d 100%)"],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  winLife: {
    base: "#0a110d",
    gradient: [
      "radial-gradient(80% 60% at 50% 30%, rgba(88,146,114,0.22) 0%, rgba(10,17,13,0) 65%)",
      "linear-gradient(180deg, #0e1813 0%, #070c09 100%)",
    ],
    scene: "sunrise",
    ...PHOTO("worship.jpg", "worship gathering, standing in for a changed life"),
  },
  winFamily: {
    base: "#0b130f",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "family",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  winGroup: {
    base: "#0e1813",
    gradient: ["linear-gradient(160deg, #14211a 0%, #0b130f 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "small group meeting"),
  },
  winChurch: {
    base: "#0c1410",
    gradient: ["linear-gradient(160deg, #101b15 0%, #070c09 100%)"],
    scene: "church",
    ...PHOTO("church.jpg", "historic church steeple"),
  },
  winSent: {
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #0b130f 0%, #14211a 100%)"],
    scene: "mission",
    ...PHOTO("mission.jpg", "volunteers organizing aid, standing in for someone sent"),
  },
  familyGather: {
    base: "#0b130f",
    gradient: ["linear-gradient(160deg, #0e1813 0%, #070c09 100%)"],
    scene: "book",
    ...PHOTO("family.jpg", "family sitting together at home"),
  },
  familyPray: {
    base: "#0c1410",
    gradient: ["linear-gradient(180deg, #131f18 0%, #0a110d 100%)"],
    scene: "prayer",
    ...PHOTO("prayer.jpg", "quiet moment of prayer"),
  },
  familyStudy: {
    base: "#0a110d",
    gradient: ["linear-gradient(180deg, #0d1611 0%, #070b09 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  churchCohorts: {
    base: "#0e1813",
    gradient: ["linear-gradient(160deg, #14211a 0%, #0b130f 100%)"],
    scene: "people",
    ...PHOTO("group.jpg", "small group cohort meeting"),
  },
  churchPlans: {
    base: "#0a110d",
    gradient: ["linear-gradient(180deg, #0d1611 0%, #070b09 100%)"],
    scene: "scroll",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible, standing in for a shared study plan"),
  },
  churchCalls: {
    base: "#0c1410",
    gradient: ["linear-gradient(180deg, #131f18 0%, #0a110d 100%)"],
    scene: "network",
    ...PHOTO("group.jpg", "people in conversation, standing in for check-ins"),
  },
  about: {
    base: "#0a110d",
    gradient: ["linear-gradient(160deg, #0d1611 0%, #070c09 100%)"],
    scene: "book",
    ...PHOTO("bible-hands.jpg", "hands on an open Bible"),
  },
  join: {
    base: "#111c16",
    gradient: [
      "radial-gradient(140% 100% at 50% 0%, rgba(116,193,151,0.18) 0%, rgba(17,28,22,0) 55%)",
      "linear-gradient(180deg, #0b130f 0%, #203529 100%)",
    ],
    scene: "sunrise",
    ...PHOTO("ocean-sunrise.jpg", "sunrise over water, closing invitation"),
  },
  treeSeed: {
    position: "50% 70%",
    base: "#0a110d",
    gradient: ["linear-gradient(180deg, #0d1611 0%, #070c09 100%)"],
    scene: "seed",
    ...P2P_PHOTO("tree-seed.jpg", "a single dormant seed in soil"),
  },
  treeSprout: {
    position: "50% 55%",
    base: "#0d1611",
    gradient: ["linear-gradient(180deg, #132019 0%, #0b130f 100%)"],
    scene: "sprout",
    ...P2P_PHOTO("tree-sprout.jpg", "a sprout breaking soil toward the light"),
  },
  treeYoung: {
    position: "50% 60%",
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #15231b 0%, #0a100c 100%)"],
    scene: "tree",
    ...P2P_PHOTO("tree-young.jpg", "a young tree standing before a forested hillside"),
  },
  treeFruitful: {
    position: "50% 45%",
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #15231b 0%, #0a100c 100%)"],
    scene: "tree",
    ...P2P_PHOTO("tree-fruitful.jpg", "a fruitful tree, full and bearing fruit"),
  },
  treeForestBuilder: {
    position: "50% 60%",
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #15231b 0%, #0a100c 100%)"],
    scene: "forest",
    ...P2P_PHOTO("tree-forest-builder.jpg", "a sunlit forest path"),
  },
  treeForestNations: {
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #15231b 0%, #0a100c 100%)"],
    scene: "forest",
    ...P2P_PHOTO("tree-forest-nations.jpg", "an aerial view across an unbroken forest"),
  },
  forestGlobal: {
    base: "#0e1712",
    gradient: ["linear-gradient(180deg, #14211a 0%, #0a100c 100%)"],
    scene: "globe",
    ...P2P_PHOTO("forest-global.jpg", "the earth wrapped in forest, standing in for the nations"),
  },
  giftExTherapist: {
    base: "#101a14",
    gradient: ["linear-gradient(180deg, #132019 0%, #0a110d 100%)"],
    scene: "heart",
    ...P2P_PHOTO("gift-ex-therapist.jpg", "a therapist and client in a counseling session"),
  },
  giftExProgrammer: {
    base: "#0c1410",
    gradient: ["linear-gradient(180deg, #0f1914 0%, #070c09 100%)"],
    scene: "code",
    ...P2P_PHOTO("gift-ex-programmer.jpg", "two developers reviewing code together"),
  },
  giftExAdmin: {
    base: "#0b130f",
    gradient: ["linear-gradient(180deg, #0e1813 0%, #060a08 100%)"],
    scene: "target",
    ...P2P_PHOTO("gift-ex-admin.jpg", "a mentor and mentee reviewing work together"),
  },
  giftExArtist: {
    base: "#0c1410",
    gradient: ["linear-gradient(180deg, #101b15 0%, #070c09 100%)"],
    scene: "flame",
    ...P2P_PHOTO("gift-ex-artist.jpg", "a worship leader singing on stage"),
  },
};

export function getMedia(key: string): MediaAsset {
  return media[key] ?? media.heroVideo;
}
