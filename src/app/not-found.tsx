import Link from 'next/link'

import type { Metadata } from 'next/types'

export const metadata: Metadata = {
	title: 'Something Wrong',
}

export default function ErrorPage() {
	return (
		<div className='h-screen w-full bg-brand-gray4'>
			<div className='m-auto h-screen border-x border-solid border-x-brand-gray5 bg-white p-0 text-base shadow-[0_0_5px_5px_#C5CACD] md:mx-auto md:my-0 md:px-3 md:py-0 lg:max-w-screen-md xl:max-w-screen-lg'>
				<div className='relative p-10'>
					<div className='text-lg text-brand-gray5'>
						The requested URL was not found on our server.{' '}
						<Link href='/' className='text-brand-blue2 hover:underline'>
							Go to the homepage
						</Link>{' '}
						&raquo;
					</div>
					<div className='relative flex flex-col items-center space-x-6 rounded-lg border border-solid border-brand-yellow2 bg-brand-yellow2 p-6 md:flex-row lg:p-16'>
						<div className='flex items-center '>
							<div className='text-8xl font-bold text-brand-yellow4'>
								404
								<br />
								<span>ERROR</span>
							</div>
						</div>
						<div className='absolute -bottom-5 right-32 h-0 w-0 border-b-0 border-l-[2rem] border-r-0 border-t-[1.3125rem] border-solid border-x-transparent border-t-brand-yellow2 leading-[0] lg:right-60'></div>
						<div className='text-2xl text-white'>Where&apos;s the page, Lebowski? Where&apos;s the page?</div>
					</div>
					<div className='flex w-full items-center justify-end p-5'>
						<span className='text-gray-600'>Blond Thug, </span>
						<Link href='/title/tt0118715' className='text-blue-700'>
							The Big Lebowski (1998)
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
