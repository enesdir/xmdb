import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { IconButton } from '@/components/IconButton'
import { useToggleLike } from '@/features/show/hooks/useToggleLike'
import { useRequiredSession } from '@/hooks/useRequiredSession'

type LikeButtonProps = Readonly<{
	postId: number
	isLiked: boolean
}>

export const LikeButton = ({ postId, isLiked }: LikeButtonProps) => {
	const { toggleLike, isLoading, isLike } = useToggleLike(isLiked, postId)

	const requiredSession = useRequiredSession()

	const handleButtonClick = async () => {
		await toggleLike(postId)
	}

	return (
		<div className='text-xl'>
			<IconButton
				icon={isLike ? <AiFillHeart /> : <AiOutlineHeart />}
				label={`Like #${postId} post`}
				variant={isLike ? 'danger' : 'default'}
				disabled={isLoading}
				onClick={requiredSession(handleButtonClick)}
			/>
		</div>
	)
}
