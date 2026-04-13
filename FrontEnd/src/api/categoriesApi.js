import api from "./axiosConfig";

export const getCategories = async () => {
    const response = await api.get('/categories');
    return response.data;
}

export const addCategory = async (categoryData) => {
    const response = await api.post('/categories', categoryData);
    return response.data;
}

export const deleteCategory = async (categoryId) => {
    const response = await api.delete(`/categories/${categoryId}`);
    return response.data;
}
