"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { COLLAB } from "@/lib/content";
import CollabCard from "./CollabCard";

export default function CollabSection() {
  const { lang, t } = useLanguage();

  function onContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget.elements as typeof e.currentTarget.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    const subject = encodeURIComponent((lang === "sk" ? "Spolupráca — " : "Collaboration — ") + (f.name.value || ""));
    const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
    window.location.href = `mailto:ahoj@davidhabanek.sk?subject=${subject}&body=${body}`;
  }

  return (
    <section id="collab" style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 28px 30px" }}>
      <div style={{ maxWidth: 640, marginBottom: 42 }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "#1F8A5B", marginBottom: 16 }}>
          {t.collabKicker}
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: "clamp(30px,3.8vw,46px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 16px" }}>
          {t.collabTitle}
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#6E6960", margin: 0 }}>{t.collabSub}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
        {COLLAB.map((m) => (
          <CollabCard key={m.no} item={m} lang={lang} />
        ))}
      </div>

      <div
        id="contact"
        style={{
          marginTop: 30,
          background: "#1F8A5B",
          borderRadius: 26,
          padding: "48px 44px",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          alignItems: "flex-start",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -40,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
          }}
        />
        <div style={{ flex: "1 1 300px", position: "relative", maxWidth: 360 }}>
          <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 500, fontSize: 32, color: "#fff", margin: "0 0 10px" }}>{t.ctTitle}</h3>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.85)", margin: "0 0 20px", lineHeight: 1.55 }}>{t.ctSub}</p>
          <a
            href="mailto:ahoj@davidhabanek.sk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              borderBottom: "1px solid rgba(255,255,255,.5)",
              paddingBottom: 2,
            }}
          >
            ahoj@davidhabanek.sk
          </a>
        </div>
        <form
          onSubmit={onContact}
          style={{ flex: "1 1 340px", position: "relative", display: "flex", flexDirection: "column", gap: 12, maxWidth: 440 }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              name="name"
              required
              placeholder={t.ctName}
              style={{ flex: "1 1 140px", border: "none", borderRadius: 14, padding: "14px 18px", fontFamily: "inherit", fontSize: 15, outline: "none" }}
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t.ctEmail}
              style={{ flex: "1 1 140px", border: "none", borderRadius: 14, padding: "14px 18px", fontFamily: "inherit", fontSize: 15, outline: "none" }}
            />
          </div>
          <textarea
            name="message"
            required
            rows={3}
            placeholder={t.ctMsg}
            style={{ border: "none", borderRadius: 14, padding: "14px 18px", fontFamily: "inherit", fontSize: 15, outline: "none", resize: "vertical" }}
          />
          <button type="submit" className="pill-btn dark-strong" style={{ padding: "14px 24px", fontSize: 15, alignSelf: "flex-start" }}>
            {t.ctBtn}
          </button>
        </form>
      </div>
    </section>
  );
}
