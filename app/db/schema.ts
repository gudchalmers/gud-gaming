import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: int().primaryKey(),
  samlid: text().unique(),
});

export const minecraft = sqliteTable("minecraft", {
  id: int().primaryKey(),
  userid: int().references(() => users.id),
  username: text().unique(),
  uuid: text().unique(),
});
