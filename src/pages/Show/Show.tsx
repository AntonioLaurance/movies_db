import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getDetails } from '../../services/movies/getDetails';
import { MovieTape } from '../../components/MovieTape';
import './Show.css';
import { IMAGE_SOURCE } from '../../constants/moviesMock';

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
    }, []);

    return (
        <div>
            <div className='flex py-2.5'>
                {loading ? (
                    <span>loading...</span>
                ) : (
                    <>
                        <div className='principal-image-container'>
                            <img className='image-fluid' src={poster} alt={'poster ' + show.title}/>
                        </div>
                        <div>
                            <div>Show id: { id } </div>
                            <div>Título desde el state: {location.state.name}</div>
                            <div>Título desde el servicio: {show.title}</div>
                            <div>Para adultos desde servicio: {show.adult ? "Yes" : "No"}</div>
                            <button onClick={goBack}>Ir atrás</button>
                            {isFavorite ? (
                                <div>
                                    <button className="p4 bg-blue-500" onClick={removeFavorite}>
                                        Remove from favorites
                                    </button>
                                </div>
                            ): (
                                <div>
                                    <button className="p4 bg-red-500" onClick={addFavorite}>
                                        Add to favorites
                                    </button>
                                </div>
                            )}
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
