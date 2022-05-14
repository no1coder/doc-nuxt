const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {},
    screens: {
      'xs':'0px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // colors: {
    //   // Build your palette here
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   gray: colors.trueGray,
    //   red: colors.red,
    //   blue: colors.sky,
    //   yellow: colors.amber,
    // }
  },
  plugins: [],
};

