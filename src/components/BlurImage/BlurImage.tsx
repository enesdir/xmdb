'use client'

import { useCallback, useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'

export function BlurImage(props: ImageProps) {
	const [loading, setLoading] = useState(true)
	const [imageLoadFailed, setImageLoadFailed] = useState(false)
	const PLACEHOLDER_IMAGE = `https://avatar.vercel.sh/${props.alt ?? 'Image'}`
	const handleError = useCallback(() => {
		if (imageLoadFailed) {
			return console.error('Image Load Failed')
		}
		setImageLoadFailed(true)
		setLoading(false)
	}, [imageLoadFailed, setImageLoadFailed])

	useEffect(() => {
		setImageLoadFailed(false)
	}, [props.src])
	return (
		<Image
			{...props}
			src={imageLoadFailed ? PLACEHOLDER_IMAGE : props.src}
			alt={props.alt ?? 'Image'}
			className={`${props.className} ${loading ? 'blur-[2px]' : 'blur-0'}`}
			onLoad={async () => {
				setLoading(false)
			}}
			onError={handleError}
		/>
	)
}
