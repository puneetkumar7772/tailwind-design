/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', './src/**/*.ts',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

