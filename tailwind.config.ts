import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        surface: '#13131b',
        'surface-dim': '#13131b',
        'surface-bright': '#393842',
        'surface-container-lowest': '#0d0d16',
        'surface-container-low': '#1b1b23',
        'surface-container': '#1f1f28',
        'surface-container-high': '#292932',
        'surface-container-highest': '#34343d',
        'on-surface': '#e4e1ed',
        'on-surface-variant': '#c5c5db',
        'inverse-surface': '#e4e1ed',
        'inverse-on-surface': '#302f39',
        outline: '#8f8fa4',
        'outline-variant': '#444557',
        'surface-tint': '#bdc2ff',
        primary: {
          DEFAULT: '#0022FF',
          foreground: '#bbc1ff',
        },
        'on-primary': '#0012a1',
        'primary-container': '#0022ff',
        'on-primary-container': '#bbc1ff',
        'inverse-primary': '#2b3fff',
        secondary: {
          DEFAULT: '#fff9ef',
          foreground: '#3a3000',
        },
        'on-secondary': '#3a3000',
        'secondary-container': '#ffdb3c',
        'on-secondary-container': '#725f00',
        tertiary: {
          DEFAULT: '#00dbe9',
          foreground: '#00363a',
        },
        'on-tertiary': '#00363a',
        'tertiary-container': '#005b61',
        'on-tertiary-container': '#00dae7',
        error: {
          DEFAULT: '#ffb4ab',
          foreground: '#690005',
        },
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        background: '#13131b',
        'on-background': '#e4e1ed',
        'surface-variant': '#34343d',
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        base: "8px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "h-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "h-scroll": "h-scroll 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
        display: ["Anybody", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config