// TODO: for future implementations
import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { Banner } from '@/features/show/components/Banner'
import { PROJECT_NAME } from '@/lib/constants'
import { PageParams } from '@/types/pageParams'

const SliderData = [
	{
		image:
			'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1446707052533-0e1d48e08aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1546687307-88d0e10fe96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1589555237794-bc9af923dc7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
]
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
	console.log(params)
	return (
		<div>
			<h1>show: {params.showId}</h1>
			<h2>image: {params.mediaId}</h2>
			<div className='container relative flex w-full flex-row flex-wrap bg-black py-5'>
				<Banner slides={SliderData} />
			</div>
		</div>
	)
}
