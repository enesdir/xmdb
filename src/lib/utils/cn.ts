import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges and applies the given tailwind CSS classes as well as any other custom classes to an element.
 *
 * @param {...ClassValue[]} inputs - An array of strings, arrays, or objects to merge and apply as CSS
 *   classes.
 * @returns {string} The merged CSS classes as a string.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
