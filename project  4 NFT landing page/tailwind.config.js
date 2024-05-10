/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      screens:{
        "vs" : "200px",
        fs:'420px',
        fc: '370px'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}

