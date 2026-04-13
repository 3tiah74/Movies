import api from "./axiosConfig";

export const getStats = async () => {
    const response = await api.get('/dashboard/stats');
    return response.data;
}

export const getRecentContent = async () => {
    const response = await api.get('/dashboard/recent-content');
    return response.data;
}

export const getRecentUsers = async () => {
    const response = await api.get('/dashboard/recent-users');
    return response.data;
}