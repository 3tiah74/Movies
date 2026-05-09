import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getCategories = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, '/api/movies/categories')
    );
    return response.data;
}


export const addCategory = async (categoryData) => {
    throw new Error("addCategory endpoint is not available in current backend.");
}

export const deleteCategory = async (categoryId) => {
    throw new Error("deleteCategory endpoint is not available in current backend.");
}
