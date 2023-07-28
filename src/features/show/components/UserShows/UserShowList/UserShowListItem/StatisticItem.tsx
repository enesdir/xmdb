import type { ReactNode } from 'react'

import { formatNumber } from '@/utils/intl'

type StatisticItemProps = Readonly<{
	icon: ReactNode
	value: number
}>

export const StatisticItem = ({ icon, value }: StatisticItemProps) => (
	<li className='flex items-center gap-x-1.5 text-xl'>
		{icon}
		{formatNumber(value)}
	</li>
)
