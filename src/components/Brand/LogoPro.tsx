import { Button } from '@/components/Button'
import { PROJECT_NAME } from '@/constants/appConfigurations'

export const LogoPro = () => {
	return (
		<Button className='order-5 hidden subpixel-antialiased lg:inline-flex' variant='text'>
			<span className='text-xl font-extrabold leading-none -tracking-widest'>
				{PROJECT_NAME}
				<span className='text-cyan-500'>Pro</span>
			</span>
		</Button>
	)
}
