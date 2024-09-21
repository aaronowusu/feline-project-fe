/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ribbon:{
          background: '#FFB8EF',
          text: '#773E75', 
          border: '#E7AADA'
        },
        pageBackground: '#F5F5F5',
        card:{
          border: '#C6C6C6',
          text:' #585858',
          button:'#0D8112',
          imageBorder: '#AEAEAE'


        },

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

