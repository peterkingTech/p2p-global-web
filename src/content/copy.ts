// Central STRUCTURAL data store. All translatable text lives in the message
// catalogs under src/messages/{locale}.json — this file holds only non-text
// structure: stable keys (used to look up the matching translation), hrefs,
// icons, media keys and slugs.
//
// A component pairs an entry here with its translation via the shared
// `key`/`slug`, e.g. t(`GiftCategories.${item.key}.title`).

export const brandMeta = {
  name: "P2P",
} as const;

/** Primary nav: anchors into the single-narrative homepage. Plain <a> tags,
 * so they also work from interior pages. */
export const navItems = [
  { key: "vision", href: "/#vision" },
  { key: "howItWorks", href: "/#how-it-works" },
  { key: "learning", href: "/#learning" },
  { key: "stories", href: "/#stories" },
] as const;

/** Secondary "Explore" list shown in the mobile menu — public-facing pages, never the app's tabs. */
export const exploreLinks = [
  { key: "vision", href: "/vision" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "discipleship", href: "/discipleship" },
  { key: "kingdomSchool", href: "/how-it-works/kingdom-school" },
  { key: "kingdomStories", href: "/kingdom-stories" },
  { key: "families", href: "/families" },
  { key: "churches", href: "/churches" },
  { key: "gifts", href: "/gifts" },
  { key: "missions", href: "/missions" },
  { key: "about", href: "/about" },
] as const;

export const footerGroups = [
  {
    key: "groupUnderstand",
    links: [
      { key: "vision", href: "/vision" },
      { key: "howItWorks", href: "/how-it-works" },
      { key: "discipleship", href: "/discipleship" },
      { key: "livingTree", href: "/how-it-works/living-tree" },
      { key: "peerGuide", href: "/how-it-works/peer-guide" },
    ],
  },
  {
    key: "groupLearn",
    links: [
      { key: "kingdomSchool", href: "/how-it-works/kingdom-school" },
      { key: "bible", href: "/how-it-works/bible" },
      { key: "kingdomStories", href: "/kingdom-stories" },
      { key: "messaging", href: "/how-it-works/messaging" },
    ],
  },
  {
    key: "groupCommunity",
    links: [
      { key: "families", href: "/families" },
      { key: "churches", href: "/churches" },
      { key: "gifts", href: "/gifts" },
      { key: "missions", href: "/missions" },
      { key: "kingdomWins", href: "/kingdom-wins" },
    ],
  },
  {
    key: "groupAbout",
    links: [
      { key: "about", href: "/about" },
      { key: "faq", href: "/faq" },
      { key: "join", href: "/join" },
    ],
  },
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

/** The four dimensions of the growth matrix. */
export const growthDimensionKeys = ["participation", "learning", "application", "service"] as const;

export const giftCategoryKeys = ["care", "tech", "leadership", "creative", "education", "ministry", "practical"] as const;
export const giftCategoryMeta: Record<(typeof giftCategoryKeys)[number], { icon: string; mediaKey: string }> = {
  care: { icon: "❤️", mediaKey: "giftCare" },
  tech: { icon: "💻", mediaKey: "giftTech" },
  leadership: { icon: "🎯", mediaKey: "giftLeadership" },
  creative: { icon: "🎨", mediaKey: "giftCreative" },
  education: { icon: "📚", mediaKey: "giftEducation" },
  ministry: { icon: "⛪", mediaKey: "giftMinistry" },
  practical: { icon: "🤲", mediaKey: "serviceNetwork" },
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

/** Homepage "Where discipleship happens" strip — family and church first. */
export const ecosystem = [
  { key: "family", href: "/families" },
  { key: "church", href: "/churches" },
  { key: "study", href: "/how-it-works/study-together" },
  { key: "prayer", href: "/how-it-works/prayer" },
  { key: "missions", href: "/missions" },
  { key: "stories", href: "/kingdom-stories" },
] as const;

/** Learning & Scripture homepage section. */
export const learningJourneyItems = [
  { key: "bible", mediaKey: "study", href: "/how-it-works/bible" },
  { key: "kingdomSchool", mediaKey: "mission", href: "/how-it-works/kingdom-school" },
  { key: "stories", mediaKey: "stories", href: "/kingdom-stories" },
  { key: "studyTogether", mediaKey: "discipleGrow", href: "/how-it-works/study-together" },
] as const;

/** The app's main experiences, explained (not reproduced as website navigation). */
export const appAreaKeys = ["home", "learning", "bible", "messages", "profile", "more"] as const;

export const howItWorksTopics = [
  { key: "gettingStarted", href: "/how-it-works/getting-started", icon: "🌰" },
  { key: "kingdomSchool", href: "/how-it-works/kingdom-school", icon: "📖" },
  { key: "bible", href: "/how-it-works/bible", icon: "📜" },
  { key: "livingTree", href: "/how-it-works/living-tree", icon: "🌳" },
  { key: "peerGuide", href: "/how-it-works/peer-guide", icon: "🤝" },
  { key: "studyTogether", href: "/how-it-works/study-together", icon: "👥" },
  { key: "generationalForest", href: "/how-it-works/generational-forest", icon: "🌲" },
  { key: "messaging", href: "/how-it-works/messaging", icon: "💬" },
  { key: "prayer", href: "/how-it-works/prayer", icon: "🙏" },
  { key: "profile", href: "/how-it-works/profile", icon: "👤" },
  { key: "grain", href: "/how-it-works/grain", icon: "🌾" },
] as const;

export const kingdomStoryCategories = [
  { slug: "biblical-history", icon: "📜", mediaKey: "storyBiblical" },
  { slug: "jesus-christ", icon: "✝️", mediaKey: "storyJesus" },
  { slug: "early-church", icon: "🕊️", mediaKey: "storyEarlyChurch" },
  { slug: "church-fathers", icon: "📖", mediaKey: "storyFathers" },
  { slug: "christian-history", icon: "🏛️", mediaKey: "storyHistory" },
  { slug: "global-church", icon: "🌍", mediaKey: "storyGlobalChurch" },
  { slug: "missions", icon: "🧭", mediaKey: "storyMissions" },
  { slug: "revival", icon: "🔥", mediaKey: "storyRevival" },
  { slug: "people", icon: "👤", mediaKey: "storyPeople" },
  { slug: "movements", icon: "🌱", mediaKey: "storyMovements" },
  { slug: "persecution", icon: "✝️", mediaKey: "storyPersecution" },
  { slug: "christianity-today", icon: "📖", mediaKey: "storyToday" },
] as const;
export type KingdomStorySlug = (typeof kingdomStoryCategories)[number]["slug"];

/** The six agreed Kingdom Stories content areas, each pointing to its overview stories. */
export const kingdomStoryAreas: { key: string; slugs: KingdomStorySlug[] }[] = [
  { key: "biblicalHistory", slugs: ["biblical-history"] },
  { key: "jesusChrist", slugs: ["jesus-christ"] },
  { key: "earlyChurch", slugs: ["early-church"] },
  { key: "churchFathers", slugs: ["church-fathers"] },
  { key: "globalChurch", slugs: ["christian-history", "global-church"] },
  { key: "missions", slugs: ["missions"] },
];
/** Stories outside the six areas, kept as further reading. */
export const kingdomStoryFurtherReading: KingdomStorySlug[] = ["revival", "people", "movements", "persecution", "christianity-today"];

export const kingdomWinCategoryKeys = ["prayer", "life", "family", "group", "church", "sent"] as const;
export const kingdomWinCategoryMeta: Record<(typeof kingdomWinCategoryKeys)[number], { icon: string; mediaKey: string }> = {
  prayer: { icon: "🙏", mediaKey: "winPrayer" },
  life: { icon: "🤍", mediaKey: "winLife" },
  family: { icon: "🏠", mediaKey: "winFamily" },
  group: { icon: "🤝", mediaKey: "winGroup" },
  church: { icon: "⛪", mediaKey: "winChurch" },
  sent: { icon: "🧳", mediaKey: "winSent" },
};

export const familyRowKeys = ["gather", "learn", "pray", "connect", "remember"] as const;
export const familyRowMeta: Record<(typeof familyRowKeys)[number], { icon: string; mediaKey: string }> = {
  gather: { icon: "📖", mediaKey: "familyGather" },
  learn: { icon: "📓", mediaKey: "familyStudy" },
  pray: { icon: "🙏", mediaKey: "familyPray" },
  connect: { icon: "💬", mediaKey: "family" },
  remember: { icon: "🌱", mediaKey: "winFamily" },
};

export const churchFeatureKeys = [
  "people",
  "shepherds",
  "learning",
  "bible",
  "prayer",
  "communication",
  "media",
  "assignments",
  "custom",
] as const;

/** Shown on the homepage. */
export const faqItemKeys = [
  "whatIsP2p",
  "replaceChurch",
  "isAiTeacher",
  "whoCanJoin",
  "cost",
  "websiteVsApp",
  "peerGuide",
  "livingTree",
  "kingdomSchool",
  "p2pMail",
] as const;

/** Shown in addition on the full FAQ page. */
export const faqItemKeysAdditional = [
  "whoBuilt",
  "whatIsAmen",
  "commercial",
  "therapyReplacement",
  "giftsMarketplace",
  "whyFree",
  "churchFree",
  "peerGuideChange",
  "growthStages",
  "evaluation",
  "bibleDeepStudy",
  "privacy",
  "generationalForest",
  "grain",
  "languages",
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

/** Biological development of an apple tree — the visual, not the participant stages. */
export const treeBiologyKeys = [
  "germinatingSeed",
  "rootTip",
  "youngRoots",
  "rootDevelopment",
  "shootEmergence",
  "leafDevelopment",
  "branchDevelopment",
  "blossom",
  "fruitDevelopment",
  "matureTree",
] as const;

export const gettingStartedStepKeys = ["account", "peerGuide", "foundations", "rhythm"] as const;
export const gettingStartedStepNumbers: Record<(typeof gettingStartedStepKeys)[number], string> = {
  account: "01",
  peerGuide: "02",
  foundations: "03",
  rhythm: "04",
};

/** Core Foundations: currently published courses and lesson counts. The
 * total shown on the site is derived from these, so update counts here only. */
export const coreFoundationCourses = [
  { key: "gospel", lessons: 84 },
  { key: "foundation", lessons: 98 },
  { key: "orientation", lessons: 6 },
] as const;
export const coreFoundationTotalLessons = coreFoundationCourses.reduce((sum, c) => sum + c.lessons, 0);

export const learningExperienceKeys = ["kingdomSchool", "stories", "learningCentre", "studyTogether"] as const;
export const learningWorkflowKeys = ["todo", "submitted", "feedback", "waiting"] as const;

export const bibleFeatureKeys = ["text", "audio", "translations", "navigation", "search", "compare", "highlight", "deeper"] as const;

export const peerGuideRelationshipKeys = ["oneActive", "multiple", "many", "lasting"] as const;
export const forestLayerKeys = ["learns", "grows", "helps", "continues"] as const;

export const studyTogetherSupportKeys = ["kingdomSchool", "bible", "stories", "community"] as const;

export const messagingFeatureKeys = ["direct", "groups", "familyChurch", "studyTogether", "audio", "video", "group"] as const;
export const messagingFeatureIcons: Record<(typeof messagingFeatureKeys)[number], string> = {
  direct: "💬",
  groups: "👥",
  familyChurch: "🏠",
  studyTogether: "📖",
  audio: "🎙️",
  video: "📹",
  group: "📞",
};

export const prayerFeatureKeys = ["sinnersPrayer", "library", "confessionBuilder", "journal"] as const;
export const prayerFeatureIcons: Record<(typeof prayerFeatureKeys)[number], string> = {
  sinnersPrayer: "✝️",
  library: "🙏",
  confessionBuilder: "📝",
  journal: "📔",
};

export const profileFeatureKeys = ["tree", "stage", "milestones"] as const;
export const profileFeatureIcons: Record<(typeof profileFeatureKeys)[number], string> = {
  tree: "🌳",
  stage: "🌱",
  milestones: "✓",
};
