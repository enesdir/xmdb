import { describe, expect, it } from 'vitest'

import { displayMediaCount } from './displayMediaCount'

describe('displayMediaCount', () => {
	it('should return "No videos" when mediaCount is 0', () => {
		expect(displayMediaCount(0)).toBe('No')
	})

	it('should return "99+ images" when mediaCount is 100 or more', () => {
		expect(displayMediaCount(100)).toBe('99+')
	})

	it('should return the formatted string for mediaCount less than 100', () => {
		expect(displayMediaCount(35)).toBe('35')
	})
})
