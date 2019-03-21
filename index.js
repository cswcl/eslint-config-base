'use strict';

module.exports = {
  'env': {
    'browser': false,
    'node': true,
    'es6': true,
    'mocha': true,
  },
  'parserOptions': { 'ecmaVersion': 2018 },
  'rules': {
    'max-len': [
      'error',
      {
        'code': 140,
        'tabWidth': 2,
        'comments': 140,
        'ignoreUrls': true,
      },
    ],
    'keyword-spacing': 2,
    'indent': [
      2,
      2,
      {
        'VariableDeclarator': {
          'var': 2,
          'let': 2,
          'const': 3,
        },
        'SwitchCase': 1,
      },
    ],
    'semi': [ 2, 'always' ],
    'no-console': 0,
    'space-before-blocks': 2,
    'prefer-template': 'error',
    'quotes': [ 2, 'single', { 'allowTemplateLiterals': true } ],
    'space-infix-ops': 2,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        'objectsInObjects': false,
        'arraysInObjects': false,
      },
    ],
    'array-bracket-spacing': [ 'error', 'always', { 'singleValue': true } ],
    'no-trailing-spaces': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': true,
        'skipComments': true,
        'skipRegExps': true,
        'skipTemplates': true,
      },
    ],
    'strict': [ 'error', 'global' ],
    'curly': [ 'error', 'all' ],
    'no-var': 'error',
    'one-var': [ 'error', 'never' ],
    'no-buffer-constructor': 2,
    'brace-style': [ 2, '1tbs', { 'allowSingleLine': true } ],
  },
};
