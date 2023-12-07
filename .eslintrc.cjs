/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	settings: {
		tailwindcss: {
			callees: ['classNames', 'twMerge', 'cn'],
			config: 'tailwind.config.ts',
		},
		react: {
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		project: true,
		ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	extends: [
		'next/core-web-vitals',
		'prettier',
		'plugin:tailwindcss/recommended',
		'plugin:storybook/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
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
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// known issue: https://github.com/storybookjs/eslint-plugin-storybook/issues/127
				'storybook/no-uninstalled-addons': 'off',
				// known issue: https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/291
				'tailwindcss/classnames-order': 'off',
				'tailwindcss/enforces-shorthand': 'off',
				'tailwindcss/no-custom-classname': 'off',
			},
		},
	],
}
