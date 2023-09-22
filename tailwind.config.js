const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
