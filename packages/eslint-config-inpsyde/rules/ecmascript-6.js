module.exports = {
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		es6: true
	},
	rules: {
		'arrow-body-style': [ 2, 'as-needed' ],
		'arrow-parens': 2,
		'arrow-spacing': 2,
		'constructor-super': 2,
		'generator-star-spacing': [ 2, 'after' ],
		'no-class-assign': 2,
		'no-confusing-arrow': [ 2, {
			allowParens: true
		} ],
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-imports': 2,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-this-before-super': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'no-var': 2,
		'object-shorthand': [ 2, 'always', {
			avoidQuotes: true
		} ],
		'prefer-arrow-callback': 2,
		'prefer-const': [ 2, {
			ignoreReadBeforeAssign: true
		} ],
		'prefer-destructuring': 0,
		'prefer-numeric-literals': 2,
		'prefer-reflect': 0,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		'prefer-template': 2,
		'require-yield': 2,
		'rest-spread-spacing': 2,
		'sort-imports': 0,
		'symbol-description': 0,
		'template-curly-spacing': 2,
		'template-tag-spacing': 2,
		'yield-star-spacing': 2
	}
};
