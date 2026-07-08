import Link from "next/link";
import { signOut } from "@/lib/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FBFAF8", fontFamily: "system-ui, sans-serif", color: "#16140F" }}>
      <header style={{ borderBottom: "1px solid rgba(20,18,15,.1)", background: "#fff" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/admin" style={{ textDecoration: "none", color: "#16140F", fontWeight: 700, fontSize: 16 }}>
            David Habánek — CMS
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ textDecoration: "none", color: "#6E6960", fontSize: 14 }}>
              Zobraziť web ↗
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/admin/login" });
              }}
            >
              <button
                type="submit"
                style={{
                  border: "1px solid rgba(20,18,15,.16)",
                  background: "#fff",
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "7px 14px",
                  fontFamily: "inherit",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                Odhlásiť sa
              </button>
            </form>
          </div>
        </div>
      </header>
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px 80px" }}>{children}</main>
    </div>
  );
}
