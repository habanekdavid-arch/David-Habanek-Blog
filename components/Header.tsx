"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const active = "#16140F";
  const activeC = "#fff";
  const idle = "transparent";
  const idleC = "#16140F";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(251,250,248,.82)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(20,18,15,.08)",
      }}
    >
      <nav
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/#top"
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}
        >
          <span
            style={{
              fontFamily: "'Great Vibes',cursive",
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1,
              color: "#1F8A5B",
              letterSpacing: ".01em",
            }}
          >
            David Habánek
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div style={{ display: "flex", gap: 26 }}>
            <Link
              href="/#latest"
              style={{ textDecoration: "none", color: "#16140F", fontSize: 14.5, fontWeight: 500, opacity: 0.78 }}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/#topics"
              style={{ textDecoration: "none", color: "#16140F", fontSize: 14.5, fontWeight: 500, opacity: 0.78 }}
            >
              {t.nav.topics}
            </Link>
            <Link
              href="/#about"
              style={{ textDecoration: "none", color: "#16140F", fontSize: 14.5, fontWeight: 500, opacity: 0.78 }}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#collab"
              style={{ textDecoration: "none", color: "#16140F", fontSize: 14.5, fontWeight: 500, opacity: 0.78 }}
            >
              {t.nav.collab}
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(20,18,15,.14)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setLang("sk")}
              style={{
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: 12.5,
                padding: "6px 11px",
                background: lang === "sk" ? active : idle,
                color: lang === "sk" ? activeC : idleC,
              }}
            >
              SK
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: 12.5,
                padding: "6px 11px",
                background: lang === "en" ? active : idle,
                color: lang === "en" ? activeC : idleC,
              }}
            >
              EN
            </button>
          </div>
          <Link
            href="/#collab"
            className="pill-btn dark"
            style={{ fontSize: 14, padding: "9px 17px" }}
          >
            {t.nav.cta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
