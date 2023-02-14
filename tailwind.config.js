/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'cafe': 'url("/assets/cafe.jpg")',
      },
      animation: {
        'spin-slow': 'spin 240s linear infinite'
      },
      spacing: {
        '128': '32rem',
        'ludacris': '60rem'
      }
    },
  },
  plugins: [],
}
