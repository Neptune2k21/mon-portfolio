const config = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './tailwind.config.ts'
    },
    autoprefixer: {},
  },
}
module.exports = config