import { HiChevronRight } from 'react-icons/hi'

import { CustomLink } from '@/components/CustomLink'
import { Title } from './Title'

import type { InternalLink } from '@/components/CustomLink'

type SectionTitleProps<T> = {
	href: InternalLink<T>

	description?: string
	title: string
}
export const SectionTitle = <T,>({ title, description, href }: SectionTitleProps<T>) => (
	<div className='relative mb-4 w-full text-2xl font-semibold normal-case leading-6 tracking-normal md:leading-[1.2em]'>
		<CustomLink href={href} variant='title' className='group' tabIndex={0}>
			<Title
				as='h3'
				className='relative flex max-h-[2.4em] overflow-hidden border-[none] pl-3 text-white/100 before:absolute before:-ml-3 before:h-full before:w-1 before:self-start before:rounded before:bg-brand-yellow before:content-[""]'
			>
				{title}
				<HiChevronRight className='ml-2 h-6 w-6 shrink-0 self-center align-baseline text-[0.8em] group-hover:text-brand-yellow' />
			</Title>
		</CustomLink>
		{description && (
			<div className='block border-[none] pt-2 text-base font-normal normal-case leading-6 tracking-wide text-white/70'>
				{description}
			</div>
		)}
	</div>
)
