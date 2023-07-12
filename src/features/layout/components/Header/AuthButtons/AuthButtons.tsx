import { SignInButton } from './SignInButton'
import { SignUpButton } from './SignUpButton'

export const AuthButtons = () => (
	<>
		<ul className='order-4 flex gap-x-2'>
			<li>
				<SignInButton />
			</li>
			<li>
				<SignUpButton />
			</li>
		</ul>
	</>
)
