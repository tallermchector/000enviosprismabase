# Frontend Architecture Audit Report
**Role:** Senior Principal Frontend Architect & Premium UI/UX Auditor

## 1. The Absolute Chromatic Trinity (Brand Matrix)
The following colors constitute the strictly enforced brand matrix:
- **Primary Deep Blue:** `#0c32a0`
- **Secondary Velocity Gold:** `#ffec00`
- **Technical White:** `#ffffff`

All design layers must strictly bind to these values. Any deviation is a **CRITICAL BUG**.

---

## 2. Audit Targets & Detection Patterns

### 2.1 Inline & Hardcoded Styles
Traditional HTML `style={{...}}` properties assigning custom backgrounds, text colors, or spacing:

- **File:** `src/components/homenew/enhanced-hero.tsx`
  **Slop:** `style={{               backgroundSize: "200% 200%",             }}`
- **File:** `src/components/homenew/entrepreneur-solutions.tsx`
  **Slop:** `style={{               backgroundSize: "200% 200%",             }}`
- **File:** `src/components/homenew/slider-servicios.tsx`
  **Slop:** `style={{ backgroundColor: service.color, color: idx % 2 === 0 ? 'white' : 'black' }}`
- **File:** `src/components/homenew/slider-servicios.tsx`
  **Slop:** `style={{ color: service.color }}`
- **File:** `src/components/ui/chart.tsx`
  **Slop:** `style={{                     backgroundColor: item.color,                   }}`

### 2.2 Arbitrary Hex Utility Classes
Tailwind classes bypassing brand variables:

- **File:** `src/components/contact/contact-info.tsx`
  **Slop:** `bg-[#25D366]`
- **File:** `src/components/contact/contact-info.tsx`
  **Slop:** `bg-[#25D366]`
- **File:** `src/components/faq/faq-contact-cta.tsx`
  **Slop:** `bg-[#25D366]`
- **File:** `src/components/faq/faq-contact-cta.tsx`
  **Slop:** `bg-[#25D366]`
- **File:** `src/components/homenew/HeroPrototype.tsx`
  **Slop:** `bg-[#334155]`
- **File:** `src/components/ui/HeroSection.tsx`
  **Slop:** `bg-[#d97706]`

### 2.3 Geometry Rules Violations
Use of rounded utility classes violating the strict cyber-brutalist rule (corners must be sharp `rounded-none` or max `rounded-[var(--radius)]` / 4px).

Total Violations Detected: 397

*Sample of Violations:*
- **File:** `src/app/page.tsx` | **Violation:** `rounded-2xl`
- **File:** `src/app/page.tsx` | **Violation:** `rounded-xl`
- **File:** `src/app/politica-de-privacidad/page.tsx` | **Violation:** `rounded-full`
- **File:** `src/app/politica-de-privacidad/page.tsx` | **Violation:** `rounded-3xl`
- **File:** `src/app/terminos-y-condiciones/page.tsx` | **Violation:** `rounded-full`
- **File:** `src/app/terminos-y-condiciones/page.tsx` | **Violation:** `rounded-3xl`
- **File:** `src/components/about/company-story.tsx` | **Violation:** `rounded-lg`
- **File:** `src/components/about/company-story.tsx` | **Violation:** `rounded-lg`
- **File:** `src/components/about/company-values.tsx` | **Violation:** `rounded-2xl`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-lg`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-lg`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-lg`
- **File:** `src/components/about/mission-vision.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/team-section.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/team-section.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/who-we-are.tsx` | **Violation:** `rounded-full`
- **File:** `src/components/about/who-we-are.tsx` | **Violation:** `rounded-xl`
- **File:** `src/components/about/who-we-are.tsx` | **Violation:** `rounded-xl`
*(And 377 more...)*

---

## 3. CSS & Tailwind Config Audit

### Review of `src/app/globals.css` and `tailwind.config.ts`
- **Messy Variable Definitions:** The current `globals.css` uses HSL variables like `--primary: 221 47% 43%;` mapped to Tailwind's config but does not enforce the new Absolute Chromatic Trinity (`#0c32a0`, `#ffec00`, `#ffffff`).
- **Legacy Tailwind Configuration:** `tailwind.config.ts` contains excessive custom configurations (e.g., custom border radii `2xl`, `xl`, `lg` and shadows like `studio-glow`) that duplicate or bypass standard system tokens. Tailwind v4 advocates for CSS-only configurations.
- **Utility Definitions:** Utilities like `.glass-panel` and `.glow-primary` are defined using `@layer utilities` with static RGBA values instead of theme variables.

---

## 4. Tailwind CSS v4 Migration Blueprint

In Tailwind v4, we completely eliminate the `tailwind.config.ts` file overhead and move all configurations to CSS via the `@theme` directive.

### Recommended Action Plan
1. **Uninstall Tailwind v3 and remove `tailwind.config.ts`:**
   ```bash
   pnpm remove tailwindcss postcss autoprefixer
   pnpm add tailwindcss@next @tailwindcss/vite
   rm tailwind.config.ts postcss.config.js
   ```
2. **Replace `globals.css` content with the unified v4 structure:**

### `src/app/globals.css` V4 Blueprint

```css
@import "tailwindcss";

@theme {
  --color-background: hsl(240 17% 9%);
  --color-foreground: hsl(228 22% 91%);

  /* The Absolute Chromatic Trinity */
  --color-blue-brand: #0c32a0;
  --color-gold-brand: #ffec00;
  --color-white-brand: #ffffff;

  /* Cyber-Brutalist Geometry */
  --radius-brand: 0.25rem;

  /* Typography */
  --font-display: "Anybody", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* Custom global utilities layer matching verified cyber-brutalist specs */
@utility glass-panel {
  background: rgba(19, 19, 27, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@utility glow-primary {
  box-shadow: 0 0 20px rgba(12, 50, 160, 0.15); /* Updated to Brand Blue */
}
```

3. **Remediation Scripts:** Create specific codemod scripts to:
   - Search/Replace all `rounded-lg`, `rounded-xl`, etc. with `rounded-none` or `rounded-brand`.
   - Search/Replace hardcoded `bg-[#25D366]` (WhatsApp greens) or other hex codes with unified theme colors.
   - Refactor `style={{...}}` instances to use standard Tailwind utility classes.
