'use client'

import Link from 'next/link'

import { ImagesSlider } from '@/components/ImagesSlider'
import { UserAvatar } from '@/components/UserAvatar'
import { formatFromNow } from '@/utils/date'
import { formatNumber, pluralize } from '@/utils/intl'
import { LikeButton } from './LikeButton'

import type { Show } from '@/server/modules/shows/showsSchemas'

type SinglePostProps = Readonly<{
	show: Show
}>

const likesPluralize = pluralize('like', 'likes')
export const SingleShow = ({
	show: { id, description, createdAt, images, author, like, statistics },
}: SinglePostProps) => {
	return (
		<article className='space-y-2.5'>
			<div className='flex items-center justify-between'>
				<Link href={`/user/${author.username}`} className='flex w-fit items-center gap-x-2.5'>
					<UserAvatar user={author} />
					<p className='font-medium'>{author.username}</p>
				</Link>
				<time dateTime={createdAt}>{formatFromNow(createdAt)}</time>
			</div>
			<ImagesSlider images={images} />
			<div className='flex items-center gap-x-1'>
				<LikeButton postId={id} isLiked={like} />
				<span className='font-medium'>
					{formatNumber(statistics.likes)} {likesPluralize(statistics.likes)}
				</span>
			</div>
			<div className='whitespace-pre-line break-all'>{description}</div>
		</article>
	)
}
