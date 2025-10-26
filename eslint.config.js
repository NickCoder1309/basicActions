const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    ignores: ['**/tests/**', '**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      node: true,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'prefer-const': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      complexity: ['error', { max: 10 }],
    },
  },
]);
