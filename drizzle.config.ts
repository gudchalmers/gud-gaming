import type { Config } from "drizzle-kit";

export default {
  schema: "./app/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
} satisfies Config;