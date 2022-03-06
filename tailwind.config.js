module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.25rem']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
