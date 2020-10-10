const tailwindcss = require('tailwindcss');

module.exports = {
  purge: {
      enabled: false,
      content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.js',
      './src/*.html',
      './src/*.js'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}
