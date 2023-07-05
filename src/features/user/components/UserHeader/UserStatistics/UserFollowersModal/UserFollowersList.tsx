import { LoadingContent } from '@/components/'
import { useGetFollowers } from '@/features/user/hooks/useGetFollowers'
import { UserList } from '@/features/users/'

type UserFollowersListProps = Readonly<{
	userId: string
}>

export const UserFollowersList = ({ userId }: UserFollowersListProps) => {
	const { followers, isLoading } = useGetFollowers(userId)

	return (
		<LoadingContent isLoading={isLoading}>
			<UserList alertMessage="This user doesn't have any followers yet!" users={followers} />
		</LoadingContent>
	)
}
