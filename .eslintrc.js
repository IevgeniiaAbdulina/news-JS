module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
        },
    ],
    extends: ['airbnb-base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-restricted-syntax': [
            'error',
            {
                selector:
                    "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                message: 'Unexpected property on console object was called',
            },
        ],
        'no-console': 'off',
        'no-empty': 0,
        'no-irregular-whitespace': 0,
        'no-inline-comments': 'off',
        'linebreak-style': ['error', 'windows'],
        indent: 'off',
        'class-methods-use-this': [
            'error',
            {
                enforceForClassFields: false,
            },
        ],
    },
};
