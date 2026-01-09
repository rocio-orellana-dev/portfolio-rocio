import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Contact Messages
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Projects (for dynamic fetching, though detailed content will be in frontend components)
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title_es: text("title_es").notNull(),
  title_en: text("title_en").notNull(),
  summary_es: text("summary_es").notNull(),
  summary_en: text("summary_en").notNull(),
  tags: text("tags").array().notNull(),
  isFeatured: boolean("is_featured").default(false),
  order: serial("order").notNull(),
});

// === SCHEMAS ===

export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// === TYPES ===

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Request Types
export type CreateMessageRequest = InsertMessage;

// Response Types
export type MessageResponse = Message;
export type ProjectResponse = Project;
