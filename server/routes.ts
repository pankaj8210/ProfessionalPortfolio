import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just store the submission
      console.log('New contact submission:', submission);
      
      res.json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        message: "Please check your form data and try again.",
        success: false 
      });
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
