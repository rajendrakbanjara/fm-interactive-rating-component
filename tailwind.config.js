/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orangeCustom':'hsl(25, 97%, 53%)',
        'lightGrey' : 'hsl(217, 12%, 63%)',
      },
      fontFamily: {
      'overpass' : ['Overpass'],
      }
    },
  },
  plugins: [],
}

