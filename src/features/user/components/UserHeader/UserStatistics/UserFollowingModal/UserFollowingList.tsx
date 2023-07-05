import { LoadingContent } from '@/components/'
import { useGetFollowing } from '@/features/user/hooks/useGetFollowing'
import { UserList } from '@/features/users/'

type UserFollowingListProps = Readonly<{
	userId: string
}>

export const UserFollowingList = ({ userId }: UserFollowingListProps) => {
	const { following, isLoading } = useGetFollowing(userId)

	return (
		<LoadingContent isLoading={isLoading}>
			<UserList alertMessage="This user doesn't follow any user yet!" users={following} />
		</LoadingContent>
	)
}
