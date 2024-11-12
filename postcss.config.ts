// postcss.config.js
module.exports = {
    plugins: {
      autoprefixer: {},          // Automatically add vendor prefixes
      cssnano: { preset: 'default' } // Minify CSS in production
    }
  }
  