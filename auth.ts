import NextAuth from "next-auth";
import BoxyHQ from "next-auth/providers/boxyhq-saml";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    BoxyHQ({
      issuer: process.env.AUTH_BOXYHQ_SAML_ISSUER,
      clientId: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
      clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    }),
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID || "dummy",
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
    })
  ],
});
