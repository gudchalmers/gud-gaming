import NextAuth from "next-auth";
import BoxyHQ from "next-auth/providers/boxyhq-saml";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
      clientId: process.env.AUTH_BOXYHQ_SAML_ID,
      clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET,
      issuer: process.env.AUTH_BOXYHQ_SAML_ISSUER,
    }),
  ],
});
