import { mapsUrl } from "@/lib/content";

export default function MapPlaceholder({
  title,
  address,
  openMapsLabel,
  mapPlaceholderLabel,
}: {
  title: string;
  address: string;
  openMapsLabel: string;
  mapPlaceholderLabel: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: 340,
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(20,18,15,.08)",
        background:
          "repeating-linear-gradient(0deg, transparent 0 48px, rgba(255,255,255,.92) 48px 54px), repeating-linear-gradient(90deg, transparent 0 66px, rgba(255,255,255,.92) 66px 72px), #E7ECE6",
      }}
    >
      <div style={{ position: "absolute", left: "8%", top: "15%", width: "26%", height: "34%", borderRadius: 16, background: "#D6E7CE" }} />
      <div
        style={{
          position: "absolute",
          right: "-4%",
          bottom: "-6%",
          width: "44%",
          height: "42%",
          transform: "rotate(-8deg)",
          background: "#CFE0E9",
          borderRadius: 22,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "62%",
          width: "130%",
          height: 15,
          background: "#fff",
          transform: "rotate(-6deg)",
          boxShadow: "0 0 0 1px rgba(20,18,15,.04)",
        }}
      />
      <div style={{ position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-100%)" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -4,
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "rgba(31,138,91,.35)",
            animation: "pinPulse 2.4s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "relative",
            width: 34,
            height: 34,
            borderRadius: "50% 50% 50% 0",
            background: "#1F8A5B",
            transform: "rotate(-45deg)",
            boxShadow: "0 10px 20px -5px rgba(31,138,91,.6)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          background: "rgba(255,255,255,.95)",
          backdropFilter: "blur(6px)",
          borderRadius: 14,
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          boxShadow: "0 12px 30px -14px rgba(20,18,15,.35)",
        }}
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#16140F" }}>{title}</div>
          <div style={{ fontSize: 13.5, color: "#6E6960", marginTop: 2 }}>{address}</div>
        </div>
        <a
          href={mapsUrl(address)}
          target="_blank"
          rel="noopener"
          className="pill-btn green"
          style={{ fontSize: 13.5, padding: "10px 16px", whiteSpace: "nowrap" }}
        >
          {openMapsLabel} →
        </a>
      </div>
      <span
        style={{
          position: "absolute",
          left: 14,
          top: 14,
          fontFamily: "ui-monospace,Menlo,monospace",
          fontSize: 10,
          color: "#7C8778",
          background: "rgba(255,255,255,.78)",
          padding: "3px 8px",
          borderRadius: 6,
        }}
      >
        {mapPlaceholderLabel}
      </span>
    </div>
  );
}
