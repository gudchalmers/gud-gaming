"use server";

import { db } from "@/app/db/drizzle";
import { minecraft, users } from "@/app/db/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

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

  if (!session.user?.email) {
    return { message: "Access denied", loading: false, username };
  }

  const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);

  if (response.status === 404 || !response.ok) {
    return { message: "Username not found", loading: false, username };
  }

  const uuid = ((await response.json()) as MojangResponse).id;

  if (!uuid) {
    return { message: "UUID not found", loading: false, username };
  }

  const userId = (
    await db.query.users.findFirst({
      where: eq(users.email, session.user.email),
    })
  ).id;

  // Check if the user already has a Minecraft account
  const existing = await db.query.minecraft.findFirst({
    where: eq(minecraft.userId, userId),
  });

  if (existing && existing.uuid === uuid) {
    console.log("Already linked user with uuid", uuid);

    return { message: "Already linked", loading: false, username };
  }

  // If the user already has a Minecraft account, update it
  if (existing) {
    await db.update(minecraft).set({ username, uuid }).where(eq(minecraft.userId, userId));

    console.log("Updated user with uuid", uuid);

    return { message: "Updated", loading: false, username };
  }

  await db.insert(minecraft).values({
    userId: userId,
    username,
    uuid,
  });

  console.log("Registered user with uuid", uuid);

  return { message: "Saved", loading: false, username };
}
