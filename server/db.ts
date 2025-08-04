// db.ts
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from '@shared/schema';
import dotenv from 'dotenv';

dotenv.config();

const dbPath = process.env.DATABASE_URL || 'file:./dev.db';
const sqlite = new Database(dbPath.replace('file:', ''));

// Wrap the SQLite database with Drizzle
const db = drizzle(sqlite, { schema });

export default db;