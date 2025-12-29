import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Auth attempt:', { username: credentials?.username, hasPassword: !!credentials?.password });
        console.log('Expected:', { username: process.env.ADMIN_USERNAME, hasPassword: !!process.env.ADMIN_PASSWORD });

        if (credentials?.username === process.env.ADMIN_USERNAME &&
            credentials?.password === process.env.ADMIN_PASSWORD) {
          console.log('Authentication successful');
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin"
          };
        }
        console.log('Authentication failed');
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin/login"
  }
};