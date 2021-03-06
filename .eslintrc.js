module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
        // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        // 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module',
    },
    ignorePatterns: [
        '/lib/**/*', // Ignore built files.
        '/src/models/db/generated/**/*', // Ignore autogenerated files
    ],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        quotes: ['error', 'single'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        camelcase: 0,
        'new-cap': 0,
        'require-jsdoc': 0,
    },
}
