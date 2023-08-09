import type { Metadata } from 'next'

import Link from 'next/link'

import { PageContainer } from '@/components/Containers/PageContainer'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default function WebsiteRootPage() {
	return (
		<PageContainer>
			<p>Website Home</p>
			<Link href={'/user/shows'}>Go to Latest Shows</Link>
			<br />
			<Link href={'/users/shows/all'}>Go to All Show</Link>\
		</PageContainer>
	)
}
