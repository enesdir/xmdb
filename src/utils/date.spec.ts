import { describe, expect, it } from 'vitest'

import { formatFromNow } from './date'

describe('date', () => {
	describe('formatFromNow', () => {
		const dateString = new Date().toISOString()

		it('should display that the date relative to the current time', () => {
			expect(formatFromNow(dateString)).toBe('a few seconds')
		})
	})
})
