export interface IMovieData {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export interface IMovieById {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {};
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ICast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface IMovieCredits {
  id: number;
  cast: ICast[];
  crew: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
  }[];
}
export interface IMovieKeywords {
  id: number;
  name: string;
}

export interface IPromiseMovieCategory {
  page: number;
  results: IMovieData[];
  total_pages: number;
  total_results: number;
}
export interface IPromiseAllMovieCategories {
  trends: IMovieData[];
  popular: IMovieData[];
  nowPlaying: IMovieData[];
}

export interface IPromiseMovieKeywords {
  id: number;
  keywords: IMovieKeywords[];
}
export interface IPromiseMovieKeywords {
  id: number;
  page: number;
  results: IMovieData[];
  total_pages: number;
  total_results: number;
}
