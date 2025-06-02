import { signOut } from "@/auth";

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <button
        className={`
          relative flex flex-row rounded bg-slate-700 px-20 py-4 transition-colors
          hover:bg-slate-600
        `}
        type="submit"
      >
        Logout
        <div
          className={`
            absolute right-6 size-4 translate-y-1 rotate-45 border-t-2 border-r-2 border-slate-200
          `}
        />
      </button>
    </form>
  );
}
