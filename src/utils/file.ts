/**
 * Creates a data URL representing the specified file object.
 *
 * @param {File} file - The file object to create a data URL for.
 * @returns {string} The data URL representing the contents of the specified file.
 */
export const createUrlFromFile = (file: File) => URL.createObjectURL(file)
