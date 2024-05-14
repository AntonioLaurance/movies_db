import { getDetails } from '../../services/movies/getDetails';
import { MovieTape } from '../../components/MovieTape';
import { Pill } from '../../components/Pill';
import { IMAGE_SOURCE } from '../../constants/moviesMock';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './Show.css';

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<string>("");  // "["3982732"]"

    const poster = IMAGE_SOURCE + show.poster_path;

    const goBack = () => {
        navigate(-1);
    };

    const addFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];  // "["3982732"]" -> ["3982732"]
        const newFavorites = [...favs, id];  // ["3982732", "9823782"]
        setFavorites(JSON.stringify(newFavorites));  // "["3982732", "9823782"]"
        setIsFavorite(true);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    const removeFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];  // "["2387238"]" -> 
        let newFavorites = [...favs, id]; 
        newFavorites = newFavorites.filter((e) => e !== id);
        setFavorites(JSON.stringify(newFavorites));
        setIsFavorite(false);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    const getMovieDetail = async () => {
        await getDetails(String(id))
            .then((res) => {
                if(res && res.data){
                    setShow(res.data);
                }
            })
            .catch((err) => {
                console.log(err, "err");
            });
        setLoading(false);
    }

    useEffect(() => {
        // llamar el endpoint de detalles de una película 
        const favs = localStorage.getItem('favorites') || "";
        setFavorites(favs);
        if(favs.includes(String(id))){
            setIsFavorite(true);
        }
        setLoading(true);
        getMovieDetail();
    }, [id]);

    return (
        <div>
            <div className='flex flex-wrap py-2.5'>
                {loading ? (
                    <span>loading...</span>
                ) : (
                    <>
                        <div className='principal-image-container flex-initial'>
                            <img className='image-fluid' src={poster} alt={'poster ' + show.title}/>
                        </div>
                        <div className='show-image-detail flex-1'>
                            <div className='show-detail-title'>
                                <h2>{show.title}</h2>
                            </div>
                            <div className='show-detail-info'>
                                <span className='icon-container'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="show-detail-info-icon inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                    </svg>
                                    18
                                    {show.adult ? ("+"):("-")}
                                </span>
                                <span className='icon-container'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="show-detail-info-icon inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                                    </svg>
                                    {show.runtime}
                                    {" min."}
                                </span>
                                <span className='icon-container'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-day" className="show-detail-info-icon inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    {show.release_date.substr(0, 4)}
                                </span>
                                <span className='icon-container'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="show-detail-info-icon inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    {show.vote_average}
                                </span>
                                <span className='icon-container'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll" className="show-detail-info-icon inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"></path>
                                    </svg>
                                    {show.vote_count}
                                </span>
                            </div>
                            <div className='show-detail-description my-2.5'>
                                "{show.tagline}"
                                <br></br>
                                {show.overview}
                            </div>
                            <div className='show-detail-extra flex'>
                                <div className='extra-block'>
                                    <h5 className='extra-title'>Genres</h5>
                                    <div className='flex'>
                                        {show.genres.map((genre: any) => [
                                            <Pill title={genre.name} color='green'></Pill>
                                        ])}
                                    </div>
                                </div>
                                <div className='extra-block'>
                                    <h5 className='extra-title'>Favorite</h5>
                                    {isFavorite ? (
                                        <div>
                                            <button className='favorite-buttom red-color-favorite-buttom p4' onClick={removeFavorite}>
                                                <div className='flex'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart-broken" className="heart-favorite-buttom" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"></path>
                                                    </svg>
                                                    <p>Remove from Favorites</p>
                                                </div>
                                            </button>
                                        </div>
                                    ): (
                                        <div>
                                            <button className='favorite-buttom blue-color-favorite-buttom p4' onClick={addFavorite}>
                                                <div className='flex'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" className="heart-favorite-buttom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                                    </svg>
                                                    <p>Add to Favorites</p>
                                                </div>     
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className='recommendations-tape'>
                <MovieTape title='Recommendations' category='recommendations' numMovies={8} movieId={Number(id)}></MovieTape>
            </div>
        </div>
    );
};

export default Show;
