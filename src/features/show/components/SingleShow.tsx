'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { ImagesSlider } from '@/components/ImagesSlider'
import { UserAvatar } from '@/components/UserAvatar'
import { client } from '@/trpc/client'
import { PageParams } from '@/types/pageParams'
import { formatFromNow } from '@/utils/date'
import { formatNumber, pluralize } from '@/utils/intl'
import { LikeButton } from './LikeButton'

const likesPluralize = pluralize('like', 'likes')
export const SingleShow = () => {
	const params = useParams<PageParams<['showId']>>()
	const [show] = client.shows.getById.useSuspenseQuery({ id: Number(params.showId) })
	if (!show) {
		return null
	}
	return (
		<article className='space-y-2.5'>
			<div className='flex items-center justify-between'>
				<Link href={`/user/${show.author.username}`} className='flex w-fit items-center gap-x-2.5'>
					<UserAvatar user={show.author} />
					<p className='font-medium'>{show.author.username}</p>
				</Link>
				<time dateTime={show.createdAt}>{formatFromNow(show.createdAt)}</time>
			</div>
			<ImagesSlider images={show.images} />
			<div className='flex items-center gap-x-1'>
				<LikeButton postId={show.id} isLiked={show.like} />
				<span className='font-medium'>
					{formatNumber(show.statistics.likes)} {likesPluralize(show.statistics.likes)}
				</span>
			</div>
			<div className='whitespace-pre-line break-all'>{show.description}</div>
		</article>
	)
}
