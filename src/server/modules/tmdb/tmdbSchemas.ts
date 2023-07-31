import type { TypeOf } from 'zod'

import { z } from 'zod'

export const getMovieByIDSchema = z.object({
	movieId: z.number(),
})
export type GetMovieByIDSchema = TypeOf<typeof getMovieByIDSchema>

// BelongsToCollection
export const BelongsToCollection = z.object({
	id: z.number().optional(),
	name: z.string().optional(),
	poster_path: z.string().nullable().optional(),
	backdrop_path: z.string().nullable().optional(),
})

export type BelongsToCollectionType = z.infer<typeof BelongsToCollection>

// Genre
export const Genre = z.object({
	id: z.number().optional(),
	name: z.string().optional(),
})

export type GenreType = z.infer<typeof Genre>

// ProductionCompany
export const ProductionCompany = z.object({
	id: z.number().optional(),
	logo_path: z.string().nullable().optional(),
	name: z.string().optional(),
	origin_country: z.string().optional(),
})

export type ProductionCompanyType = z.infer<typeof ProductionCompany>

// ProductionCountry
export const ProductionCountry = z.object({
	iso_3166_1: z.string().optional(),
	name: z.string().optional(),
})

export type ProductionCountryType = z.infer<typeof ProductionCountry>

// SpokenLanguage
const SpokenLanguage = z.object({
	english_name: z.string().optional(),
	iso_639_1: z.string().optional(),
	name: z.string().optional(),
})

export type SpokenLanguageType = z.infer<typeof SpokenLanguage>

// Cast
export const Cast = z.object({
	adult: z.boolean().optional(),
	gender: z.number().optional(),
	id: z.number().int().optional(),
	known_for_department: z.string().optional(),
	name: z.string().optional(),
	original_name: z.string().optional(),
	popularity: z.number().optional(),
	profile_path: z.string().nullish(),
	cast_id: z.number().int().optional(),
	character: z.string().optional(),
	credit_id: z.string().optional(),
	order: z.number().optional(),
	department: z.string().optional(),
	job: z.string().optional(),
})

export type CastType = z.infer<typeof Cast>

// Crew
const Crew = z.object({
	adult: z.boolean().optional(),
	gender: z.number().optional(),
	id: z.number().optional(),
	known_for_department: z.string().optional(),
	name: z.string().optional(),
	original_name: z.string().optional(),
	popularity: z.number().optional(),
	profile_path: z.string().optional(),
	credit_id: z.string().optional(),
	department: z.string().optional(),
	job: z.string().optional(),
})

export type CrewType = z.infer<typeof Crew>

// Credits
export const Credits = z.object({
	id: z.number().int(),
	cast: z.array(Cast).optional(),
	crew: z.array(Cast).optional(),
})

export type CreditsType = z.infer<typeof Credits>

export const ExternalIdsSchema = z.object({
	imdb_id: z.string().nullable(),
	wikidata_id: z.string().nullable(),
	facebook_id: z.string().nullable(),
	instagram_id: z.string().nullable(),
	twitter_id: z.string().nullable(),
})
// export const
// MovieDetailsResults
export const movieDetailsSchema = z.object({
	adult: z.boolean().optional(),
	backdrop_path: z.string().nullable().optional(),
	belongs_to_collection: BelongsToCollection.nullable().optional(),
	budget: z.number().int().optional(),
	genres: z.array(Genre).optional(),
	homepage: z.string(),
	id: z.number().int(),
	imdb_id: z.string().min(9).max(10).optional().nullable().or(z.literal('')),
	original_language: z.string().optional(),
	original_title: z.string().optional(),
	overview: z.string().nullable().optional(),
	popularity: z.number().optional(),
	poster_path: z.string().nullable(),
	production_companies: z.array(ProductionCompany).optional(),
	production_countries: z.array(ProductionCountry).optional(),
	release_date: z
		.string()
		.regex(/^$|^(\d{4})-(\d{2})-(\d{2})$/)
		.nullable()
		.optional(),
	revenue: z.number().int().optional(),
	runtime: z.number().nullable().optional(),
	spoken_languages: z.array(SpokenLanguage).optional(),
	status: z
		.enum(['Rumored', 'Planned', 'In Production', 'Post Production', 'Released', 'Canceled'])
		.optional(),
	tagline: z.string().nullable().optional(),
	title: z.string(),
	video: z.boolean().optional(),
	vote_average: z.number().optional(),
	vote_count: z.number().int().optional(),
	credits: z.object({ cast: z.array(Cast).optional(), crew: z.array(Cast).optional() }).optional(),
	external_ids: ExternalIdsSchema.optional(),
})

export type MovieDetails = TypeOf<typeof movieDetailsSchema>
