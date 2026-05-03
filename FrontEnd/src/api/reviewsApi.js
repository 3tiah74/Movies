import api from "./axiosConfig";

export const getReviews = async () => {
    const response = await api.get('/reviews')
    return response.data
}

export const addReview = async (reviewData) => {
    const response = await api.post('/reviews', reviewData)
    return response.data
}

export const deleteReview = async (reviewId) => {
    const response = await api.delete(`/reviews/${reviewId}`)
    return response.data
}