import { Button } from '@/components/Button'
import { PROJECT_NAME } from '@/lib/constants'

export const LogoPro = () => {
	return (
		<Button className='order-5 hidden p-1 lg:inline-flex' variant='text'>
			<span className='text-lg font-extrabold tracking-tighter'>
				{PROJECT_NAME}
				<span className='text-cyan-500'>Pro</span>
			</span>
		</Button>
	)
}
