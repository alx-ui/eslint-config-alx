import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import eslintPluginImportX, {
  createNodeResolver,
} from 'eslint-plugin-import-x';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import prettierConfig from './prettier.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'alx/react/ignores',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  eslintPluginReactHooks.configs.flat.recommended,
  eslintPluginJsxA11y.configs.recommended,
  {
    name: 'alx/react/rules',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2026,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'import-x': eslintPluginImportX,
    },
    settings: {
      'import-x/resolver-next': [
        createNodeResolver({
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json'],
        }),
      ],
    },
    rules: {
      // Avoid duplicating eslint-plugin-react-hooks rules in @eslint-react
      '@eslint-react/error-boundaries': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      '@eslint-react/purity': 'off',
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/set-state-in-effect': 'off',
      '@eslint-react/set-state-in-render': 'off',
      '@eslint-react/static-components': 'off',
      '@eslint-react/unsupported-syntax': 'off',
      '@eslint-react/use-memo': 'off',
      // React preferences
      '@eslint-react/no-array-index-key': 'off',
      '@eslint-react/no-missing-key': 'off',
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // JSX A11y
      'jsx-a11y-x/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y-x/aria-props': 'warn',
      'jsx-a11y-x/aria-proptypes': 'warn',
      'jsx-a11y-x/aria-unsupported-elements': 'warn',
      'jsx-a11y-x/role-has-required-aria-props': 'warn',
      'jsx-a11y-x/role-supports-aria-props': 'warn',
      'jsx-a11y-x/click-events-have-key-events': 'off',
      'jsx-a11y-x/no-static-element-interactions': 'off',
      'jsx-a11y-x/heading-has-content': 'off',
      'jsx-a11y-x/label-has-associated-control': 'off',
      // Import order
      'import-x/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // General rules
      camelcase: 'off',
      eqeqeq: 'off',
      'func-names': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'prefer-promise-reject-errors': 'off',
      radix: 'off',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  eslintPluginPrettierRecommended,
  {
    name: 'alx/react/prettier',
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];
