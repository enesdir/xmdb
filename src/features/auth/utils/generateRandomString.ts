/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {integer} length - The length of the random string to generate. Can change length to 2 for longer
 *   results.
 * @returns {string} The randomly generated string.
 * @see https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript#comment119978705_1349426
 */
export function generateRandomString(length: number): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}
