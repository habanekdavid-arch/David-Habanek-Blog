import ArticleForm from "@/components/admin/ArticleForm";
import { createArticleAction } from "@/app/admin/actions";

export default function NewArticlePage() {
  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Nový článok</h1>
      <ArticleForm action={createArticleAction} />
    </div>
  );
}
