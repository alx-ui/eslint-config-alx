module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'eslint-plugin-import-helpers',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      "semi": true,
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          '/^react/',
          'module',
          '/^pages/',
          '/^components/',
          '/^utils/',
          '/^contexts/',
          '/^hooks/',
          '/^axios/',
          '/^services/',
          '/^styles/',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'camelcase': 'off',
    'semi': 'off',
    'eqeqeq': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.tsx'] }],
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-unneeded-ternary': 'error',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/jsx-key': 'off',
    'consistent-return': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'prefer-promise-reject-errors': 'off',
    'radix': 'off',
    'react/display-name': 'off',
    'func-names': 'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}