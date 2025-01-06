import { MovieCard } from "./movie-card";

export interface dates {
    maximum: string;
    minimum: string;
}
export interface PopularMovies {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieCard[];
}
export interface UpcomingMovies {
    dates:dates;
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieCard[];
}
export interface TopRatedMovies {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieCard[];
}
export interface NowPlayingMovies {
    dates:dates;
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieCard[];
}