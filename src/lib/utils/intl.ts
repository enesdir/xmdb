const LOCALE = 'en-US'

const numberFormat = new Intl.NumberFormat(LOCALE, {
	notation: 'compact',
})

const rules = new Intl.PluralRules(LOCALE)

/**
 * Formats a number as a string using the `numberFormat` object.
 *
 * @param {number} number - The number to format.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber = (number: number) =>
	number < 10000 ? number.toString() : numberFormat.format(number)

/**
 * Returns a function that returns the correct plural form for the provided count.
 *
 * @param {string} one - The string to use for the "one" form.
 * @param {string} many - The string to use for the "other" form.
 * @returns {Function} A function that takes a count and returns the appropriate plural string.
 */
export const pluralize = (one: string, many: string) => (count: number) => {
	return {
		one,
		many,
		zero: many,
		two: many,
		few: many,
		other: many,
	}[rules.select(count)]
}
