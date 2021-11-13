module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true
    },
    extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
    plugins: ['prettier', 'react', 'react-native'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: 'module'
    },
    rules: {
        indent: 'off',
        // indent: [2, 'tab'], // [2, 4], // [2, 2]
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-tabs': 0,
        curly: [2, 'all'],
        'global-require': 0,
        // 'react-native/no-unused-styles': 2,
        // 'react-native/no-inline-styles': 2,
        // 'react-native/no-color-literals': 2,
        'no-use-before-define': 'off'
        // '@typescript-eslint/no-use-before-define': 'error'
    }
}
