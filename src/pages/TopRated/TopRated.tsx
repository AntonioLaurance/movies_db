import { MovieCard } from '../../components/MovieCard';
import { getTopRatedMovies } from '../../services/movies/getTopRatedMovies';
import { IMovieResponse } from '../../services/movies/types';
import React, { useEffect, useState } from 'react';

const TopRated: React.FC = () => {
    const [movies, setMovies] = useState<IMovieResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMovies, setErrorMovies] = useState<boolean>(false);

    const getTopRated = async () => {
        await getTopRatedMovies()
            .then((res) => {
                if(res && res.data){
                    console.log(res.data.results, "res");
                    setMovies(res.data.results);
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });

            setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getTopRated();
    }, []);

    return (
        <div className='flex'>
            {loading && <div>Loading...</div>}
            {errorMovies && <div>Error...</div>}
            {movies?.length > 0 &&
                movies.map((movie) => [
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        voteAverage={movie.vote_average}
                        genreId={movie.genre_ids[0]}    
                    />
                ])}
        </div>
    );
};

export default TopRated;
