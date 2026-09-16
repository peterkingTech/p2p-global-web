import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/motion/Reveal";
import { kingdomStoryCategories } from "@/content/copy";

export function generateStaticParams() {
  return kingdomStoryCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/kingdom-stories/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const category = kingdomStoryCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.body,
  };
}

export default async function KingdomStoryPage(props: PageProps<"/kingdom-stories/[slug]">) {
  const { slug } = await props.params;
  const category = kingdomStoryCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <PageHero eyebrow="Kingdom Stories" title={category.title} subtitle={category.body} />

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
            {category.article.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-14 border-t border-ink/10 pt-8">
            <Link href="/kingdom-stories" className="text-sm tracking-wide text-water hover:text-ink">
              ← Back to Kingdom Stories
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
