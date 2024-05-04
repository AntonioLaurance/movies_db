import httpInstance from '../httpInstance';

export const getMoviesByCategory = async (category: "popular" | "top_rated" | "now_playing") => {
    let res: any;
    const endpoint = `${category}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err;
        })

    return res;
}
