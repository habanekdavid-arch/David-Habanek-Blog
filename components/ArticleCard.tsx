"use client";

import Link from "next/link";
import Image from "next/image";
import { Article, fmtRating } from "@/lib/content";
import { Lang } from "@/lib/content";
import { useTilt } from "@/lib/useTilt";
import StarRow from "./StarRow";

export default function ArticleCard({ article, lang, readLabel }: { article: Article; lang: Lang; readLabel: string }) {
  const { cardRef, layerRef } = useTilt<HTMLAnchorElement>();

  return (
    <article style={{ perspective: 1100 }}>
      <Link
        href={`/blog/${article.slug}`}
        ref={cardRef}
        style={{
          display: "block",
          transformStyle: "preserve-3d",
          willChange: "transform",
          background: "#fff",
          border: "1px solid rgba(20,18,15,.07)",
          borderRadius: 20,
          padding: 14,
          boxShadow: "0 12px 30px -18px rgba(20,18,15,.18)",
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          ref={layerRef}
          style={{
            position: "relative",
            height: 194,
            borderRadius: 13,
            overflow: "hidden",
            background: article.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {article.imageUrl ? (
            <Image src={article.imageUrl} alt={article.title[lang]} fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectFit: "cover" }} />
          ) : (
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#9B958A" }}>{article.img}</span>
          )}
          <span
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              fontSize: 11,
              fontWeight: 700,
              padding: "5px 11px",
              borderRadius: 999,
              background: "rgba(255,255,255,.92)",
              color: "#16140F",
              letterSpacing: ".02em",
            }}
          >
            {article.cat[lang]}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 23, lineHeight: 1.18, letterSpacing: "-.01em", margin: "16px 6px 8px" }}>
          {article.title[lang]}
        </h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#6E6960", margin: "0 6px 12px" }}>{article.excerpt[lang]}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 6px 12px" }}>
          <StarRow rating={article.rating} />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "#7A746A" }}>{fmtRating(article.rating)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 6px 4px" }}>
          <span style={{ fontSize: 12.5, color: "#9B958A", fontWeight: 500 }}>{article.meta[lang]}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1F8A5B" }}>{readLabel} →</span>
        </div>
      </Link>
    </article>
  );
}
