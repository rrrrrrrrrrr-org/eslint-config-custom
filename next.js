const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['./react.js'],
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
        'no-duplicate-imports': 'warn',
        // 'import/no-extraneous-dependencies': [
        //   'warn',
        //   { devDependencies: ['apps/*/next.config.js'] },
        // ],
      },
    },
  ],
};
