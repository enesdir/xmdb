import Link from 'next/link'
import { Copyright } from './Copyright'
import { FooterLinks } from './FooterLinks'
import { FooterLogo } from './FooterLogo'
import { FooterSocials } from './FooterSocials'

export const Footer = () => (
	<footer className='mt-4 bg-black px-0 py-4 text-center text-base tracking-wide'>
		<div className='m-0 w-full bg-white/10 py-4 md:hidden'>
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
			className='mx-auto my-0 max-w-[360px] text-center md:max-w-[600px] lg:max-w-[1024px] xl:max-w-[1280px]'
			role='presentation'
		>
			<div>
				<FooterSocials />
				<FooterLinks />
			</div>
			<FooterLogo />
			<Copyright />
		</div>
	</footer>
)
