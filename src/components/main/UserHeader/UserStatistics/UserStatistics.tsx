'use client'

import { useBoolean } from '@/hooks/useBoolean'
import type { User } from '@/server/modules/users/usersSchemas'
import { StatisticItem } from './StatisticItem'
import { UserFollowersModal } from './UserFollowersModal/UserFollowersModal'
import { UserFollowingModal } from './UserFollowingModal/UserFollowingModal'

type UserStatisticsProps = Readonly<{
	user: User
}>

export const UserStatistics = ({
	user: {
		id,
		statistics: { shows, followers, following },
	},
}: UserStatisticsProps) => {
	const {
		value: isUserFollowersOpen,
		setTrue: openUserFollowersModal,
		setFalse: closeUserFollowersModal,
	} = useBoolean(false)

	const {
		value: isUserFollowingOpen,
		setTrue: openUserFollowingModal,
		setFalse: closeUserFollowingModal,
	} = useBoolean(false)

	return (
		<>
			<ul className='flex justify-between'>
				<StatisticItem name='Shows' value={shows} />
				<StatisticItem name='Followers' value={followers} onClick={openUserFollowersModal} />
				<StatisticItem name='Following' value={following} onClick={openUserFollowingModal} />
			</ul>
			<UserFollowersModal userId={id} isOpen={isUserFollowersOpen} onClose={closeUserFollowersModal} />
			<UserFollowingModal userId={id} isOpen={isUserFollowingOpen} onClose={closeUserFollowingModal} />
		</>
	)
}
