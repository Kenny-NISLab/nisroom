module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#a7f3d0',
        secondary: '#fef3c7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
