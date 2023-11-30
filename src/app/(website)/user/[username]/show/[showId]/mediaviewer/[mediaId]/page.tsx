// TODO: for future implementations
import { env } from '@/env.mjs'
import { PROJECT_NAME } from '@/lib/constants'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

export const generateMetadata = async ({
	params: { username, showId, mediaId },
}: MediaPageProps): Promise<Metadata> => {
	return {
		title: 'Show Title',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/user/${String(username)}/${String(showId)}/mediaviewer/${String(
				mediaId
			)}`,
		},
	}
}

type MediaPageProps = Readonly<{
	params: PageParams<['username', 'showId', 'mediaId']>
}>
export default function Media({ params }: MediaPageProps) {
	return (
		<div>
			<h1>show: {params.showId}</h1>
			<h2>image: {params.mediaId}</h2>
			<div className='container relative flex w-full flex-row flex-wrap bg-black py-5'>
				<p>TODO: show gallery images</p>
			</div>
		</div>
	)
}
