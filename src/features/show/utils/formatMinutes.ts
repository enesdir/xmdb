import dayjs, { extend } from 'dayjs'
import duration from 'dayjs/plugin/duration'

extend(duration)

/**
 * Formats the given number of minutes into the format "Xh Ym".
 *
 * @param {number} minutes - The number of minutes to format.
 * @returns {string} The formatted duration string.
 */
export const formatMinutes = (minutes: number): string =>
	dayjs.duration(minutes, 'minutes').format('H[h] m[m]')
