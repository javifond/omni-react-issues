module.exports = {
    root: true,
    extends: ['airbnb-base', 'prettier'],
    plugins: ['cypress', 'prettier'],
    env: {
        node: true,
        mocha: true,
        'cypress/globals': true,
    },
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],
        'arrow-parens': ['error', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        'no-use-before-define': ['error', { functions: false }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'operator-linebreak': ['error', 'after'],
        'prettier/prettier': 'error',
        'no-confusing-arrow': 'off',
    },
};
