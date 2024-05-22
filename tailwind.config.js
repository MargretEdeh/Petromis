/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#345AA1",
        primary:"#EE5B26"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'backgroundimg': "url('src/assets/Images/BgRectangle.png')",
      },
    },
  },
  plugins: [],
}

