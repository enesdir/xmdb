import Link from 'next/link'

import { PageContainer } from '@/components/Containers/PageContainer'
import { CustomLink } from '../../components/CustomLink'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
}

export default function WebsiteRootPage() {
	return (
		<PageContainer>
			<p>Website Home</p>
			<CustomLink href='https://duckduckgo.com' hasExternalIcon variant='classic'>
				duckduckgo
			</CustomLink>
			<Link href={'/user/shows'}>Go to Latest Shows</Link>
			<br />
			<Link href={'/users/shows/all'}>Go to All Show</Link>\
		</PageContainer>
	)
}
