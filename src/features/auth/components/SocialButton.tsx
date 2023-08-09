import { BsDiscord, BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

import { LogoIcon } from '@/components/Brand'
import { cn } from '@/utils/cn'

type Variant = 'xmdb' | 'discord' | 'facebook' | 'google'

type SocialButtonProps = Readonly<{
	variant: Variant
	text: string
	onClick: () => void
}>

export const SocialButton = ({ variant, text, onClick }: SocialButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={cn(
				'mx-2 flex h-9 w-full items-center justify-start gap-x-2 rounded-md border border-[#dddddd] py-1 pl-4 font-black text-[#555555]'
			)}
		>
			<span className='inline-block align-middle text-xl'>
				{variant === 'xmdb' && <LogoIcon />}
				{variant === 'google' && <FcGoogle className='' />}
				{variant === 'facebook' && <BsFacebook className='text-[#1877f2]' />}
				{variant === 'discord' && <BsDiscord className='text-[#7289d9]' />}
			</span>
			Sign in with {text}
		</button>
	)
}
