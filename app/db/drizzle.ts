import { drizzle } from 'drizzle-orm/libsql';

export const db = drizzle({ connection: {
  url: "./data/db.sqlite", 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
