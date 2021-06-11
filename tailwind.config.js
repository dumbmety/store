module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: 'Inter',
    },
    extend: {
      colors: {
        black: '#25252D',
        purple: '#7047EA',
        green: '#2DCA72',
        // gray: '#9696A7',
        cool: '#E6E6EA',
        light: '#F1F1F4',
        white: '#FFFFFF',
        orange: '#FF4A3B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
