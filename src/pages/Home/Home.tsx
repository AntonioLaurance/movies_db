import { MovieTape } from '../../components/MovieTape';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-wapper'>
            <MovieTape title='Popular' category='popular'></MovieTape>
            <MovieTape title='Top Rated' category='top_rated'></MovieTape>
            <MovieTape title='Now Playing' category='now_playing'></MovieTape>
        </div>
    );
};

export default Home;
