import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: "file:./data/local.db",
  },
  dialect: "sqlite",
  verbose: true,
  strict: true,
});
