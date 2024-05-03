import httpInstance from "../htttpInstance";

export const getPopularMovies = async () => {
    let res: any;
    const endpoint = `popular?api_key=${process.env.REACT_MDB_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err.response;
        });
        return res;
};
