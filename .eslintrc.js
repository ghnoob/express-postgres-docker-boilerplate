module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/order': 'warn',
  },
};
