### 1. DETECCIÓN DE ESTILOS EN LÍNEA (Inline Styles) Y VALORES HARDCODED

**Problema 1: Posicionamiento y dimensiones absolutas en línea**
- **Ruta del archivo:** `src/components/homenew/enhanced-hero.tsx`
- **Bloque afectado:**
  ```tsx
  style={{ left: "50%", top: "50%" }}
  style={{ left: -10, top: vals.top }}
  style={{ backgroundSize: "200% 200%" }}
  ```
- **Razón técnica:** El uso de estilos en línea con valores estáticos como porcentajes o medidas fijas (`left: "50%"`, `left: -10`) rompe el sistema de espaciado estructurado de Tailwind y entorpece la legibilidad. Aunque algunos estilos puedan provenir de animaciones de Framer Motion, la maquetación inicial estática debe delegarse a clases de Tailwind. El valor arbitrario de `backgroundSize` también incrementa el peso del DOM y dificulta su reutilización.
- **Refactorización:**
  ```tsx
  // Para centrado estático, usar las clases utilitarias de Tailwind
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"

  // Para background-size, se debe extender en Tailwind config/v4 @theme
  className="bg-[length:200%_200%]"
  ```

### 2. EVALUACIÓN DE HOJAS DE ESTILO Y DIRECTIVAS GLOBALES

**Problema 1: Colores hardcodeados en pseudos-elementos e interacciones**
- **Ruta del archivo:** `src/app/globals.css`
- **Bloque afectado:**
  ```css
  ::-webkit-scrollbar-thumb {
    background: #3a5ba0;
  }
  *:focus-visible {
    outline: 2px solid #3a5ba0;
  }
  ```
- **Razón técnica:** Se están inyectando valores hexadecimales directos (`#3a5ba0`) en lugar de utilizar las variables CSS ya declaradas en el `:root` (ej. `--primary`). Esto rompe el "Single Source of Truth" (SSOT) e imposibilita la adaptación automática al modo oscuro o la consistencia visual si el color primario cambia.
- **Refactorización:**
  ```css
  ::-webkit-scrollbar-thumb {
    background: hsl(var(--primary));
    border-radius: 4px;
  }
  *:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }
  ```

**Problema 2: Clases utilitarias redundantes y "Neon Glows" en CSS nativo**
- **Ruta del archivo:** `src/app/globals.css`
- **Bloque afectado:**
  ```css
  .glass-panel {
    background: rgba(227, 234, 242, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(176, 184, 193, 0.5);
  }
  .glow-primary {
    box-shadow: 0 0 20px rgba(58, 91, 160, 0.15);
  }
  ```
- **Razón técnica:** Las reglas como `.glass-panel` están usando valores RGBA estáticos que no responden al sistema de temas de la aplicación y repiten propiedades que Tailwind ya expone de forma eficiente. Además, el `.glow-primary` y la clase `studio-glow` violan las reglas estrictas de diseño de la marca (cero "neon glows" o drop shadows por defecto).
- **Refactorización:**
  Eliminar del archivo CSS global y aplicar directamente las utilidades de Tailwind en los componentes:
  ```tsx
  // Para el Glass Panel (reemplazando .glass-panel)
  className="bg-card/70 backdrop-blur-md border border-border/50"

  // El uso de .glow-primary debe descartarse en favor de un enfoque más sutil
  ```

### 3. PLAN DE MIGRACIÓN Y COMPATIBILIDAD CON TAILWIND CSS V4

**Análisis de la Arquitectura Actual:**
- **Ruta de los archivos:** `tailwind.config.ts`, `postcss.config.mjs`, `package.json`
- El proyecto actualmente usa Tailwind v3.4.19 con dependencias de PostCSS. Existen graves inconsistencias de tokens de diseño entre `globals.css` (usa un sistema de variables HSL `221 47% 43%`) y `tailwind.config.ts` (usa hexadecimales crudos `#0022FF` y un `zinc-950` duplicado).

**Estrategia de Migración a v4:**
1. **Actualización del Compilador:** Sustituir la dependencia clásica de `tailwindcss` por el nuevo paquete `@tailwindcss/postcss` en Vite/Next. Actualizar `postcss.config.mjs` para usar el nuevo plugin de v4.
2. **Despliegue del directivo `@theme`:** Eliminar por completo el archivo `tailwind.config.ts` y migrar todos sus tokens estáticos al esquema declarativo de CSS Variables de Tailwind v4 en el archivo `globals.css`.

- **Refactorización equivalente en v4 (`src/app/globals.css`):**
  ```css
  @import "tailwindcss";

  @theme {
    --color-background: #f5f7fa;
    --color-foreground: #1a2238;

    /* Consolidar conflictos del primary */
    --color-primary: #3a5ba0;
    --color-primary-foreground: #fffbe6;

    --color-zinc-950: #09090b;

    /* Migración de fonts desde config antiguo */
    --font-sans: var(--font-geist), sans-serif;
    --font-display: var(--font-outfit), sans-serif;
    --font-mono: var(--font-jetbrains), monospace;

    /* Migración de border radius */
    --radius-2xl: 1rem;
    --radius-xl: 0.75rem;
    --radius-lg: 0.5rem;
  }
  ```

### 4. PROPUESTA DE OPTIMIZACIÓN Y SISTEMATIZACIÓN

**Unificación de "Design Tokens" y Resolución de Inconsistencias de Marca:**
- **Razón técnica:** Actualmente hay dos sistemas de tokens colisionando de forma perjudicial. Por un lado, `tailwind.config.ts` define colores de base oscura y primaria agresiva (`#0022FF`), y `globals.css` define variables HSL basadas en azul claro. Adicionalmente, se detectan sombras que actúan como "glows" de neón que atentan contra la strict UI policy del proyecto que exige estética asimétrica, glassmorfismo y "Zinc-950/Off-Black" en lugar de negros crudos o luces neón.
- **Plan de Refactorización:**
  1. **Auditoría de Componentes Aislados:** Todo componente bajo la ruta `src/components/homenew` debe refactorizarse para sustituir sombras artificiales (`glow-primary` o `shadow-studio-glow`) usando en su defecto bloques asimétricos y bordes sutiles definidos con variables del sistema (`border-border/40`).
  2. **Primitivas Controladas:** Para componentes como `chart.tsx`, `progress.tsx` y `sidebar.tsx` que presentan alta manipulación de estilo en línea, se debe establecer una variante a través de CVA (Class Variance Authority) y `tailwind-merge` para que toda mutación se procese estáticamente sin inflar los nodos del DOM de React con el prop estático `style`.
  3. **Corrección de Espacios Restantes:** Mapear cualquier clase como `min-h-screen` o `h-screen` en todo el repositorio y convertirlas obligatoriamente al token `min-h-[100dvh]` según marcan los agentes internos del repositorio en `.agents/skills/design-taste-frontend`.
