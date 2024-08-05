import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { Adapter } from "next-auth/adapters";

import prisma from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    //we added role feild explicitly to the user model to acess it in the session in client side we need to pass it to the session only then we will be able to access it in the client side
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  providers: [Google, GitHub],
});
