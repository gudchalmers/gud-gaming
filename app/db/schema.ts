import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  samlid: text().unique().notNull(),
});

export const minecraft = sqliteTable("minecraft", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int()
    .unique()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  username: text().notNull(),
  uuid: text().notNull(),
});

export const minecraftRelations = relations(minecraft, ({ one }) => ({
  user: one(users, {
    fields: [minecraft.userId],
    references: [users.id],
  }),
}));
