import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        passbookNo: { label: "Passbook Number", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.password) {
          return null;
        }

        // Admin login by username
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (
          credentials.username === adminUsername &&
          credentials.password === adminPassword
        ) {
          return {
            id: "administrator",
            name: "Administrator",
            email: "administrator@sjmpc.com",
            role: "administrator"
          };
        }

        // Branch user login by username
        if (credentials.username) {
          try {
            const branchUser = await prisma.branchUser.findUnique({
              where: { username: credentials.username }
            });
            if (branchUser && await bcrypt.compare(credentials.password, branchUser.password)) {
              return {
                id: branchUser.id,
                name: branchUser.username,
                email: null,
                role: branchUser.role,
                branch: branchUser.branch
              };
            }
          } catch (error) {
            console.error("Database error during branch authentication:", error);
          }
        }

        // Regular user login by passbookNo
        if (credentials.passbookNo) {
          try {
            const user = await prisma.user.findUnique({
              where: { passbookNo: credentials.passbookNo }
            });
            if (user && await bcrypt.compare(credentials.password, user.password)) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                branch: user.role === 'branch' ? (user as any).branch || null : null
              };
            }
          } catch (error) {
            console.error("Database error during authentication:", error);
          }
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  // pages: {
  //   signIn: "/administrator/login"
  // },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
        if (user.role === 'branch') {
          token.branch = user.branch;
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        // NextAuth typing/runtime safety: session.user can be undefined
        session.user = session.user ?? { name: session.user?.name ?? null, email: session.user?.email ?? null };
        session.user.role = token.role;
        if (token.role === 'branch') {
          session.user.branch = token.branch;
        }
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
