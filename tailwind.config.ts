import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep trust navy — the primary surface and every headline
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Medical ocean blue — icons, accents, the live indicators
        accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        ink: {
          DEFAULT: "#1e293b",
          soft: "#475569",
          faint: "#64748b",
        },
        cream: "#f8fafc",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,.04), 0 12px 32px -12px rgba(15,23,42,.08)",
        lift: "0 2px 4px rgba(15,23,42,.05), 0 24px 48px -20px rgba(15,23,42,.14)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        /* the trace sweeping left to right across the ECG paper */
        "ecg-sweep": {
          from: { strokeDashoffset: "var(--ecg-len)" },
          to: { strokeDashoffset: "0" },
        },
        /* the bright dot riding the end of the trace */
        "ecg-blip": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "6%": { opacity: "1" },
          "94%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "70%": { transform: "scale(1.9)", opacity: "0" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "-160% 0" },
          to: { backgroundPosition: "260% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,1,.3,1) both",
        float: "float 6s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        "ecg-sweep": "ecg-sweep 4s linear infinite",
        "ecg-blip": "ecg-blip 4s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(.24,.6,.35,1) infinite",
        shimmer: "shimmer 2.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
