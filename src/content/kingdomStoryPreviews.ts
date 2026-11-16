// Kingdom Stories shown on the website. Text is copied verbatim from the
// P2P Global app (supplied by the P2P editor); artwork and narration are
// P2P Global | Creative Studios assets supplied for website use.
//
// The website publishes the Introduction and Chapter 1 of the featured story
// only. Every other chapter, and every other story, is listed as continuing
// in the app — titles and Scripture references only, never their text.

export type StoryChapter = {
  title: string;
  scripture: string;
};

export type KingdomStoryFeature = {
  topicNumber: string;
  category: string;
  title: string;
  subtitle: string;
  images: { cover: string; hero: string; overview: string };
  credit: string;
  introduction: {
    centralTheme: string;
    primaryScripture: string;
    paragraphs: string[];
    audio: string;
  };
  chapters: StoryChapter[];
  /** The one chapter published on the website, in full. */
  chapterOne: {
    title: string;
    scripture: string;
    audio: string;
    narrative: string[];
    reflection: string[];
    lessons: { title: string; text: string }[];
    reflectionQuestions: string[];
    comprehensiveCheck: string[];
  };
};

export type KingdomStoryInApp = {
  key: string;
  category: string;
  title: string;
  subtitle: string;
  primaryScripture: string;
  chapterCount: number;
};

export const featuredStory: KingdomStoryFeature = {
  topicNumber: "001",
  category: "Biblical History",
  title: "Creation: The Beginning of Everything",
  subtitle: "God is the Creator of all things. His creation reveals His power, wisdom, order, goodness, and purpose.",
  images: {
    cover: "/media/stories/creation/creation-cover.jpg",
    hero: "/media/stories/creation/creation-hero.jpg",
    overview: "/media/stories/creation/creation-overview.jpg",
  },
  credit: "P2P Global | Creative Studios",
  introduction: {
    centralTheme: "God is the Creator of all things. His creation reveals His power, wisdom, order, goodness, and purpose.",
    primaryScripture: "Genesis 1:1–2:3",
    paragraphs: [
      "Before the first sunrise, before the oceans stretched across the earth, before the stars illuminated the night sky, and before humanity took its first breath, there was God.",
      "There were no cities, no mountains covered in forests, no birds singing in the trees, and no waves breaking upon the shore. The world as we know it did not yet exist.",
      "Then, at the beginning of everything, God acted.",
      "The opening of the Bible takes us to the foundation of existence itself. In six days, God brings order out of what is described as formless and empty. He commands light to shine, separates the waters, gathers the seas, brings forth vegetation, places lights in the heavens, fills the waters and skies with living creatures, and creates animals upon the land.",
      "Then comes the most extraordinary moment of creation: God makes humanity in His own image, giving human beings a unique place and responsibility within His creation.",
      "At the end of His work, God looks upon everything He has made and declares it very good. On the seventh day, He rests from His work of creation and blesses the day.",
      "This is the story of the beginning—not merely of the world, but of the foundations upon which the biblical story unfolds. It introduces us to the God who creates, brings order, gives life, establishes purpose, and declares His creation good.",
      "Through these six chapters, we will journey through the creation account, exploring what happened at each stage and discovering the lessons, reflections, and truths that the beginning of everything offers us today.",
    ],
    audio: "/media/stories/creation/creation-introduction.mp3",
  },
  chapters: [
    { title: "Before Everything: In the Beginning", scripture: "Genesis 1:1–2" },
    { title: "Light, Sky, Land, and Seas", scripture: "Genesis 1:3–13" },
    { title: "The Sun, Moon, Stars, and Seasons", scripture: "Genesis 1:14–19" },
    { title: "The Living World", scripture: "Genesis 1:20–25" },
    { title: "Humanity in the Image of God", scripture: "Genesis 1:26–31" },
    { title: "The Seventh Day: Creation and Rest", scripture: "Genesis 2:1–3" },
  ],
  chapterOne: {
    title: "Before Everything: In the Beginning",
    scripture: "Genesis 1:1–2",
    audio: "/media/stories/creation/creation-chapter-1.mp3",
    narrative: [
      "In the beginning, there was no world as humanity would come to know it. There were no towering mountains, no flowing rivers, no green fields, and no distant stars scattered across the heavens. The familiar sights and sounds of life had not yet appeared.",
      "But God was there.",
      "The Bible opens with a declaration that establishes the foundation of everything that follows: in the beginning, God created the heavens and the earth.",
      "The story does not begin by introducing a human king, a powerful nation, or an ancient city. It begins with God Himself. Before the world existed, God was already present, and the existence of everything that would follow began with His creative work.",
      "The earth was formless and empty. Darkness covered the deep, and the Spirit of God was hovering over the waters.",
      "The scene was unlike the world we know today. There were no gardens filled with trees, no animals moving through the wilderness, and no human voices rising in conversation. The ordered world described in the chapters that follow had not yet taken shape.",
      "Yet the account does not present darkness and emptiness as the end of the story. God’s presence is already there.",
      "The Spirit of God hovers over the waters as the creation account moves toward the first great command that will transform the scene. The earth is about to become a place of light, order, life, and beauty.",
      "Everything begins with God.",
      "The heavens and the earth are not presented as creations of human hands. They are the work of the Creator. Every mountain, every ocean, every living creature, and every human being belongs within the story that begins here.",
      "Before humanity could search for God, before people could build places of worship, and before anyone could speak a prayer, God was already the One who existed before the created world.",
      "The first two verses of the Bible therefore establish a truth that will shape the entire biblical story: God is the Creator, and all that follows begins with Him.",
      "The world is about to emerge from its formless and empty condition. The darkness will give way to light, the waters will be separated, the dry land will appear, and life will fill the earth.",
      "But before the light, before the land, and before life, there is the beginning—and at the beginning, there is God.",
    ],
    reflection: [
      "Take a moment to consider the beginning of the creation story.",
      "The Bible does not begin with humanity’s achievements, discoveries, or questions. It begins with God.",
      "This invites us to consider the foundations of our own lives. What do we build our understanding of life upon? Do we recognize that our existence is part of something greater than our individual plans and accomplishments?",
      "The description of the earth as formless and empty also reminds us that the opening stage of a story does not always reveal its final outcome. The creation account moves from this initial description toward an ordered world filled with life.",
      "The passage encourages us to look beyond what we can immediately see and consider the importance of God’s place in the biblical story.",
    ],
    lessons: [
      {
        title: "God Is the Source of Creation.",
        text: "The biblical account begins with God as the Creator of the heavens and the earth. Everything in the creation story depends upon His creative work. This reminds us that the world is not presented as the result of human effort but as the work of God.",
      },
      {
        title: "God Existed Before the Created World.",
        text: "The story begins with God rather than with the universe or humanity. It presents Him as the One who initiates creation. Everything that comes into existence within the creation account owes its beginning to Him.",
      },
      {
        title: "Emptiness Does Not Mean the End of the Story.",
        text: "The earth is described as formless and empty, yet the creation account continues toward order, beauty, and life. The opening condition is not the final condition. God continues His creative work until the world becomes an ordered place filled with life.",
      },
      {
        title: "God’s Presence Is Not Limited to Places That Look Complete.",
        text: "The Spirit of God is described as hovering over the waters before the ordered world takes shape. The passage directs our attention to God’s presence at the very beginning, before the creation account describes the world as fully formed.",
      },
      {
        title: "Every Great Story Has a Foundation.",
        text: "The creation account establishes who God is in relation to the world. Understanding this foundation helps us understand the rest of the biblical narrative, including humanity’s place in creation and the relationship between God and His creation.",
      },
    ],
    reflectionQuestions: [
      "What does it mean to you that God is the Creator of everything?",
      "How does beginning the Bible with God influence the way you understand the rest of Scripture?",
      "When something in your life feels unfinished or uncertain, how does this opening passage challenge your perspective?",
      "What can you learn from the fact that the creation account begins with God rather than with humanity?",
      "How might recognizing God as the source of creation influence the way you approach your daily life?",
    ],
    comprehensiveCheck: [
      "What words open the biblical creation account, and what do they tell us about the beginning of the world?",
      "According to Genesis 1:1–2, what did God create, how was the earth described, and what was the Spirit of God doing?",
      "Why is it significant that the Bible begins with God rather than with humanity?",
      "How does the description of the earth as formless and empty prepare us for the events that follow?",
      "What is the most important truth you have learned from this chapter, and how can you apply it to your life?",
    ],
  },
};

/** Further stories, shown as continuing in the app (no text published here). */
export const storiesInApp: KingdomStoryInApp[] = [
  {
    key: "joseph",
    category: "Biblical History",
    title: "Joseph: From the Pit to the Palace",
    subtitle: "God can remain faithful through betrayal, injustice, long waiting, and unexpected change.",
    primaryScripture: "Genesis 37–50",
    chapterCount: 7,
  },
  {
    key: "jonah",
    category: "Biblical History",
    title: "Jonah: The Prophet Who Ran from God",
    subtitle:
      "God’s mercy reaches beyond the people we expect—or believe deserve it. Jonah’s story confronts disobedience, prejudice, repentance, compassion and the difference between knowing God’s message and sharing God’s heart.",
    primaryScripture: "Jonah 1–4",
    chapterCount: 5,
  },
];
