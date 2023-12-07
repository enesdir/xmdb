import { LoadingContent } from '@/components/LoadingContent'
import { useGetFollowing } from '@/features/user/hooks/useGetFollowing'
import { UserList } from '@/features/users/'

type UserFollowingListProps = Readonly<{
	userId: string
}>

export const UserFollowingList = ({ userId }: UserFollowingListProps) => {
	const { following, isPending } = useGetFollowing(userId)

	return (
		<LoadingContent isLoading={isPending}>
			<UserList alertMessage="This user doesn't follow any user yet!" users={following} />
		</LoadingContent>
	)
}
