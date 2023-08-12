import { describe, expect, it } from 'vitest'

import { generateRandomString } from './generateRandomString'

describe('generateRandomString', () => {
	it('should generate a random string of the specified length', () => {
		const length = 6
		const randomString = generateRandomString(length)

		expect(randomString).toHaveLength(length)
		expect(randomString).toMatch(/^[a-zA-Z0-9]+$/)
	})
})
