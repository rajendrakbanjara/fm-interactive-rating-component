/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orangeCustom':'hsl(25, 97%, 53%)',
        'lightGrey' : 'hsl(217, 12%, 63%)',
        'MediumGrey': 'hsl(216, 12%, 54%)',
        'DarkBlue': 'hsl(213, 19%, 18%)',
        'VeryDarkBlue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
      'Overpass' : ['Overpass'],
      'Fraunces' : ['Fraunces'],
      }
    },
  },
  plugins: [],
}

