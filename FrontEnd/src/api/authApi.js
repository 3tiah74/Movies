import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const register = async (userData) => {
    const response = await api.post(
        withServicePath(SERVICE_PATHS.auth, "/api/auth/register"),
        userData
    );
    return response.data;
}

export const login = async (credentials) => {
    const response = await api.post(
        withServicePath(SERVICE_PATHS.auth, "/api/auth/login"),
        credentials
    );
    return response.data;
}

export const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { message: "Logged out locally" };
}

export const getCurrentUser = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.auth, "/api/auth/me")
    );
    return response.data;
}
