import Link from "next/link";
import { listArticlesForAdmin } from "@/lib/db/articles";

export const dynamic = "force-dynamic";

export default async function AdminArticlesPage() {
  const articles = await listArticlesForAdmin();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Články</h1>
        <Link
          href="/admin/new"
          style={{
            textDecoration: "none",
            background: "#1F8A5B",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            padding: "10px 18px",
            borderRadius: 999,
          }}
        >
          + Nový článok
        </Link>
      </div>

      {articles.length === 0 ? (
        <p style={{ color: "#6E6960" }}>Zatiaľ žiadne články. Vytvor prvý.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/admin/${a.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
                border: "1px solid rgba(20,18,15,.1)",
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{a.titleSk}</div>
                <div style={{ fontSize: 13, color: "#6E6960", marginTop: 2 }}>
                  {a.catSk} · /blog/{a.slug} {a.place ? "· miesto" : ""}
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#9B958A" }}>{a.featuredOrder !== null ? `#${a.featuredOrder}` : "—"}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
