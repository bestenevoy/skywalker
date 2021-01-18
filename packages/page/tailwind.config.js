const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "base": 1,
        "dialog": 10,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cyan: colors.cyan,
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}