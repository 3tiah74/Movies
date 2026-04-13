import api from "./axiosConfig";

export const getContent = async () => {
    const response = await api.get('/content');
    return response.data;
}

export const addContent = async (contentData) => {
    const response = await api.post('/content', contentData);
    return response.data;
}

export const deleteContent = async (contentId) => {
    const response = await api.delete(`/content/${contentId}`);
    return response.data;
}

export const updateContent = async (contentId, contentData) => {
    const response = await api.put(`/content/${contentId}`, contentData);
    return response.data;
}

export const getContentByCategory = async (categoryId) => {
    const response = await api.get(`/content/category/${categoryId}`);
    return response.data;
}

export const getContentById = async (contentId) => {
    const response = await api.get(`/content/${contentId}`);
    return response.data;
}