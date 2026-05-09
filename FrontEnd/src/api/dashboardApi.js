import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getStats = async () => {
    const [usersResult, moviesResult] = await Promise.allSettled([
        getRecentUsers(),
        getRecentMovies(),
    ]);

    return {
        totalUsers: usersResult.status === "fulfilled" && Array.isArray(usersResult.value)
            ? usersResult.value.length
            : 0,
        totalMovies: moviesResult.status === "fulfilled" && Array.isArray(moviesResult.value)
            ? moviesResult.value.length
            : 0,
    };
}

export const getRecentMovies = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.movies, "/api/movies")
    );
    return response.data;
}

export const getRecentUsers = async () => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.auth, "/api/admin/users")
    );
    return response.data;
}