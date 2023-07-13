'use client'

import { BiHelpCircle } from 'react-icons/bi'
import { GrRadial, GrRadialSelected } from 'react-icons/gr'
import Dropdown from '@/components/Dropdown/Dropdown'
// TODO: grommet icons can not style
// https://github.com/react-icons/react-icons/issues/404
import './languagemenu.module.css'

export const LanguageMenu = () => {
	const buttonElements = () => (
		<>
			<span className='capitalize'>{'EN'}</span>
		</>
	)

	return (
		<div className='order-5 flex justify-center '>
			<Dropdown buttonChildren={buttonElements()} overlaySize='xl'>
				<Dropdown.Item onClick={() => console.log('language')} className='border-b border-gray-700'>
					<span className='capitalize'>Fully supported</span>
				</Dropdown.Item>
				<hr className='border-gray-700' />
				<Dropdown.Item
					icon={<GrRadialSelected className='text-yellow-400' />}
					onClick={() => console.log('language')}
				>
					English (United States)
				</Dropdown.Item>
				<Dropdown.Item onClick={() => console.log('language')} className='border-b border-gray-700'>
					<span className='capitalize'>Partially supported</span>
					<BiHelpCircle className='text-gray-400' />
				</Dropdown.Item>

				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Français (Canada)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Français (France)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<GrRadial className='text-white' stroke='white' />}
					onClick={() => console.log('language')}
				>
					Deutsch (Deutschland)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					हिंदी (भारत)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Italiano (Italia)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Português (Brasil)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Español (España)
				</Dropdown.Item>
				<Dropdown.Item icon={<GrRadial className='text-white' />} onClick={() => console.log('language')}>
					Español (México)
				</Dropdown.Item>
			</Dropdown>
		</div>
	)
}
