import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

// ✅ Import individual schema exports
import {
  users,
  contactSubmissions,
} from "../shared/schema"; // ✅ Adjust the path if needed

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ✅ Use the schema object explicitly
const db = drizzle(pool, {
  schema: { users, contactSubmissions },
});

export { db };
