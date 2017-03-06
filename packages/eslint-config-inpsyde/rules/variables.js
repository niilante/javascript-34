module.exports = {
	rules: {
		'init-declarations': 0,
		'no-catch-shadow': 0,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-restricted-globals': [ 1, 'event' ],
		'no-shadow': 2,
		'no-shadow-restricted-names': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-undefined': 0,
		'no-unused-vars': [ 2, {
			'ignoreRestSiblings': true
		} ],
		'no-use-before-define': 2
	}
};
