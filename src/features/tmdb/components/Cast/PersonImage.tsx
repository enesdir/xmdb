import Link from 'next/link'

import { BlurImage } from '@/components/BlurImage'
import { getTmdbImageURL } from '@/lib/generateTmdbImage'

export type PersonImageProps = {
	imageSrc: string
	name: string
	url?: string
	job?: string | null
}

export const PersonImage = ({ imageSrc, name, url, job }: PersonImageProps) => {
	return (
		// @ts-expect-error: do better types
		<Link href={url}>
			<div className='relative h-20 w-full'>
				<BlurImage
					src={getTmdbImageURL({ path: imageSrc, size: 'sm', category: 'person' })}
					alt={`Photo of ${name}`}
					fill
					loading='lazy'
					sizes='100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw'
					className='absolute inset-0 rounded-sm object-cover transition group-hover/card:scale-110'
				/>
			</div>
			<div className='max-w-[170px] truncate px-1 text-xs'>
				{name}
				{job && (
					<>
						<br />
						<span className='truncate pt-1 italic'>{job}</span>
					</>
				)}
			</div>
		</Link>
	)
}
