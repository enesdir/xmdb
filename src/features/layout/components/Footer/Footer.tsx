import Link from 'next/link'
import { PROJECT_NAME } from '@/lib/constants'
import { FooterSocials } from './FooterSocials'

export const Footer = () => (
	<section id='imdb-bmo-footer' className='flex items-center justify-center bg-black'>
		<footer className='mt-0 block'>
			<div className='m-0 w-full bg-white/10 py-4 sm:hidden'>
				<Link
					className='inline-flex min-h-[2.25rem] min-w-[3rem] max-w-full items-center overflow-hidden rounded-md bg-[#f5c518] px-8 text-sm font-medium text-black no-underline'
					href='#'
					role='button'
					tabIndex={0}
					aria-disabled={false}
				>
					<span className='truncate'>Get the XMDb App</span>
				</Link>
			</div>
			<div
				className='m-auto max-w-[360px] sm:max-w-[600px] lg:max-w-[1024px] xl:max-w-[1280px]'
				role='presentation'
			>
				<FooterSocials />
				<p className='my-2 p-0 text-white/70'>
					Copyright &copy; 2023 | {PROJECT_NAME}
					<a href='#' target='_blank' className='font-semibold hover:underline'>
						Source code
					</a>
				</p>
			</div>
		</footer>
	</section>
)
