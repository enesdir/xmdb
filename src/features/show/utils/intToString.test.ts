import { describe, expect, it } from 'vitest'

import { intToString } from './intToString'

describe('intToString', () => {
	it('should convert numbers to strings with SI suffixes', () => {
		expect(intToString(500)).toBe('500') // Below 1000, no conversion
		expect(intToString(1500)).toBe('1.5K') // 1.5 * 10^3
		expect(intToString(1000000)).toBe('1M') // 1 * 10^6
		expect(intToString(5000000000)).toBe('5B') // 5 * 10^9
		expect(intToString(2000000000000)).toBe('2T') // 2 * 10^12
	})
})
