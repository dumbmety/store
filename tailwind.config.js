module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Manrope',
    },
    extend: {
      colors: {
        black: '#25252D',
        purple: '#7047EA',
        green: '#2DCA72',
        gray: '#9696A7',
        cool: '#E6E6EA',
        light: '#F1F1F4',
        white: '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
