const mergedTheme = [require('./challenges/column-preview-card/theme')].reduce((accTheme, currentTheme) => {
  return Object.entries(currentTheme).reduce((acc, [key, value]) => {
    acc[key] = { ...acc[key], ...value};
    return acc;
  }, accTheme)
}, {})

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: mergedTheme
  },
  variants: {
    extend: {}
  },
  plugins: []
}
