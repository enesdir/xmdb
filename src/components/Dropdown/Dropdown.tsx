import { Children, ReactElement, cloneElement, useRef, type ReactNode } from 'react'
import type { ButtonProps } from '@/components/Button/Button'
import { useBoolean } from '@/hooks/useBoolean'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { cn } from '@/lib/utils/cn'
import { DropdownButton } from './DropdownButton'
import { DropdownItem, type DropdownItemProps } from './DropdownItem'
import { DropdownItems, type DropdownItemsProps } from './DropdownItems'

function isDropdownItem(child: ReactNode): boolean {
	return (child as ReactElement).type === DropdownItem
}

export interface DropdownProps extends Omit<ButtonProps, 'children' | 'iconPosition' | 'icon'> {
	children: ReactNode
	buttonChildren: ReactNode
	overlaySize: DropdownItemsProps['size']
}

const Dropdown = ({
	className,
	children,
	style,
	overlaySize = 'sm',
	buttonChildren,
	...props
}: DropdownProps) => {
	const { value, toggle, setFalse } = useBoolean()
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleClickOutside = () => {
		setFalse()
	}
	useOnClickOutside(dropdownRef, handleClickOutside)

	const buttonClassname = cn([className])

	return (
		<div className='relative flex h-full' style={style} ref={dropdownRef}>
			<DropdownButton
				{...props}
				isOpen={value}
				type='button'
				onClick={() => toggle()}
				className={buttonClassname}
			>
				{buttonChildren}
			</DropdownButton>
			<DropdownItems isHidden={!value} className='right-0 mt-10' size={overlaySize}>
				{Children.toArray(children)
					.filter(isDropdownItem)
					.map((child) => child as ReactElement<DropdownItemProps>)
					.map((child) =>
						cloneElement(child, {
							...child.props,
							onClick: (e: React.MouseEvent<HTMLDivElement>) => {
								child.props.onClick?.(e)
								setFalse()
							},
						})
					)}
			</DropdownItems>
		</div>
	)
}
export default Dropdown
Dropdown.Item = DropdownItem
