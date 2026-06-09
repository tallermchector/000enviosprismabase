# Design Tokens

Based on the Tailwind CSS v4 `@theme` configuration in `src/app/globals.css` and the usage in the codebase.

## Colors

The application uses a strict dark theme approach ("cyber-brutalist") based on HSL values and specific brand colors.

### Base Colors

- **Background:** `hsl(240 17% 9%)` (Zinc-950/Off-Black equivalent)
- **Foreground:** `hsl(228 22% 91%)`

### Brand Colors

- **Blue Brand:** `#0c32a0`
- **Gold Brand:** `#ffec00`
- **White Brand:** `#ffffff`

### Logical Mappings (The Absolute Trinity)

- **Primary:** `var(--color-blue-brand)`
- **Primary Foreground:** `var(--color-white-brand)`
- **On Primary:** `var(--color-primary-foreground)`
- **Secondary:** `var(--color-gold-brand)`
- **Secondary Foreground:** `hsl(240 17% 9%)`
- **On Secondary:** `var(--color-secondary-foreground)`

### Semantic Colors

- **Error:** `hsl(0 84% 60%)`
- **On Error:** `hsl(240 17% 9%)`
- **Muted:** `hsl(240 10% 20%)`
- **Muted Foreground:** `hsl(240 10% 70%)`

### Surface Containers (Shadcn/UI support)

- **Surface Container Low:** `hsl(240 15% 10%)`
- **Surface Container:** `hsl(240 15% 12%)`
- **Surface Container High:** `hsl(240 15% 15%)`
- **Surface Container Highest:** `hsl(240 15% 18%)`
- **On Surface:** `hsl(228 22% 91%)`
- **On Surface Variant:** `hsl(228 10% 75%)`
- **Outline Variant:** `hsl(240 10% 22%)`

## Typography

Fonts are loaded using `next/font/google` in `layout.tsx` and mapped to CSS variables.

- **Display/Headings (`font-display`):** `"Anton", sans-serif` (Often used with uppercase and tight tracking)
- **Monospace (`font-mono`):** `"JetBrains Mono", monospace` (Used for labels, code, specific tags)
- **Sans/Body (`font-sans`):** `"Geist", sans-serif` and `"Outfit"` mapped to `--font-outfit` and `--font-geist`.

## Geometry & Spacing

- **Border Radius (`--radius-brand`):** `0.25rem` (4px). A strict cyber-brutalist constraint is applied, favoring slightly rounded corners rather than fully pill-shaped or sharp ones.
- **Radius None (`--radius-none`):** `0rem`

## Custom Utilities

Custom visual styles are implemented as Tailwind `@utility` classes.

- **`glass-panel`**:
  - Background: `rgba(19, 19, 27, 0.7)`
  - Backdrop Filter: `blur(12px)`
  - Border: `1px solid rgba(255, 255, 255, 0.1)`
- **`glow-primary`**:
  - Box Shadow: `0 0 20px rgba(12, 50, 160, 0.15)`
