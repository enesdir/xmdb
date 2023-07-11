'use client'

import { ReactNode } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function UserShowProviders({
	modal,
	children,
}: {
	modal: ReactNode
	children: React.ReactNode
}) {
	const segment = useSelectedLayoutSegment()
	return (
		<>
			{/* Only show userShow modal if it's on the user page */}
			{!segment && modal}
			{children}
		</>
	)
}
