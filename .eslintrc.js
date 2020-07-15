module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'import/no-extraneous-dependencies': 2,
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'import/extensions': 2,
    'import/no-unresolved': 2,
    'react/jsx-handler-names': 'error',
    'react/jsx-one-expression-per-line': 'off',
  },
  globals: {
    fetch: false,
  },
};
