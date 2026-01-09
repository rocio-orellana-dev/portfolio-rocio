import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Projects API
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  // Contact API
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    const seedProjects = [
      {
        slug: "sistema-reportes-escolares",
        title_es: "Sistema de Gestión de Reportes y Convivencia Escolar",
        title_en: "School Reporting and Coexistence Management System",
        summary_es: "Plataforma multirol con derivaciones, seguimiento y cierre de casos, con dashboards por rol.",
        summary_en: "Multi-role platform with routing, case tracking and closure, with role-based dashboards.",
        tags: ["React", "TypeScript", "Tailwind", "REST APIs", "MySQL"],
        isFeatured: true,
        order: 1
      },
      {
        slug: "tienda-matrices",
        title_es: "Tienda Digital de Matrices de Bordado",
        title_en: "Embroidery Matrix Digital Store",
        summary_es: "E-commerce de productos digitales con pago y descarga inmediata post-compra.",
        summary_en: "Digital products e-commerce with payments and instant post-purchase downloads.",
        tags: ["React", "Tailwind", "Payments", "Security", "Digital goods"],
        isFeatured: true,
        order: 2
      },
      {
        slug: "landing-jardin",
        title_es: "Landing Institucional — Jardín Infantil",
        title_en: "Early Childhood Center — Institutional Landing",
        summary_es: "Landing orientada a confianza y contacto para consultas de matrícula.",
        summary_en: "Trust- and contact-focused landing page for enrollment inquiries.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive", "Tailwind"],
        isFeatured: true,
        order: 3
      },
      {
        slug: "sistema-crud-colegio",
        title_es: "Sistema de Gestión Escolar (Base)",
        title_en: "School Management System (Base)",
        summary_es: "Proyecto base para consolidar CRUD, formularios y persistencia.",
        summary_en: "Foundation project to consolidate CRUD, forms, and persistence.",
        tags: ["CRUD", "MySQL", "REST APIs", "Forms"],
        isFeatured: false,
        order: 4
      }
    ];

    for (const p of seedProjects) {
      await storage.createProject(p);
    }
    console.log("Database seeded with projects");
  }
}
