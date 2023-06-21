import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default function WebsiteRootPage() {
	return (
		<div>
			<p>Website Home</p>
			<Link href={'/shows'}>Go to Latest Shows</Link>
			<br />
			<Link href={'/shows/all'}>Go to All Show</Link>
		</div>
	)
}
