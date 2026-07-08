"use client";

import { CollabItem, Lang } from "@/lib/content";
import { useTilt } from "@/lib/useTilt";

export default function CollabCard({ item, lang }: { item: CollabItem; lang: Lang }) {
  const { cardRef, layerRef } = useTilt();

  return (
    <div style={{ perspective: 1100 }}>
      <div
        ref={cardRef}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          background: "#fff",
          border: "1px solid rgba(20,18,15,.08)",
          borderRadius: 20,
          padding: "30px 26px",
          height: "100%",
          boxShadow: "0 12px 30px -20px rgba(20,18,15,.2)",
        }}
      >
        <div
          ref={layerRef}
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            background: "#EDF4EF",
            color: "#1F8A5B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Newsreader',serif",
            fontSize: 22,
            marginBottom: 20,
          }}
        >
          {item.no}
        </div>
        <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-.01em", margin: "0 0 10px" }}>{item.title[lang]}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#6E6960", margin: 0 }}>{item.text[lang]}</p>
      </div>
    </div>
  );
}
