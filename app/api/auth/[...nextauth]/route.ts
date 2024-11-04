import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import BoxyHQ from "next-auth/providers/boxyhq-saml";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } },
      issuer: process.env.AUTH_BOXYHQ_SAML_ISSUER,
      clientId: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
      clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
