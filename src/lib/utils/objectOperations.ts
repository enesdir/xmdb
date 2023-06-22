/**
 * Takes a string and an object and returns true if the string is a key of the object.
 *
 * @template T - The type of the object.
 * @param {string} key - The key to check.
 * @param {T} object - The object to check.
 * @returns {boolean} Whether the key is a keyof T and a string.
 */
export const isObjectKey = <T extends Record<string, unknown>>(
	key: string,
	object: T
): key is keyof T & string => Object.keys(object).includes(key)
