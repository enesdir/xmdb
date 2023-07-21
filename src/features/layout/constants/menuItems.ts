import { BiSolidFilm, BiSolidVideos, BiWorld } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdStars } from 'react-icons/md'
import { SlScreenDesktop } from 'react-icons/sl'
import type { MenuItemType } from '@/features/layout/types/MenuItemType'

export const menuItems: MenuItemType[] = [
	{
		title: 'Movies',
		href: '#',
		icon: BiSolidFilm,
		items: [
			{ title: 'Release Calendar', href: '#' },
			{ title: 'Top 250 Movies', href: '#' },
			{ title: 'Most Popular Movies', href: '#' },
			{ title: 'Browse Movies by Genre', href: '#' },
			{ title: 'Top Box Office', href: '#' },
		],
	},
	{
		title: 'TV Shows',
		href: '#',
		icon: SlScreenDesktop,
		items: [
			{ title: 'What&#781;s on TV & Streaming', href: '#' },
			{ title: 'Top 250 TV Shows', href: '#' },
			{ title: 'Most Popular TV Shows', href: '#' },
			{ title: 'Browse TV Shows by Genre', href: '#' },
			{ title: 'TV News', href: '#' },
		],
	},
	{
		title: 'Watch',
		href: '#',
		icon: BiSolidVideos,
		items: [
			{ title: 'What to Watch', href: '#' },
			{ title: 'Latest Trailers', href: '#' },
			{ title: 'XMDb Originals', href: '#' },
			{ title: 'XMDb Picks', href: '#' },
			{ title: 'XMDb Podcasts', href: '#' },
		],
	},
	{
		title: 'Awards & Events',
		href: '#',
		icon: MdStars,
		items: [
			{ title: 'Oscars', href: '#' },
			{ title: 'Emmys', href: '#' },
			{ title: 'San Diego Comic-Con', href: '#' },
			{ title: 'Outfest LA', href: '#' },
			{ title: 'STARmeter Awards', href: '#' },
			{ title: 'Awards Central', href: '#' },
			{ title: 'Festival Central', href: '#' },
			{ title: 'All Events', href: '#' },
		],
	},
	{
		title: 'Celebs',
		href: '#',
		icon: BsFillPeopleFill,
		items: [
			{ title: 'Born Today', href: '#' },
			{ title: 'Most Popular Celebs', href: '#' },
			{ title: 'Celebrity News', href: '#' },
		],
	},
	{
		title: 'Community',
		href: '#',
		icon: BiWorld,
		items: [
			{ title: 'Help Center', href: '#' },
			{ title: 'Contributor Zone', href: '#' },
			{ title: 'Polls', href: '#' },
		],
	},
]
