# Interaction Patterns

## Micro-Interactions

The application utilizes subtle animations to provide feedback and indicate interactivity.

### Buttons and Links

- **Hover Scale/Translate:** Icons inside links or buttons often translate on hover (e.g., an arrow moving right: `group-hover:translate-x-1 transition-transform`).
- **Background Transitions:** Ghost or outline buttons smoothly transition to a filled/highlighted background on hover (`hover:bg-primary/10`, `hover:bg-surface-bright`).
- **Active States:** Elements visually depress or change color when clicked (e.g., `active:scale-95`).

### Navigation Components

- **Dropdown Triggers (`nav-dropdown.tsx`):** Built with Framer Motion (`motion.div`). The trigger button has a hover scale effect (`whileHover={{ scale: 1.05 }}`) and an active tap effect (`whileTap={{ scale: 0.95 }}`).
- **Logo Interaction:** The main logo features a combined rotation and scale effect on hover (`group-hover:rotate-6 group-hover:scale-110`), adding a playful but constrained dynamism.

## Entrance Animations

Pages and large components use sequenced entrance animations to draw the user's eye.

### Hero Animations (`hero-animado.tsx`)

- Heavy reliance on Tailwind CSS animation utilities (likely from `tailwindcss-animate`).
- **Sequenced Fades/Slides:** Elements slide up and fade in with staggered delays.
  - Heading: `animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200`
  - Subtitle: `animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500`
  - Buttons: `animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700`
- **Continuous Animations:** Uses CSS animations like `animate-ping` for active status indicators (e.g., the pulsing dot on the "Tu Solución Confiable" badge).

## Visual Effects

- **Gradients and Glows:** Use of sliding background gradients inside buttons to create a shine effect on hover.
- **Glassmorphism:** Navigation menus and specific badges utilize semi-transparent backgrounds with backdrop blur (`backdrop-blur-md`, `backdrop-blur-2xl`) over the underlying dark theme to maintain legibility while conveying depth.
- **Drop Shadows:** Text elements in the hero utilize soft, colored drop shadows to mimic glowing neon or cyber effects (`drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]`).
