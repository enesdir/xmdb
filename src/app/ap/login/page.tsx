import { Logo } from '@/components/Brand'
import { CustomLink } from '@/components/CustomLink'
import { TextWithDivider } from '@/components/Text'
import { CardContainer, CardTitle } from '@/features/auth/components/Card'
import { SignInForm } from '@/features/auth/components/SignInForm/SignInForm'

// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'

export default async function Login() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='mx-auto py-8'>
				<Logo />
				<CardContainer>
					<CardTitle text='Sign in' />
					<SignInForm />
					<TextWithDivider text='New to XMDb?' />
					<p>
						Don&apos;t have an account?{' '}
						<CustomLink href='/ap/register' variant='classic'>
							Register
						</CustomLink>
					</p>
				</CardContainer>
			</div>
		</section>
	)
}
