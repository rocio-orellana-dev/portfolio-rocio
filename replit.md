# Rocío Belén Portfolio

## Overview

A premium bilingual (ES/EN) personal portfolio website for Rocío Belén Orellana Díaz, a Full Stack Developer. The project showcases professional work, projects, and contact capabilities with a focus on clean design, accessibility, and a sophisticated user experience. Built with a React frontend and Express backend, featuring PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter for lightweight client-side routing with locale-based paths (`/:locale/...`)
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode using next-themes)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state and caching
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Typography**: Inter for body text, Sora for headings

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Build System**: Custom build script using esbuild for server, Vite for client

### Data Layer
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Defined in `shared/schema.ts` using Drizzle ORM
- **Tables**:
  - `projects`: Portfolio projects with bilingual content (title_es, title_en, summary_es, summary_en)
  - `messages`: Contact form submissions
- **Migrations**: Managed via drizzle-kit with output to `./migrations`

### Internationalization
- Custom LocaleProvider component extracts locale from URL path
- Supports ES (Spanish) and EN (English) with browser language detection
- Content is conditionally rendered based on current locale
- URL structure: `/{locale}/{page}` (e.g., `/es/projects`, `/en/about`)

### Theming
- Light mode: Warm professional palette with teal primary (#0F766E) and amber accent (#F59E0B)
- Dark mode: Deep "azul noche" (night blue) palette with complementary teal/amber
- CSS variables defined in `client/src/index.css` for seamless theme switching

### Key Design Patterns
- Shared types and schemas between frontend and backend via `shared/` directory
- API routes defined once with Zod schemas for type-safe requests/responses
- Storage abstraction layer (`server/storage.ts`) for database operations
- Component-based architecture with reusable UI primitives

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express (available but sessions not yet implemented)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **next-themes**: Theme management (light/dark mode toggle)
- **react-hook-form** with **@hookform/resolvers**: Form handling with Zod validation
- **wouter**: Lightweight React router
- **lucide-react**: Icon library

### Backend Libraries
- **drizzle-orm** with **drizzle-zod**: Type-safe ORM and schema validation
- **express**: Web framework
- **zod**: Runtime type validation for API inputs/outputs

### Build Tools
- **Vite**: Frontend bundler with HMR support
- **esbuild**: Server bundler for production builds
- **TypeScript**: Type checking across the entire codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator