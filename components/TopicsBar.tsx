"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { CATEGORIES, HIGHLIGHT_CATEGORY } from "@/lib/content";

export default function TopicsBar() {
  const { lang } = useLanguage();
  const cats = [HIGHLIGHT_CATEGORY, ...CATEGORIES].map((c, i) => ({
    label: c[lang],
    bg: i === 0 ? "#1F8A5B" : "#fff",
    color: i === 0 ? "#fff" : "#16140F",
    border: i === 0 ? "#1F8A5B" : "rgba(20,18,15,.14)",
  }));

  return (
    <section id="topics" style={{ maxWidth: 1180, margin: "0 auto", padding: "46px 28px 12px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {cats.map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              padding: "9px 16px",
              borderRadius: 999,
              border: `1px solid ${c.border}`,
              background: c.bg,
              color: c.color,
              cursor: "default",
            }}
          >
            {c.label}
          </span>
        ))}
      </div>
    </section>
  );
}
