import NextAuth from "next-auth";
import BoxyHQ from "next-auth/providers/boxyhq-saml";

const samlLoginUrl = process.env.AUTH_BOXYHQ_SAML_ISSUER;

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const handler = NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } },
      issuer: samlLoginUrl,
      clientId: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
      clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    }),
  ],
});

export { handler as GET, handler as POST };
