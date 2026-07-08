"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { FEATURED_ARTICLES } from "@/lib/content";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid() {
  const { lang, t } = useLanguage();

  return (
    <section id="latest" style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 28px 20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 30,
        }}
      >
        <div>
          <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.02em", margin: 0 }}>
            {t.latestTitle}
          </h2>
          <p style={{ fontSize: 16, color: "#7A746A", margin: "8px 0 0" }}>{t.latestSub}</p>
        </div>
        <a href="#collab" style={{ textDecoration: "none", fontSize: 14.5, fontWeight: 600, color: "#1F8A5B" }}>
          {t.viewAll} →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(322px,1fr))", gap: 26 }}>
        {FEATURED_ARTICLES.map((a) => (
          <ArticleCard key={a.slug} article={a} lang={lang} readLabel={t.read} />
        ))}
      </div>
    </section>
  );
}
