"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { CONTACT_EMAIL } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: "1px solid rgba(20,18,15,.08)", marginTop: 50 }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "46px 28px",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <span style={{ fontFamily: "'Great Vibes',cursive", fontWeight: 400, fontSize: 28, lineHeight: 1, color: "#1F8A5B" }}>
            David Habánek
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/#latest" style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
            {t.nav.blog}
          </Link>
          <Link href="/#about" style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
            {t.nav.about}
          </Link>
          <Link href="/#collab" style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
            {t.nav.collab}
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
            Email
          </a>
          <Link href="/#top" style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
            Instagram
          </Link>
        </div>
        <div style={{ fontSize: 13, color: "#9B958A" }}>© 2026 David Habánek · {t.rights}</div>
      </div>
    </footer>
  );
}
