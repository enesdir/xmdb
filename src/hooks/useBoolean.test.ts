import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useBoolean } from './useBoolean'

describe('useBoolean', () => {
	it('should initialize with default value', () => {
		const { result } = renderHook(() => useBoolean(true))
		expect(result.current.value).toBe(true)
	})

	it('should set value to true', () => {
		const { result } = renderHook(() => useBoolean())
		act(() => {
			result.current.setTrue()
		})
		expect(result.current.value).toBe(true)
	})

	it('should set value to false', () => {
		const { result } = renderHook(() => useBoolean(true))
		act(() => {
			result.current.setFalse()
		})
		expect(result.current.value).toBe(false)
	})

	it('should toggle value', () => {
		const { result } = renderHook(() => useBoolean(true))
		act(() => {
			result.current.toggle()
		})
		expect(result.current.value).toBe(false)
	})
})
