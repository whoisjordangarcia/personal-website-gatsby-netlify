module.exports = {
  'lint-staged': {
    'src/**/*.{ts,tsx}': ['eslint --fix', 'git add'],
    'src/**/*.scss': ['stylelint --syntax scss --fix', 'git add'],
  },
}
