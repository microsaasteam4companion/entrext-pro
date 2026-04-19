/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#484848",
        "error-dim": "#d73357",
        "primary-fixed-dim": "#dddddd",
        "error-container": "#a70138",
        "surface-container-high": "#1f1f1f",
        "on-surface-variant": "#ababab",
        "on-primary-fixed-variant": "#616161",
        "tertiary": "#4A749B",
        "on-secondary": "#455367",
        "on-secondary-fixed": "#324053",
        "tertiary-fixed-dim": "#3d6284",
        "on-tertiary": "#ffffff",
        "primary-dim": "#ebebeb",
        "on-secondary-fixed-variant": "#4e5c71",
        "on-secondary-container": "#c3d1e9",
        "secondary": "#d5e3fc",
        "tertiary-dim": "#3d6284",
        "inverse-primary": "#5f5f5f",
        "on-tertiary-container": "#f0f4f8",
        "on-surface": "#ffffff",
        "surface-dim": "#0e0e0e",
        "on-tertiary-fixed": "#ffffff",
        "surface-bright": "#2c2c2c",
        "primary": "#f9f9f9",
        "tertiary-container": "rgba(74, 116, 155, 0.4)",
        "on-error": "#490013",
        "secondary-container": "#3a485b",
        "surface": "#0e0e0e",
        "surface-container-highest": "#262626",
        "secondary-fixed-dim": "#c7d5ed",
        "background": "#0e0e0e",
        "surface-container-low": "#131313",
        "surface-tint": "#f9f9f9",
        "on-primary-fixed": "#444444",
        "secondary-fixed": "#d5e3fc",
        "tertiary-fixed": "#4A749B",
        "primary-container": "#a0a0a0",
        "surface-container": "#191919",
        "outline": "#757575",
        "primary-fixed": "#ebebeb",
        "secondary-dim": "#c7d5ed",
        "on-tertiary-fixed-variant": "#f0f4f8",
        "on-primary": "#5f5f5f",
        "surface-variant": "#262626",
        "error": "#ff6e84",
        "on-background": "#ffffff",
        "inverse-surface": "#f9f9f9",
        "inverse-on-surface": "#555555",
        "on-primary-container": "#232323",
        "on-error-container": "#ffb2b9",
        "surface-container-lowest": "#000000"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Epilogue"],
        body: ["Manrope"],
        label: ["Inter"]
      }
    },
  },
  plugins: [],
}


