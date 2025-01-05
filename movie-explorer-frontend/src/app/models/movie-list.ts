import { MovieCard } from "./movie-card";

export interface MovieList {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieCard[];
}