import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  plugins: [tailwindcssAnimate],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Agrinvest Brand Colors (exact from brand guide)
        'agrinvest': {
          'green': {
            DEFAULT: '#81c141',
            50: '#f5faed',
            100: '#e8f4d5',
            200: '#d3eab0',
            300: '#b5db80',
            400: '#9bc958',
            500: '#81c141',
            600: '#6aa332',
            700: '#547f2a',
            800: '#456626',
            900: '#3b5624',
            950: '#1d2f10',
          },
          'blue': {
            DEFAULT: '#006683',
            50: '#f0f9fc',
            100: '#e0f2f8',
            200: '#c1e5f1',
            300: '#93d1e6',
            400: '#5db4d6',
            500: '#3a98c4',
            600: '#2b7ca6',
            700: '#266387',
            800: '#245370',
            900: '#006683',
            950: '#002d3a',
          },
          'gray': {
            DEFAULT: '#58595b',
            50: '#f6f6f7',
            100: '#eeeeef',
            200: '#d9d9dc',
            300: '#b8b9bd',
            400: '#91929a',
            500: '#74757d',
            600: '#58595b',
            700: '#51525a',
            800: '#46474d',
            900: '#3e3f43',
            950: '#27282b',
          }
        },
        // Enhanced legacy aliases with full color scales
        'agrinvest-green': {
          DEFAULT: '#81c141',
          50: '#f5faed',
          100: '#e8f4d5',
          200: '#d3eab0',
          300: '#b5db80',
          400: '#9bc958',
          500: '#81c141',
          600: '#6aa332',
          700: '#547f2a',
          800: '#456626',
          900: '#3b5624',
        },
        'agrinvest-blue': {
          DEFAULT: '#006683',
          50: '#f0f9fc',
          100: '#e0f2f8',
          200: '#c1e5f1',
          300: '#93d1e6',
          400: '#5db4d6',
          500: '#3a98c4',
          600: '#2b7ca6',
          700: '#266387',
          800: '#245370',
          900: '#006683',
        },
        'agrinvest-gray': {
          DEFAULT: '#58595b',
          50: '#f6f6f7',
          100: '#eeeeef',
          200: '#d9d9dc',
          300: '#b8b9bd',
          400: '#91929a',
          500: '#74757d',
          600: '#58595b',
          700: '#51525a',
          800: '#46474d',
          900: '#3e3f43',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
      },
      boxShadow: {
        'soft': '0 4px 20px -3px rgba(0, 0, 0, 0.08), 0 12px 25px -2px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px -5px rgba(0, 0, 0, 0.12), 0 20px 35px -7px rgba(0, 0, 0, 0.08)',
        'large': '0 15px 50px -8px rgba(0, 0, 0, 0.15), 0 25px 60px -10px rgba(0, 0, 0, 0.1)',
        'premium': '0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.08), 0 16px 56px rgba(0, 0, 0, 0.12)',
        'brand': '0 8px 35px -5px rgba(129, 193, 65, 0.25), 0 4px 15px -3px rgba(129, 193, 65, 0.1)',
        'brand-blue': '0 8px 35px -5px rgba(0, 102, 131, 0.25), 0 4px 15px -3px rgba(0, 102, 131, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #81c141 0%, #006683 100%)',
        'gradient-brand-vertical': 'linear-gradient(180deg, #81c141 0%, #006683 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(129, 193, 65, 0.1) 0%, rgba(0, 102, 131, 0.1) 100%)',
        'gradient-brand-radial': 'radial-gradient(circle at center, rgba(129, 193, 65, 0.15) 0%, rgba(0, 102, 131, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  }
} satisfies Config

export default config
