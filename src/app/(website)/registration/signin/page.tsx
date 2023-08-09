import Link from 'next/link'

import { TextWithDivider } from '@/components/Text'
import { SignInOptions } from '@/features/auth/components/SignInOptions'

export default function ErrorPage() {
	return (
		<>
			<div className='mx-auto flex flex-col rounded bg-white p-4 shadow-lg md:flex-row'>
				<div className='relative float-left mx-auto flex w-full flex-initial flex-col items-center text-sm lg:w-1/2'>
					<h1 className='block text-xl font-extrabold leading-10 text-[#333333]'>Sign in</h1>
					<div className='mb-2 mt-4 w-60 items-center justify-center space-y-2 text-sm leading-6'>
						<SignInOptions />
					</div>
					<TextWithDivider text='or' />
					<div className='mb-2 mt-4 flex space-y-2 text-sm leading-6'>
						<Link
							href='/ap/register'
							className='m-auto w-56 rounded-md border-[#E4B721] bg-[#E4B721] px-2 py-1 text-center font-black text-black'
						>
							Create a New Account
						</Link>
					</div>
					<div id='signin-notice' className='flex w-60'>
						<p className='mx-0 mb-[0.75em] mt-[0.5em] p-0 text-center leading-[140%]'>
							<small>
								By signing in, you agree to IMDb&apos;s{' '}
								<Link href='/conditions' className='text-[#136CB2] hover:underline'>
									Conditions of Use
								</Link>{' '}
								and{' '}
								<Link href='/privacy' className='text-[#136CB2] hover:underline'>
									Privacy Policy
								</Link>
								.
							</small>
						</p>
					</div>
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
