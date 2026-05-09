import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getFavorites = async (userId) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.watchlist, `/api/watchlist/user/${userId}`)
    );
    return response.data;
}

export const addFavorite = async ({ userId, movieId }) => {
    const response = await api.post(
        withServicePath(SERVICE_PATHS.watchlist, '/api/watchlist/add'),
        { userId, movieId }
    );
    return response.data;
}

export const removeFavorite = async (watchlistId) => {
    const response = await api.delete(
        withServicePath(SERVICE_PATHS.watchlist, `/api/watchlist/${watchlistId}`)
    );
    return response.data;
}

export const isFavorite = async (userId, movieId) => {
    const favorites = await getFavorites(userId);
    return (Array.isArray(favorites) ? favorites : []).some(
        (item) => String(item?.movieId) === String(movieId)
    );
}

