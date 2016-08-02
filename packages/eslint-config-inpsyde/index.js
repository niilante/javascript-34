module.exports = {
	extends: [
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/strict-mode',
		'./rules/variables',
		'./rules/nodejs-and-commonjs',
		'./rules/stylistic-issues',
		'./rules/ecmascript-6'
	].map( require.resolve ),
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module'
	}
};
