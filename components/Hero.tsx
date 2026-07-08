"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTilt } from "@/lib/useTilt";

export default function Hero() {
  const { t } = useLanguage();
  const { cardRef: cardRefA, layerRef: layerRefA } = useTilt();
  const { cardRef: cardRefB, layerRef: layerRefB } = useTilt();
  const { cardRef: cardRefC, layerRef: layerRefC } = useTilt();

  return (
    <section
      id="top"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "64px 28px 40px",
        display: "flex",
        flexWrap: "wrap",
        gap: 48,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: "1 1 420px", maxWidth: 560, animation: "riseIn .7s ease both" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "#1F8A5B",
            marginBottom: 22,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F8A5B", display: "inline-block" }} />
          {t.eyebrow}
        </div>
        <h1
          style={{
            fontFamily: "'Newsreader',serif",
            fontWeight: 500,
            fontSize: "clamp(40px,5.4vw,68px)",
            lineHeight: 1.02,
            letterSpacing: "-.02em",
            margin: "0 0 24px",
          }}
        >
          {t.h1a} <em style={{ fontStyle: "italic", color: "#1F8A5B" }}>{t.h1em}</em> {t.h1b}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#56514A", maxWidth: 480, margin: "0 0 32px" }}>
          {t.heroText}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 13 }}>
          <Link href="/#latest" className="pill-btn green" style={{ fontSize: 15, padding: "14px 26px" }}>
            {t.ctaRead} →
          </Link>
          <Link href="/#collab" className="pill-btn outline" style={{ fontSize: 15, padding: "14px 26px" }}>
            {t.ctaCollab}
          </Link>
        </div>
        <div style={{ display: "flex", gap: 34, marginTop: 42 }}>
          <div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 500 }}>40+</div>
            <div style={{ fontSize: 13, color: "#7A746A", marginTop: 2 }}>{t.stat1}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 500 }}>9</div>
            <div style={{ fontSize: 13, color: "#7A746A", marginTop: 2 }}>{t.stat2}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 500 }}>22</div>
            <div style={{ fontSize: 13, color: "#7A746A", marginTop: 2 }}>{t.stat3}</div>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: "0 0 auto",
          width: 472,
          height: 540,
          position: "relative",
          perspective: 1400,
          animation: "riseIn .9s ease both",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 46,
            top: 36,
            width: 360,
            height: 452,
            background: "#1F8A5B",
            borderRadius: 30,
            zIndex: 1,
            boxShadow: "0 40px 80px -30px rgba(31,138,91,.55)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(120% 90% at 20% 0%,rgba(255,255,255,.16),transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 28,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.82)",
            }}
          >
            {t.panelKicker}
          </div>
          <div
            style={{
              position: "absolute",
              left: 26,
              right: 24,
              bottom: 78,
              fontFamily: "'Great Vibes',cursive",
              fontWeight: 400,
              fontSize: 62,
              lineHeight: 0.95,
              color: "#fff",
            }}
          >
            David
            <br />
            Habánek
          </div>
          <div
            style={{
              position: "absolute",
              left: 28,
              bottom: 34,
              fontSize: 14,
              color: "rgba(255,255,255,.9)",
              maxWidth: 230,
              lineHeight: 1.4,
            }}
          >
            {t.panelSub}
          </div>
        </div>

        {/* card A: small dish */}
        <div style={{ position: "absolute", left: -6, top: 96, width: 206, zIndex: 3, animation: "floatA 6.5s ease-in-out infinite" }}>
          <div
            ref={cardRefA}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              background: "#fff",
              borderRadius: 18,
              padding: 12,
              boxShadow: "0 24px 50px -18px rgba(20,18,15,.30)",
              border: "1px solid rgba(20,18,15,.05)",
            }}
          >
            <div
              ref={layerRefA}
              style={{
                height: 118,
                borderRadius: 11,
                background: "repeating-linear-gradient(135deg,#EDEAE4,#EDEAE4 9px,#F6F3ED 9px,#F6F3ED 18px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "ui-monospace,Menlo,monospace",
                fontSize: 10,
                color: "#9B958A",
              }}
            >
              foto · ramen
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#1F8A5B", margin: "11px 4px 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>
              {t.fcatA}
            </div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 16, lineHeight: 1.15, margin: "0 4px 6px" }}>{t.ftitA}</div>
          </div>
        </div>

        {/* card B: wide media */}
        <div style={{ position: "absolute", right: -34, top: 54, width: 300, zIndex: 4, animation: "floatB 7.4s ease-in-out infinite" }}>
          <div
            ref={cardRefB}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              background: "#fff",
              borderRadius: 18,
              padding: 12,
              boxShadow: "0 30px 60px -20px rgba(20,18,15,.34)",
              border: "1px solid rgba(20,18,15,.05)",
            }}
          >
            <div
              ref={layerRefB}
              style={{
                height: 150,
                borderRadius: 11,
                background: "repeating-linear-gradient(135deg,#E7EEE9,#E7EEE9 9px,#F2F6F3 9px,#F2F6F3 18px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "ui-monospace,Menlo,monospace",
                fontSize: 10,
                color: "#8FA89A",
              }}
            >
              foto · kaviareň
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#1F8A5B", margin: "11px 4px 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>
              {t.fcatB}
            </div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 18, lineHeight: 1.15, margin: "0 4px 6px" }}>{t.ftitB}</div>
          </div>
        </div>

        {/* card C: bottom video */}
        <div style={{ position: "absolute", left: 84, bottom: -12, width: 288, zIndex: 5, animation: "floatC 6.9s ease-in-out infinite" }}>
          <div
            ref={cardRefC}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              background: "#fff",
              borderRadius: 18,
              padding: 12,
              boxShadow: "0 34px 64px -20px rgba(20,18,15,.38)",
              border: "1px solid rgba(20,18,15,.05)",
            }}
          >
            <div
              ref={layerRefC}
              style={{
                position: "relative",
                height: 140,
                borderRadius: 11,
                background: "repeating-linear-gradient(135deg,#E9E6E0,#E9E6E0 9px,#F4F1EB 9px,#F4F1EB 18px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ position: "absolute", left: 12, bottom: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, color: "#9B958A" }}>
                video · 3D tlač
              </span>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(0,0,0,.18)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    borderLeft: "13px solid #1F8A5B",
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    marginLeft: 3,
                  }}
                />
              </span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#1F8A5B", margin: "11px 4px 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>
              {t.fcatC}
            </div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 17, lineHeight: 1.15, margin: "0 4px 6px" }}>{t.ftitC}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
