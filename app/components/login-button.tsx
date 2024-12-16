"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className={`
        relative mb-24 flex flex-row rounded bg-slate-600 px-20 py-4 transition-colors
        hover:bg-slate-500
      `}
      onClick={async (event) => {
        event.preventDefault();
        signIn(
          "MicrosoftEntraID",
          {
            callbackUrl: "/games",
          },
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
