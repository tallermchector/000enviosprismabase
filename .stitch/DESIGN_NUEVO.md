---
name: Envios DosRuedas
colors:
  surface: '#FFFFFF'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffc329'
  on-secondary-container: '#6f5100'
  tertiary: '#00246b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00389a'
  on-tertiary-container: '#8da9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#f9bd22'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#F8FAFC'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  foreground: '#0F172A'
  destructive: '#EF4444'
  amber-highlight: '#FBC107'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is anchored in **Corporate Modernism**, emphasizing institutional trust, efficiency, and human-centric reliability. It moves away from the "sci-fi" aesthetics found in some logistics platforms, opting instead for a structured, professional, and high-clarity environment. 

The visual language projects authority through deep corporate blues and transparency through pure white surfaces and ample "air" (whitespace). The emotional response should be one of absolute certainty—users must feel that their cargo is in safe, professional hands. The style is characterized by clean information architecture, geometric precision, and a focus on extreme legibility for high-stakes logistical data.

## Colors
The palette is built on a foundation of **institutional stability**. 

- **Primary Blue (#1E3A8A):** Used for structural elements, headers, and navigation to establish authority and trust.
- **Action Amber (#FBBF24):** Reserved exclusively for conversion points and urgent status indicators. It provides high-contrast visibility against the blue and white foundations.
- **Vibrant Accent (#2563EB):** Utilized for interactive triggers, text links, and active states to provide a sense of digital modernism.
- **Neutrals:** The background uses a soft slate-gray (#F8FAFC) to eliminate the harshness of pure white while maintaining a clean, professional canvas. Content resides on pure white (#FFFFFF) surfaces to denote clarity and transparency.

## Typography
The typography strategy prioritizes structure and legibility over decorative flair. 

**Montserrat** is used for headlines to provide a geometric, monumental feel that communicates corporate strength. **Inter** is the workhorse for all UI and body text, chosen for its exceptional readability in data-heavy contexts like tracking tables and form fields. 

Key data points—such as tracking numbers and pricing—should be set in Montserrat with a semi-bold weight to ensure they stand out as critical information. Generous line-heights are maintained throughout to ensure ease of scanning.

## Layout & Spacing
The layout follows a **structured fluid grid** system. Content is organized into a 12-column grid on desktop to facilitate complex logistical dashboards, scaling down to a single column on mobile.

The "Air" philosophy dictates generous padding within cards and between sections (using `stack-lg`). This prevents information density from becoming overwhelming. Left-alignment is the default for all textual data to optimize the reading "F-pattern," with centered layouts reserved only for marketing-focused hero banners.

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows** to create a sense of organized hierarchy. 

Depth is conveyed through:
1.  **Level 0 (Background):** The neutral slate-gray base.
2.  **Level 1 (Surface):** White cards and containers, which use a subtle, extra-diffused shadow (low opacity, 8-12% alpha) to appear slightly lifted.
3.  **Level 2 (Interactive):** Hover states on cards or primary buttons, where the shadow increases in spread to indicate tactility.

Avoid heavy borders or high-contrast outlines; rely on the contrast between the white surface and the slate background to define boundaries.

## Shapes
The shape language is **Structured and Approachable**. 

We utilize "Rounded" (0.5rem) corners for standard UI elements like buttons, input fields, and small cards. This creates a professional yet modern feel. Larger containers, such as service tier cards or dashboard panels, should utilize `rounded-lg` (1rem) to soften the overall corporate aesthetic and make the interface feel more human-centric. Buttons should never be fully pill-shaped, as the structured corner maintains the "logistics/grid" identity.

## Components

### Buttons
- **Primary:** Solid Action Amber (#FBBF24) with Foreground (#0F172A) text. Use for the main call-to-action (e.g., "Cotizar Envío").
- **Secondary:** Solid Corporate Blue (#1E3A8A) with White text. Use for navigational actions.
- **Tertiary/Outline:** Corporate Blue border and text with a transparent background.

### Cards & Tracking
- **Service Cards:** Pristine white background, `rounded-lg` corners, and a `shadow-md`. Content should be left-aligned with clear typographic hierarchy.
- **Tracking Timelines:** Use Corporate Blue for completed steps and a muted gray for pending steps. Icons should be minimalist line-art (2px stroke).

### Form Inputs
- **Fields:** Clean white background with a subtle 1px border (#CBD5E1). 
- **Focus State:** A crisp 2px ring using the Vibrant Accent (#2563EB) color.

### Status Chips
- **Success:** Soft green background with dark green text.
- **In-Transit:** Soft blue background with Corporate Blue text.
- **Alert/Delayed:** Action Amber background with dark text.

### Navigation
- **Top Bar:** Solid Corporate Blue or Pure White with a bottom border. High contrast is essential for navigation links. Use Montserrat for menu items to maintain the authoritative tone.