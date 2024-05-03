export interface IMovieCard {
    title: string;          // The title of the movie
    genreId: number;        // The id of the movie genre to get the genre name
    movieId: number;
    voteAverage: number;
    posterPath: string;
}