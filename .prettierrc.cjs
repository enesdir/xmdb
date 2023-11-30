/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string; tailwindFunctions: string[] }} TailwindConfig */

/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
const config = {
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
	plugins: [
		'@ianvs/prettier-plugin-sort-imports', // for sorting imports
		'prettier-plugin-pkg', // for sort fields in package.json
		'prettier-plugin-sh', // for prettifying shellscript, Dockerfile, properties, gitignore, dotenv
		'prettier-plugin-jsdoc',
		'prettier-plugin-prisma',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'<BUILTIN_MODULES>', // Node.js built-in modules
		'^(react/(.*)$)|^(react$)', // React
		'^(next/(.*)$)|^(next$)', // Next
		'<THIRD_PARTY_MODULES>', // Anything not matched in other groups.
		'',
		// Things that start with `@/` or digit or underscore.
		'^(@/|\\d|~/)',
		'^[.]', // relative imports

		'^(?=\\.+)(.(?!\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)))+$', // Anything that starts with a dot, or multiple dots, and doesn't have the "other files" extensions.

		'^.+\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)$', // Other files with extensions.
		'',
		// types
		'<TYPES>',
		'<TYPES>^[.]',
		'^@/types/(.*)$',
		'^@/features/(.*)/types/(.*)$',
		'',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	tailwindConfig: './tailwind.config.cjs',
	tailwindFunctions: ['cn'],

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
module.exports = config
