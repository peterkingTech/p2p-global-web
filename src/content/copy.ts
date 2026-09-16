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
  { label: "How It Works", href: "/how-it-works" },
  { label: "Discipleship", href: "/discipleship" },
  { label: "Gifts & Service", href: "/gifts" },
  { label: "Missions", href: "/missions" },
  { label: "Stories", href: "/kingdom-stories" },
  { label: "Communities", href: "/churches" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = [
  { label: "Vision", href: "/vision" },
  { label: "How It Works", href: "/how-it-works" },
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
  {
    slug: "christian-history",
    icon: "📜",
    mediaKey: "storyHistory",
    title: "CHRISTIAN HISTORY",
    body: "The long story of the Church, from the early creeds to today.",
    article: [
      "The Church's story begins in the first century with a small band of disciples in Jerusalem, and the book of Acts records how the gospel spread rapidly along Roman trade routes through the missionary journeys of Paul and others, reaching most of the Mediterranean world within a few decades.",
      "The early centuries were shaped by seasons of Roman persecution alongside the steady work of clarifying core Christian belief. Councils such as Nicaea (325) and Chalcedon (451) produced the creeds still recited in churches worldwide today, affirming the church's shared confession about who Jesus is.",
      "In the centuries that followed, monastic communities preserved learning and Scripture through the medieval period, the Eastern and Western churches formally divided in 1054, and the Reformation of the 16th century — sparked by Martin Luther's 1517 challenge to the Church at Wittenberg — renewed the call to Scripture as the church's final authority. From there, the gospel continued to spread outward through the missionary movements of the following centuries, which is where the next category picks up.",
    ],
  },
  {
    slug: "revival",
    icon: "🔥",
    mediaKey: "storyRevival",
    title: "REVIVAL",
    body: "Seasons when God moved in unusual, widely-witnessed ways.",
    article: [
      "Church history includes recurring seasons where renewed conviction and prayer spread through whole communities faster than any single person organized. The First Great Awakening swept Britain and the American colonies in the 1730s–40s under preachers like George Whitefield and Jonathan Edwards, followed by a Second Great Awakening in the early 1800s.",
      "The Welsh Revival of 1904–05, associated with a young evangelist named Evan Roberts, saw a wave of conversions and public prayer across Wales that was reported in newspapers of the day. Soon after, the Azusa Street Revival began in Los Angeles in 1906 under William J. Seymour, a meeting that historians widely credit as the origin point of the modern global Pentecostal movement.",
      "Revivals like the East African Revival of the 1930s onward reshaped whole regional churches around confession, reconciliation, and renewed discipleship. What these seasons share isn't a formula — it's ordinary believers responding to an extraordinary sense that God was near, in ways that outlasted the moment itself.",
    ],
  },
  {
    slug: "global-church",
    icon: "🌍",
    mediaKey: "storyGlobalChurch",
    title: "GLOBAL CHURCH",
    body: "How believers across cultures and continents live out the same faith.",
    article: [
      "One of the most significant shifts in modern church history has been geographic: researchers who track global Christianity — including the Center for the Study of Global Christianity and the Pew Research Center — have documented for decades how the church's center of gravity has moved away from Europe and North America toward Africa, Asia, and Latin America, where the fastest growth has occurred over the past century.",
      "That means the 'typical' Christian today is less likely to be a European or North American than at almost any point since the early church, and more likely to worship in a language, style, and setting shaped by a very different culture than the ones that sent the first modern missionaries.",
      "What holds this global, culturally diverse church together isn't uniformity — it's a shared confession about Jesus Christ, expressed through remarkably different languages, music, and forms of gathering. P2P's own peer-to-peer model reflects that same conviction: the faith travels through relationships, not through any one culture's ownership of it.",
    ],
  },
  {
    slug: "missions",
    icon: "🧭",
    mediaKey: "storyMissions",
    title: "MISSIONS",
    body: "Those sent to carry the gospel across cultures and borders.",
    article: [
      "Christian mission goes back to the New Testament itself, but the modern missionary movement is often dated to William Carey, an English cobbler-turned-missionary whose 1792 pamphlet and subsequent work in India helped launch a wave of Protestant missionary societies that would send workers across the globe through the 19th century.",
      "Figures like Hudson Taylor, who founded the China Inland Mission in 1865 and pioneered missionaries adopting local dress and customs rather than imposing Western culture, shaped how later generations thought about crossing cultures with the gospel respectfully rather than as an extension of colonial power.",
      "Today, one of the clearest trends in global missions is its reversal: churches in Africa, Asia, and Latin America — many of them planted by 19th- and 20th-century missionaries — now send significant numbers of their own missionaries worldwide, including back to the historically Christian West. Mission has become something the whole global church does together, in every direction.",
    ],
  },
  {
    slug: "people",
    icon: "👤",
    mediaKey: "storyPeople",
    title: "PEOPLE",
    body: "Figures whose faith shaped the Church that followed them.",
    article: [
      "Church history is carried forward by particular people whose lives are still studied today. Augustine of Hippo (354–430) shaped Western theology for over a thousand years after his conversion and his writing on grace, sin, and the nature of the church. Athanasius spent much of his life defending the Nicene understanding of Christ against fierce opposition, at real personal cost.",
      "Francis of Assisi in the 13th century embodied simplicity and care for the poor in a way that still shapes how Christians think about possessions and creation. The Reformation produced Martin Luther and later John Calvin, while the 18th-century Wesleyan revival under John and Charles Wesley left behind not just hymns still sung today, but a whole model of small-group discipleship built around mutual accountability.",
      "Missionary figures like Hudson Taylor and Amy Carmichael, who spent decades serving vulnerable children in India, remind us that faithfulness is usually measured in decades of unglamorous work, not single dramatic moments. None of these figures were without flaws — but their lives are part of the inheritance every believer today has received.",
    ],
  },
  {
    slug: "movements",
    icon: "🌱",
    mediaKey: "storyMovements",
    title: "MOVEMENTS",
    body: "Moments when discipleship multiplied faster than anyone expected.",
    article: [
      "Alongside individual figures, church history includes whole movements built around a particular way of forming disciples. Early monasticism, formalized by Benedict of Nursia's Rule in the 6th century, created communities organized around shared prayer, work, and Scripture that preserved the faith through unstable centuries.",
      "The 18th-century Methodist movement under John Wesley organized converts into small 'class meetings' of a dozen or so people who met weekly for mutual accountability and encouragement in the faith — a structure historians credit with sustaining Methodism's rapid growth, and one that peer-to-peer discipleship models draw directly on today.",
      "More recently, the house-church movement that sustained the Chinese church through decades of restriction, and the global spread of campus ministries and small-group or cell-church discipleship models, all share a common thread: faith multiplies fastest not through institutions alone, but through ordinary believers deliberately investing in a few others.",
    ],
  },
  {
    slug: "persecution",
    icon: "✝️",
    mediaKey: "storyPersecution",
    title: "PERSECUTION & PERSEVERANCE",
    body: "The cost some believers carry, and the faith that sustains them.",
    article: [
      "Persecution is part of the church's story from its earliest days — the book of Acts records the stoning of Stephen, widely regarded as the first Christian martyr, and Roman emperors including Nero and later Diocletian carried out organized persecutions in the first three centuries before Christianity was legalized in the empire.",
      "The early church father Tertullian wrote that 'the blood of the martyrs is the seed of the church' — a pattern historians have observed repeat since: persecution has often coincided with growth rather than extinguishing the church it targeted.",
      "Persecution of Christians continues in parts of the world today, and organizations such as Open Doors and Voice of the Martyrs document these situations in detail for anyone who wants to understand or pray specifically. We won't attach specific figures or claims here that we haven't verified — but we hold the reality in view, and it shapes how P2P thinks about prayer for the persecuted church as part of ordinary discipleship, not a separate concern.",
    ],
  },
  {
    slug: "christianity-today",
    icon: "📖",
    mediaKey: "storyToday",
    title: "CHRISTIANITY TODAY",
    body: "What God is doing in the Church right now, told honestly.",
    article: [
      "Christianity remains the world's largest religion by number of adherents, and — as the Global Church category above touches on — its fastest-growing regions today are in the Global South rather than the historically Christian West, which is seeing continued secularization in many places even as immigration and renewal movements bring their own changes.",
      "Digital tools have reshaped how many believers engage with Scripture, teaching, and community, for better and for worse — the same technology that lets a believer in one country study alongside a peer guide in another can also make faith feel like something consumed alone rather than lived in community. That tension is part of why P2P exists: to use technology in service of real relationships, not as a replacement for them.",
      "None of this is a finished story. Whatever else is true of this moment in church history, ordinary discipleship — one person helping another follow Jesus — remains exactly as available and exactly as needed as it was in the first century.",
    ],
  },
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
    q: "Who built P2P?",
    a: "P2P Global Discipleship Network is powered by Amen Kingdom Tech Ministry — a technology ministry that designs and builds websites, apps, and digital systems for churches, organizations, and businesses.",
  },
  {
    q: "What is Amen Kingdom Tech Ministry?",
    a: "A purpose-driven technology ministry founded through obedience to God's calling in the digital age, existing to represent Him faithfully across the various mountains of influence in the tech world. The name AMEN reflects agreement with what God is doing through the systems it builds — guided by the Holy Spirit rather than trends alone, and built with excellence, precision, and integrity.",
  },
  {
    q: "Is P2P a commercial product built by Amen Kingdom Tech?",
    a: "No. P2P is a ministry expression of that same calling, not a business — which is exactly why every feature is free.",
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
    a: "No — everything is free. Every resource and tool for growth, for individuals, families, and churches alike, is offered at no charge, and P2P does not charge for any feature. This isn't a business model; it's a kingdom assignment and a ministry, carried out in pursuit of God's vision that the earth would be filled with the knowledge of the glory of the Lord, as the waters cover the sea (Habakkuk 2:14).",
  },
  {
    q: "Why is everything free?",
    a: "Because P2P exists to serve that vision, not to generate revenue from it. Charging for discipleship, prayer, or the tools to help someone grow would work against the very thing this network was built to do.",
  },
  {
    q: "Can my church use P2P for free too?",
    a: "Yes. Churches, families, and individuals all use the same free network — there's no paid tier, no premium plan, and no feature held back behind a paywall.",
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

// ─── GROWTH STAGES ───────────────────────────────────────────
// The six real stages of the in-app Living Tree — confirmed product feature.
export const growthStages = [
  {
    emoji: "🌰",
    stage: "seed",
    title: "SEED",
    subtitle: "Stage 1 of 6",
    headline: "The journey begins.",
    body: "You have taken the first step. You have created your account and your seed is in the soil. The roots have not yet appeared above the surface — but something has begun. Every forest on earth started exactly here.",
    what_it_means: "You just joined. You are completing your onboarding journey and meeting your peer guide.",
  },
  {
    emoji: "🌱",
    stage: "sprout",
    title: "SPROUT",
    subtitle: "Stage 2 of 6",
    headline: "Something is above the surface.",
    body: "You have completed your first module or connected with your first peer guide. Growth has begun. The sprout is fragile but it is real. This is the most important stage — the decision to keep going when it is still new.",
    what_it_means: "You have completed Module 1 or are actively engaged with your peer guide.",
  },
  {
    emoji: "🌿",
    stage: "young_tree",
    title: "YOUNG TREE",
    subtitle: "Stage 3 of 6",
    headline: "Roots going deeper.",
    body: "You are working through the middle modules. You are actively learning, submitting reflections, engaging with your peer guide — and you have begun to walk alongside someone else. The tree is gaining strength.",
    what_it_means: "You have completed 4 or more modules and are actively guiding at least one other person.",
  },
  {
    emoji: "🌳",
    stage: "fruitful_tree",
    title: "FRUITFUL TREE",
    subtitle: "Stage 4 of 6",
    headline: "The branches are bearing fruit.",
    body: "You are in the later modules of the Foundation. Disciples are growing under your guidance. Fruit is appearing — not just for you but through you. This is the stage 2 Timothy 2:2 describes: the things you received, you are entrusting to faithful people.",
    what_it_means: "You have completed 9 or more modules, are guiding multiple people, and have earned 5 or more fruits.",
  },
  {
    emoji: "🌲",
    stage: "forest_builder",
    title: "FOREST BUILDER",
    subtitle: "Stage 5 of 6",
    headline: "Your disciples have disciples.",
    body: "You have completed all 12 Foundation modules. The people you guided are now guiding others. You are no longer just a tree — you are the beginning of a forest. Generational discipleship is no longer a concept. It is happening.",
    what_it_means: "Foundation complete. Your mentees have their own mentees. Second-generation discipleship is active.",
  },
  {
    emoji: "🌍",
    stage: "forest_of_nations",
    title: "FOREST OF NATIONS",
    subtitle: "Stage 6 of 6",
    headline: "The earth being filled.",
    body: "Your generational discipleship impact has spread across nations. People you have never met, in countries you have never visited, are growing in Christ because of a chain of faithfulness that began with you. Habakkuk 2:14 is not just a verse. It is a trajectory. You are on it.",
    what_it_means: "Your discipleship lineage spans multiple nations. The forest is spreading.",
  },
] as const;

// ─── TREE ANATOMY ─────────────────────────────────────────────
export const treeAnatomy = [
  {
    part: "Roots",
    icon: "🌿",
    explanation: "Every module you complete deepens your roots. 12 modules — 12 visible roots. Roots cannot be seen from the outside but they hold everything up. The deeper the roots the stronger the tree.",
  },
  {
    part: "Trunk",
    icon: "🌳",
    explanation: "Your trunk grows with faithfulness over time. Days active. Sessions held. Consistency across weeks and months. The trunk does not lie — it reflects how long and how steadily you have been at this.",
  },
  {
    part: "Branches",
    icon: "🌿",
    explanation: "Each branch represents a mentee — someone you are guiding. Active mentees glow green. A mentee who has gone quiet shows a wilting branch — a gentle signal that they may need a check-in. No branch is forgotten.",
  },
  {
    part: "Fruit",
    icon: "🍎",
    explanation: "52 named biblical fruits — each one a real milestone. Completing a module. Guiding someone through their first lesson. Inviting someone who joins. Fruit is permanent. It never falls from your tree.",
  },
  {
    part: "Grain",
    icon: "🌾",
    explanation: "Every person you invite who joins P2P Global adds one Grain to your profile. Grain is your harvest record — not a score, not a currency. A testimony. Based on John 12:24.",
  },
] as const;

// ─── HOW IT WORKS — GETTING STARTED ──────────────────────────
export const gettingStartedSteps = [
  {
    day: "Day 1",
    title: "Create your account",
    body: "Register with your name and email. Choose your @username — this is how the whole network knows you. Set your ministry role (new believer, growing believer, pastor, etc) — this shapes your experience from the start.",
  },
  {
    day: "Day 1",
    title: "The Onboarding Journey",
    body: "Five steps anchored in Romans 15:7 — Accept one another, just as Christ accepted you. You meet your peer guide, share your story, pray together, plant your tree, and begin Module 1.",
  },
  {
    day: "Days 2–7",
    title: "Your first lesson",
    body: "Read through Lesson 1 of Module 1 at your own pace. Answer the reflection questions. Submit when you are ready. Your peer guide reviews your answers and responds. That is week one. No pressure. No deadline. No clock.",
  },
  {
    day: "Ongoing",
    title: "The rhythm continues",
    body: "One lesson at a time. Submit. Peer guide reviews. Unlock the next lesson. 84 lessons across 12 modules. Some take a week. Some take a month. The journey is yours.",
  },
] as const;

// ─── PEER GUIDE ───────────────────────────────────────────────
export const peerGuideExplainer = {
  definition: "A peer guide is a fellow believer who is one step ahead of you on the journey — ready to walk alongside you now. Not a pastor. Not a teacher. Not an authority over you. A further-along peer.",
  what_they_do: [
    "Go through every lesson with you",
    "Read your reflection answers",
    "Ask good questions",
    "Pray with you",
    "Notice when you go quiet",
    "Evaluate your submissions before the next lesson unlocks",
  ],
  matching_factors: [
    { label: "Language", detail: "You share a content language" },
    { label: "Timezone", detail: "Sessions work across your schedules" },
    { label: "Life stage", detail: "Matched to where you are" },
    { label: "Background sensitivity", detail: "For members with specific pastoral needs" },
    { label: "GPS-verified location", detail: "No fake profiles — real people, real places" },
  ],
  becoming_a_guide: "When you complete all 12 Foundation modules — The Completion Moment fires and you are commissioned as a peer guide. From that point you can accept mentees and guide them through the same journey you just completed. The pattern of 2 Timothy 2:2 made real.",
} as const;

// ─── KINGDOM SCHOOL ───────────────────────────────────────────
export const foundationModules = [
  { number: 1, title: "Your New Identity in Christ", description: "Discover who you truly are in the finished work of Christ." },
  { number: 2, title: "The Word of God", description: "Understanding Scripture as the foundation of all growth." },
  { number: 3, title: "Prayer and Communion with God", description: "Building a real, daily conversation with God." },
  { number: 4, title: "The Holy Spirit", description: "Who He is, what He does, and how to walk with Him." },
  { number: 5, title: "Faith and Trust", description: "Learning to walk by faith not by sight in every season." },
  { number: 6, title: "Repentance and Grace", description: "The ongoing rhythm of turning, receiving, and growing." },
  { number: 7, title: "Community and Fellowship", description: "Why we need each other and what that looks like." },
  { number: 8, title: "Spiritual Warfare", description: "Knowing your enemy, your armour, and your authority." },
  { number: 9, title: "Serving Others", description: "Moving from consumer to contributor in the body of Christ." },
  { number: 10, title: "Evangelism and Witness", description: "Sharing your faith naturally and faithfully." },
  { number: 11, title: "Discipleship and Multiplication", description: "How to guide someone else through what you have received." },
  { number: 12, title: "Your Commission", description: "You are ready. Go find your person." },
] as const;

export const electiveCategories = [
  { emoji: "👑", name: "Faith and Kingdom Living", count: 15, color: "#1D4E2B" },
  { emoji: "⛪", name: "Ministry and Leadership", count: 15, color: "#2C3E6B" },
  { emoji: "🌱", name: "Spiritual Growth", count: 15, color: "#1D9E75" },
  { emoji: "🏠", name: "Family and Relationships", count: 12, color: "#8B4513" },
  { emoji: "✝️", name: "Identity and Salvation", count: 16, color: "#4B0082" },
  { emoji: "💼", name: "Marketplace and Purpose", count: 12, color: "#B8860B" },
  { emoji: "🙏", name: "Prayer", count: 16, color: "#1A237E" },
  { emoji: "🕊️", name: "Holy Spirit", count: 14, color: "#4A90D9" },
  { emoji: "💊", name: "Healing and Freedom", count: 15, color: "#C0392B" },
  { emoji: "🤝", name: "Church and Community", count: 12, color: "#2E7D32" },
] as const;

// ─── PEER CIRCLES ─────────────────────────────────────────────
export const peerCircleExplainer = {
  definition: "Peer Circles are groups of 3 to 8 believers going through the same plan or module together — from anywhere in the world. Discipleship does not have to be one-on-one.",
  how_it_works: [
    "A circle leader creates the circle and invites members by @username",
    "Everyone reads the lesson individually at their own pace",
    "The group meets — in-app group call or externally via WhatsApp or Zoom",
    "The circle leader guides the discussion questions",
    "Members submit their reflections individually",
    "Any 2 circle members can approve a submission — no single person holds progress back",
  ],
  fruits: [
    "The Fellowship Fruit — for completing a plan through a circle",
    "The Unity Fruit — if circle members are from different nations",
    "The Shepherd Fruit — for the circle leader when members complete modules",
  ],
} as const;

// ─── FEATURES ─────────────────────────────────────────────────
export const messagingFeatures = [
  { icon: "💬", title: "Direct Messages", body: "Message any connection directly — your peer guide, circle members, and fellow believers in your network." },
  { icon: "📌", title: "Pinned Messages", body: "Pin any message in a conversation with a label — Important, Follow Up, Scripture Reference, Action Item." },
  { icon: "🎙️", title: "Audio Calls", body: "One-tap audio calls with your peer guide. Works on low-bandwidth connections anywhere in the world." },
  { icon: "📹", title: "Video Calls", body: "Face to face with your peer guide. The lesson stays accessible in a sidebar during the call." },
  { icon: "👥", title: "Group Calls", body: "Your Peer Circle meets live. Up to 8 participants. Raise your hand. Discussion questions on screen." },
  { icon: "🎙️", title: "Break Rooms", body: "Spontaneous audio rooms in the Discover tab. Morning Prayer. Bible Q&A. Kingdom Men. Kingdom Women. Open rooms that disappear when the last person leaves." },
  { icon: "✉️", title: "Contact P2P Global", body: "Message the team directly from the Messages tab. Select a department — Help Request, Crisis Response, Support, or Marketing. A team member responds in your inbox." },
] as const;

export const inboxTabs = [
  { tab: "All", description: "Every conversation, ordered by most recent activity." },
  { tab: "Unread", description: "Only conversations with messages you have not read yet." },
  { tab: "Favourites", description: "Your peer guide and pinned contacts. Always at hand." },
  { tab: "Peer Groups", description: "Informal groups — study groups, prayer partners, community conversations." },
  { tab: "Circles", description: "Your Peer Circle conversations — tied to your learning plans." },
] as const;

export const prayerFeatures = [
  { icon: "✝️", title: "The Sinner's Prayer", body: "A sacred screen — always accessible. A prayer of commitment for anyone who wants to begin with Jesus or recommit their life to Him. When you pray it — you can tell your peer guide immediately." },
  { icon: "🙏", title: "Prayer Library", body: "Four categories — Grace and Mercy, Favour, Healing, and Confessions and Declarations. Biblical prayers grounded in Scripture, available any time." },
  { icon: "📝", title: "Confession Builder", body: "Build your personal daily confession. Select scriptures. Arrange them. Set a morning notification. Wake up to your own words of faith." },
  { icon: "📔", title: "Prayer Journal", body: "Write your prayers. Mark them answered. Your answered prayers become your personal testimony record — proof of God's faithfulness in your own life." },
] as const;

export const profileFeatures = [
  { icon: "@", title: "Your @Username", body: "Your unique identity across the entire P2P Global network. Find people, be found, and invite others — all by username." },
  { icon: "✓", title: "Identity Verification", body: "Submit a selfie with a handwritten note. Our team reviews it within 72 hours. The blue tick confirms you are a real person with a real identity. It builds trust across the network." },
  { icon: "🌍", title: "GPS-Verified Location", body: "Your location is verified by your device GPS — not typed manually. City and country displayed on your profile. Coordinates are never shared with other users." },
  { icon: "🌾", title: "Grain", body: "Every person who joins P2P Global through your personal invite link adds one Grain to your harvest record. Based on John 12:24." },
] as const;

// ─── CHURCH PORTAL ────────────────────────────────────────────
export const churchPortalFeatures = [
  {
    icon: "📊",
    title: "The Grove Dashboard",
    body: "A real-time view of your congregation's discipleship activity. Active learners, lessons this week, peer guides, nations reached, and who needs a check-in. Not attendance numbers — discipleship. The thing Jesus commanded.",
  },
  {
    icon: "🌳",
    title: "The Grove Visualization",
    body: "Every member of your congregation is a tree. You see the entire grove — seeds, sprouts, young trees, fruitful trees, forest builders. The spiritual state of your people. Visible. Real.",
  },
  {
    icon: "👥",
    title: "Cohort Management",
    body: "Organize your congregation into cohorts — groups going through the same module together with a shared timeline. Assign peer guides. Track progress. Support members who fall behind.",
  },
  {
    icon: "👤",
    title: "Member Profiles",
    body: "See each member's current module, peer guide status, fruits earned, and activity. Add private leadership notes. Never see their private reflections, assignment answers, or prayer journal. Privacy protected.",
  },
  {
    icon: "📢",
    title: "Announcements",
    body: "Post announcements visible to your congregation inside the app. Pin the important ones. Schedule future announcements. Your church notice board — inside P2P Global.",
  },
  {
    icon: "📷",
    title: "QR Invite Code",
    body: "A scannable QR code that brings your congregation straight into your church grove. Show it on screen Sunday morning. Print it in your bulletin. One scan — they join.",
  },
] as const;

// ─── ADDITIONAL FAQ ITEMS ─────────────────────────────────────
export const faqItemsAdditional = [
  {
    q: "What is a peer guide?",
    a: "A peer guide is a fellow believer who is one step ahead of you on the discipleship journey. Not a pastor or teacher — a further-along peer who walks alongside you through every lesson, reads your reflections, prays with you, and notices when you go quiet.",
  },
  {
    q: "What is the Living Tree?",
    a: "Your Living Tree is a real-time visualization of your discipleship journey inside the app. Your roots represent modules completed. Your trunk represents faithfulness over time. Your branches represent the people you are guiding. Your fruit represents milestones earned. Your grain represents the people you have invited who joined.",
  },
  {
    q: "What is a Seed, Sprout, or Fruitful Tree?",
    a: "These are the six growth stages of your Living Tree — from Seed (just joined) through Sprout, Young Tree, Fruitful Tree, and Forest Builder to Forest of Nations. Each stage reflects real progress in your discipleship journey and in guiding others.",
  },
  {
    q: "What is Grain?",
    a: "Grain is your harvest record. Every person who joins P2P Global through your personal invite link adds one Grain to your profile. Based on John 12:24 — a grain of wheat that falls into the earth and dies bears much fruit.",
  },
  {
    q: "What is the Blue Tick?",
    a: "The blue tick on a profile means that member has verified their real identity through our verification system — a selfie reviewed by our team within 72 hours. It confirms a real person is behind the account and builds trust in the network.",
  },
  {
    q: "What is Kingdom School?",
    a: "Kingdom School is the educational structure of P2P Global. The Foundation is 12 modules and 84 lessons — the complete discipleship journey from new believer to disciple-maker. The Electives are 144 plans across 10 categories for every season of life.",
  },
  {
    q: "What is The Completion Moment?",
    a: "When you complete all 12 Foundation modules — The Completion Moment fires. A cinematic experience. A letter from your peer guide. The Forest Reveal showing your full discipleship lineage. And the Commission: You are ready. Go find your person.",
  },
  {
    q: "What languages is P2P Global available in?",
    a: "The app is available in 20 or more languages with on-demand translation. Lessons translate automatically when you request them in your language and are cached permanently for every subsequent user who needs the same lesson.",
  },
  {
    q: "Is the Church Discipleship Portal really free?",
    a: "Yes. Completely. No subscription. No payment. No tier. Every church gets full access to everything — the grove dashboard, cohort management, member profiles, announcements, and the QR invite system. Free. Always.",
  },
  {
    q: "What is a Peer Circle?",
    a: "A Peer Circle is a group of 3 to 8 believers going through the same plan or module together. Group calls. Shared discussions. Consensus evaluation. Anyone can create or join a circle — and members can span any number of nations.",
  },
  {
    q: "Can I use P2P Global without a peer guide?",
    a: "Yes — you can start Module 1 on your own while the smart matching system finds you a guide. You can also find a peer guide by searching their @username directly if you already know who you want.",
  },
  {
    q: "What is the Generational Forest?",
    a: "The Generational Forest shows your full discipleship lineage — your tree at the center, your mentees surrounding you, their mentees further out. A world map shows which nations your discipleship chain has reached. It is the most distinctive visualization in P2P Global.",
  },
] as const;
