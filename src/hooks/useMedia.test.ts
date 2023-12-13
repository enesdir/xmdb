import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useMedia } from './useMedia'

describe('useMedia', () => {
	it('returns the correct value for the matching media query', async () => {
		// Mock matchMedia
		globalThis.matchMedia = ((query: string) => {
			return {
				matches: query === '(min-width: 600px)',
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
			}
		}) as unknown as (query: string) => MediaQueryList

		const { result } = renderHook(() =>
			useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
		)

		// Since we mocked matchMedia to match '(min-width: 600px)', the hook should return the corresponding value
		expect(result.current).toBe(3)
	})
})
