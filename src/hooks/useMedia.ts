'use client'

import { DependencyList, EffectCallback, useCallback, useEffect, useState } from 'react'

export type Effect = (effect: EffectCallback, deps?: DependencyList) => void
export type MediaQueryObject = { [key: string]: string | number | boolean }
/**
 * Custom React hook for responsive design.
 *
 * @param {string[]} queries - Array of media query strings.
 * @param {number[]} values - Array of values to return for each media query.
 * @param {number} defaultValue - Default value to return when none of the media queries match.
 * @returns {number} - Value associated with the first matching media query, or defaultValue if none match.
 */
export const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
	const getMatches = useCallback((query: string): boolean => {
		// Prevents SSR issues
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches
		}
		return false
	}, [])

	const [value, setValue] = useState<number>(() => {
		const queryIndex = queries.findIndex(getMatches)
		return values[queryIndex] || defaultValue
	})

	useEffect(() => {
		const handlers = queries.map((query) => {
			const handler = () => setValue(getMatches(query) ? values[queries.indexOf(query)]! : defaultValue)
			window.matchMedia(query).addEventListener('change', handler)
			return handler
		})

		return () => {
			handlers.forEach((handler, index) => {
				window.matchMedia(queries[index]!).removeEventListener('change', handler)
			})
		}
	}, [getMatches, queries, values, defaultValue])

	return value
}

// usage
// const imagesPerPage = useMedia(
//   // Media queries
//   ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)', '(min-width: 400px)'],
//   // Images per page (relates to above media queries by array index)
//   [5, 4, 3, 2],
//   // Default images per page
//   2
// )
