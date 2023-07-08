import { Container } from '@/components'
import { OtherMedia, Poster, ShowBody, ShowHeader, Trailer } from '@/features/show/'

export const ShowHero = ({ show }) => {
	return (
		<div className='w-full bg-[#202020] bg-blend-darken'>
			<Container>
				<div className='flex w-full flex-wrap space-y-2'>
					<div className='w-full rounded-lg'>
						<ShowHeader show={show} />
					</div>
					<div className='w-full rounded-lg bg-gray-200 sm:w-1/4'>
						<Poster show={show} />
					</div>
					<div className='w-full rounded-lg sm:w-1/2'>
						<Trailer show={show} />
					</div>
					<div className='w-full rounded-lg sm:w-1/4'>
						<OtherMedia show={show} />
					</div>
					<div className='w-full rounded-lg  '>
						<ShowBody show={show} />
					</div>
				</div>
			</Container>
		</div>
	)
}
