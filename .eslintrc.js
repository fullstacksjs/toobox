const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    typescript: {
      parserProject: './tsconfig.eslint.json',
    },
    test: true,
  },
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
});
