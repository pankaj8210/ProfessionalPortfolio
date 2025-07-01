// server/db.ts

import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";
import { drizzle } from "drizzle-orm/neon-serverless";
import { schema_exports } from "../shared/schema"; // or correct relative path

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ✅ Corrected drizzle init syntax
const db = drizzle(pool, { schema: schema_exports });

export { db };
