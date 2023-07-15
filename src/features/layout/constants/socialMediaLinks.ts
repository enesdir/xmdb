import { type Platform } from '@/components/SocialLink'

type SocialMediaLinksType = {
	platform: Platform
	href: string
}

export const socialMediaLinks: SocialMediaLinksType[] = [
	{ href: 'https://tiktok.com/', platform: 'tiktok' },
	{ href: 'https://instagram.com/', platform: 'instagram' },
	{ href: 'https://twitter.com/', platform: 'twitter' },
	{ href: 'https://youtube.com/', platform: 'youtube' },
	{ href: 'https://facebook.com/', platform: 'facebook' },
]
