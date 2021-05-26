module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "base": 1,
        "dialog": 10,
      },
      backgroundColor: {
        smoke: '#F2F2F2'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}