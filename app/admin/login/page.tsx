import { signIn } from "@/lib/auth";

export default function AdminLoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#FBFAF8",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Great Vibes',cursive", fontSize: 40, color: "#1F8A5B", marginBottom: 8 }}>David Habánek</div>
        <p style={{ color: "#6E6960", marginBottom: 24 }}>Admin — prihlás sa cez Google účet, ktorý spravuje tento blog.</p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
        >
          <button
            type="submit"
            style={{
              border: "none",
              cursor: "pointer",
              borderRadius: 999,
              padding: "12px 24px",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 15,
              background: "#16140F",
              color: "#fff",
            }}
          >
            Prihlásiť sa cez Google
          </button>
        </form>
      </div>
    </div>
  );
}
