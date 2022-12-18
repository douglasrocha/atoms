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
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'padded-blocks': ['warn', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    camelcase: 'error',
    'no-extra-semi': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'block-scoped-var': 'error',
    'max-len': ['warn', { code: 100, ignoreComments: true }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    curly: ['error', 'all'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
