import { SectionContainer } from '@/components/SectionContainer'
import { OtherMedia, Poster, ShowHeader } from '@/features/show/'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { Player } from './HeroBody/Player'
import { HeroDetail } from './HeroDetail/HeroDetail'
import { HeroBreadCumb } from './HeroHeader/HeroBreadCumb'

type ShowHeroProps = Readonly<{
	show: Show
}>
export const ShowHero = ({ show }: ShowHeroProps) => {
	const randomStrings = Array.from({ length: Math.floor(Math.random() * 1000) }, (_, index) =>
		index.toString()
	)
	return (
		<SectionContainer>
			<div
				className='relative m-0 bg-[var(--brand-black)] bg-cover bg-center bg-no-repeat p-0 bg-blend-overlay'
				style={{
					backgroundImage: `url(${show.images[0]})`,
				}}
			>
				<div className='absolute z-[2] block h-full w-full backdrop-blur-3xl backdrop-saturate-[100%] will-change-transform'></div>
				<section className='relative z-20 w-full bg-gradient-to-tr from-[rgb(31,31,31)]/80 to-[rgb(31,31,31)]/20'>
					<HeroBreadCumb />
					<ShowHeader show={show} />
					<div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-center'>
						<div className='relative mb-3 flex flex-row flex-wrap lg:w-full xs:mx-4'>
							<Poster show={show} />
							<Player show={show} />
							<OtherMedia media={{ images: randomStrings, videos: randomStrings }} />
						</div>
						<HeroDetail show={show} />
					</div>
				</section>
			</div>
		</SectionContainer>
	)
}
