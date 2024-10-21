import Link from "next/link";

import { LogoutButton } from "../components/logout-button";

export default function Page() {
  return (
    <>
      <div
        className={`
          flex size-full flex-col items-center justify-center bg-gradient-to-r from-slate-950
          to-slate-800 py-20
        `}
      >
        <h1 className="text-8xl font-black uppercase">Games</h1>
        
      </div>

      <div className="mx-auto mt-4 flex w-full max-w-3xl flex-col gap-4 p-10">
        <p>
          Find the games you want to play in the list below. Some games needs
          your playername for whitelist. You can always come back to this page
          by login in again.
        </p>
        <details className="rounded border border-slate-800 p-4">
          <summary>Minecraft</summary>
          <p>
            To connect to minecraft visit{" "}
            <Link href="mc.chs.se">mc.chs.se</Link>.
          </p>
        </details>

        <LogoutButton />
      </div>
    </>
  );
}
