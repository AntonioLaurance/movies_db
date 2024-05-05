import { ROUTES } from '../../routes/constants';
import { Buttom } from '../Buttom';
import { MovieCard } from '../MovieCard';
import { IMovieTape } from './types';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../services';
import { IMovieResponse } from '../../services/movies/types';

const MovieTape: React.FC<IMovieTape> = ({
    title, 
    category, 
    numMovies = -1, 
    movieId
}) => {
    const [movies, setMovies] = useState<IMovieResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMovies, setErrorMovies] = useState<boolean>(false);

    const navigate = useNavigate();

    // Link for the bottom of 'View All'
    const navigatePopular = () => {
        switch(category){
            case 'popular':
                navigate(`${ROUTES.POPULAR}`);
                break;

            case 'top_rated':
                navigate(`${ROUTES.TOP_RATED}`);
                break;
                
            case 'now_playing':
                navigate(`${ROUTES.NOW_PLAYING}`);
                break;
                
            default:    // case 'Recommendations'
                break;
        }
    }

    // Get the data of the movies of our given category
    const getCategory = async () => {
        await getMoviesByCategory(category, movieId)
            .then((res) => {
                if(res && res.data){
                    console.log(res.data.results, "res");
                    
                    if(numMovies != -1)
                        res.data.results.splice(numMovies);
                    
                    setMovies(res.data.results);
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });
        
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getCategory();
    }, [])

    return (
        <div className='relative'>
            {category !== "recommendations" ? (
                <Buttom text='View All' onClick={navigatePopular}></Buttom>
            ):(
                <></>
            )}
            <div>
                <h2 className='category-text'>{title}</h2>
            </div>
            <div className='overflow-x-auto inline-flex flex-auto w-full h-full'> 
                {loading && <div>Loading...</div>}
                {errorMovies && <div>Error...</div>}
                {movies?.length > 0 &&
                    movies.map((movie) => [
                        <MovieCard
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            genreId={movie.genre_ids[0]}
                        />

                    ])}
            </div>
        </div>
    );
};

export default MovieTape;
