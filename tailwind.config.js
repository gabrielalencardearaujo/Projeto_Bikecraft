/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
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
      poppins: ['poppins', 'sans-serif'],
      roboto: ['roboto', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}

