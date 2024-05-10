/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      screens:{
        "vs" : "200px",
        fs:'420px'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}

