'use client'

import { useState } from 'react'

import { Button } from '@/components/Button'
import { Modal, ModalTitle } from '@/components/Modal'
import { PersonImage } from './PersonImage'

import type { RouterOutputs } from '@/trpc/shared'

type CastProps = {
	cast:
		| NonNullable<RouterOutputs['tmdb']['getShowById']['credits']['cast']>
		| NonNullable<RouterOutputs['tmdb']['getMovieById']['credits']['cast']>
	guestStars?: {
		character: string
		credit_id: string
		order: number
		adult: boolean
		gender: number
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string
	}[]
}

export const Cast = ({ cast, guestStars }: CastProps) => {
	const [modalOpen, setModalOpen] = useState(false)

	if (cast.length > 0) {
		return (
			<>
				<div className='relative mx-1 md:mx-0 md:mb-8'>
					<div className='flex items-center justify-between gap-4 pb-4 text-4xl font-bold'>
						<h2>Cast</h2>
						<Button onClick={() => setModalOpen(!modalOpen)}>Show all cast</Button>
					</div>
					<div>
						<div className='flex space-x-2'>
							{cast.slice(0, 12).map((item, i) => (
								<div key={'cast' + item.id + i} className='shrink-0'>
									<PersonImage
										imageSrc={item.profile_path!}
										name={item.original_name!}
										url={`/name/${item.id}`}
										job={item?.character}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<Modal isOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
					<div className='px-4 pb-4'>
						<div>
							<ModalTitle>
								<h1>Main cast</h1>
							</ModalTitle>
							<div className='grid grid-cols-2 justify-start gap-4 px-4 sm:grid-cols-3'>
								{cast.map((item, i) => (
									<div key={'cast' + item.id + i} className='shrink-0'>
										<PersonImage
											imageSrc={item.profile_path!}
											name={item.original_name!}
											url={`/name/${item.id}`}
											job={item?.character}
										/>
									</div>
								))}
							</div>
						</div>

						{guestStars && guestStars.length > 0 && (
							<div>
								<ModalTitle>
									<h1>Guest stars</h1>
								</ModalTitle>
								<div className='grid grid-cols-2 justify-start gap-4 px-4 sm:grid-cols-3 md:grid-cols-4'>
									{guestStars.map((item, i) => (
										<div key={'guestStars' + item.id + i} className='shrink-0'>
											<PersonImage
												imageSrc={item.profile_path}
												name={item.original_name}
												url={`/name/${item.id}`}
												job={item?.character}
											/>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</Modal>
			</>
		)
	} else {
		return <></>
	}
}
