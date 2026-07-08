"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { Article, fmtRating } from "@/lib/content";
import StarRow from "./StarRow";
import MapPlaceholder from "./MapPlaceholder";

export default function ArticleDetail({ article: a }: { article: Article }) {
  const { lang, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const facts = a.place
    ? [
        { label: t.addressLabel, value: a.address! },
        { label: t.hoursLabel, value: a.hours![lang] },
        { label: t.priceLabel, value: a.price! },
      ]
    : [
        { label: t.categoryLabel, value: a.cat[lang] },
        { label: t.readTimeLabel, value: a.meta[lang] },
      ];
  facts.push({ label: t.ratingLabel, value: fmtRating(a.rating) });

  return (
    <div style={{ minHeight: "100vh", background: "#FBFAF8" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          background: "rgba(251,250,248,.86)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(20,18,15,.08)",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "15px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <button onClick={() => router.back()} className="pill-btn ghost" style={{ fontSize: 14, padding: "9px 16px" }}>
            ← {t.backToBlog}
          </button>
          <Link href="/#top" style={{ fontFamily: "'Great Vibes',cursive", fontSize: 27, color: "#1F8A5B", lineHeight: 1 }}>
            David Habánek
          </Link>
        </div>
      </div>

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "44px 28px 90px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, padding: "5px 12px", borderRadius: 999, background: "#EDF4EF", color: "#1F8A5B", letterSpacing: ".02em" }}>
            {a.cat[lang]}
          </span>
          <span style={{ fontSize: 13, color: "#9B958A", fontWeight: 500 }}>{a.meta[lang]}</span>
        </div>
        <h1 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: "clamp(32px,4.6vw,52px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 18px" }}>
          {a.title[lang]}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 30, flexWrap: "wrap" }}>
          <StarRow rating={a.rating} size={19} gap={3} />
          <span style={{ fontSize: 14, fontWeight: 700, color: "#16140F" }}>{fmtRating(a.rating)}</span>
          {a.place && <span style={{ fontSize: 14, color: "#7A746A" }}>· {a.city}</span>}
        </div>

        <div
          style={{
            position: "relative",
            height: "clamp(220px,42vw,400px)",
            borderRadius: 22,
            overflow: "hidden",
            background: a.bg,
            display: "flex",
            alignItems: "flex-end",
            padding: 16,
            marginBottom: 36,
            border: "1px solid rgba(20,18,15,.06)",
          }}
        >
          {a.imageUrl ? (
            <Image src={a.imageUrl} alt={a.title[lang]} fill sizes="(max-width: 920px) 100vw, 920px" style={{ objectFit: "cover" }} />
          ) : (
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#8A857C", background: "rgba(255,255,255,.82)", padding: "4px 9px", borderRadius: 6, position: "relative" }}>
              {a.img}
            </span>
          )}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 44, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px", minWidth: 0 }}>
            <p style={{ fontFamily: "'Newsreader',serif", fontSize: 21, lineHeight: 1.5, color: "#33302A", margin: "0 0 24px" }}>{a.excerpt[lang]}</p>
            {a.body[lang].map((p, i) => (
              <p key={i} style={{ fontSize: 16.5, lineHeight: 1.72, color: "#413D36", margin: "0 0 20px" }}>
                {p}
              </p>
            ))}
          </div>
          <aside style={{ flex: "1 1 230px", maxWidth: 300, position: "sticky", top: 88 }}>
            <div style={{ background: "#fff", border: "1px solid rgba(20,18,15,.08)", borderRadius: 18, padding: 22, boxShadow: "0 12px 30px -22px rgba(20,18,15,.2)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#9B958A", marginBottom: 16 }}>
                {t.infoTitle}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {facts.map((f, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 11.5, color: "#9B958A", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".03em", marginBottom: 3 }}>
                      {f.label}
                    </div>
                    <div style={{ fontSize: 15, color: "#16140F", fontWeight: 500, lineHeight: 1.35 }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {a.place && (
          <div style={{ marginTop: 46 }}>
            <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 28, letterSpacing: "-.01em", margin: "0 0 16px" }}>{t.locationTitle}</h2>
            <MapPlaceholder title={a.title[lang]} address={a.address!} openMapsLabel={t.openMaps} mapPlaceholderLabel={t.mapPlaceholder} />
          </div>
        )}

        <div
          style={{
            marginTop: 52,
            paddingTop: 28,
            borderTop: "1px solid rgba(20,18,15,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <button onClick={() => router.back()} className="pill-btn ghost" style={{ fontSize: 14, padding: "11px 20px" }}>
            ← {t.backToBlog}
          </button>
          <Link href="/#contact" className="pill-btn dark" style={{ fontSize: 14, padding: "12px 22px" }}>
            {t.collabCta} →
          </Link>
        </div>
      </article>
    </div>
  );
}
