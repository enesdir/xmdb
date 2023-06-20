import type { Metadata } from 'next'
import { UserHeader } from '@/components/main/UserHeader/UserHeader'
import { UserShowModal } from '@/components/main/UserShowModal/UserShowModal'
import { UserShows } from '@/components/main/UserShows/UserShows'
import { env } from '@/env.mjs'
import { DEFAULT_PROFILE_BIOGRAPHY, PROJECT_NAME } from '@/lib/constants'
import { getShowByIdUser, parseShowQuery } from '@/lib/show'
import { getUserByUsername } from '@/lib/user'

export const generateMetadata = async ({ params: { slug } }: UserPageProps): Promise<Metadata> => {
	const { username, name, image, biography } = await getUserByUsername(slug)

	const [firstName, lastName] = name?.split(' ') || []

	return {
		title: username,
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/${username}`,
			description: biography || DEFAULT_PROFILE_BIOGRAPHY,
			firstName,
			lastName,
			...(username && { username, title: username }),
			...(image && { images: { url: image, width: 144, height: 144 } }),
		},
	}
}

type UserPageProps = Readonly<{
	params: { slug: string }
	searchParams: { post?: string | string[] }
}>

export default async function UserPage({ params: { slug }, searchParams }: UserPageProps) {
	const showId = parseShowQuery(searchParams.post)

	const [user, show] = await Promise.all([
		getUserByUsername(slug),
		showId ? getShowByIdUser({ id: showId, username: slug }) : null,
	])

	return (
		<>
			<UserHeader user={user} />
			<UserShows user={user} />
			<UserShowModal show={show} />
		</>
	)
}
