// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,       // ← now it'll read from .env
    authToken: process.env.DATABASE_TOKEN! // ← same here
  },
  out:'./drizzle',
  schema:'./drizzle/schema.ts'
});
