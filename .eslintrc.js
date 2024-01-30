// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // Code conventions
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'class', 'try', 'for', 'if', 'switch', 'while'],
            },
        ],
        'prettier/prettier': ['error', prettierOptions],
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'no-var': 2,
        eqeqeq: 2,
        'prefer-const': 2,
        'prefer-template': 2,
        'prefer-spread': 2,
        'spaced-comment': 1,
        'max-statements-per-line': 2,
        'multiline-comment-style': 2,
        'no-octal-escape': 0,

        // Typescript
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/ban-ts-comment': 2,
        '@typescript-eslint/no-extra-semi': 2,
        '@typescript-eslint/ban-types': 2,
        '@typescript-eslint/naming-convention': [
            2,
            { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/consistent-type-definitions': 2,
        '@typescript-eslint/prefer-ts-expect-error': 2,
        '@typescript-eslint/prefer-optional-chain': 1,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 2,
        '@typescript-eslint/prefer-readonly': 2,
        '@typescript-eslint/prefer-readonly-parameter-types': 2,
        '@typescript-eslint/no-base-to-string': 2,
        '@typescript-eslint/no-unnecessary-qualifier': 1,
        '@typescript-eslint/no-unsafe-return': 2,
        '@typescript-eslint/no-unsafe-call': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/switch-exhaustiveness-check': 2,

        // React
        'react/no-multi-comp': [2, { ignoreStateless: false }],
        'react/display-name': 0,
        'react/jsx-pascal-case': 2,
        'react/react-in-jsx-scope': 'off',
        'react/prefer-read-only-props': 2,
        'react/sort-prop-types': 2,
        'react/jsx-sort-props': 2,
        'react/jsx-max-depth': [1, { max: 5 }],
        'react/jsx-no-duplicate-props': 2,
        'react/prefer-es6-class': 2,
        'react/boolean-prop-naming': 2,
        'react/no-typos': 2,
        'react/sort-comp': [
            2,
            {
                order: [
                    'instance-variables',
                    'static-methods',
                    'lifecycle',
                    '/^on.+$/',
                    'everything-else',
                    'render',
                ],
            },
        ],

        // Import Rules
        'import/newline-after-import': [2, { count: 1 }],
        'import/no-duplicates': 2,
        'import/no-unresolved': 0,
        'import/named': 0,
        'import/no-named-as-default': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
