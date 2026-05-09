import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getUsers = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.auth, '/api/admin/users')
    );
    return response.data;
}

export const addAdmin = async () => {
    throw new Error("addAdmin endpoint is not available in current backend.");
}

export const deleteUser = async (userId) => {
    const response = await api.delete(
        withServicePath(SERVICE_PATHS.auth, `/api/admin/users/${userId}`)
    );
    return response.data;
}

export const updateUser = async () => {
    throw new Error("updateUser endpoint is not available in current backend.");
}

export const getUserById = async (userId) => {
    const users = await getUsers();
    return (Array.isArray(users) ? users : []).find(
        (user) => String(user?.userId) === String(userId)
    ) || null;
}

export const getProfile = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.auth, '/api/user/profile')
    );
    return response.data;
}

export const updateProfile = async (userData) => {
    const response = await api.put(
        withServicePath(SERVICE_PATHS.auth, '/api/user/profile'),
        userData
    );
    return response.data;
}


