import { Buttom } from '../../components/Buttom';
import { MovieCard } from '../../components/MovieCard';
import { movies } from '../../constants/moviesMock';
import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <div className='home-wapper flex'>
      <MovieCard
        movieId={movies[0].id}
        posterPath={movies[0].poster_path}
        title={movies[0].title}
        voteAverage={movies[0].vote_average}
        genreId={movies[0].genre_ids[0]}
        />
      <MovieCard
        movieId={movies[1].id}
        posterPath={movies[1].poster_path}
        title={movies[1].title}
        voteAverage={movies[1].vote_average}
        genreId={movies[1].genre_ids[0]}
        />
      <MovieCard
        movieId={movies[2].id}
        posterPath={movies[2].poster_path}
        title={movies[2].title}
        voteAverage={movies[2].vote_average}
        genreId={movies[2].genre_ids[0]}
      />
      <Buttom></Buttom>
    </div>
  );
};

export default Home;
