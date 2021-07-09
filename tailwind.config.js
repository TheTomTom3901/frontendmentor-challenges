module.exports = {
  presets: [
    require('./challenges/column-preview-card/theme'),
    require('./challenges/stats-preview-card/theme'),
    require('./challenges/four-card-feature-section/theme'),
    require('./challenges/single-price-grid/theme'),
    require('./challenges/social-proof-section/theme'),
    require('./challenges/intro-with-signup/theme')
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
}
