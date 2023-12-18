import { OtherMedia, Poster, ShowHeader } from '@/features/tmdb/'
import { getTmdbImageURL } from '@/lib/generateTmdbImage'
import { PageContainer } from '../../../components/Containers'
import { Player } from './HeroBody/Player'
import { HeroDetail } from './HeroDetail/HeroDetail'
import { HeroBreadCumb } from './HeroHeader/HeroBreadCumb'

import type { RouterOutputs } from '@/trpc/shared'

type ShowHeroProps = Readonly<{
	show: NonNullable<RouterOutputs['tmdb']['getShowById']> | NonNullable<RouterOutputs['tmdb']['getMovieById']>
}>
export const ShowHero = ({ show }: ShowHeroProps) => {
	const randomStrings = Array.from({ length: Math.floor(Math.random() * 1000) }, (_, index) =>
		index.toString()
	)
	const backdropPath = getTmdbImageURL({
		path: show.backdrop_path || show.poster_path,
		size: 'lg',
		category: 'backdrop',
	})
	return (
		<div
			className='relative m-0 bg-brand-black bg-cover bg-center bg-no-repeat p-0 bg-blend-overlay'
			style={{
				backgroundImage: `url(${backdropPath})`,
			}}
		>
			<div className='absolute z-[2] block h-full w-full backdrop-blur-3xl backdrop-saturate-[100%] will-change-transform'></div>
			<div className='w-full bg-gradient-to-tr from-[rgb(31,31,31)]/30 to-[rgb(31,31,31)]/20'>
				<PageContainer center>
					<section className='relative z-20 w-full '>
						<HeroBreadCumb />
						<ShowHeader show={show} />
						<div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-center'>
							<div className='relative mb-3 flex flex-row flex-wrap sm:mx-4 lg:w-full'>
								<Poster show={show} />
								<Player show={show} />
								<OtherMedia media={{ images: randomStrings, videos: randomStrings }} />
							</div>
							<HeroDetail show={show} />
						</div>
					</section>
				</PageContainer>
			</div>
		</div>
	)
}
