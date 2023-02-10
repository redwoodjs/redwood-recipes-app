const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['../src/**/*.{js,jsx,ts,tsx}'],
  },
  theme: {
    fontFamily: {
      fancy: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
