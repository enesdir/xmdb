/**
 * Capitalizes the first letter of a string and returns the modified string.
 *
 * @param {string} text - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

/**
 * Gets the first letter of a string and returns it in uppercase.
 *
 * @param {string} text - The string to extract the first letter from.
 * @returns {string} The uppercase first letter of the string.
 */
export const getFirstLetter = (text: string) => text.charAt(0).toUpperCase()
