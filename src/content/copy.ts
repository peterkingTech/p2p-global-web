// Central STRUCTURAL data store. All translatable text has moved to the
// message catalogs under src/messages/{locale}.json — this file now holds
// only non-text structure: stable keys (used to look up the matching
// translation), hrefs, icons, media keys, slugs, colors, and numbers.
//
// A component pairs an entry here with its translation via the shared
// `key`/`slug`/`number`, e.g. t(`GiftCategories.${item.key}.title`).

export const brandMeta = {
  name: "P2P",
} as const;

export const navItems = [
  { key: "vision", href: "/#vision" },
  { key: "howItWorks", href: "/#how-it-works" },
  { key: "stories", href: "/#stories" },
] as const;

export const footerLinks = [
  { key: "vision", href: "/vision" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "discipleship", href: "/discipleship" },
  { key: "gifts", href: "/gifts" },
  { key: "missions", href: "/missions" },
  { key: "kingdomStories", href: "/kingdom-stories" },
  { key: "kingdomWins", href: "/kingdom-wins" },
  { key: "families", href: "/families" },
  { key: "churches", href: "/churches" },
  { key: "about", href: "/about" },
  { key: "faq", href: "/faq" },
] as const;

export const seedToNationsKeys = ["seed", "tree", "forest", "continents", "glory"] as const;
export const seedToNationsIcons: Record<(typeof seedToNationsKeys)[number], string> = {
  seed: "🌰",
  tree: "🌱",
  forest: "🌳",
  continents: "🌲",
  glory: "🌍",
};

export const discipleStepKeys = ["learn", "grow", "helpSomeone", "theyHelp", "multiply", "nations"] as const;
export const discipleStepIcons: Record<(typeof discipleStepKeys)[number], string> = {
  learn: "👤",
  grow: "🌱",
  helpSomeone: "🤝",
  theyHelp: "🌳",
  multiply: "🌲",
  nations: "🌍",
};

export const treeJourneyKeys = ["seed", "sprout", "young", "fruitful", "forestBuilder", "forestNations"] as const;
export const treeJourneyIcons: Record<(typeof treeJourneyKeys)[number], string> = {
  seed: "🌰",
  sprout: "🌱",
  young: "🌿",
  fruitful: "🌳",
  forestBuilder: "🌲",
  forestNations: "🌍",
};

export const giftCategoryKeys = ["care", "tech", "leadership", "creative", "education", "ministry"] as const;
export const giftCategoryMeta: Record<(typeof giftCategoryKeys)[number], { icon: string; mediaKey: string }> = {
  care: { icon: "❤️", mediaKey: "giftCare" },
  tech: { icon: "💻", mediaKey: "giftTech" },
  leadership: { icon: "🎯", mediaKey: "giftLeadership" },
  creative: { icon: "🎨", mediaKey: "giftCreative" },
  education: { icon: "📚", mediaKey: "giftEducation" },
  ministry: { icon: "⛪", mediaKey: "giftMinistry" },
} as const;

export const giftExampleKeys = ["therapist", "programmer", "administrator", "artist"] as const;
export const giftExampleMeta: Record<(typeof giftExampleKeys)[number], { icon: string; mediaKey: string }> = {
  therapist: { icon: "👨‍⚕️", mediaKey: "giftExTherapist" },
  programmer: { icon: "👨‍💻", mediaKey: "giftExProgrammer" },
  administrator: { icon: "👩‍💼", mediaKey: "giftExAdmin" },
  artist: { icon: "🎨", mediaKey: "giftExArtist" },
} as const;

export const serviceQueryKeys = ["programmers", "translator", "accountability", "worship", "website", "english"] as const;
export const serviceOfferKeys = ["counseling", "websiteDesign", "mentoring", "translation", "programming", "worshipMusic"] as const;

export const ecosystem = [
  { key: "study", href: "/discipleship" },
  { key: "prayer", href: "/discipleship" },
  { key: "family", href: "/families" },
  { key: "church", href: "/churches" },
  { key: "missions", href: "/missions" },
  { key: "stories", href: "/kingdom-stories" },
] as const;

export const howItWorksTopics = [
  { key: "gettingStarted", href: "/how-it-works/getting-started", icon: "🌰" },
  { key: "livingTree", href: "/how-it-works/living-tree", icon: "🌳" },
  { key: "kingdomSchool", href: "/how-it-works/kingdom-school", icon: "📖" },
  { key: "peerGuide", href: "/how-it-works/peer-guide", icon: "🤝" },
  { key: "peerCircles", href: "/how-it-works/peer-circles", icon: "👥" },
  { key: "generationalForest", href: "/how-it-works/generational-forest", icon: "🌍" },
  { key: "messaging", href: "/how-it-works/messaging", icon: "💬" },
  { key: "prayer", href: "/how-it-works/prayer", icon: "🙏" },
  { key: "profile", href: "/how-it-works/profile", icon: "✓" },
  { key: "grain", href: "/how-it-works/grain", icon: "🌾" },
] as const;

export const kingdomStoryCategories = [
  { slug: "christian-history", icon: "📜", mediaKey: "storyHistory" },
  { slug: "revival", icon: "🔥", mediaKey: "storyRevival" },
  { slug: "global-church", icon: "🌍", mediaKey: "storyGlobalChurch" },
  { slug: "missions", icon: "🧭", mediaKey: "storyMissions" },
  { slug: "people", icon: "👤", mediaKey: "storyPeople" },
  { slug: "movements", icon: "🌱", mediaKey: "storyMovements" },
  { slug: "persecution", icon: "✝️", mediaKey: "storyPersecution" },
  { slug: "christianity-today", icon: "📖", mediaKey: "storyToday" },
] as const;
export type KingdomStorySlug = (typeof kingdomStoryCategories)[number]["slug"];

export const kingdomWinCategoryKeys = ["prayer", "life", "family", "group", "church", "sent"] as const;
export const kingdomWinCategoryMeta: Record<(typeof kingdomWinCategoryKeys)[number], { icon: string; mediaKey: string }> = {
  prayer: { icon: "🙏", mediaKey: "winPrayer" },
  life: { icon: "💛", mediaKey: "winLife" },
  family: { icon: "🏠", mediaKey: "winFamily" },
  group: { icon: "🤝", mediaKey: "winGroup" },
  church: { icon: "⛪", mediaKey: "winChurch" },
  sent: { icon: "🧳", mediaKey: "winSent" },
};

export const familyRowKeys = ["gather", "pray", "study", "grow"] as const;
export const familyRowMeta: Record<(typeof familyRowKeys)[number], { icon: string; mediaKey: string }> = {
  gather: { icon: "📖", mediaKey: "familyGather" },
  pray: { icon: "🙏", mediaKey: "familyPray" },
  study: { icon: "📓", mediaKey: "familyStudy" },
  grow: { icon: "🌱", mediaKey: "family" },
};

export const churchRowKeys = ["cohorts", "plans", "calls", "pathway"] as const;
export const churchRowMeta: Record<(typeof churchRowKeys)[number], { icon: string; mediaKey: string }> = {
  cohorts: { icon: "👥", mediaKey: "churchCohorts" },
  plans: { icon: "🗓️", mediaKey: "churchPlans" },
  calls: { icon: "📞", mediaKey: "churchCalls" },
  pathway: { icon: "🌿", mediaKey: "church" },
};

export const faqItemKeys = [
  "whatIsP2p",
  "whoBuilt",
  "whatIsAmen",
  "commercial",
  "replaceChurch",
  "therapyReplacement",
  "giftsMarketplace",
  "whoCanJoin",
  "cost",
  "whyFree",
  "churchFree",
  "websiteVsApp",
] as const;

export const faqItemKeysAdditional = [
  "peerGuide",
  "livingTree",
  "growthStages",
  "grain",
  "blueTick",
  "kingdomSchool",
  "completionMoment",
  "languages",
  "churchPortalFree",
  "peerCircle",
  "withoutPeerGuide",
  "generationalForest",
] as const;

export const journeyStepKeys = [
  "discover",
  "learn",
  "grow",
  "walkWithOthers",
  "helpSomeone",
  "serve",
  "disciple",
  "multiply",
  "nations",
] as const;

export const growthStageKeys = ["seed", "sprout", "youngTree", "fruitfulTree", "forestBuilder", "forestOfNations"] as const;
export const growthStageMeta: Record<(typeof growthStageKeys)[number], { emoji: string; subtitleIndex: number }> = {
  seed: { emoji: "🌰", subtitleIndex: 1 },
  sprout: { emoji: "🌱", subtitleIndex: 2 },
  youngTree: { emoji: "🌿", subtitleIndex: 3 },
  fruitfulTree: { emoji: "🌳", subtitleIndex: 4 },
  forestBuilder: { emoji: "🌲", subtitleIndex: 5 },
  forestOfNations: { emoji: "🌍", subtitleIndex: 6 },
};

export const treeAnatomyKeys = ["roots", "trunk", "branches", "fruit", "grain"] as const;
export const treeAnatomyIcons: Record<(typeof treeAnatomyKeys)[number], string> = {
  roots: "🌿",
  trunk: "🌳",
  branches: "🌿",
  fruit: "🍎",
  grain: "🌾",
};

export const gettingStartedStepKeys = ["account", "onboarding", "firstLesson", "rhythm"] as const;
export const gettingStartedStepNumbers: Record<(typeof gettingStartedStepKeys)[number], string> = {
  account: "01",
  onboarding: "02",
  firstLesson: "03",
  rhythm: "04",
};

export const peerGuideMatchingFactorKeys = ["language", "timezone", "lifeStage", "background", "location"] as const;
export const forestLayerKeys = ["yourTree", "generation1", "generation2", "generation3plus", "ancestry"] as const;

export const gospelSalvationModuleKeys = ["gospel", "responding", "convert", "before"] as const;

export const foundationModules = [
  { number: 1, key: "identity" },
  { number: 2, key: "knowingGod" },
  { number: 3, key: "lordship" },
  { number: 4, key: "holySpirit" },
  { number: 5, key: "bible" },
  { number: 6, key: "prayer" },
  { number: 7, key: "church" },
  { number: 8, key: "baptism" },
  { number: 9, key: "sin" },
  { number: 10, key: "sharingFaith" },
  { number: 11, key: "disciplines" },
  { number: 12, key: "eternity" },
] as const;

export const electiveCategories = [
  { key: "faithKingdom", emoji: "👑", count: 15, color: "#1D4E2B" },
  { key: "ministryLeadership", emoji: "⛪", count: 15, color: "#2C3E6B" },
  { key: "spiritualGrowth", emoji: "🌱", count: 15, color: "#1D9E75" },
  { key: "familyRelationships", emoji: "🏠", count: 12, color: "#8B4513" },
  { key: "identitySalvation", emoji: "✝️", count: 16, color: "#4B0082" },
  { key: "marketplacePurpose", emoji: "💼", count: 12, color: "#B8860B" },
  { key: "prayer", emoji: "🙏", count: 16, color: "#1A237E" },
  { key: "holySpirit", emoji: "🕊️", count: 14, color: "#4A90D9" },
  { key: "healingFreedom", emoji: "💊", count: 15, color: "#C0392B" },
  { key: "churchCommunity", emoji: "🤝", count: 12, color: "#2E7D32" },
] as const;

export const peerCircleHowItWorksCount = 6;
export const peerCircleFruitKeys = ["fellowship", "unity", "shepherd"] as const;

export const messagingFeatureKeys = ["directMessages", "pinnedMessages", "audioCalls", "videoCalls", "groupCalls", "breakRooms", "contactP2p"] as const;
export const messagingFeatureIcons: Record<(typeof messagingFeatureKeys)[number], string> = {
  directMessages: "💬",
  pinnedMessages: "📌",
  audioCalls: "🎙️",
  videoCalls: "📹",
  groupCalls: "👥",
  breakRooms: "🎙️",
  contactP2p: "✉️",
};

export const inboxTabKeys = ["all", "unread", "favourites", "peerGroups", "circles"] as const;
export const callDetailKeys = ["audio", "video", "group", "breakRooms"] as const;

export const prayerFeatureKeys = ["sinnersPrayer", "library", "confessionBuilder", "journal"] as const;
export const prayerFeatureIcons: Record<(typeof prayerFeatureKeys)[number], string> = {
  sinnersPrayer: "✝️",
  library: "🙏",
  confessionBuilder: "📝",
  journal: "📔",
};

export const profileFeatureKeys = ["username", "verification", "location", "grain"] as const;
export const profileFeatureIcons: Record<(typeof profileFeatureKeys)[number], string> = {
  username: "@",
  verification: "✓",
  location: "🌍",
  grain: "🌾",
};

export const churchRoleKeys = ["seniorPastor", "discipleshipPastor", "smallGroupLeader", "churchMember"] as const;
export const groveStageKeys = ["seeds", "sprouts", "youngTrees", "fruitfulTrees", "forestBuilders"] as const;
export const groveStageEmojis: Record<(typeof groveStageKeys)[number], string> = {
  seeds: "🌰",
  sprouts: "🌱",
  youngTrees: "🌿",
  fruitfulTrees: "🌳",
  forestBuilders: "🌲",
};

export const churchPortalFeatureKeys = ["dashboard", "visualization", "cohorts", "profiles", "announcements", "qrCode"] as const;
export const churchPortalFeatureIcons: Record<(typeof churchPortalFeatureKeys)[number], string> = {
  dashboard: "📊",
  visualization: "🌳",
  cohorts: "👥",
  profiles: "👤",
  announcements: "📢",
  qrCode: "📷",
};
