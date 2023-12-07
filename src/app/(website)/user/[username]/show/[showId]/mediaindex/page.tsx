// TODO: for future implementations
import { PROJECT_NAME } from '@/constants/appConfigurations'
import { env } from '@/env.mjs'
import { Banner } from '@/features/show/components/Banner'
import { server } from '@/trpc/server'
import { PageParams } from '@/types/pageParams'

import type { Metadata } from 'next'

const SliderData = [
	{
		image:
			'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
	},
	{
		image:
			'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	},
]
export const generateMetadata = async ({ params: { showId } }: ShowGalleryPageProps): Promise<Metadata> => {
	const {
		id: showID,
		title,
		description,
		author: { id: UserID },
	} = await server.shows.getById.query({ id: Number(showId) })
	return {
		title: `${title} - Full Cast & Crew`,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/user/${String(UserID)}/${String(showID)}/mediaindex`,
			description: description,
		},
	}
}

type ShowGalleryPageProps = Readonly<{
	params: PageParams<['username', 'showId']>
}>
export default function ShowGallery({ params }: ShowGalleryPageProps) {
	return (
		<div>
			<h1>Photo Gallery</h1>
			<h2>show: {params.showId}</h2>
			<div className='container relative flex w-full flex-row flex-wrap bg-black py-5'>
				<Banner slides={SliderData} />
			</div>
		</div>
	)
}
