/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for automatic based on user's system preference
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'h-12': '12em', 
        'h-14':'14em',
        'custom-sm': '200px',
        'custom-lg': '600px',
      },
      width:{
        "custom-width": "600rem",
        "window-size" : "100%"
      },
      screens:{
        "custom-screens":"1070px"
      }
    },
  },
  plugins: [],
}
