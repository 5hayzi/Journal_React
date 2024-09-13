/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat : ["Montserrat", "sans-serif"],
        raleway : ["Raleway", "sans-serif"],
      },
      animation:{
        blob: "blob 15s infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px,0px) scale(1)",
          },
          "33%":{
            transform:"translate(300px,-50px) scale(1.3)",
          },
          "58%":{
            transform:"translate(-300px,-100px) scale(1.3)",
          },
          "66%":{
            transform:"translate(-70px,100px) scale(0.9)",
          },
          "100%":{
            transform:"translate(0px,0px) scale(1)",
          },
        },
      },
    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},},
  },
  plugins: [
  ],
}

