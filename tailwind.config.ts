import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionTimingFunction: {
        'linear': 'var(--easing__linear)',
        'enter': 'var(--easing__enter)',
        'leave': 'var(--easing__leave)',
        'transition': 'var(--easing__transition)',
        'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)', // Custom from image
        'ease-out': 'cubic-bezier(0.5, 0, 0, 1)', // Custom from image
      },
      transitionDuration: {
        '125': 'var(--duration__125)',
        '333': 'var(--duration__333)',
        '500': 'var(--duration__500)',
        '700': 'var(--duration__700)',
        '788': 'var(--duration__788)',
        '1000': 'var(--duration__1000)',
        'non-motion': 'var(--duration__non-motion)',
        'micro': 'var(--duration__micro)',
        'micro-fast': 'var(--duration__micro-fast)',
        'surface': 'var(--duration__surface)',
        'surface-slow': 'var(--duration__surface-slow)',
        'faster': 'var(--duration__125)', // Custom motion timing
        'fastest': 'var(--duration__125)',
        'slow': 'var(--duration__788)',
        'slowest': 'var(--duration__1000)',
      },
    },
  },
  plugins: [],
};
export default config;

