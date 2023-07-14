import { Container } from '@/components'
import { OtherMedia, Poster, ShowBody, ShowHeader, Trailer } from '@/features/show/'
import type { Show } from '@/server/modules/shows/showsSchemas'

type ShowHeroProps = Readonly<{
	show: Show
}>
export const ShowHero = ({ show }: ShowHeroProps) => {
	const randomStrings = Array.from({ length: Math.floor(Math.random() * 1000) }, (_, index) =>
		index.toString()
	)
	return (
		<div className='w-full bg-[#202020] bg-blend-darken'>
			<Container>
				<section className='bg-gradient-to-tr from-[rgb(31,31,31)]/80 to-[rgb(31,31,31)]/20'>
					<div className='flex w-full flex-col sm:flex-row sm:flex-wrap'>
						<div className='w-full'>
							<ShowHeader show={show} />
						</div>
						<div className='relative flex w-full flex-row flex-wrap'>
							<div className='absolute left-0 top-[calc(100%_+_0.75rem)] flex w-28 bg-gray-200 sm:static sm:w-2/12'>
								<Poster show={show} />
							</div>
							<div className='relative flex w-full flex-col sm:mr-1 sm:w-8/12'>
								<Trailer show={show} />
							</div>

							<OtherMedia media={{ images: randomStrings, videos: randomStrings }} />
						</div>
						<div className='relative flex w-full flex-col items-center justify-between sm:flex-row'>
							<ShowBody show={show} />
						</div>
					</div>
				</section>
			</Container>
		</div>
	)
}
