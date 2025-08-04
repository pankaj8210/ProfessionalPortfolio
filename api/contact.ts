import type { VercelRequest, VercelResponse } from '@vercel/node';
import { contactSubmissions, insertContactSubmissionSchema } from '../shared/schema';
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sql } from "drizzle-orm";

// Recreate the schema here since we can't import the full schema
const contactSubmissionsTable = sqliteTable("contact_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

// Initialize database
let db: any;

const initDB = () => {
  if (!db) {
    const dbPath = '/tmp/contact.db';
    const sqlite = new Database(dbPath);
    
    // Create table if it doesn't exist
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at INTEGER NOT NULL DEFAULT (unixepoch())
      );
    `);
    
    db = drizzle(sqlite, { schema: { contactSubmissions: contactSubmissionsTable } });
  }
  return db;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const database = initDB();

  if (req.method === 'POST') {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const [submission] = await database
        .insert(contactSubmissionsTable)
        .values(validatedData)
        .returning();
      
      console.log('New contact submission:', submission);
      
      return res.json({
        message: "Thank you for your message! I'll get back to you soon.",
        success: true
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(400).json({
        message: "Please check your form data and try again.",
        success: false
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const submissions = await database
        .select()
        .from(contactSubmissionsTable)
        .orderBy(contactSubmissionsTable.createdAt);
      
      return res.json(submissions.reverse());
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return res.status(500).json({ message: "Failed to fetch submissions" });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}