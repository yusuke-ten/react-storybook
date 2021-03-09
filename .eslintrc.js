module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'import'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-console': 0,
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'sibling',
              'parent',
              'index',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'react/prop-types': 0,
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        ],
        'react/jsx-sort-props': [
          2,
          {
            callbacksLast: true,
            shorthandFirst: true,
            reservedFirst: true,
          },
        ],
        'react-hooks/exhaustive-deps': 0,
      },
    },
  ],
};
