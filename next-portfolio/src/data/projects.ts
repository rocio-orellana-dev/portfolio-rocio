export const projects = [
  {
    id: 'school-reporting',
    featured: true,
    featuredOrder: 1,
    slug: {
      es: 'sistema-reportes-escolares',
      en: 'school-reporting-system',
    },
    title: {
      es: 'Sistema de Gestión de Reportes y Convivencia Escolar',
      en: 'School Reporting & Student Support Management System',
    },
    summary: {
      es: 'Plataforma multirol con derivaciones, seguimiento y cierre de casos.',
      en: 'Multi-role platform with routing, tracking and case closure.',
    },
    role: {
      es: 'Full Stack Developer',
      en: 'Full Stack Developer',
    },
    stack: ['React', 'TypeScript', 'Tailwind', 'REST APIs', 'MySQL'],
    highlights: {
      es: {
        problem: 'Falta de trazabilidad en reportes escolares.',
        solution: 'Sistema centralizado con flujos multirol.',
        outcome: 'Reducción de tiempos y mayor visibilidad.',
        metrics: ['Gestión por roles', 'Flujo reporte → cierre'],
      },
      en: {
        problem: 'Lack of traceability in school reports.',
        solution: 'Centralized system with multi-role workflows.',
        outcome: 'Reduced response times and better visibility.',
        metrics: ['Role-based management', 'Report-to-closure flow'],
      },
    },
    cover: '/images/projects/covers/school-reporting.jpg',
  },

  {
    id: 'embroidery-store',
    featured: true,
    featuredOrder: 2,
    slug: {
      es: 'tienda-matrices',
      en: 'embroidery-matrix-store',
    },
    title: {
      es: 'Tienda Digital de Matrices de Bordado',
      en: 'Digital Embroidery Matrix Store',
    },
    summary: {
      es: 'E-commerce de productos digitales con descarga inmediata.',
      en: 'Digital products e-commerce with instant downloads.',
    },
    role: {
      es: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    stack: ['React', 'Tailwind', 'Payments', 'Security'],
    highlights: undefined, // 👈 CLAVE
    cover: '/images/projects/covers/embroidery-store.jpg',
  },

  {
    id: 'landing-jardin',
    featured: true,
    featuredOrder: 3,
    slug: {
      es: 'landing-jardin',
      en: 'early-childhood-center-landing',
    },
    title: {
      es: 'Landing Institucional — Jardín Infantil',
      en: 'Early Childhood Center Landing Page',
    },
    summary: {
      es: 'Landing orientada a confianza y contacto.',
      en: 'Trust- and contact-focused landing page.',
    },
    role: {
      es: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: undefined, // 👈 CLAVE
    cover: '/images/projects/covers/early-childhood.jpg',
  },
] as const;

export type Project = (typeof projects)[number];
