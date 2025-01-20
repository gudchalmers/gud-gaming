import type { Config } from "drizzle-kit";

export default {
  schema: "./app/db/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: "file:./data/local.db",
  },
  dialect: "sqlite",
  verbose: true,
  strict: true,
} satisfies Config;
