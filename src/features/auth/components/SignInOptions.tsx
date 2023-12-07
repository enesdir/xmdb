'use client'

import { useRouter } from 'next/navigation'

import { SocialButton } from '@/features/auth/components/SocialButton'

export const SignInOptions = () => {
	const router = useRouter()
	return (
		<>
			<SocialButton variant='xmdb' text='XMDb' onClick={() => router.push('/ap/login')} />
			<SocialButton variant='google' text='Google' onClick={() => alert('google')} />
			<SocialButton variant='facebook' text='Facebook' onClick={() => alert('facebook')} />
			<SocialButton variant='discord' text='Discord' onClick={() => alert('discord')} />
		</>
	)
}
