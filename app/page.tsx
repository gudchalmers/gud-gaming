import { LoginButton } from "@/app/components/login-button";
import Image from "next/image";
import Link from "next/link";

import chs from "../public/chs.png";
import factorio from "../public/games/factorio.png";
import minecraft from "../public/games/minecraft.png";
import openttd from "../public/games/openttd.svg";
// import valheim from "../public/games/valheim.png";
import gud from "../public/gud-clean.png";

export default function Home() {
  return (
    <>
      <div
        className={`
          flex size-full flex-col items-center justify-center bg-gradient-to-r from-slate-950
          to-slate-800 pb-20 pt-36
        `}
      >
        <h1 className="m-20">
          <p className="text-3xl">G.U.D.</p>
          <p className="text-8xl font-black uppercase">Gaming</p>
          <p className="text-center text-2xl text-slate-300">
            A part of Chalmers student union
          </p>
        </h1>
        <LoginButton />
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <Image
            src={gud}
            alt="Logo for G.U.D."
            className="h-16 w-fit object-contain"
          />
          <Image
            src={chs}
            alt="Logo for chalmers student union"
            className="h-16 w-fit object-contain"
          />
        </div>
      </div>
      <div className="mt-8 w-full p-10">
        <h2 className="mb-8 text-center text-3xl uppercase tracking-widest text-slate-300">
          Games offered:
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <div className="relative h-40 w-64 max-w-full rounded bg-slate-900 p-4">
            <Image
              width={224}
              src={minecraft}
              alt="Minecraft"
              className={`
                size-full object-contain brightness-75 grayscale transition-[filter]
                hover:brightness-100 hover:grayscale-0
              `}
            />
          </div>
          <div className="h-40 w-64 max-w-full rounded bg-slate-900 p-4">
            <Image
              width={224}
              src={factorio}
              alt="Factorio"
              className={`
                size-full object-contain brightness-75 grayscale transition-[filter]
                hover:brightness-100 hover:grayscale-0
              `}
            />
          </div>
          <div className="h-40 w-64 max-w-full rounded bg-slate-900 p-4">
            <Image
              width={224}
              src={openttd}
              alt="OpenTTD"
              className={`
                size-full object-contain brightness-75 grayscale transition-[filter]
                hover:brightness-100 hover:grayscale-0
              `}
            />
          </div>
          {/* <div className="h-40 w-64 max-w-full rounded bg-slate-900 p-4">
            <Image
              width={224}
              src={valheim}
              alt="Valheim"
              className={`
                size-full object-contain brightness-75 grayscale transition-[filter]
                hover:brightness-100 hover:grayscale-0
              `}
            />
          </div> */}
          <div className="h-40 w-64 max-w-full rounded bg-slate-900">
            <div
              className={`
                w-64 max-w-full text-center leading-[10rem] brightness-75 transition-[filter]
                hover:brightness-100 hover:grayscale-0
              `}
            >
              And more...
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <LoginButton />
      </div>
      <footer
        className={`
          mt-96 flex h-40 w-full items-center justify-center gap-8 bg-slate-900 p-4 text-slate-300
        `}
      >
        <Link href={"https://gud.chs.chalmers.se"} className="h-16">
          <Image
            src={gud}
            alt="Logo for G.U.D."
            className={`
              size-full w-fit object-contain brightness-50 transition-[filter]
              hover:brightness-100
            `}
          />
        </Link>

        <Link href={"https://chs.se"} className="h-16">
          <Image
            src={chs}
            alt="Logo for chalmers student union"
            className={`
              size-full w-fit object-contain brightness-50 transition-[filter]
              hover:brightness-100
            `}
          />
        </Link>
      </footer>
    </>
  );
}
