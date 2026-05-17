/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary), <alpha-value>)",
        surface: "rgba(var(--color-surface), <alpha-value>)",
        "surface-elevated": "rgba(var(--color-surface-elevated), <alpha-value>)",
        ink: "rgba(var(--color-ink), <alpha-value>)",
        gold: "rgba(var(--color-gold), <alpha-value>)",
        sage: "rgba(var(--color-sage), <alpha-value>)",
        terracotta: "rgba(var(--color-terracotta), <alpha-value>)",
        muted: "rgba(var(--color-muted), <alpha-value>)",
        border: "rgba(var(--color-border), <alpha-value>)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        48: '48px',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        gold: 'var(--shadow-gold)',
      },
      borderRadius: {
        lg: '16px',
        md: '8px',
        full: '50%',
      },
      maxWidth: {
        '1200': '1200px',
      }
    },
  },
  plugins: [],
}
