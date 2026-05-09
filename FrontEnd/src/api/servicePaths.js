export const SERVICE_PATHS = {
  auth: "/auth-service",
  movies: "/movies-service",
  reviews: "/review-service",
  watchlist: "/watchlist-service",
};

export const withServicePath = (servicePath, endpoint) => `${servicePath}${endpoint}`;
