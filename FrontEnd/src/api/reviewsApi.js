import api from "./axiosConfig";
import { SERVICE_PATHS, withServicePath } from "./servicePaths";

export const getReviews = async () => {
    const response = await api.get(withServicePath(SERVICE_PATHS.reviews, '/api/reviews'))
    return response.data
}

export const getReviewsByMovie = async (movieId) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.reviews, `/api/reviews/movie/${movieId}`)
    )
    return response.data
}

export const getReviewsByUser = async (userId) => {
    const response = await api.get(
        withServicePath(SERVICE_PATHS.reviews, `/api/reviews/user/${userId}`)
    )
    return response.data
}

export const addReview = async (reviewData) => {
    const response = await api.post(
        withServicePath(SERVICE_PATHS.reviews, '/api/reviews'),
        reviewData
    )
    return response.data
}

export const updateReview = async (reviewId, reviewData) => {
    const response = await api.put(
        withServicePath(SERVICE_PATHS.reviews, `/api/reviews/${reviewId}`),
        reviewData
    )
    return response.data
}

export const deleteReview = async (reviewId) => {
    const response = await api.delete(
        withServicePath(SERVICE_PATHS.reviews, `/api/reviews/${reviewId}`)
    )
    return response.data
}