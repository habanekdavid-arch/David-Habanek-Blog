import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { CONTACT_EMAIL } from "@/lib/content";

export const ADMIN_EMAIL = CONTACT_EMAIL;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn({ user }) {
      return user.email === ADMIN_EMAIL;
    },
    authorized({ auth, request }) {
      const path = request.nextUrl.pathname;
      const isProtected = path.startsWith("/admin") && path !== "/admin/login";
      if (!isProtected) return true;
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});
