'use client'

import type { User } from '~/src/server/modules/users/usersSchemas'
import { useModal } from '@/hooks/useModal'
import { StatisticItem } from './StatisticItem'
import { UserFollowersModal } from './UserFollowersModal/UserFollowersModal'
import { UserFollowingModal } from './UserFollowingModal/UserFollowingModal'

type UserStatisticsProps = Readonly<{
	user: User
}>

export const UserStatistics = ({
	user: {
		id,
		statistics: { posts, followers, following },
	},
}: UserStatisticsProps) => {
	const {
		isOpen: isUserFollowersOpen,
		openModal: openUserFollowersModal,
		closeModal: closeUserFollowersModal,
	} = useModal()

	const {
		isOpen: isUserFollowingOpen,
		openModal: openUserFollowingModal,
		closeModal: closeUserFollowingModal,
	} = useModal()

	return (
		<>
			<ul className='flex justify-between'>
				<StatisticItem name='Posts' value={posts} />
				<StatisticItem name='Followers' value={followers} onClick={openUserFollowersModal} />
				<StatisticItem name='Following' value={following} onClick={openUserFollowingModal} />
			</ul>
			<UserFollowersModal userId={id} isOpen={isUserFollowersOpen} onClose={closeUserFollowersModal} />
			<UserFollowingModal userId={id} isOpen={isUserFollowingOpen} onClose={closeUserFollowingModal} />
		</>
	)
}
