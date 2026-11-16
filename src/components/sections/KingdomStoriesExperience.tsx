"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { NextArrow } from "@/components/ui/DirArrow";
import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import { featuredStory as story, storiesInApp } from "@/content/kingdomStoryPreviews";

type Tab = "introduction" | "chapter1";

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" strokeLinecap="round" />
      <rect x="3" y="14" width="4" height="7" rx="1.5" />
      <rect x="17" y="14" width="4" height="7" rx="1.5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/** Narration sample: native, accessible controls; never autoplays; loads only when played. */
function Listen({ label, src }: { label: string; src: string }) {
  return (
    <div className="rounded-2xl border border-emerald/25 bg-emerald/10 p-4">
      <p className="flex items-center gap-2 text-sm font-medium text-emerald">
        <HeadphonesIcon />
        {label}
      </p>
      {/* The full text is shown alongside, so the narration needs no separate captions. */}
      <audio controls preload="none" src={src} className="mt-3 w-full" aria-label={label} />
    </div>
  );
}

/**
 * Website preview of Kingdom Stories, mirroring the app: the featured story
 * with its real artwork and narration, the full Introduction and Chapter 1,
 * and every later chapter and story clearly continuing in the app.
 */
export default function KingdomStoriesExperience() {
  const t = useTranslations("KingdomStoriesExperience");
  const reduce = useHydratedReducedMotion();
  const [tab, setTab] = useState<Tab>("introduction");
  const [lockedChapter, setLockedChapter] = useState<number | null>(null);
  const ch = story.chapterOne;

  const fade = {
    initial: { opacity: 0, y: reduce ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: reduce ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] as const },
  };

  const openTab = (next: Tab) => {
    setLockedChapter(null);
    setTab(next);
    document.getElementById("story-reader")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="preview" className="bg-ink text-paper">
      {/* Featured story hero — the story's own artwork */}
      <div className="relative flex min-h-[78svh] items-end overflow-hidden">
        <Image
          src={story.images.hero}
          alt={t("heroAlt")}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "70% 50%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent rtl:bg-gradient-to-l" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-14 sm:pb-20">
          <p className="type-eyebrow text-sage">{t("eyebrow")}</p>
          <p className="type-eyebrow mt-6 text-gold">
            {t("topic", { n: story.topicNumber })} <span aria-hidden="true">&middot;</span> {story.category}
          </p>
          <h2 lang="en" dir="ltr" className="type-title mt-3 max-w-3xl">
            {story.title}
          </h2>
          <p lang="en" dir="ltr" className="type-scripture mt-5 max-w-2xl text-xl text-paper/85 sm:text-2xl">
            {story.subtitle}
          </p>
          <p className="mt-5 text-sm text-paper/60">
            {story.category} &middot; {t("chapterCount", { count: story.chapters.length })}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openTab("introduction")}
              className="rounded-full bg-emerald-bright px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
            >
              {t("readIntroduction")}
            </button>
            <button
              type="button"
              onClick={() => openTab("chapter1")}
              className="rounded-full border border-paper/45 px-7 py-3.5 text-sm tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              {t("readChapterOne")}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="type-lead max-w-2xl text-paper/75">{t("body")}</p>

        <div id="story-reader" className="mt-12 grid scroll-mt-24 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          {/* Cover + contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={story.images.cover} alt={t("coverAlt")} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-2 text-xs text-paper/50">{t("imageCredit", { credit: story.credit })}</p>

            <p className="type-eyebrow mt-8 text-sage">{t("contents")}</p>
            <ol className="mt-3 divide-y divide-paper/10 overflow-hidden rounded-2xl border border-paper/10">
              <li>
                <button
                  type="button"
                  onClick={() => openTab("introduction")}
                  aria-current={tab === "introduction" && lockedChapter === null ? "true" : undefined}
                  className={`flex w-full items-center gap-4 px-5 py-4 text-start transition-colors ${
                    tab === "introduction" && lockedChapter === null ? "bg-surface" : "hover:bg-forest"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="type-eyebrow block text-sage">{t("introduction")}</span>
                    <span className="mt-1 block text-xs text-emerald-bright">{t("onWebsite")}</span>
                  </span>
                </button>
              </li>
              {story.chapters.map((c, i) => {
                const open = i === 0;
                const active = open ? tab === "chapter1" && lockedChapter === null : lockedChapter === i;
                return (
                  <li key={c.title}>
                    <button
                      type="button"
                      onClick={() => (open ? openTab("chapter1") : setLockedChapter(i))}
                      aria-current={active ? "true" : undefined}
                      className={`flex w-full items-center gap-4 px-5 py-4 text-start transition-colors ${
                        active ? "bg-surface" : "hover:bg-forest"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="type-eyebrow block text-sage">{t("chapterLabel", { n: i + 1 })}</span>
                        <span lang="en" dir="ltr" className={`font-display mt-1 block text-lg leading-snug ${open ? "text-paper" : "text-paper/70"}`}>
                          {c.title}
                        </span>
                        <span className={`mt-1 flex items-center gap-1.5 text-xs ${open ? "text-emerald-bright" : "text-paper/50"}`}>
                          {!open && <LockIcon />}
                          {open ? t("onWebsite") : t("continueInApp")}
                        </span>
                      </span>
                      {!open && (
                        <span className="text-paper/40">
                          <LockIcon />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>

          {/* Reader */}
          <div className="min-w-0 rounded-2xl bg-paper text-ink">
            {lockedChapter === null && (
              <div role="tablist" aria-label={t("readerLabel")} className="flex gap-1 border-b border-ink/10 p-2">
                {(["introduction", "chapter1"] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={tab === key}
                    onClick={() => setTab(key)}
                    className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      tab === key ? "bg-ink text-paper" : "text-ink/60 hover:bg-paper-dim hover:text-ink"
                    }`}
                  >
                    {key === "introduction" ? t("introduction") : t("chapterLabel", { n: 1 })}
                  </button>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {lockedChapter !== null ? (
                <motion.div key={`locked-${lockedChapter}`} {...fade} className="p-8 sm:p-12">
                  <p className="type-eyebrow text-emerald">{t("chapterLabel", { n: lockedChapter + 1 })}</p>
                  <h3 lang="en" dir="ltr" className="type-section mt-4">
                    {story.chapters[lockedChapter].title}
                  </h3>
                  <p className="mt-3 inline-block rounded-full border border-emerald/40 px-4 py-1.5 text-sm text-emerald">
                    {story.chapters[lockedChapter].scripture}
                  </p>
                  <p className="mt-8 flex max-w-md items-start gap-2 leading-relaxed text-ink/70">
                    <LockIcon />
                    {t("lockedNote")}
                  </p>
                  <button
                    type="button"
                    onClick={() => openTab("chapter1")}
                    className="mt-8 rounded-full border border-ink/25 px-6 py-3 text-sm tracking-wide transition hover:border-ink"
                  >
                    {t("backToChapterOne")}
                  </button>
                </motion.div>
              ) : tab === "introduction" ? (
                <motion.article key="intro" role="tabpanel" {...fade} className="p-6 sm:p-10">
                  <p className="type-eyebrow text-emerald">{t("introduction")}</p>
                  <div className="mt-5">
                    <Listen label={t("listenIntroduction")} src={story.introduction.audio} />
                  </div>
                  <figure className="mt-6">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image src={story.images.overview} alt={t("overviewAlt")} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-2 text-xs text-ink/50">{t("imageCredit", { credit: story.credit })}</figcaption>
                  </figure>
                  <div lang="en" dir="ltr" className="mt-8">
                    <p className="text-sm text-ink/60">
                      <span className="font-medium text-ink/80">{t("centralTheme")}:</span> {story.introduction.centralTheme}
                    </p>
                    <p className="mt-2 text-sm text-ink/60">
                      <span className="font-medium text-ink/80">{t("primaryScripture")}:</span>{" "}
                      <span className="text-gold-deep">{story.introduction.primaryScripture}</span>
                    </p>
                    <div className="type-scripture mt-8 space-y-5 text-xl leading-relaxed text-ink/85 not-italic">
                      {story.introduction.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openTab("chapter1")}
                    className="mt-10 rounded-full bg-emerald-bright px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
                  >
                    {t("readChapterOne")} <NextArrow />
                  </button>
                </motion.article>
              ) : (
                <motion.article key="ch1" role="tabpanel" {...fade} className="p-6 sm:p-10">
                  <p className="type-eyebrow text-emerald">{t("chapterLabel", { n: 1 })}</p>
                  <h3 lang="en" dir="ltr" className="type-section mt-3">
                    {ch.title}
                  </h3>
                  <p className="mt-4 inline-block rounded-full border border-emerald/40 px-4 py-1.5 text-sm text-emerald">{ch.scripture}</p>
                  <div className="mt-6">
                    <Listen label={t("listenChapter")} src={ch.audio} />
                  </div>

                  <div lang="en" dir="ltr">
                    <div className="type-scripture mt-8 space-y-5 text-xl leading-relaxed text-ink/85 not-italic">
                      {ch.narrative.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-12 border-t border-ink/10 pt-10">
                      <h4 className="type-card">{t("reflection")}</h4>
                      <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
                        {ch.reflection.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="type-card">{t("lessons")}</h4>
                      <ol className="mt-6 space-y-6">
                        {ch.lessons.map((l, i) => (
                          <li key={l.title} className="flex gap-5">
                            <span className="font-display w-5 shrink-0 text-lg text-emerald">{i + 1}</span>
                            <p className="text-lg leading-relaxed text-ink/80">
                              <span className="font-semibold text-ink">{l.title}</span> {l.text}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-12">
                      <h4 className="type-card">{t("reflectionQuestions")}</h4>
                      <p dir="auto" className="mt-3 flex items-start gap-2 text-sm text-ink/55">
                        <LockIcon />
                        {t("reflectionPrivate")}
                      </p>
                      <ol className="mt-6 space-y-4">
                        {ch.reflectionQuestions.map((q, i) => (
                          <li key={q} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-sm font-medium text-emerald">
                              {i + 1}
                            </span>
                            <p className="pt-1 text-lg leading-relaxed text-ink/85">{q}</p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-12">
                      <h4 className="type-card">{t("comprehensiveCheck")}</h4>
                      <p dir="auto" className="mt-3 text-sm leading-relaxed text-ink/55">
                        {t("comprehensiveCheckNote")}
                      </p>
                      <ol className="mt-6 space-y-4">
                        {ch.comprehensiveCheck.map((q, i) => (
                          <li key={q} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-sm font-medium text-emerald">
                              {i + 1}
                            </span>
                            <p className="pt-1 text-lg leading-relaxed text-ink/85">{q}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-12 rounded-2xl bg-ink p-6 text-paper sm:p-8">
                    <p className="type-eyebrow text-sage">{t("upNext", { n: 2 })}</p>
                    <p lang="en" dir="ltr" className="font-display mt-2 text-2xl">
                      {story.chapters[1].title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-paper/70">
                      {t("continuesNote", { remaining: story.chapters.length - 1 })}
                    </p>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* More stories — in the app */}
        <div className="mt-24">
          <p className="type-eyebrow text-sage">{t("moreEyebrow")}</p>
          <h3 className="type-section mt-3">{t("moreHeading")}</h3>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {storiesInApp.map((s) => (
              <div key={s.key} className="flex flex-col rounded-2xl border border-paper/10 bg-forest p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="type-eyebrow text-gold">{s.category}</p>
                  <span className="flex items-center gap-1.5 rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/65">
                    <LockIcon />
                    {t("inAppBadge")}
                  </span>
                </div>
                <h4 lang="en" dir="ltr" className="type-card mt-4">
                  {s.title}
                </h4>
                <p lang="en" dir="ltr" className="mt-3 leading-relaxed text-paper/70">
                  {s.subtitle}
                </p>
                <p className="mt-auto pt-6 text-sm text-paper/50">
                  {t("chapterCount", { count: s.chapterCount })} &middot; {s.primaryScripture}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing invitation */}
        <div className="mt-20 border-t border-paper/10 pt-16 text-center">
          <p className="type-scripture mx-auto max-w-3xl text-2xl text-paper sm:text-3xl">{t("closing")}</p>
          <Link
            href="/join"
            className="mt-10 inline-block rounded-full bg-emerald-bright px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald"
          >
            {t("cta")} <NextArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
