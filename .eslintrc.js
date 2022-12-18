module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['./.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'unused-imports'
  ],
  'rules': {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'unused-imports/no-unused-imports': 'error',
  }
};
