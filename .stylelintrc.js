module.exports = {
    'rules': {
        'value-keyword-case': ['lower', {
            ignoreProperties: ['composes']
        }],
        'selector-pseudo-class-no-unknown': [ true, {
            ignorePseudoClasses: [
                'export',
                'import',
                'global',
                'local',
            ],
        }],
        'property-no-unknown': [ true, {
            ignoreProperties: [
                'composes',
                'compose-with',
            ],
        }],
        'at-rule-no-unknown': [ true, {
            ignoreAtRules: [
                'value',
            ],
        }],
    },
};
