/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      './src/html/*.{html,js}',
    ],
  }, 
  theme: {
    colors: {
      cinza: {
        1: '#fff',
        2: '#E6E6E6',
        3: '#CFCFCF',
        4: '#B8B8B8',
        5: '#A1A1A1',
        6: '#8A8A8A',
        7: '#737373',
        8: '#5C5C5C',
        9: '#454545',
        10: '#2E2E2E',
        11: '#171717',
        12: '#000',
      },

      primary: {
        1: '#FFBB00',
        2: '#EBAA13',
        3: '#BF7F00',
        4: '#805306',
        5: '#4D2E0F',
      }
    },
    
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['roboto', 'sans-serif'],
      merriweather: ['Merriweather', 'serif'],
    },

    extend: {},
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '840px',
      // => @media (min-width: 840px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
  },
  plugins: [],
}

