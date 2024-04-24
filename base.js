const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
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
    'dist/',
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        'no-duplicate-imports': 'warn',
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/no-explicit-any': 'warn',
        'camelcase': 'warn',
        'no-console': 'error',
        'no-param-reassign': 'error',
        'dot-notation': 'warn',
        'eqeqeq': [
          'warn',
          'always',
          {
            null: 'ignore',
          },
        ],
        'no-else-return': [
          'warn',
          {
            allowElseIf: false,
          },
        ],
        'prefer-arrow-callback': 'error',
        'no-lonely-if': 'warn',
        'no-undef-init': 'off',
        'no-lone-blocks': 'error',
        'no-unsafe-optional-chaining': [
          'warn',
          {
            disallowArithmeticOperators: true,
          },
        ],
        'no-unreachable': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'warn',
        'no-unneeded-ternary': [
          'warn',
          {
            defaultAssignment: false,
          },
        ],
        'no-nested-ternary': 'error',
        'no-unused-expressions': [
          'error',
          {
            allowTernary: true,
            allowShortCircuit: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': [
          'warn',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
          },
        ],
        'new-cap': 'warn',
        'object-shorthand': [
          'warn',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'one-var': ['warn', 'never'],
        'operator-assignment': 'warn',
        'prefer-const': [
          'warn',
          {
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-destructuring': [
          'warn',
          {
            AssignmentExpression: {
              array: true,
              object: false,
            },
            VariableDeclarator: {
              array: false,
              object: true,
            },
          },
        ],
        'no-async-promise-executor': 'error',
        'prefer-exponentiation-operator': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-template': 'warn',
        'no-template-curly-in-string': 'warn',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 'warn',
        'sort-keys-fix/sort-keys-fix': 'warn',
        'import/extensions': 'off',

        'spaced-comment': [
          'warn',
          'always',
          {
            block: {
              balanced: true,
              exceptions: ['-', '+'],
              markers: ['=', '!', ':', '::'],
            },
            line: {
              exceptions: ['-', '+'],
              markers: ['=', '!', '/'],
            },
          },
        ],
        'strict': ['warn', 'never'],
      },
    },
  ],
};
