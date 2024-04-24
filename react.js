const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['./base.js', 'next/core-web-vitals'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        // react 설정
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 'off',
        'react/function-component-definition': [
          'warn',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-boolean-value': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-fragments': 'warn',
        'react/jsx-key': 'warn',
        'react/jsx-no-duplicate-props': [
          'warn',
          {
            ignoreCase: true,
          },
        ],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: true,
            reservedFirst: true,
            shorthandLast: true,
          },
        ],
        'react/no-invalid-html-attribute': 'warn',
        'react/no-unknown-property': [
          'warn',
          {
            ignore: ['sx'],
          },
        ],
        'react/prop-types': 'off',
        'react/self-closing-comp': 'warn',

        'import/no-anonymous-default-export': [
          2,
          {
            allowObject: true,
          },
        ],
      },
    },
  ],
};
