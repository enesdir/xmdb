import type { IconType } from 'react-icons'
import type { BaseLinkProps } from './BaseLink'

import {
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsMailbox,
	BsRss,
	BsTelegram,
	BsTiktok,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs'

import { cn } from '@/utils/cn'
import { BaseLink } from './BaseLink'

type SocialLinkProps = Readonly<
	{
		platform?: Platform
	} & Omit<BaseLinkProps, 'label'>
>

export type Platform =
	| 'github'
	| 'twitter'
	| 'youtube'
	| 'facebook'
	| 'telegram'
	| 'tiktok'
	| 'instagram'
	| 'mail'
	| 'rss'

type PlatformInfo = {
	icon: IconType
	platform: Platform
	label: string
}
const iconMapper: { [key: string]: PlatformInfo } = {
	'(?:github.com)': { icon: BsGithub, platform: 'github', label: 'GitHub' },
	'((?:t.co)|(?:twitter.com))': {
		icon: BsTwitter,
		platform: 'twitter',
		label: 'Twitter',
	},
	'((?:youtu.be)|(?:youtube.com))': {
		icon: BsYoutube,
		platform: 'youtube',
		label: 'YouTube',
	},
	'((?:t.me)|(?:telegram.com))': {
		icon: BsTelegram,
		platform: 'telegram',
		label: 'Telegram',
	},
	'(?:instagram.com)': {
		icon: BsInstagram,
		platform: 'instagram',
		label: 'Instagram',
	},
	'(?:facebook.com)': {
		icon: BsFacebook,
		platform: 'facebook',
		label: 'facebook',
	},
	'(?:tiktok.com)': {
		icon: BsTiktok,
		platform: 'tiktok',
		label: 'TikTok',
	},
	'(?:mailto:)': { icon: BsMailbox, platform: 'mail', label: 'E-Mail' },
	'(?:feed.xml)': { icon: BsRss, platform: 'rss', label: 'RSS' },
}

function getIconForUrl(url: string): PlatformInfo | undefined {
	for (const regexStr in iconMapper) {
		const regex = new RegExp(`^(?:https?:\/\/)?(?:[^@/\\n]+@)?(?:www.)?` + regexStr)
		if (regex.test(url)) {
			// eslint-disable-next-line
			return iconMapper[regexStr]!
		}
	}
	return undefined
}

function getIconForPlatform(platform: Platform | undefined): PlatformInfo | undefined {
	if (!platform) {
		return undefined
	}

	for (const info of Object.values(iconMapper)) {
		if (info.platform === platform) {
			return info
		}
	}

	return undefined
}
export const SocialLink = ({ href, platform, className, ...props }: SocialLinkProps) => {
	const media = getIconForPlatform(platform) ?? getIconForUrl(href.toString())

	if (!media) {
		console.warn(`No icon found for ${href.toString()}`)
		return <a href={href} {...props} />
	}

	return (
		<BaseLink
			href={href}
			className={cn('rounded-full bg-black p-3 hover:bg-white/10', className)}
			{...props}
			aria-disabled='false'
			label={media.label}
		>
			<media.icon className='h-5 w-5 text-white/95 transition' />
		</BaseLink>
	)
}
