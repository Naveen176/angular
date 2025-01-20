export interface BelongsToCollection {
  backdrop_path: string;
  id: string;
  name: string;
  poster_path: string;
}

export interface Genre {
  id: number;
  name: string;
}
export interface ProductionCompanies {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: string;
  genres: Genre[];
  homepage: string;
  id: string;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: string;
  runtime: string;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: string;
}
