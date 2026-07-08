"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useTilt } from "@/lib/useTilt";

export default function About() {
  const { t } = useLanguage();
  const { cardRef, layerRef } = useTilt();

  return (
    <section id="about" style={{ background: "#16140F", color: "#FBFAF8", marginTop: 64 }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "80px 28px",
          display: "flex",
          flexWrap: "wrap",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div style={{ flex: "0 0 auto", width: 300, perspective: 1100, margin: "0 auto" }}>
          <div
            ref={cardRef}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              borderRadius: 22,
              overflow: "hidden",
              background: "repeating-linear-gradient(135deg,#23211B,#23211B 10px,#2B281F 10px,#2B281F 20px)",
              height: 360,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <span ref={layerRef} style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#7E776B", paddingBottom: 18 }}>
              foto · David
            </span>
          </div>
        </div>
        <div style={{ flex: "1 1 420px", maxWidth: 560 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "#5FC795", marginBottom: 18 }}>
            {t.aboutKicker}
          </div>
          <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: "clamp(30px,3.8vw,46px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 22px" }}>
            {t.aboutTitle}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(251,250,248,.78)", margin: "0 0 18px" }}>{t.aboutP1}</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(251,250,248,.78)", margin: "0 0 26px" }}>{t.aboutP2}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {t.roles.map((r: string) => (
              <span
                key={r}
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  padding: "8px 15px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.16)",
                  color: "rgba(251,250,248,.9)",
                }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
