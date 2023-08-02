import { z } from 'zod'

export const getByTmdbIDSchema = z.object({
	tmdbId: z.number(),
})

export const getDiscoverSchema = z.object({
	options: z.object({
		genres: z.array(z.number()).nullish(),
		year: z.number().nullish(),
		sortBy: z.string().nullish(),
		page: z.number(),
	}),
	type: z.union([z.literal('movie'), z.literal('tv')]),
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

export const createdBySchema = z.object({
	id: z.number().optional(),
	credit_id: z.string().optional(),
	name: z.string().optional(),
	gender: z.number().optional(),
	profile_path: z.string().nullable().optional(),
})

export const externalIdsSchema = z.object({
	imdb_id: z.string().nullable(),
	wikidata_id: z.string().nullable(),
	facebook_id: z.string().nullable(),
	instagram_id: z.string().nullable(),
	twitter_id: z.string().nullable(),
})

export const networksSchema = z.object({
	name: z.string().optional(),
	id: z.number().optional(),
	logo_path: z.string().nullable().optional(),
	origin_country: z.string().optional(),
})

export const episode = z.object({
	air_date: z.string().nullable().optional(),
	episode_number: z.number(),
	crew: z.array(crew).optional(),
	guest_stars: z.array(cast).optional(),
	id: z.number(),
	name: z.string(),
	overview: z.string().nullable(),
	production_code: z.string().optional(),
	season_number: z.number().optional(),
	still_path: z.string().nullable().optional(),
	vote_average: z.number().optional(),
	vote_count: z.number().optional(),
})

export const seasonSchema = z.object({
	_id: z.string().optional(),
	air_date: z.string().nullable().optional(),
	episodes: z.array(episode).optional(),
	name: z.string(),
	overview: z.string().nullable(),
	id: z.number(),
	poster_path: z.string().nullable().optional(),
	season_number: z.number().nullable().optional(),
})

const detailsWithCreditsSchema = z.object({
	credits: z
		.object({ cast: z.array(movieDetailsCrew).nullable(), crew: z.array(movieDetailsCrew).nullable() })
		.nullable(),
})

const detailsWithExternalIDSchema = z.object({
	external_ids: externalIdsSchema.nullable(),
})
// Movie & Show Results
export const showCommonSchema = z.object({
	adult: z.boolean().nullable(),
	backdrop_path: z.string().nullable(),
	id: z.number().int(),
	original_language: z.string().nullable(),
	overview: z.string().nullable(),
	popularity: z.number().nullable(),
	poster_path: z.string().nullable(),
	vote_average: z.number().nullable(),
	vote_count: z.number().int().nullable(),
})
// Movie & Show Details Results
export const showDetailsCommonSchema = z.object({
	genres: z.array(genre).nullable(),
	homepage: z.string().nullable(),
	production_companies: z.array(productionCompany).nullish(),
	production_countries: z.array(productionCountry).nullish(),
	spoken_languages: z.array(spokenLanguage).nullable(),
	status: z
		.enum(['Rumored', 'Planned', 'In Production', 'Post Production', 'Released', 'Canceled'])
		.nullable(),
	tagline: z.string().nullable(),
})

export const showBaseSchema = showCommonSchema.extend({
	original_name: z.string().nullable(),
	origin_country: z.array(z.string()).nullable(),
	first_air_date: z
		.string()
		.regex(/^$|^(\d{4})-(\d{2})-(\d{2})$/)
		.nullable(),
	name: z.string().nullable(),
})

// Show Details Results
export const showDetailsBaseSchema = showDetailsCommonSchema.merge(
	showBaseSchema.extend({
		created_by: z.array(createdBySchema).nullable(),
		episode_run_time: z.array(z.number()).optional(),
		in_production: z.boolean().nullable(),
		languages: z.array(z.string()).optional(),
		last_air_date: z.string().nullable().optional(),
		last_episode_to_air: z
			.object({
				air_date: z.string().nullable(),
				episode_number: z.number().nullable(),
				id: z.number().nullable(),
				name: z.string().nullable(),
				overview: z.string().nullable(),
				production_code: z.string().nullable(),
				season_number: z.number().nullable(),
				still_path: z.string().nullable().optional(),
			})
			.nullable()
			.optional(),
		next_episode_to_air: z.object({}).nullable().optional(),
		networks: z.array(networksSchema).nullable(),
		number_of_episodes: z.number().nullable(),
		number_of_seasons: z.number().nullable(),
		seasons: z.array(seasonSchema).nullable(),
		type: z.string().nullable(),
	})
)

// ShowDetailsResults
export const showDetailsSchema = z.intersection(
	showDetailsBaseSchema,
	detailsWithCreditsSchema,
	detailsWithExternalIDSchema
)

export const movieBaseSchema = showCommonSchema.extend({
	original_title: z.string().nullable(),
	release_date: z
		.string()
		.regex(/^$|^(\d{4})-(\d{2})-(\d{2})$/)
		.nullable(),
	title: z.string(),
	video: z.boolean().nullable(),
})

// MovieDetailsResults - without parameter
export const movieDetailsBaseSchema = movieBaseSchema.merge(
	showDetailsCommonSchema.extend({
		belongs_to_collection: belongsToCollection.nullable(),
		budget: z.number().int().nullable(),
		imdb_id: z.string().min(9).max(10).nullable().or(z.literal('')),
		revenue: z.number().int().nullable(),
		runtime: z.number().nullable(),
	})
)

// MovieDetailsResults
export const movieDetailsSchema = z.intersection(
	movieDetailsBaseSchema,
	detailsWithCreditsSchema,
	detailsWithExternalIDSchema
)

// discover result
export const discoverResultBaseSchema = z.object({ genre_ids: z.array(z.number()).nullable() })
export const discoverResultSchema = z.intersection(
	discoverResultBaseSchema,
	movieBaseSchema.partial(),
	showBaseSchema.partial()
)

export const discoverSchema = z.object({
	page: z.number().nullable(),
	results: z.array(discoverResultSchema).nullable(),
	total_pages: z.number().nullable(),
	total_results: z.number().nullable(),
})

// export as a Type
export type GetByTmdbIDSchema = z.infer<typeof getByTmdbIDSchema>
export type GetDiscoverSchema = z.infer<typeof getDiscoverSchema>
export type ProductionCompany = z.infer<typeof productionCompany>
export type BelongsToCollection = z.infer<typeof belongsToCollection>
export type Genre = z.infer<typeof genre>
export type ProductionCountry = z.infer<typeof productionCountry>
export type SpokenLanguage = z.infer<typeof spokenLanguage>
export type Cast = z.infer<typeof cast>
export type Crew = z.infer<typeof crew>
export type MovieDetailsCrew = z.infer<typeof movieDetailsCrew>
export type Credits = z.infer<typeof credits>
export type MovieDetailsBase = z.infer<typeof movieDetailsSchema>
export type MovieDetails = z.infer<typeof movieDetailsSchema>
export type ShowDetails = z.infer<typeof showDetailsSchema>
export type Discover = z.infer<typeof discoverSchema>
