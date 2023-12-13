import Link from 'next/link'
import { AiFillHeart, AiFillMessage } from 'react-icons/ai'
import { TbLayersSubtract } from 'react-icons/tb'

import BlurImage from '@/components/BlurImage'
import { cn } from '@/utils/cn'
import { DeleteShowButton } from './DeleteShowButton'
import { StatisticItem } from './StatisticItem'

import type { Show } from '@/server/modules/shows/showsSchemas'

type UserShowListItemProps = Readonly<{
	show: Show
}>

export const UserShowListItem = ({ show }: UserShowListItemProps) => {
	const {
		id,
		images,
		title,
		statistics: { likes },
		author: { username },
	} = show

	return (
		<li className='aspect-square group relative overflow-hidden rounded-md border border-solid border-slate-200 hover:border-none'>
			<DeleteShowButton show={show} />
			<Link href={`/user/${String(username)}/show/${String(id)}`}>
				<div
					role='group'
					aria-roledescription='image slide'
					aria-live='polite'
					aria-label={`${title} image`}
					className={cn('relative h-96 w-full')}
				>
					<BlurImage
						src={images[0]!}
						alt={`${title} image`}
						fill
						sizes='50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'
						className='absolute inset-0 object-cover'
					/>
				</div>
				{images.length > 1 && <TbLayersSubtract className='absolute right-3 top-2.5 text-xl text-white' />}
				<ul className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-x-7 bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100'>
					<StatisticItem icon={<AiFillHeart />} value={likes} />
					<StatisticItem icon={<AiFillMessage />} value={0} />
				</ul>
			</Link>
		</li>
	)
}
