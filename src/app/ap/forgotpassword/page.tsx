// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'
import { Button } from '@/components/Button'
import { AuthLink } from '@/components/Link/AuthLink'
import { TextField } from '@/components/TextField'

export default async function ForgotPassword() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='mx-auto my-10 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300'>
				<h1 className='text-4xl font-medium'>Password assistance</h1>
				<p className='text-slate-500'>
					Enter the email address associated with your XMDb account, then click Continue.
				</p>

				<form action='' className='my-10'>
					<div className='flex flex-col space-y-5'>
						<TextField type='email' label='Email address' placeholder='Your email' required={true} />
						<Button fill className='' variant='brand'>
							<span>Reset password</span>
						</Button>

						<p className='text-center'>
							Not registered yet? <AuthLink href='/ap/register' label='Register now' hasIcon />
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
