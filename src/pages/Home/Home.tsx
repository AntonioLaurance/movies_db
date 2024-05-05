import { MovieTape } from '../../components/MovieTape';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-wapper'>
            <MovieTape title='Popular' category='popular' numMovies={8}></MovieTape>
            <MovieTape title='Top Rated' category='top_rated' numMovies={8}></MovieTape>
            <MovieTape title='Now Playing' category='now_playing' numMovies={8}></MovieTape>
        </div>
    );
};

export default Home;
