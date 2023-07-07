/**
 * Converts a number to a string representation with SI suffixes.
 *
 * @param {number} num - The number to convert.
 * @returns {string} The converted string with SI suffixes.
 */
export const intToString = (num: number): string => {
	if (Number.isNaN(num)) {
		throw new Error('Invalid number')
	}
	num = num.toString().replace(/[^0-9.]/g, '')

	if (num < 1000) {
		return num.toString()
	}
	let si = [
		{ v: 1e3, s: 'K' },
		{ v: 1e6, s: 'M' },
		{ v: 1e9, s: 'B' },
		{ v: 1e12, s: 'T' },
		{ v: 1e15, s: 'P' },
		{ v: 1e18, s: 'E' },
	]
	let index: number
	for (index = si.length - 1; index >= 0; index--) {
		if (num >= si[index].v) {
			break
		}
	}
	return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s
}
