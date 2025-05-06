/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF5F7",
          100: "#FFEDF2",
          200: "#FFD1E0",
          300: "#FFB5CE",
          400: "#FF7DAA",
          500: "#FADADD", // main primary
          600: "#E67C86",
          700: "#B87F7F", // accent
          800: "#99364F",
          900: "#7D2941",
        },
        secondary: {
          50: "#FFFAF5",
          100: "#FFF5F2", // beige/cream
          200: "#FBE5D9",
          300: "#F8D5C0",
          400: "#F3B68E",
          500: "#EE975C",
          600: "#D68753",
          700: "#B76E36",
          800: "#8F5328",
          900: "#76441F",
        },
        champagne: {
          50: "#FEFBF9",
          100: "#FDF7F3",
          200: "#FBEAE2",
          300: "#F9DDD0",
          400: "#F6E3E3", // champagne blush
          500: "#F0B7AD",
          600: "#D8A59C",
          700: "#B48982",
          800: "#906C67",
          900: "#765855",
        },
        dark: {
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#2E2E2E", // text color
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.8s ease-in-out",
        "slide-in-right": "slideInRight 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
