'use client'

import { BiHelpCircle } from 'react-icons/bi'
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md'
import Dropdown from '@/components/Dropdown/Dropdown'

export const LanguageMenu = () => {
	const buttonElements = () => (
		<>
			<span className='truncate font-medium capitalize leading-5 tracking-wide'>{'EN'}</span>
		</>
	)

	return (
		<div className='order-8 flex justify-center font-bold tracking-wider'>
			<Dropdown
				buttonChildren={buttonElements()}
				overlaySize='xl'
				className='min-h-[2.25rem] pr-1 max-wsm:pl-0'
			>
				<Dropdown.Item
					onClick={() => console.log('language')}
					className='border-b border-gray-700 hover:bg-none'
				>
					<span className='capitalize'>Fully supported</span>
				</Dropdown.Item>

				<Dropdown.Item
					icon={<MdOutlineRadioButtonChecked className='text-2xl text-yellow-400' />}
					onClick={() => console.log('language')}
				>
					English (United States)
				</Dropdown.Item>
				<Dropdown.Item
					onClick={() => console.log('language')}
					className='justify-between border-b border-gray-700'
				>
					<span className='capitalize'>Partially supported</span>
					<BiHelpCircle className='text-2xl text-gray-400' />
				</Dropdown.Item>

				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Français (Canada)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Français (France)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Deutsch (Deutschland)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					हिंदी (भारत)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Italiano (Italia)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Português (Brasil)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Español (España)
				</Dropdown.Item>
				<Dropdown.Item
					icon={<MdOutlineRadioButtonUnchecked className='text-2xl text-white' />}
					onClick={() => console.log('language')}
				>
					Español (México)
				</Dropdown.Item>
			</Dropdown>
		</div>
	)
}
