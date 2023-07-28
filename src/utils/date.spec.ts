import { describe, expect, it } from 'vitest'

import { formatFromNow } from './date'

describe('date', () => {
	describe('formatFromNow', () => {
		const dateString = '2022-06-01T12:00:00.000Z'

		it('should display that the date relative to the current time', () => {
			expect(formatFromNow(dateString)).toBe('a year')
		})
	})
})
