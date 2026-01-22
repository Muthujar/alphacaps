import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        construction: {
          primary: '#0F172A',      // Slate 900
          secondary: '#E2E8F0',    // Slate 200 (Concrete Base)
          accent: '#2563EB',       // Blue 600
          orange: '#F97316',       // Orange 500
          dark: '#0F172A',         // Slate 900
          light: '#CBD5E1',        // Slate 300 (Steel Grey)
          gray: '#64748B',         // Slate 500
          stone: '#94A3B8',        // Slate 400 (Stone)
          steel: '#334155',        // Slate 700
          surface: '#F1F5F9',      // Slate 100 (Still light but not white)
          muted: '#E2E8F0',        // Slate 200
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;


