import { MovieTape } from '../../components/MovieTape';
import React, { useEffect } from 'react';
import './Home.css';
import { useAppContext } from '../../store/app-context/app-context';

const Home: React.FC = () => {
    const { user, setUser, logOut } = useAppContext();
    console.log(user);

    useEffect(() => {
        if (typeof user === "undefined"){
            const localUser = localStorage.getItem("user");

            if(localUser){
                setUser(JSON.parse(localUser));
            }

            // aquí en el else, llamar al servicio para obtener la información

            // Log out after 5 seconds of inactivity
            setTimeout(() => {
                logOut();
            }, 5000)
        }
    })
    return (
        <div className='home-wapper'>
            {user?.firstName}
            <MovieTape title='Popular' category='popular' numMovies={8}></MovieTape>
            <MovieTape title='Top Rated' category='top_rated' numMovies={8}></MovieTape>
            <MovieTape title='Now Playing' category='now_playing' numMovies={8}></MovieTape>
        </div>
    );
};

export default Home;
