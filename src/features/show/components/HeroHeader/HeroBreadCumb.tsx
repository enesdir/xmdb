import { BsFillShareFill } from 'react-icons/bs'
import { TbListSearch } from 'react-icons/tb'
import { BaseLink } from '@/components/BaseLink'
import { Button } from '@/components/Button'
import { IconButton } from '@/components/IconButton'
import { List, ListItem } from '@/components/List'

export const HeroBreadCumb = () => {
	return (
		<div className='flex h-12 items-center justify-between'>
			<div className='flex flex-nowrap items-center'></div>
			<div className='flex flex-nowrap items-center'>
				<List className='hidden -space-x-1 pr-2 text-sm font-medium text-white md:inline-flex'>
					<ListItem>Cast & Crew</ListItem>
					<ListItem className='before:mx-2 before:mb-[0.2rem] before:mt-0 before:inline-block before:rounded-[50%] before:bg-current before:p-px before:align-middle before:text-base before:leading-[0.5rem] before:content-[""]'>
						Trivia
					</ListItem>
				</List>
				<div className='hidden before:mr-3 before:h-6 before:w-[1px] before:bg-white/20 before:content-[""] after:ml-3 after:h-6 after:w-[1px] after:bg-white/20 after:content-[""] md:inline-flex'>
					<BaseLink href='#' label='Link' className='text-white'>
						XMDbPro
					</BaseLink>
				</div>
				<Button
					icon={<TbListSearch className='text-2xl' />}
					variant='text'
					className='m-0 inline-flex min-h-[2rem] flex-row flex-nowrap content-center px-4 py-0 -tracking-tight text-white'
				>
					<span className='hidden md:inline-block'>All topics</span>
				</Button>
				<div className='inline-block before:absolute before:mt-3 before:h-6 before:w-px before:bg-white/20 before:content-[""]'>
					<IconButton
						icon={<BsFillShareFill className='text-xl' />}
						label='Share on social media'
						className='text-white'
						variant='rounded'
					/>
				</div>
			</div>
		</div>
	)
}
