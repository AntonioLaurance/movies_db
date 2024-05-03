import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<string>("");  // "["381372"]"

    const goBack = () => {
        navigate(-1);
    };

    const addFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];  // "["2387238"]" -> 
        const newFavorites = [...favs, id]; 
        setFavorites(JSON.stringify(newFavorites));
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

    /*
    const getMovieDetail = async () => {
        await getDetails(String(id));
    }
    */

    useEffect(() => {
        // llamar el endpoint de detalles de una película 
        const favs = localStorage.getItem('favorites') || "";
        setFavorites(favs);
        if(favs.includes(String(id))){
            setIsFavorite(true);
        }
    }, []);

    return (
        <div>
            <div>Show id: { id } </div>
            <div>Título desde el state: {location.state.name}</div>
            <div>Título desde el servicio:</div>
            <button onClick={goBack}>Ir atrás</button>
            {isFavorite ? (
                <div>
                    <button className="p4 bg-blue-500">
                        Remove from favorites
                    </button>
                </div>
            ): (
                <div>
                </div>
            )} 
        </div>
    );
};

export default Show;
