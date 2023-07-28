'use client'

// Error components must be Client components
import type { Metadata } from 'next/types'

import { useEffect } from 'react'

export const metadata: Metadata = {
	title: 'Something Wrong',
}

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div>
			<h2>error</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	)
}
