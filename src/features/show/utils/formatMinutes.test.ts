import { describe, expect, it } from 'vitest'
import { formatMinutes } from './formatMinutes'

describe('formatMinutes', () => {
	it('should format minutes correctly with hours and minutes', () => {
		expect(formatMinutes(126)).toBe('2h 6m')
		expect(formatMinutes(60)).toBe('1h 0m')
		expect(formatMinutes(30)).toBe('0h 30m')
	})

	it('should return an empty string when given 0 minutes', () => {
		expect(formatMinutes(0)).toBe('0h 0m')
	})
})
