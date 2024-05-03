import Config from "../config";
import axios from "axios";

const httpInstance = axios.create({
    baseURL: Config.API_URL,
});

// Every time with every request and response
httpInstance.interceptors.request.use(
    async ( config ) => {
        const newConfig = { ...config };

        return newConfig;
    },
    ( error ) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
)

export default httpInstance;
