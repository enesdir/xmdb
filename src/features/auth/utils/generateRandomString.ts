/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {number} length - The length of the random string to generate. Can change length to 2 for longer
 *   results.
 * @returns {string} The randomly generated string.
 * @see https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/8084248#8084248
 */
export function generateRandomString(length: number): string {
	const result = (Math.random() + 1).toString(36).substring(length)

	return result
}
