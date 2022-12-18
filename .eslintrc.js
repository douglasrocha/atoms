module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['./.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'prettier'],
  rules: {
    'block-scoped-var': 'error',
    camelcase: 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    curly: ['error', 'all'],
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { code: 100, ignoreComments: true }],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-extra-semi': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['warn', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
