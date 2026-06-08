# Envíos Dos Ruedas: Three Design Directions (Google Stitch)

This document provides the full layout mapping, responsive Tailwind CSS configurations, and specialized typography/animation hooks for `src/app/page.tsx` across three distinct aesthetic directions, strictly adhering to `.stitch/DESIGN.md` constraints.

## Critical Anti-Patterns Enforced
- No emojis.
- No pure black (`#000000`). Zinc-950 (`#09090b`) or Off-Black (`#050810`) utilized.
- No neon outer glows or default drop shadows. Customized glassmorphic micro-borders and soft depth implemented.
- No 3-column equal card layouts. Bento-Grid asymmetry applied for service sections.
- No centered hero sections. Confident asymmetric layouts applied.
- No fabricated metrics. Organic placeholders like `[cobertura_local]` utilized.
- No AI copywriting clichés. Clinical, technical corporate prose utilized.
- No circular loading spinners. Skeletal shimmer used.
- No `h-screen`. `min-h-[100dvh]` used universally.

---

## DIRECTION 1: "ART GALLERY MINIMAL" (Quiet & Clinical)
**Aesthetic Scale:** Creativity 2 | Variance 3 | Density 2 | Motion 3
**Vibe:** Clean, quiet, heavily structured, Notion-meets-Minimalist-Architecture. Expansive spatial margins and thin subtle gray borderlines.

### 1. Tailwind CSS Configuration Extension
```typescript
// tailwind.config.ts extensions
extend: {
  colors: {
    background: '#fafafa', // Zinc-50 for expansive clinical feel (inverted dark mode concept or extremely muted dark if forced: #09090b)
    foreground: '#18181b', // Zinc-900
    border: '#e4e4e7', // Zinc-200 thin lines
  },
  fontFamily: {
    sans: ['var(--font-inter)', 'sans-serif'],
    display: ['var(--font-inter)', 'sans-serif'], // Stripped Orbitron for clinical look
  },
  letterSpacing: {
    widest: '0.3em', // High track-spacing for all-caps
  }
}
```

### 2. Component Mapping (`src/app/page.tsx`)

#### Global Layout (`page.tsx`)
```tsx
<div className="min-h-[100dvh] bg-zinc-950 text-zinc-50 flex flex-col font-sans selection:bg-zinc-800 antialiased">
  <OptimizedHeader />
  <main className="flex-grow flex flex-col gap-y-32 py-32 px-4 md:px-8 max-w-7xl mx-auto w-full">
    <HeroAnimado />
    <VisionSection />
    <SliderServicios />
    <EntrepreneursHome />
    <CarruselRedes />
  </main>
  <Footer />
</div>
```

#### `OptimizedHeader`
- **Classes:** `fixed top-0 w-full bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/50 py-6`
- **Typography:** `text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors`
- **Layout:** Flex spread, brand text left, nav links right, ultra-minimalist.

#### `HeroAnimado`
- **Classes:** `grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,_400px)] gap-16 min-h-[80dvh] items-end pb-32`
- **Typography:** Left anchor `text-6xl md:text-8xl font-light tracking-tighter leading-none text-zinc-50`. Left align.
- **Visual:** Right side replaces image with a flat mechanical wireframe box: `border border-zinc-800 bg-zinc-900/20 h-[400px] flex items-end p-6`.

#### `VisionSection`
- **Classes:** `flex flex-col md:flex-row gap-12 border-t border-zinc-800 pt-16`
- **Typography:** Clinical prose. `text-zinc-400 max-w-xl text-lg font-light leading-relaxed`.

#### `SliderServicios` (Bento Alternative)
- **Layout:** Replaced equal grid with horizontal offset rows.
- **Classes:** `flex flex-col gap-px bg-zinc-800` (Creating 1px solid borders between rows).
- **Cards:** `bg-zinc-950 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start group hover:bg-zinc-900 transition-colors duration-500`. No grid asymmetry, flat minimalist rows.

#### `EntrepreneursHome`
- **Layout:** Extreme left margin, staggered list items.
- **Classes:** `ml-0 md:ml-32 border-l border-zinc-800 pl-8 py-12`

#### `CarruselRedes` (Logistics Proof)
- **Layout:** Static-looking marquee with clinical metrics.
- **Metrics:** `[entregas_dia]`, `[cobertura_local]`. No 99.9% clichés.

#### `Footer`
- **Classes:** `border-t border-zinc-800 py-16 grid grid-cols-1 md:grid-cols-4 gap-8`
- **Typography:** `text-xs text-zinc-500`

---

## DIRECTION 2: "STUDIO BALANCED" (Premium Daily App)
**Aesthetic Scale:** Creativity 5 | Variance 6 | Density 5 | Motion 6
**Vibe:** Premium tech studio look. High contrast, warm yet clinical logistics environment.

### 1. Tailwind CSS Configuration Extension
```typescript
// tailwind.config.ts extensions
extend: {
  colors: {
    background: '#050810', // Deep Void
    surface: 'rgba(255, 255, 255, 0.03)',
    primary: '#2563eb', // Electric Blue
  },
  boxShadow: {
    'premium-glass': '0 4px 24px -1px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
    'glow': '0 0 40px -10px rgba(37, 99, 235, 0.3)',
  },
  backdropBlur: {
    'glass': '12px',
  }
}
```

### 2. Component Mapping (`src/app/page.tsx`)

#### Global Layout (`page.tsx`)
```tsx
<div className="min-h-[100dvh] bg-[#050810] text-slate-50 flex flex-col overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050810] to-[#050810] -z-10" />
  <OptimizedHeader />
  <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full mx-auto space-y-24 py-24">
    <HeroAnimado />
    <VisionSection />
    <SliderServicios />
    <EntrepreneursHome />
    <CarruselRedes />
  </main>
  <Footer />
</div>
```

#### `OptimizedHeader`
- **Classes:** `fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl bg-white/5 backdrop-blur-glass border border-white/10 rounded-full px-6 py-4 shadow-premium-glass z-50`
- **Layout:** Floating pill shape.

#### `HeroAnimado`
- **Layout:** Offset layout (Left Heavy 60%, Right Light 40%).
- **Classes (Container):** `grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[70dvh] pt-12 items-center`
- **Left Column (col-span-7):** Bold typography using Inter/Orbitron hybrid. `text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-sm`.
- **Right Column (col-span-5):** Containerized interactive tracking simulation box. `bg-surface border border-white/10 rounded-2xl shadow-premium-glass p-6 backdrop-blur-md relative overflow-hidden`. Includes subtle skeletal shimmer for loading state: `animate-pulse bg-white/5`.

#### `VisionSection`
- **Classes:** `bg-surface border border-white/5 rounded-3xl p-10 lg:p-16 shadow-premium-glass`

#### `SliderServicios` & `EntrepreneursHome`
- **Layout:** Elegant asymmetric Bento grids.
- **Container Classes:** `grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6`
- **Card Classes:** Variable spans (`md:col-span-2`, `md:row-span-2`). `bg-surface border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 shadow-premium-glass flex flex-col justify-end relative overflow-hidden`.
- **Micro-interactions:** Group hover triggers slight inner glow or border gradient.

#### `CarruselRedes`
- **Layout:** Housed inside a massive glassmorphic card. `col-span-full`.

#### `Footer`
- **Classes:** `mt-32 pt-16 pb-8 border-t border-white/10 bg-gradient-to-b from-transparent to-zinc-950`

---

## DIRECTION 3: "KINETIC EDITORIAL" (High-Variance Bold)
**Aesthetic Scale:** Creativity 9 | Variance 9 | Density 4 | Motion 8
**Vibe:** High scale contrast, inline typography, dramatic layout shifts, expensive editorial magazine feel.

### 1. Tailwind CSS Configuration Extension
```typescript
// tailwind.config.ts extensions
extend: {
  colors: {
    background: '#0a0a0a', // Off-black
    brand: '#fbbf24', // Amber emphasis
  },
  fontFamily: {
    display: ['var(--font-cabinet-grotesk)', 'sans-serif'], // Or similar heavy editorial sans
  },
  fontSize: {
    'massive': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
  }
}
```

### 2. Component Mapping (`src/app/page.tsx`)

#### Global Layout (`page.tsx`)
```tsx
<div className="min-h-[100dvh] bg-[#0a0a0a] text-stone-100 flex flex-col overflow-x-hidden">
  <OptimizedHeader />
  <main className="flex-grow w-full space-y-40 pb-40">
    <HeroAnimado />
    <VisionSection />
    <SliderServicios />
    <EntrepreneursHome />
    <CarruselRedes />
  </main>
  <Footer />
</div>
```

#### `OptimizedHeader`
- **Layout:** Minimal navigation offset radically to the upper left corner.
- **Classes:** `fixed top-8 left-8 z-50 flex flex-col gap-2 mix-blend-difference`
- **Typography:** `text-sm font-medium tracking-tight hover:italic transition-all`

#### `HeroAnimado`
- **Layout:** Bleeding edge topography.
- **Classes:** `min-h-[90dvh] flex flex-col justify-end pb-12 pl-4 sm:pl-8 lg:pl-16 relative w-screen`
- **Typography:** Massive display headers. `text-massive font-black font-display italic text-stone-100 whitespace-nowrap overflow-visible w-[150vw] -ml-4`.
- **Animation Hooks (Framer Motion equivalent logic):** Staggered spring motion components (stiffness: 100, damping: 20) revealing text letters or words sequentially from below.

#### `VisionSection`
- **Layout:** Offset text block pushed extreme right.
- **Classes:** `w-full max-w-2xl ml-auto pr-4 sm:pr-8 lg:pr-16`
- **Typography:** `text-2xl lg:text-4xl leading-tight font-light`

#### `SliderServicios` & `EntrepreneursHome`
- **Layout:** Overlapping layout layers, massive numbers for index counts.
- **Container Classes:** `relative w-full px-4 sm:px-8 lg:px-16 flex flex-col gap-32`
- **Card Classes:** Cards do not follow a grid; they are absolutely or relatively positioned to overlap. `relative w-[85%] md:w-[60%] sticky top-20 bg-[#111111] p-8 md:p-12 border-t-4 border-brand`
- **Index Counters:** `absolute -top-12 -left-6 text-8xl font-black text-[#222222] select-none -z-10 font-display`
- **Typography Contrast:** Massive section titles juxtaposed with tiny 10px technical descriptive monospace text.

#### `CarruselRedes`
- **Layout:** Ticker-tape style running across the screen diagonally or with extreme scale. `transform -rotate-2 scale-110 w-[120vw] -ml-[10vw] bg-brand text-zinc-950 py-4`

#### `Footer`
- **Classes:** `px-4 sm:px-8 lg:px-16 py-32 bg-[#111111]`
- **Typography:** Massive 'ENVÍOS DOS RUEDAS' text covering the entire width of the footer.
