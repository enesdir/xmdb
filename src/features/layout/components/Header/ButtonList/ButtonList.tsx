import { PrivateElement } from '@/components/'
import { SignInButton } from './SignInButton'
import { SignUpButton } from './SignUpButton'

export const ButtonList = () => (
	<PrivateElement loggedIn={false}>
		<ul className='flex gap-x-2'>
			<li>
				<SignInButton />
			</li>
			<li>
				<SignUpButton />
			</li>
		</ul>
	</PrivateElement>
)
