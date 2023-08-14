import { CustomLink } from '@/components/CustomLink'

export const AuthButtons = () => (
	<div className='order-4 lg:order-7'>
		<CustomLink className='min-h-[2.25rem] ' href='/registration/signin' variant='button'>
			<span className='truncate'>Sign In</span>
		</CustomLink>
	</div>
)
