import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getContent = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, '/api/movies')
    );
    return response.data;
}

export const addContent = async (contentData) => {
    const response = await api.post(
        withServicePath(SERVICE_PATHS.movies, '/api/movies'),
        contentData
    );
    return response.data;
}

export const deleteContent = async (contentId) => {
    const response = await api.delete(
        withServicePath(SERVICE_PATHS.movies, `/api/movies/${contentId}`)
    );
    return response.data;
}

export const updateContent = async (contentId, contentData) => {
    const response = await api.put(
        withServicePath(SERVICE_PATHS.movies, `/api/movies/${contentId}`),
        contentData
    );
    return response.data;
}

export const getContentByCategory = async (categoryId) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, `/api/movies/category/${categoryId}`)
    );
    return response.data;
}

export const searchContent = async (query) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, `/api/movies/search?q=${query}`)
    );
    return response.data;
}


export const getContentById = async (contentId) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, `/api/movies/${contentId}`)
    );
    return response.data;
}