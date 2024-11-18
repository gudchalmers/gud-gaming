"use client";

import Form from "next/form";
import { useActionState } from "react";

import { register } from "../api/minecraft/actions";
import { cn } from "../lib/cn";

const initialState = {
  message: "Save",
  loading: false,
};

export function MinecraftLogin() {
  const [state, formAction] = useActionState(register, initialState);

  return (
    <Form action={formAction} className="space-y-2">
      <input
        className={`
          block w-full rounded border-0 bg-slate-950 p-2 shadow ring-1 ring-inset ring-slate-600
          focus:ring-2 focus:ring-inset focus:ring-slate-600
          placeholder:text-slate-600
        `}
        name="username"
        id="minecraft-username"
        placeholder="Minecraft Username"
      />
      <button
        disabled={state?.loading}
        type="submit"
        aria-live="polite"
        className={cn(`
          flex w-full justify-center rounded bg-slate-700 p-2 text-sm/6 font-semibold text-white
          shadow
          disabled:cursor-wait disabled:bg-slate-800 disabled:text-slate-600
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-slate-600
          hover:bg-slate-500
        `)}
      >
        {state?.message || "Save"}
      </button>
    </Form>
  );
}