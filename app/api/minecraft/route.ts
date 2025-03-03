// make a /api/minecraft/check route that takes a uuid and returns pass or fail

import { db } from "@/app/db/drizzle";
import { minecraft } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  let { uuid } = await request.json();
  uuid = uuid.replace(/-/g, "").toLowerCase();

  if (!uuid) {
    return new Response("Missing uuid", { status: 400 });
  }

  const minecraft_user = await db.query.minecraft.findFirst({
    where: eq(minecraft.uuid, uuid),
  });

  if (!minecraft_user) {
    console.log("Denied user with uuid:", uuid);
    return Response.json({ status: "denied"});
  } else {
    console.log("Accepted user with uuid:", uuid);
    return Response.json({ status: "success"});
  }
}
