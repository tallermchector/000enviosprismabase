# Layout Architecture

## Global Structure (`src/app/layout.tsx`)

- **Root Element:** Standard HTML structure with `lang="es"`.
- **Body Styling:** Sets global typography variables (`--font-outfit`, `--font-geist`, `--font-jetbrains`), applies antialiasing, and enforces the dark theme background/text colors (`bg-zinc-950 text-slate-100`).
- **Global Components:** Includes global utility/SEO components at the root level (`WhatsAppReviewButton`, `Toaster` from Shadcn).

## Page Structure (`src/app/page.tsx`)

- **Main Wrapper:** The homepage uses a `min-h-[100dvh]` container acting as a Flexbox column (`flex flex-col`), ensuring the footer stays at the bottom even on short pages. It also explicitly applies the `.dark` class.
- **Main Content Area:** Wrapped in a `<main className="flex-grow">` element to take up available vertical space between the Header and Footer.

## Grid System and Alignment

- **Container Approach:** Uses a standard container pattern (`container mx-auto px-6`) to center content and limit maximum width on large screens.
- **Specific Max Widths:** Some sections, like the `HeroAnimado`, use specific max-widths (`max-w-7xl mx-auto w-full`) to tightly control the layout width independent of the global container.
- **CSS Grid:** Relies heavily on a 12-column grid system for complex layouts:
  - Example from Home Page: `<div className="grid grid-cols-12 gap-8 my-32">`
  - Asymmetric columns are used to adhere to the design guidelines. For example, the services slider takes up 8 columns (`col-span-12 lg:col-span-8`), while the accompanying CTA block takes up 4 columns (`col-span-12 lg:col-span-4`).

## Responsive Behavior

- **Mobile First:** Classes are applied without prefixes for mobile, overriding with breakpoints (`md:`, `lg:`, `xl:`).
- **Collapsible Navigation:** The `OptimizedHeader` hides desktop navigation elements on small screens (`hidden lg:flex`) and defers to a `MobileMenu` component.
- **Stacking Columns:** Grid systems generally stack full-width on mobile (`grid-cols-1` or `col-span-12`) and break into multi-column layouts on larger screens (`lg:grid-cols-12`).

## Z-Index and Stacking Contexts

- Headers and navigation menus likely use elevated z-indexes (implied by Dropdown logic and sticky headers).
- Tooltips, dialogs, and toasters are rendered outside the main flow via React Portals (standard Radix behavior) to ensure they are always on top.
