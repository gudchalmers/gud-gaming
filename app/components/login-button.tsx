"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  const tenant = "chalmers.se";
  const product = "GUD Gaming";
  // const tenant = "boxyhq.com";
  // const product = "saml-demo.boxyhq.com";

  return (
    <button
      className={`
        relative mb-24 flex flex-row rounded bg-slate-600 px-20 py-4 transition-colors
        hover:bg-slate-500
      `}
      onClick={async (event) => {
        event.preventDefault();
        signIn(
          "boxyhq-saml",
          {
            callbackUrl: "/games",
          },
          { tenant, product },
        );
      }}
    >
      Get Started
      <div
        className={`
          absolute right-6 size-4 translate-y-1 rotate-45 border-r-2 border-t-2 border-slate-200
        `}
      />
    </button>
  );
}
