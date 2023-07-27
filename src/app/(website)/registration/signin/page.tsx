import { TextWithDivider } from '@/components/Text'

export default function ErrorPage() {
	return (
		<>
			<div className='mx-auto flex flex-col rounded bg-white p-4 shadow-lg md:flex-row'>
				<div className='float-left mx-auto flex w-full max-w-xs flex-initial flex-col items-center text-sm lg:w-1/2'>
					<h1 className='block text-xl font-extrabold leading-10 text-[#333333]'>Sign in</h1>
					<div className='mb-10'> Social login buttons</div>
					<TextWithDivider text='or' />
				</div>
				<div className='float-right w-full border-solid text-gray-600 lg:w-1/2 lg:border-l lg:border-l-[#dddddd] lg:pl-4 max-wsm:border-t max-wsm:border-t-[#dddddd] max-wsm:pt-4'>
					<h1 className='text-xl font-extrabold leading-10 text-[#333333]'>
						Benefits of your free XMDb account
					</h1>
					<p>
						<strong className='font-bold'>Personalized Recommendations</strong>
						<br />
						Discover shows you&apos;ll love.
					</p>
					<p>
						<strong className='font-bold'>Your Watchlist</strong>
						<br />
						Track everything you want to watch and receive e-mail when movies open in theaters.
					</p>
					<p>
						<strong className='font-bold'>Your Ratings</strong>
						<br />
						Rate and remember everything you&apos;ve seen.
					</p>
					<p>
						<strong className='font-bold'>Contribute to XMDb</strong>
						<br />
						Add data that will be seen by millions of people and get cool badges.
					</p>
				</div>
			</div>
			<div className='w-full bg-[#ededec] text-[#333333]'>
				<div className='flex justify-between p-6'>
					<h3 className='text-lg font-semibold text-[#666]'>Recently Viewed</h3>
					<button className='text-xs text-[#136CB2] hover:underline'>Clear your history</button>
				</div>
				<div className='p-6'></div>
			</div>
		</>
	)
}
