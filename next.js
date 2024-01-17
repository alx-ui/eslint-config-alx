module.exports = {
  plugins: ["prettier"],
  extends: ["next", "next/core-web-vitals", "prettier"],
  rules: {
    'prettier/prettier': 'error',
    'camelcase': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
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
    'func-names': 'off',
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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never"
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref", "preferButton"]
      }
    ]
  },
  "overrides": [
    {
      "files": "**/*.+(ts|tsx)",
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint/eslint-plugin"],
      "extends": ["plugin:@typescript-eslint/recommended", "prettier"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-use-before-define": [0],
        "@typescript-eslint/no-use-before-define": [1],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
