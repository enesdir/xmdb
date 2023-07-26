import { AuthLink } from '@/components/Link/AuthLink'

// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'

export default async function Login() {
	// const session = await getServerSession()
	// if (!!session) redirect('/')

	return (
		<section>
			<div className='flex h-full w-full flex-row'>
				<div className='h-full w-6/12'></div>
				<div className='flex w-6/12 flex-col items-center justify-center py-24'>
					<form className='flex flex-col gap-7 md:min-w-[500px]'>
						<h1 className='text-5xl font-bold'>Login</h1>
						<div className='flex w-full flex-col items-start justify-start gap-2'>
							<label className=''>Email</label>
							<input
								className='w-full rounded-lg border-[1px] p-5 py-3 outline-none transition-all focus:border-[#000]'
								type='email'
								placeholder='example@gmail.com'
								formNoValidate
							/>
						</div>
						<div className='flex w-full flex-col items-start justify-start gap-2'>
							<label className=''>Password</label>
							<input
								className='w-full rounded-lg border-[1px] p-5 py-3 outline-none transition-all focus:border-[#000]'
								type='password'
								placeholder='* * * * * *'
								formNoValidate
							/>
						</div>
						<div className='flex w-full flex-col items-start justify-start gap-2'>
							<input
								className='w-full cursor-pointer rounded-lg border-[1px] p-5 py-3 outline-none transition-all hover:border-[#000] active:scale-95'
								type='submit'
								value='Login'
								formNoValidate
							/>
						</div>
						<p>
							Don&apos;t have an account? <AuthLink href={'/ap/register'} label='Register' />
							instead.
						</p>
					</form>
				</div>
			</div>
		</section>
	)
}
