/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'next/core-web-vitals',
		'prettier',
		'plugin:tailwindcss/recommended',
		'plugin:storybook/recommended',
	],
	plugins: ['unused-imports'],
	rules: {
		'space-in-parens': 'error',
		'no-empty': 'error',
		'no-multiple-empty-lines': 'error',
		'no-irregular-whitespace': 'error',
		//#region  //*=========== Unused Import ===========
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		//#endregion  //*======== Unused Import ===========
	},
}
