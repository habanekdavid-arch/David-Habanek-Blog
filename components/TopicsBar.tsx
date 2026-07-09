"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useCategoryFilter } from "@/lib/CategoryFilterContext";
import { ALL_CATEGORIES } from "@/lib/content";

export default function TopicsBar() {
  const { lang } = useLanguage();
  const { isSelected, toggle } = useCategoryFilter();

  return (
    <section id="topics" style={{ maxWidth: 1180, margin: "0 auto", padding: "46px 28px 12px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {ALL_CATEGORIES.map((c, i) => {
          const active = isSelected(c.sk);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(c.sk)}
              aria-pressed={active}
              style={{
                fontFamily: "inherit",
                fontSize: 13.5,
                fontWeight: 600,
                padding: "9px 16px",
                margin: 0,
                borderRadius: 999,
                border: `1px solid ${active ? "#1F8A5B" : "rgba(20,18,15,.14)"}`,
                background: active ? "#1F8A5B" : "#fff",
                color: active ? "#fff" : "#16140F",
                cursor: "pointer",
                transition: "background .15s ease, color .15s ease, border-color .15s ease",
              }}
            >
              {c[lang]}
            </button>
          );
        })}
      </div>
    </section>
  );
}
