/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/TodoList.js",
    "./src/Components/TodoItem.js",
  ],
  theme: {
    extend: {
      colors:{
        "backG": "#FFC0CB",
        "gold": "#FFD700",
        "red": "#FF4500",
        "green": "#00FF7F",
      },
    },

    screens: {
      'xs': '200px',

      'sm': '408px',

      'md': '768px',
      
      'lg': '1024px',
      
      'xl': '1280px',
     
      '2xl': '1536px',
      
    }

  },
  plugins: [],
}

