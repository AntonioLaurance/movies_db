import { MovieCard } from "../MovieCard";

export interface IMovieTape {
    title?: string;
    category: "popular" | "top_rated" | "now_playing" | "recommendations";
    numMovies?: number;
    movieId?: number;
}
