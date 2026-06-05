# AGENTS.md

## Project Overview
Envíos DosRuedas is a comprehensive logistics and courier platform designed to optimize delivery management and user experience. It offers real-time shipping cost calculations, package tracking, and an interactive routing dashboard with mapping services. The application includes a dynamic design system using OKLCH colors, supporting both Light and Dark modes.

## Tech Stack
- Language: TypeScript (v6.0)
- Framework: Next.js (v16 App Router) & React (v19)
- CSS/Styling: Tailwind CSS (v3.4.19) with OKLCH theme tokens, Shadcn UI primitives, Framer Motion
- Database & ORM: PostgreSQL & Prisma ORM (v7.8.0)
- AI Integration: Firebase Genkit & Google Gemini API
- Maps & Routing: Leaflet, OpenStreetMap (Nominatim), OSRM
- E2E Testing: Playwright (v1.60)
- Deployment: Netlify

## Code Conventions
- Linter/formatter: ESLint (Next.js custom configuration), markdownlint-cli2 for Markdown files
- Naming conventions: CamelCase or kebab-case for React components (e.g. `optimized-header.tsx`), kebab-case for Next.js App Router folders. Standard TypeScript strict types.
- File organization:
  - `prisma/`: Database schema definition (`schema.prisma`) and seed scripts.
  - `src/app/`: Next.js App Router folders, page definitions, layouts, and Server Actions.
  - `src/components/`: Modular React components grouped by feature/domain (e.g., `calculator`, `homenew`, `ui`).
  - `src/ai/`: Firebase Genkit flows and AI integration logic.
  - `src/lib/`: Custom utility modules, database client instantiations, and OSRM route managers.
  - `tests/`: End-to-end integration tests using Playwright.
- CSS Variable Usage: Theme colors configured via `src/app/globals.css` using `oklch(...)` color tokens and bound directly to Tailwind variables in `tailwind.config.ts`.

## Testing Requirements
- Unit tests for new utility functions and React hooks
- E2E and integration tests using Playwright for core user paths (e.g., shipping calculator, routing maps, user navigation)
- Coverage target: 80%

## Build & Deploy
- Build: `pnpm run build`
- Lint: `pnpm run lint`
- Install Dependencies: `pnpm install`
- DB Generate: `pnpm run db:generate`
- DB Push Schema: `pnpm run db:push`
- DB Migrate Dev: `pnpm run db:migrate`
- Seed Database: `pnpm run db:seed`
