import api from "./axiosConfig";

export const getFavorites = async () => {
    const response = await api.get('/favorites');
    return response.data;
}
export const addFavorite = async (contentId) => {
    const response = await api.post('/favorites', { contentId });
    return response.data;
}
export const removeFavorite = async (contentId) => {
    const response = await api.delete(`/favorites/${contentId}`);
    return response.data;
}

export const isFavorite = async (contentId) => {
    const response = await api.get(`/favorites/${contentId}`);
    return response.data.isFavorite;
}

