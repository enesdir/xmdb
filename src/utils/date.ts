import dayjs, { extend } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

extend(relativeTime)

/**
 * Formats a date relative to the current time using the 'dayjs.fromNow' method.
 *
 * @param {string} date - A string representing a date in a format that can be parsed by the 'dayjs' library.
 * @returns {string} A string representing the relative time between the input date and the current time.
 */
export const formatFromNow = (date: string) => dayjs(date).fromNow(true)
