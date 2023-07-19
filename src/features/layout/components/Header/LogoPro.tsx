import { Button } from '@/components'
import { PROJECT_NAME } from '@/lib/constants'

export const LogoPro = () => {
	return (
		<Button className='order-5 hidden sm:inline-flex' variant='text'>
			<span className='text-xl font-extrabold tracking-tighter'>
				{PROJECT_NAME}
				<span className='text-cyan-500'>Pro</span>
			</span>
		</Button>
	)
}
