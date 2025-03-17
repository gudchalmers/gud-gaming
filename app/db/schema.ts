import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: int().primaryKey(),
  email: text().unique().notNull(),
});

export const minecraft = sqliteTable("minecraft", {
  id: int().primaryKey(),
  userId: int()
    .references(() => users.id)
    .notNull(),
  username: text().notNull(),
  uuid: text().notNull(),
});
