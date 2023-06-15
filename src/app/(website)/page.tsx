import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Document Management for Modern Validation Teams',
}

export default function WebsiteRootPage() {
	return (
		<div>
			<p>Website Home</p>
			<Link href={'/shows'}>Go to Shows</Link>
		</div>
	)
}
