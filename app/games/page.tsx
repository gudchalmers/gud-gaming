import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import type { Route } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { CopyText } from "../components/copy-text";
import { LogoutButton } from "../components/logout-button";
import { MinecraftLogin } from "../components/minecraft-login";
import { db } from "../db/drizzle";
import { minecraft, users } from "../db/schema";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  });

  if (!user) {
    await db
      .insert(users)
      .values({
        email: session.user.email,
      })
      .onConflictDoNothing();
  }

  let username: string;
  if (user?.id) {
    username = (
      await db.query.minecraft.findFirst({
        where: eq(minecraft.userId, user.id),
      })
    )?.username;
  }

  return (
    <>
      <div
        className={`
          flex size-full flex-col items-center justify-center bg-gradient-to-r from-slate-950
          to-slate-800 py-20
        `}
      >
        <h1 className="mb-10 text-8xl font-black uppercase">Games</h1>
        <LogoutButton />
      </div>

      <div
        className={`mx-auto mt-4 flex w-full max-w-3xl flex-col place-content-center gap-4 p-10`}
      >
        <h2 className="text-xl font-semibold">
          Welcome {session?.user?.name}!
        </h2>
        <p>
          Find the games you want to play in the list below. Some games needs
          your playername for whitelist. You can always come back to this page
          by login in again.
        </p>
        <details
          className="w-full space-y-4 rounded border border-slate-800 p-4"
          open
        >
          <summary>Discord</summary>
          <ol className="list-inside list-decimal">
            <li>
              Join{" "}
              <Link
                href={(process.env.DISCORD_INVITE ?? "") as Route}
                className={`
                  underline
                  hover:text-white
                `}
              >
                {process.env.DISCORD_INVITE}
              </Link>
            </li>
          </ol>
        </details>
        <details className="w-full space-y-4 rounded border border-slate-800 p-4">
          <summary>Minecraft</summary>
          <MinecraftLogin username={username ?? undefined} />
          <p>
            And then connect to <CopyText text="mc.chs.se" />
          </p>
        </details>
        <details className="w-full space-y-4 rounded border border-slate-800 p-4">
          <summary>Factorio</summary>
          <p>
            Connect to <CopyText text="gaming.chs.se" /> with password{" "}
            <CopyText text="chalmers" />
          </p>
        </details>
        <details className="w-full space-y-4 rounded border border-slate-800 p-4">
          <summary>OpenTTD</summary>
          <p>
            Connect to <CopyText text="gaming.chs.se" /> with password{" "}
            <CopyText text="chalmers" />
          </p>
        </details>
        {/* <details className="w-full space-y-4 rounded border border-slate-800 p-4">
          <summary>Valheim</summary>
          <p>WIP</p>
        </details> */}
        <p>
          Missing any game? Something broken? Contact us on{" "}
          <Link
            href={(process.env.DISCORD_INVITE ?? "") as Route}
            className={`
              underline
              hover:text-white
            `}
          >
            Discord
          </Link>
          !
        </p>
      </div>
    </>
  );
}
