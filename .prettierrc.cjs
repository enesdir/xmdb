/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

/** @type {import('prettier').Config} */
module.exports = {
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-jsdoc',
		'prettier-plugin-prisma',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'^@/(.*)$',
		'^[./]',
	],
	printWidth: 110,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.json',
			options: {
				singleQuote: false,
			},
		},
		{
			files: '*.{ts,tsx}',
			options: {
				tsdoc: true,
			},
		},
		{
			files: '*.{yml,yaml}',
			options: {
				useTabs: false,
			},
		},
	],
}
