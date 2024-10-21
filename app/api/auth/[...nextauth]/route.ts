// import { handlers } from "@/auth"; // Referring to the auth.ts we just created

// export const { GET, POST } = handlers;

import NextAuth, { NextAuthOptions } from "next-auth";
import BoxyHQSAMLProvider from "next-auth/providers/boxyhq-saml";

const samlLoginUrl = process.env.AUTH_BOXYHQ_SAML_ISSUER;

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    // OAuth flow
    BoxyHQSAMLProvider({
      authorization: { params: { scope: "" } },
      issuer: samlLoginUrl,
      clientId: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
      clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    }),
    // // Open Id connect flow
    // BoxyHQSAMLProvider({
    //   name: "BoxyHQ OIDC",
    //   id: "boxyhq-saml-oidc",
    //   issuer: samlLoginUrl,
    //   wellKnown: `${samlLoginUrl}/.well-known/openid-configuration`,
    //   authorization: { params: { scope: "openid email" } },
    //   clientId: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
    //   clientSecret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    // }),
    // CredentialsProvider({
    //   id: "boxyhq-idp",
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "IdP Login",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     code: {
    //       label:
    //         "Code: Go to https://mocksaml.com/saml/login to initiate SAML IdP login",
    //       type: "text",
    //       placeholder: "Enter code",
    //     },
    //   },
    //   async authorize(credentials) {
    //     const { code } = credentials || {};

    //     if (!code) {
    //       return null;
    //     }

    //     const res = await fetch(`${samlLoginUrl}/api/oauth/token`, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         grant_type: "authorization_code",
    //         client_id: process.env.AUTH_BOXYHQ_SAML_ID || "dummy",
    //         client_secret: process.env.AUTH_BOXYHQ_SAML_SECRET || "dummy",
    //         redirect_uri: process.env.NEXTAUTH_URL + "/games",
    //         code,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (res.status !== 200) {
    //       return null;
    //     }

    //     const json = await res.json();
    //     if (!json?.access_token) {
    //       return null;
    //     }

    //     const resUserInfo = await fetch(`${samlLoginUrl}/api/oauth/userinfo`, {
    //       headers: {
    //         Authorization: `Bearer ${json.access_token}`,
    //       },
    //     });

    //     if (resUserInfo.status !== 200) {
    //       return null;
    //     }
    //     const profile = await resUserInfo.json();

    //     console.log(profile);

    //     if (profile?.id && profile?.email) {
    //       return {
    //         id: profile.id,
    //         email: profile.email,
    //         name: [profile.firstName, profile.lastName]
    //           .filter(Boolean)
    //           .join(" "),
    //         image: null,
    //       };
    //     }

    //     return null;
    //   },
    // }),
  ],
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = "admin";
  //     return token;
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
