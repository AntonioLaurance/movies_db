import httpInstance from '../httpInstance';

export const getMoviesByCategory = async (category: "popular" | "top_rated" | "now_playing" | "recommendations", movieId?: number) => {
    let res: any;
    const parameters = `api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    const endpoint = (category === "recommendations") ? 
        (
            `${movieId}/recommendations?${parameters}`
        ):(
            `${category}?${parameters}`
        );

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
