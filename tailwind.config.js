/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(#3b3a4e, #272733)',
      }),
      boxShadow: {
        'custom-light': '0 0 5px 2px deepskyblue',
        'custom-dark': 'inset 0 5px 4px 0 #424151, 0 4px 15px 0 #0f0e17',
      },
      transitionProperty: {
        'left': 'left',
        'transform': 'transform',
      },
    }
  },
  plugins: [],
}

