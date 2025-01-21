// make a /api/minecraft/check route that takes a uuid and returns pass or fail

import { db } from "@/app/db/drizzle";
import { minecraft } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const { uuid } = await request.json();

  if (!uuid) {
    return new Response("Missing uuid", { status: 400 });
  }

  const minecraft_user = await db.query.minecraft.findFirst({
    where: eq(minecraft.uuid, uuid),
  });

  if (!minecraft_user) {
    return Response.json({ status: "denied"});
  } else {
    return Response.json({ status: "success"});
  }
}
