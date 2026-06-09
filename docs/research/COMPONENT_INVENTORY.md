# Component Inventory

## Radix / Shadcn UI Primitives (Found in `src/components/ui/`)

The application uses an extensive collection of accessible Radix UI primitives styled with Tailwind CSS, mostly generated via shadcn/ui.

### Core Primitives Present

- Accordion
- Alert, Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Form
- Hover Card
- Input, Input OTP
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner (Toast)
- Switch
- Table
- Tabs
- Textarea
- Toast, Toaster
- Toggle, Toggle Group
- Tooltip

### Highlight: Card (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`)

- **Structure:** Wrapper div with sub-components for header, title, description, content area, and footer.
- **Styling:** Uses `--radius-brand` for border radius, `bg-surface-container`, `text-on-surface`, and `border-outline-variant`.

### Highlight: Button (`Button`, `buttonVariants`)

- **Structure:** Uses Radix `Slot` for `asChild` composition or standard `button`.
- **Variants:**
  - `default`: Primary blue background.
  - `destructive`: Error red background.
  - `outline`: Transparent with border, hover to `bg-surface-bright`.
  - `secondary`: Secondary gold background.
  - `ghost`: Transparent, hover to `bg-surface-bright`.
  - `link`: Primary text with underline.
  - `gradient`: Primary background without borders.
- **Sizes:** `default`, `sm`, `lg`, `icon`.

## Custom Landing Page Components (`src/components/homenew/`)

### OptimizedHeader

- **Name:** OptimizedHeader
- **Structure:** Uses `HeaderContainer` wrapper. Contains a Logo block, desktop navigation (`nav` with `ActiveLink` and `NavDropdown`), and a right-side hub with a phone link and a `MobileMenu`.
- **Interactions:** Hover states on navigation links (background highlight), logo rotation/scaling on hover, sticky/responsive behavior via `MobileMenu`.

### NavDropdown

- **Name:** NavDropdown
- **Structure:** Built on top of Radix UI's `DropdownMenu`. Uses `motion.div` from Framer Motion for the trigger.
- **Variants/States:** Highlights active route based on `usePathname()`.
- **Interactions:** Dropdown content appears on click. Trigger has scale hover/tap effects. Dropdown items have hover backgrounds and structural layout with icons.

### HeroAnimado

- **Name:** HeroAnimado
- **Structure:** Full viewport height (`min-h-[100dvh]`). Composed of `HeroBackground` (parallax/visuals), a main grid layout (text content on left, `HeroVisuals` on right), and a `HeroScrollIndicator`.
- **States:** Heavy use of Tailwind animation utilities (`animate-in`, `fade-in`, `slide-in-from-bottom`) with staggered delays (`delay-200`, `delay-500`, etc.) for entrance animations.
- **Interactions:** Links use group hover effects with sliding gradients and icon translations. Play button has hover scaling and background transition.
