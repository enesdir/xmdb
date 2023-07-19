import { List, ListItem } from '@/components/List'
import { SignInButton } from './SignInButton'
import { SignUpButton } from './SignUpButton'

export const AuthButtons = () => (
	<List className='order-4 flex gap-x-2'>
		<ListItem>
			<SignInButton />
		</ListItem>
		<ListItem>
			<SignUpButton />
		</ListItem>
	</List>
)
