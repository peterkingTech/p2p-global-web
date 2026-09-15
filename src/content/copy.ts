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
