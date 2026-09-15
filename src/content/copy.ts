// Central copy store. All Scripture-adjacent and vision/mission language used
// across the site is defined here so pages stay consistent and easy to edit.
//
// IMPORTANT: no statistics, user counts, partnership claims, or testimonies
// are hard-coded here. Anything illustrative is explicitly labeled EXAMPLE.

export const scripture = {
  vision: {
    reference: "Habakkuk 2:14",
    text: "For the earth will be filled with the knowledge of the glory of the Lord as the waters cover the sea.",
  },
  mission: {
    reference: "2 Timothy 2:2",
    text: "And the things that you have heard from me among many witnesses, commit these to faithful men who will be able to teach others also.",
  },
  gifts: {
    reference: "1 Peter 4:10",
    text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace.",
  },
} as const;

export const brand = {
  name: "P2P",
  fullName: "Peer to Peer Global Discipleship Network",
  tagline: "Everyone is learning from someone. Everyone can help someone grow.",
  centerLine1: "Not our work. His work.",
  centerLine2: "Not our glory. His glory.",
  centerLine3: "Jesus Christ at the center.",
} as const;

export const nav = [
  { label: "Vision", href: "/vision" },
  { label: "Discipleship", href: "/discipleship" },
  { label: "Gifts & Service", href: "/gifts" },
  { label: "Missions", href: "/missions" },
  { label: "Stories", href: "/kingdom-stories" },
  { label: "Communities", href: "/churches" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Discipleship", href: "/discipleship" },
  { label: "Gifts", href: "/gifts" },
  { label: "Missions", href: "/missions" },
  { label: "Kingdom Stories", href: "/kingdom-stories" },
  { label: "Kingdom Wins", href: "/kingdom-wins" },
  { label: "Families", href: "/families" },
  { label: "Churches", href: "/churches" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const seedToNations = [
  {
    icon: "🌰",
    stage: "A single seed",
    title: "A SINGLE SEED",
    body: "One person hears the gospel.",
  },
  {
    icon: "🌱",
    stage: "Becomes a tree",
    title: "BECOMES A TREE",
    body: "Rooted in doctrine. Growing in faith. Discipleship is not simply collecting information — roots deepen, character grows, faith matures.",
  },
  {
    icon: "🌳",
    stage: "Trees become a forest",
    title: "TREES BECOME A FOREST",
    body: "Disciples multiply generationally. One disciple helps another, who helps someone else. The process becomes generational.",
  },
  {
    icon: "🌲",
    stage: "Forests spread across continents",
    title: "FORESTS SPREAD ACROSS CONTINENTS",
    body: "Cities and nations filled with believers. This is the vision — not a claim about current numbers.",
  },
  {
    icon: "🌍",
    stage: "The earth covered with His glory",
    title: "THE EARTH COVERED WITH HIS GLORY",
    body: "As the waters cover the sea. — Habakkuk 2:14",
  },
] as const;

export const discipleSteps = [
  { icon: "👤", title: "I LEARN", body: "Receiving from my peer guide — Scripture, conversation, learning." },
  { icon: "🌱", title: "I GROW", body: "Roots deepen. Faith strengthens. Character matures." },
  { icon: "🤝", title: "I HELP SOMEONE GROW", body: "Guiding someone, teaching what I was taught — relational, not hierarchical." },
  { icon: "🌳", title: "THEY HELP SOMEONE GROW", body: "Second-generation discipleship begins." },
  { icon: "🌲", title: "DISCIPLES MULTIPLY", body: "Generational impact expands." },
  { icon: "🌍", title: "NATIONS REACHED", body: "The earth filled with His glory." },
] as const;

export const treeJourney = [
  { icon: "🌰", title: "SEED", body: "Just joined. Beginning the journey." },
  { icon: "🌱", title: "SPROUT", body: "Foundational modules. First mentoring relationships." },
  { icon: "🌿", title: "YOUNG TREE", body: "Mid-journey. Actively helping others." },
  { icon: "🌳", title: "FRUITFUL TREE", body: "Deep in the curriculum. Fruit on the branches." },
  { icon: "🌲", title: "FOREST BUILDER", body: "Disciples discipling others across cities." },
  { icon: "🌍", title: "FOREST OF NATIONS", body: "Nations impacted through generational discipleship — a vision state, not a current achievement claim." },
] as const;

export const giftCategories = [
  {
    icon: "❤️",
    title: "CARE & WELLNESS",
    examples: "Psychology, therapy, counseling, mental wellbeing support, social care",
    outcome: "HEALING & ENCOURAGEMENT CIRCLES",
  },
  {
    icon: "💻",
    title: "TECH & DIGITAL",
    examples: "Programming, UI/UX design, cybersecurity, web & mobile development",
    outcome: "APP DEVELOPMENT & TOOLS",
  },
  {
    icon: "🎯",
    title: "LEADERSHIP & ADMIN",
    examples: "Administration, project management, finance, operations, strategy",
    outcome: "ORGANIZATION & SCALING",
  },
  {
    icon: "🎨",
    title: "CREATIVE & MEDIA",
    examples: "Music, photography, writing, design, video, storytelling",
    outcome: "CONTENT & STORYTELLING",
  },
  {
    icon: "📚",
    title: "EDUCATION",
    examples: "Teaching, language coaching, academic tutoring, curriculum development",
    outcome: "LEARNING & TRAINING",
  },
  {
    icon: "⛪",
    title: "MINISTRY GIFTS",
    examples: "Evangelism, prayer & intercession, worship, discipleship, Bible teaching",
    outcome: "SPIRITUAL MULTIPLICATION",
  },
] as const;

export const giftExamples = [
  {
    icon: "👨‍⚕️",
    title: "THERAPIST + DISCIPLE",
    tags: ["Counseling", "Discipleship"],
    body: "Hosts a Scripture-centered encouragement group for people walking through difficult seasons. Professional care and spiritual support can coexist — one does not replace the other.",
  },
  {
    icon: "👨‍💻",
    title: "PROGRAMMER + MISSIONARY",
    tags: ["Programming", "Evangelism"],
    body: "Helps build digital tools, mentors developers, and supports digital outreach.",
  },
  {
    icon: "👩‍💼",
    title: "ADMINISTRATOR + MENTOR",
    tags: ["Operations", "Leadership"],
    body: "Helps organize discipleship cohorts, coordinate teams, and support prayer initiatives.",
  },
  {
    icon: "🎨",
    title: "ARTIST + WORSHIP LEADER",
    tags: ["Design", "Worship"],
    body: "Creates visual resources, supports worship communities, and contributes discipleship materials.",
  },
] as const;

export const serviceQueries = [
  "Find Christian programmers near me",
  "Need a translator for discipleship content",
  "Find an accountability partner for prayer",
  "Looking for someone experienced in worship",
  "Need help with a ministry website",
  "Looking for someone who can teach English",
] as const;

export const serviceOffers = [
  "Offering free counseling for new believers",
  "Can help with ministry website design",
  "Mentoring young professionals",
  "Available to help translate discipleship materials",
  "Available to teach programming",
  "Can help with worship and music",
] as const;

export const ecosystem = [
  { key: "study", title: "STUDY", body: "Rooted in Scripture — curriculum, plans, and a study workspace.", href: "/discipleship" },
  { key: "prayer", title: "PRAYER", body: "Prayer becomes participation — real people, real prayer, no leaderboards.", href: "/discipleship" },
  { key: "family", title: "FAMILY", body: "Discipleship starts where we live.", href: "/families" },
  { key: "church", title: "CHURCH", body: "P2P serves the local church. It does not replace it.", href: "/churches" },
  { key: "missions", title: "MISSIONS", body: "See the field. Hear the story. Pray for the workers.", href: "/missions" },
  { key: "stories", title: "STORIES", body: "Discover what God has done.", href: "/kingdom-stories" },
] as const;

export const kingdomStoryCategories = [
  { icon: "📜", mediaKey: "storyHistory", title: "CHRISTIAN HISTORY", body: "The long story of the Church, from the early creeds to today." },
  { icon: "🔥", mediaKey: "storyRevival", title: "REVIVAL", body: "Seasons when God moved in unusual, widely-witnessed ways." },
  { icon: "🌍", mediaKey: "storyGlobalChurch", title: "GLOBAL CHURCH", body: "How believers across cultures and continents live out the same faith." },
  { icon: "🧭", mediaKey: "storyMissions", title: "MISSIONS", body: "Those sent to carry the gospel across cultures and borders." },
  { icon: "👤", mediaKey: "storyPeople", title: "PEOPLE", body: "Figures whose faith shaped the Church that followed them." },
  { icon: "🌱", mediaKey: "storyMovements", title: "MOVEMENTS", body: "Moments when discipleship multiplied faster than anyone expected." },
  { icon: "✝️", mediaKey: "storyPersecution", title: "PERSECUTION & PERSEVERANCE", body: "The cost some believers carry, and the faith that sustains them." },
  { icon: "📖", mediaKey: "storyToday", title: "CHRISTIANITY TODAY", body: "What God is doing in the Church right now, told honestly." },
] as const;

export const kingdomWinCategories = [
  { icon: "🙏", mediaKey: "winPrayer", title: "ANSWERED PRAYER", outcome: "God moving in a specific, named need." },
  { icon: "💛", mediaKey: "winLife", title: "A LIFE CHANGED", outcome: "Someone coming to know Jesus, or growing in Him." },
  { icon: "🏠", mediaKey: "winFamily", title: "A FAMILY RESTORED", outcome: "Reconciliation, healing, renewed hope at home." },
  { icon: "🤝", mediaKey: "winGroup", title: "A GROUP FORMED", outcome: "Believers finding each other and starting to grow together." },
  { icon: "⛪", mediaKey: "winChurch", title: "A CHURCH STRENGTHENED", outcome: "A local congregation encouraged or equipped." },
  { icon: "🧳", mediaKey: "winSent", title: "SOMEONE SENT", outcome: "A believer stepping into service or mission." },
] as const;

export const familyRows = [
  {
    icon: "📖",
    mediaKey: "familyGather",
    title: "GATHER AROUND THE WORD",
    body: "A short passage, read together — around the table, in the car, before bed. Scripture doesn't need a classroom to take root.",
  },
  {
    icon: "🙏",
    mediaKey: "familyPray",
    title: "PRAY TOGETHER",
    body: "Simple, honest prayer as a family rhythm — naming what's hard, thanking God for what's good.",
  },
  {
    icon: "📓",
    mediaKey: "familyStudy",
    title: "STUDY TOGETHER",
    body: "Age-appropriate study rhythms parents and children can actually keep, not another program to manage.",
  },
  {
    icon: "🌱",
    mediaKey: "family",
    title: "GROW TOGETHER",
    body: "Faith that's caught as much as taught — children watching parents wrestle with Scripture honestly, and grow.",
  },
] as const;

export const churchRows = [
  {
    icon: "👥",
    mediaKey: "churchCohorts",
    title: "COHORTS & SMALL GROUPS",
    body: "Structured discipleship groups a church can run using P2P's study rhythm, led by its own people.",
  },
  {
    icon: "🗓️",
    mediaKey: "churchPlans",
    title: "SHARED STUDY PLANS",
    body: "A common Scripture plan a congregation can move through together, in step with what's preached on Sunday.",
  },
  {
    icon: "📞",
    mediaKey: "churchCalls",
    title: "PRAYER & CHECK-INS",
    body: "Lightweight ways for members to stay connected and pray for one another between gatherings.",
  },
  {
    icon: "🌿",
    mediaKey: "church",
    title: "A DISCIPLESHIP PATHWAY",
    body: "A clear next step for anyone in the congregation who wants to go deeper — not a competing program, a supporting one.",
  },
] as const;

export const faqItems = [
  {
    q: "What is P2P?",
    a: "A global peer-to-peer discipleship network centered on Jesus Christ — Scripture, prayer, community, and mission, built around the idea that everyone is learning from someone and everyone can help someone grow.",
  },
  {
    q: "Does P2P replace my local church?",
    a: "No. P2P is built to strengthen the local church, not compete with it. Membership, pastoral care, and the sacraments stay where they belong — with your congregation.",
  },
  {
    q: "Is P2P a replacement for therapy or professional counseling?",
    a: "No. Where P2P touches care and wellness, it's peer encouragement alongside professional help, never a substitute for it. Anyone in crisis should reach out to a licensed professional or local emergency services.",
  },
  {
    q: "Is the Gifts & Service Network a marketplace where I pay for help?",
    a: "No. It's a vision for how believers can offer and find help within the community — not a freelancer marketplace, a paid services platform, or an unverified professional directory. Any future version would include identity verification, safeguarding, and moderation appropriate to what's being offered.",
  },
  {
    q: "Who can join P2P?",
    a: "Anyone who wants to grow as a disciple of Jesus and help someone else do the same — new believers and long-time believers alike. A peer guide is simply someone a little further along the road, not a distant authority.",
  },
  {
    q: "Is there a cost to join?",
    a: "Pricing hasn't been finalized. This page will be updated with clear details the moment web and app onboarding go live — we won't leave that vague once it matters.",
  },
  {
    q: "When will the app be available?",
    a: "There's no fixed date yet. Rather than posting a launch date we might miss, this site will be updated the moment sign-up is actually live.",
  },
  {
    q: "How is this website different from the P2P app?",
    a: "This site casts the vision and explains the model. Some of what's described — like gift-based service discovery — is a direction for where P2P can go, not a claim about what the app already does today. The About page spells out that distinction in more detail.",
  },
] as const;

export const journeySteps = [
  "DISCOVER",
  "LEARN",
  "GROW",
  "WALK WITH OTHERS",
  "HELP SOMEONE",
  "SERVE",
  "DISCIPLE",
  "MULTIPLY",
  "NATIONS",
] as const;
