import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleForm from "@/components/admin/ArticleForm";
import { getArticleForAdmin } from "@/lib/db/articles";
import { updateArticleAction, deleteArticleAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleForAdmin(Number(id));
  if (!article) notFound();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Upraviť článok</h1>
        <Link href={`/blog/${article.slug}`} target="_blank" style={{ fontSize: 14, fontWeight: 600, color: "#1F8A5B", textDecoration: "none" }}>
          Zobraziť na blogu ↗
        </Link>
      </div>
      <ArticleForm
        initial={article}
        action={updateArticleAction.bind(null, article.id)}
        deleteAction={deleteArticleAction.bind(null, article.id, article.slug)}
      />
    </div>
  );
}
