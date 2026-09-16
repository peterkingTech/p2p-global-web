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
