"use server";

import { db } from "@/app/db/drizzle";
import { minecraft } from "@/app/db/schema";
import { auth } from "@/auth";

interface MojangResponse {
  id: string;
  name: string;
}

export async function register(prevState, formData: FormData) {
  const username = formData.get("username").toString().toLowerCase();
  const session = await auth();

  if (!username) {
    return { message: "Username is required", loading: false };
  }

  const response = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${username}`,
  );

  if (response.status === 404 || !response.ok) {
    return { message: "Username not found", loading: false };
  }

  const uuid = ((await response.json()) as MojangResponse).id;

  if (!uuid) {
    return { message: "UUID not found", loading: false };
  }

  if (!session.user?.id) {
    return { message: "Access denied", loading: false };
  }

  const userId = (
    await db.query.users.findFirst({
      with: { samlid: session.user.id },
    })
  ).id;

  await db.insert(minecraft).values({
    userId: userId,
    username,
    uuid,
  });

  return { message: "Saved", loading: false };
}
