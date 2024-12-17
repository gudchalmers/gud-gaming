import { signIn } from "@/auth";

export function LoginButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("microsoft-entra-id", {
          redirectTo: "/games",
        });
      }}
    >
      <button
        className={`
          relative mb-24 flex flex-row rounded bg-slate-600 px-20 py-4 transition-colors
          hover:bg-slate-500
        `}
        type="submit"
      >
        Get Started
        <div
          className={`
            absolute right-6 size-4 translate-y-1 rotate-45 border-r-2 border-t-2 border-slate-200
          `}
        />
      </button>
    </form>
  );
}
