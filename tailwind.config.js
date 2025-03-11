/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {


      keyframes: {
        slideOut: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutReverse: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        slideInReverse: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },

      animation: {
        slideOut: 'slideOut 0.5s forwards',
        slideIn: 'slideIn 0.5s forwards',
        slideOutReverse: 'slideOutReverse 0.5s forwards',
        slideInReverse: 'slideInReverse 0.5s forwards',
      },

      gap: {
        'custom-x': 'clamp(20px, 2.0833333333vw, 40px)', // Espaciado entre columnas
        'custom-y': 'clamp(40px, 6.25vw, 80px)',       // Espaciado entre filas
      },

      backgroundImage: {
        "back-hero-image": "url('../src/assets/homeImage.jpg')",
      },

      colors: {
        purpleSimo: "#9C0072",
        greenSimo: "#004B51",
        greenSimoV3500: "#76BC21",
        bgButtonSimo: "#DFEDEF",
        bgButtonHoverSimoGreen: "#9FC6CA",
        bgButtonHoverSimoPurple: "#83005C",
        graySimo: "#4D5566",
        grayDarkSimo: "#222937",
        greenSimo500: "#007078",
        greenSimo200: "#9FD6DA",
        greenSimo100: "#DFF3F5",
        graySimo50: "#EEEEEE",
        graySimo100: "#E1E3E5",
        graySimo200: "#C4C6CC",

      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ibm: ['IBM Plex Serif', 'serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px"
      },
    },
  },
  plugins: [],
}