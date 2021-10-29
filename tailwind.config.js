module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#0F1424',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'profile': '#5847EB',
      }),
      fontFamily: {
        'rubik': ["Rubik"]
      },
      textColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'paleBlue': '#BDC1FF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
