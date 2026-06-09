# Technical Stack Analysis

Based on `package.json` and project documentation, here is the verified stack:

## Core Framework

- **Framework:** Next.js 16.2.4 (Using App Router based on project structure `src/app/`).
- **Language:** TypeScript (`typescript` v6.0.3, strictly typed interfaces throughout).
- **Runtime Environment:** Node.js (v25+ types specified, deployed on Netlify according to README).

## Styling & UI Libraries

- **CSS Engine:** Tailwind CSS v4 (`tailwindcss` v4.3.0, `@tailwindcss/postcss`). Uses the modern `@theme` directive in `globals.css` rather than a standard `tailwind.config.ts`.
- **UI Primitives:** Radix UI (`@radix-ui/react-*`). Highly accessible, unstyled components serving as the foundation for the design system.
- **Component System:** shadcn/ui (implied by the structure of `src/components/ui/` and use of Radix + Tailwind `cn()` utility).
- **Animation:** Framer Motion (`framer-motion` v12.40.0) for complex interactive elements, alongside standard Tailwind animation utilities (`tailwindcss-animate`).
- **Icons:** Phosphor Icons (`@phosphor-icons/react` v2.1.10) is the primary icon set. Lucide React (`lucide-react`) is also present, likely a leftover from default Shadcn installations, but Phosphor is explicitly preferred per project guidelines.

## Data & Backend Services

- **Database ORM:** Prisma (`@prisma/client` v7.8.0, `@prisma/adapter-pg`).
- **Database Dialect:** PostgreSQL (connected via `pg` driver).
- **AI Integration:** Google Genkit (`@genkit-ai/google-genai`, `@genkit-ai/next`) using Gemini models for AI summarization.

## Specific Functional Libraries

- **Maps & Routing:** Leaflet (`leaflet`, `react-leaflet`) and OSRM integration for distance/route calculations.
- **Forms & Validation:** React Hook Form (`react-hook-form`) combined with Zod (`zod`) and the hookform resolver.
- **Dates:** `date-fns` and `react-day-picker` for calendar/date operations.
- **Barcodes/QR:** ZXing Library (`@zxing/library`, `react-zxing`) for logistics label scanning.
- **Data Visualization:** Recharts (`recharts`) and Three.js (`three`) for charts and potential 3D visual elements.

## Testing & Tooling

- **E2E Testing:** Playwright (`@playwright/test` v1.60.0).
- **Linting:** ESLint for code, MarkdownLint (`markdownlint-cli2`) for documentation.
- **Package Manager:** pnpm (v10.16.1 explicitly defined).
