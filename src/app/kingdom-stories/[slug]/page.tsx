import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/motion/Reveal";
import { BackArrow } from "@/components/ui/DirArrow";
import { kingdomStoryCategories } from "@/content/copy";

export function generateStaticParams() {
  return kingdomStoryCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/kingdom-stories/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const category = kingdomStoryCategories.find((c) => c.slug === slug);
  if (!category) return {};
  const t = await getTranslations("KingdomStoryCategories");
  return {
    title: t(`${category.slug}.title`),
    description: t(`${category.slug}.body`),
  };
}

export default async function KingdomStoryPage(props: PageProps<"/kingdom-stories/[slug]">) {
  const { slug } = await props.params;
  const category = kingdomStoryCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const t = await getTranslations("KingdomStoryCategories");
  const tPage = await getTranslations("KingdomStorySlugPage");
  const tStoriesPage = await getTranslations("KingdomStoriesPage");
  const article = t.raw(`${category.slug}.article`) as string[];

  return (
    <>
      <PageHero eyebrow={tStoriesPage("heroEyebrow")} title={t(`${category.slug}.title`)} subtitle={t(`${category.slug}.body`)} />

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
            {article.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-14 border-t border-ink/10 pt-8">
            <Link href="/kingdom-stories" className="text-sm tracking-wide text-water hover:text-ink">
              <BackArrow /> {tPage("backToStories")}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
