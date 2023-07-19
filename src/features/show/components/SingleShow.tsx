'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ImagesSlider } from '@/components/ImagesSlider'
import { UserAvatar } from '@/components/UserAvatar'
import { formatFromNow } from '@/lib/utils/date'
import { formatNumber, pluralize } from '@/lib/utils/intl'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { LikeButton } from './LikeButton'

type SinglePostProps = Readonly<{
	show: Show
}>

const likesPluralize = pluralize('like', 'likes')

export const SingleShow = ({
	show: { id, description, createdAt, images, author, like, statistics },
}: SinglePostProps) => {
	const [likes, setLikes] = useState(statistics.likes)
	const [isLike, setIsLike] = useState(like)

	const handleLikeClick = () => {
		setLikes((prev) => prev + (isLike ? -1 : 1))
		setIsLike((prev) => !prev)
	}

	return (
		<article className='space-y-2.5'>
			<div className='flex items-center justify-between'>
				<Link href={`/${author.username}`} className='flex w-fit items-center gap-x-2.5'>
					<UserAvatar user={author} />
					<p className='font-medium'>{author.username}</p>
				</Link>
				<time dateTime={createdAt}>{formatFromNow(createdAt)}</time>
			</div>
			<ImagesSlider images={images} />
			<LikeButton postId={id} isLike={isLike} onClick={handleLikeClick} />
			<p className='font-medium'>
				{formatNumber(likes)} {likesPluralize(likes)}
			</p>
			<div className='whitespace-pre-line break-all'>{description}</div>
		</article>
	)
}
