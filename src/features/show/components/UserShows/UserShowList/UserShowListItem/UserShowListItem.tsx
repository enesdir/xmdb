import Image from 'next/image'
import Link from 'next/link'
import { AiFillHeart, AiFillMessage } from 'react-icons/ai'
import { TbLayersSubtract } from 'react-icons/tb'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { DeleteShowButton } from './DeleteShowButton'
import { StatisticItem } from './StatisticItem'

type UserShowListItemProps = Readonly<{
	show: Show
}>

export const UserShowListItem = ({ show }: UserShowListItemProps) => {
	const {
		id,
		images,
		title,
		statistics: { likes },
	} = show

	return (
		<li className='group relative aspect-square overflow-hidden rounded-md'>
			<DeleteShowButton show={show} />
			<Link href={`/show/${String(id)}`}>
				{/* @ts-expect-error: todo fail case  */}
				<Image src={images[0]} alt={title} className='object-cover' fill />
				{images.length > 1 && <TbLayersSubtract className='absolute right-3 top-2.5 text-xl text-white' />}
				<ul className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-x-7 bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100'>
					<StatisticItem icon={<AiFillHeart />} value={likes} />
					<StatisticItem icon={<AiFillMessage />} value={0} />
				</ul>
			</Link>
		</li>
	)
}
