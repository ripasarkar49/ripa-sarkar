/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#583AF8", // Vibrant purple from the button
        secondary: "#00E0FF", // Cyan accent
        "background-light": "#F3F4F6",
        "background-dark": "#050505", // Deep black background
        "surface-dark": "#0A0A0A",
        "surface-card": "#0F0F11",
        "accent-pink": "#E11D48",
        "accent-yellow": "#FACC15",
        "cyan-bright": "#06b6d4",
        "collab-blue": "#3B82F6",
        "collab-green": "#10B981",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(88, 58, 248, 0.5)',
        'glow-strong': '0 0 40px rgba(88, 58, 248, 0.6)',
        'text-glow': '0 0 10px rgba(0, 224, 255, 0.5)',
        'collab-glow': '0 0 30px rgba(59, 130, 246, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
