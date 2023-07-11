/**
 * Returns the formatted display string for the media count.
 *
 * @param {number} mediaCount - The number of media items.
 * @returns {string} The formatted display string.
 */
export function displayMediaCount(mediaCount: number): string {
	if (mediaCount <= 0) {
		return 'No'
	} else if (mediaCount < 100) {
		return String(mediaCount)
	} else {
		return '99+'
	}
}
