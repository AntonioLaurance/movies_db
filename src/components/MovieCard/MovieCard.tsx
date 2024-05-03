import { IMAGE_SOURCE } from "./../../constants/moviesMock";
import { IMovieCard } from './types';
import { Pill } from '../Pill';
import genres from "./../../constants/genres.json";
import { useNavigate } from "react-router-dom";
import './MovieCard.css';
import React from 'react'
import { ROUTES } from "../../routes/constants";

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath
}) => {
    const navigate = useNavigate();
    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number): string => {
        // Filter the JSON to give an array of a 1 element of a JSON type
        const genre = genres["genres"].filter((genres) => genres.id == genreId);
        
        return genre[0]["name"];
    }

    const navigateMovies = (id: number, movieName: string) => {
        navigate(`${ROUTES.SHOW}${id}`, { state: { name: movieName }}); //   /show/278362
    }

    return (
        <div className='show-box'>
            <div>
                <img className='movie-image' src={poster} alt='poster' />
            </div>
            <div className='movie-info'>
                <div className='movie-category'>
                    <Pill title={getGenre(genreId)} color='red'/>
                </div>
                <p className='movie-title'>{title}</p>
                <p className='movie-rating'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className='movie-rating-start' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg> 
                    {voteAverage} / 10
                </p>
            </div>
        </div>
    )
}

export default MovieCard;
