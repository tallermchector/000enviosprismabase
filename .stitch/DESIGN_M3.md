---
name: Material Design 3 Definitive Rulebook
colors:
  surface: '#FEF7FF'
  on-surface: '#1D1B20'
  surface-variant: '#E7E0EC'
  on-surface-variant: '#49454F'
  primary: '#6750A4'
  on-primary: '#FFFFFF'
  primary-container: '#EADDFF'
  on-primary-container: '#21005D'
  secondary: '#625B71'
  on-secondary: '#FFFFFF'
  secondary-container: '#E8DEF8'
  on-secondary-container: '#1D192B'
  tertiary: '#7D5260'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#FFD8E4'
  on-tertiary-container: '#31111D'
  error: '#BA1A1A'
  on-error: '#FFFFFF'
  error-container: '#FFDAD6'
  on-error-container: '#410E0B'
  outline: '#79747E'
  outline-variant: '#CAC4D0'
  shadow: '#000000'
  scrim: '#000000'
  background: '#FEF7FF'
  foreground: '#1D1B20'
  destructive: '#BA1A1A'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 57px
    fontWeight: '400'
    lineHeight: '64px'
    letterSpacing: -0.25px
  display-md:
    fontFamily: Montserrat
    fontSize: 45px
    fontWeight: '400'
    lineHeight: '52px'
    letterSpacing: 0px
  display-sm:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '44px'
    letterSpacing: 0px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '40px'
    letterSpacing: 0px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '32px'
    letterSpacing: 0px
  headline-md:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '36px'
    letterSpacing: 0px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '32px'
    letterSpacing: 0px
  title-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '28px'
    letterSpacing: 0px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '24px'
    letterSpacing: 0.15px
  title-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '20px'
    letterSpacing: 0.1px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '24px'
    letterSpacing: 0.5px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '20px'
    letterSpacing: 0.25px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '16px'
    letterSpacing: 0.4px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '20px'
    letterSpacing: 0.1px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '16px'
    letterSpacing: 0.5px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '16px'
    letterSpacing: 0.5px
rounded:
  none: 0
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  x1: 4px
  x2: 8px
  x3: 12px
  x4: 16px
  x6: 24px
  x8: 32px
---

# My Design System: The Definitive Rulebook

This document is the **single source of truth** for the visual and interactive design of all products, regardless of the target platform (Web, Android, iOS, or otherwise). All design and engineering efforts MUST adhere to these rules without deviation. This is not a set of guidelines; it is a set of mandates.

Platform-specific implementations (Android XML Themes, Web CSS Custom Properties, iOS Schemes) are considered translation layers. Their sole purpose is to map native platform capabilities to the abstract tokens defined herein.

## 1. Core Theming Contract

All platforms MUST implement a centralized theming mechanism. This mechanism, hereafter referred to as the "Theme," is a container for all design tokens: Color, Typography, Shape, and Spacing. Components MUST source their styling from this Theme and NEVER use hard-coded values.

## 2. Typography System (The Canon)

This is the ONLY approved type scale. All text elements in the user interface MUST be styled using one of the following roles. Font sizes are defined canonically in pixels (`px`) and MUST be translated to the appropriate platform-specific density-independent unit (`sp` for Android, `rem` for Web, `pt` for iOS). `16px = 16sp = 1rem = 16pt`.

### Font Families

-   **Brand Font**: Montserrat. Used for Display and Headline styles.
-   **Plain Font**: Inter. Used for Title, Body, and Label styles.
-   **Weights**: `Regular` maps to `400`. `Medium` maps to `500`.

## 3. Color System (The Palette)

All colors used in the UI MUST be drawn from the semantic roles. No other colors are permitted. These roles are defined for both light and dark themes.

### Platform Token Naming Convention
-   **Android**: `colorPrimary`, `colorOnPrimary`
-   **Web**: `--md-sys-color-primary`, `--md-sys-color-on-primary`
-   **iOS**: `primaryColor`, `onPrimaryColor`
-   **Canonical**: `color-primary`, `color-on-primary`

## 4. Shape System (The Geometry)

Component shapes are defined by their corner radius. All shapes MUST use a circular ("rounded") corner treatment.

## 5. Spacing & Layout (The Grid)

All spacing, padding, and margins MUST be a multiple of the base unit.

-   **Base Unit**: `4dp / 4px / 4pt`
-   **Minimum Touch Target**: All interactive elements MUST have a minimum touch target size of `48x48` dp/px/pt.

## 6. Component Token Mapping (The Implementation Mandates)

The following sections define the non-negotiable token mappings for core components. Any new component MUST have a similar mapping defined and approved.

### Component: Filled Button

-   **Description**: A high-emphasis button with a solid background fill.
-   **Typography**: MUST use `typescale-label-large`.
-   **Color (Enabled state)**:
    -   Container Background: `color-primary`
    -   Content (Text/Icon): `color-on-primary`
-   **Color (Disabled state)**:
    -   Container Background: `color-on-surface` with 12% opacity.
    -   Content (Text/Icon): `color-on-surface` with 38% opacity.
-   **Shape**: MUST use `shape-corner-full`.
-   **Spacing**:
    -   Height: Minimum 40 units.
    -   Padding (Horizontal): 24 units.
    -   Padding (Icon Present): 16 units leading, 24 units trailing. Icon gap is 8 units.
-   **Elevation**:
    -   Default State: 0dp shadow.
    -   Hovered/Focused State: 2dp shadow.
    -   Pressed State: 0dp shadow.

### Component: Outlined Card

-   **Description**: A medium-emphasis container for content, delineated by an outline.
-   **Typography**: Content within the card MUST use the appropriate typography roles (e.g., `typescale-title-medium`, `typescale-body-medium`).
-   **Color**:
    -   Container Background: `color-surface`.
    -   Content (Text/Icon): `color-on-surface`.
    -   Outline: `color-outline`.
-   **Shape**: MUST use `shape-corner-medium` (12 units).
-   **Spacing**:
    -   Internal Padding: 16 units on all sides.
    -   External Margin: 16 units, unless part of a collection.
-   **Elevation**: 0dp shadow in all states. The outline provides visual separation.
