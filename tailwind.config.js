/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        primary: {
          DEFAULT: "#073B3A",
          light: "#0A5958",
          dark: "#042726",
        },
        secondary: {
          DEFAULT: "#D0B49F",
          light: "#E6D7CB",
          dark: "#B29073",
        },
        accent: {
          DEFAULT: "#E4A861",
          light: "#F2C18C",
          dark: "#C68A3F",
        },
        success: {
          DEFAULT: "#4CAF50",
          light: "#81C784",
          dark: "#388E3C",
        },
        warning: {
          DEFAULT: "#FF9800",
          light: "#FFB74D",
          dark: "#F57C00",
        },
        error: {
          DEFAULT: "#F44336",
          light: "#E57373",
          dark: "#D32F2F",
        },
        neutral: {
          50: "#F9F9F7",
          100: "#F1F1EF",
          200: "#E4E4E0",
          300: "#D7D7D1",
          400: "#CACAC2",
          500: "#AEAE9E",
          600: "#8E8E7A",
          700: "#6E6E5C",
          800: "#4F4F41",
          900: "#2F2F27",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      height: {
        "screen-90": "90vh",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "palm-pattern":
          "url('https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};
