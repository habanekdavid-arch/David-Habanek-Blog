import { notFound } from "next/navigation";
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
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Upraviť článok</h1>
      <ArticleForm
        initial={article}
        action={updateArticleAction.bind(null, article.id)}
        deleteAction={deleteArticleAction.bind(null, article.id, article.slug)}
      />
    </div>
  );
}
