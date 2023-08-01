import { z } from 'zod'

export const getByTmdbIDSchema = z.object({
	tmdbId: z.number(),
})

// BelongsToCollection
export const belongsToCollection = z.object({
	id: z.number().optional(),
	name: z.string().optional(),
	poster_path: z.string().nullable().optional(),
	backdrop_path: z.string().nullable().optional(),
})

// Genre
export const genre = z.object({
	id: z.number().optional(),
	name: z.string().optional(),
})

// ProductionCompany
export const productionCompany = z.object({
	id: z.number().optional(),
	logo_path: z.string().nullable().optional(),
	name: z.string().optional(),
	origin_country: z.string().optional(),
})

// ProductionCountry
export const productionCountry = z.object({
	iso_3166_1: z.string().optional(),
	name: z.string().optional(),
})

// SpokenLanguage
const spokenLanguage = z.object({
	english_name: z.string().nullable(),
	iso_639_1: z.string().nullable(),
	name: z.string().nullable(),
})

const baseCrew = z.object({
	adult: z.boolean(),
	gender: z.number().int().nullable(),
	id: z.number().int(),
	known_for_department: z.string().nullable(),
	name: z.string(),
	original_name: z.string().nullable(),
	popularity: z.number().nullable(),
	profile_path: z.string().nullable(),
	credit_id: z.string().nullable(),
})

// Cast
export const cast = baseCrew.extend({
	cast_id: z.number().int().nullable(),
	character: z.string().nullable(),
	order: z.number().int().nullable(),
})

// Crew
export const crew = baseCrew.extend({
	department: z.string().nullable(),
	job: z.string().nullable(),
})

// Credits in MovieDetails
export const movieDetailsCrew = z.intersection(crew.partial(), cast.partial())

// Credits
export const credits = z.object({
	id: z.number().int(),
	cast: z.array(cast).nullable(),
	crew: z.array(crew).nullable(),
})

export const externalIdsSchema = z.object({
	imdb_id: z.string().nullable(),
	wikidata_id: z.string().nullable(),
	facebook_id: z.string().nullable(),
	instagram_id: z.string().nullable(),
	twitter_id: z.string().nullable(),
})
// export const
// MovieDetailsResults
export const movieDetailsBaseSchema = z.object({
	adult: z.boolean().nullable(),
	backdrop_path: z.string().nullable(),
	belongs_to_collection: belongsToCollection.nullable(),
	budget: z.number().int().nullable(),
	genres: z.array(genre).nullable(),
	homepage: z.string().nullable(),
	id: z.number().int(),
	imdb_id: z.string().min(9).max(10).nullable().or(z.literal('')),
	original_language: z.string().nullable(),
	original_title: z.string().nullable(),
	overview: z.string().nullable(),
	popularity: z.number().nullable(),
	poster_path: z.string().nullable(),
	production_companies: z.array(productionCompany).nullish(),
	production_countries: z.array(productionCountry).nullish(),
	release_date: z
		.string()
		.regex(/^$|^(\d{4})-(\d{2})-(\d{2})$/)
		.nullable(),
	revenue: z.number().int().nullable(),
	runtime: z.number().nullable(),
	spoken_languages: z.array(spokenLanguage).nullable(),
	status: z
		.enum(['Rumored', 'Planned', 'In Production', 'Post Production', 'Released', 'Canceled'])
		.nullable(),
	tagline: z.string().nullable(),
	title: z.string(),
	video: z.boolean().nullable(),
	vote_average: z.number().nullable(),
	vote_count: z.number().int().nullable(),
})

const movieDetailsWithCreditsSchema = movieDetailsBaseSchema.extend({
	credits: z
		.object({ cast: z.array(movieDetailsCrew).nullable(), crew: z.array(movieDetailsCrew).nullable() })
		.nullable(),
})

const movieDetailsWithExternalIDSchema = movieDetailsBaseSchema.extend({
	external_ids: externalIdsSchema.nullable(),
})

export const movieDetailsSchema = z.intersection(
	movieDetailsWithCreditsSchema,
	movieDetailsWithExternalIDSchema
)

// export as a Type
export type GetByTmdbIDSchema = z.infer<typeof getByTmdbIDSchema>
export type ProductionCompany = z.infer<typeof productionCompany>
export type BelongsToCollection = z.infer<typeof belongsToCollection>
export type Genre = z.infer<typeof genre>
export type ProductionCountry = z.infer<typeof productionCountry>
export type SpokenLanguage = z.infer<typeof spokenLanguage>
export type CastType = z.infer<typeof cast>
export type CrewType = z.infer<typeof crew>
export type MovieDetailsCrew = z.infer<typeof movieDetailsCrew>
export type Credits = z.infer<typeof credits>
export type MovieDetailsBase = z.infer<typeof movieDetailsSchema>
export type MovieDetails = z.infer<typeof movieDetailsSchema>
