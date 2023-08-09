'use client'

import { useRouter } from 'next/navigation'

import { SocialButton } from '@/features/auth/components/SocialButton'
import { signInWith } from '@/lib/auth'

export const SignInOptions = () => {
	const router = useRouter()
	return (
		<>
			<SocialButton variant='xmdb' text='XMDb' onClick={() => router.push('/ap/login')} />
			<SocialButton variant='google' text='Google' onClick={() => signInWith('google')} />
			<SocialButton variant='facebook' text='Facebook' onClick={() => signInWith('facebook')} />
			<SocialButton variant='discord' text='Discord' onClick={() => signInWith('discord')} />
		</>
	)
}
