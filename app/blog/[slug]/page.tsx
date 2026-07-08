import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, getArticle } from "@/lib/content";
import ArticleDetail from "@/components/ArticleDetail";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title.sk} — David Habánek`,
    description: article.excerpt.sk,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <ArticleDetail article={article} />;
}
