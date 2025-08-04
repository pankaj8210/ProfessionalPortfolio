// // db.ts
// import Database from 'better-sqlite3';
// import { drizzle } from 'drizzle-orm/better-sqlite3';
// import * as schema from '@shared/schema';
// import dotenv from 'dotenv';

// dotenv.config();

// const dbPath = process.env.DATABASE_URL || 'file:./dev.db';
// const sqlite = new Database(dbPath.replace('file:', ''));

// // Wrap the SQLite database with Drizzle
// const db = drizzle(sqlite, { schema });

// export default db;


// db.ts
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from '@shared/schema';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

// For Vercel, use /tmp directory for temporary SQLite file
const getDbPath = () => {
  if (process.env.VERCEL) {
    // On Vercel, use /tmp directory
    const tmpPath = '/tmp/app.db';
    return tmpPath;
  } else {
    // Local development
    return process.env.DATABASE_URL?.replace('file:', '') || './dev.db';
  }
};

const dbPath = getDbPath();

// Ensure directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const sqlite = new Database(dbPath);

// Initialize tables if they don't exist (for Vercel's ephemeral file system)
if (process.env.VERCEL) {
  // Run your schema creation here if needed
  // This is a temporary solution - use a real database for production
}

const db = drizzle(sqlite, { schema });

export default db;