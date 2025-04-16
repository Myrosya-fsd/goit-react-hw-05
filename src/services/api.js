import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM5MDE1ZjFjNjZlOWQzMjFkY2U1NGRmMzEyZWNiYyIsIm5iZiI6MTc0NDcxNjMxMS4yNjQ5OTk5LCJzdWIiOiI2N2ZlNDIxNzlkMWY3NzhhYjg5OTY1ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Taa61MIg7VnDuQh6VYNDFDBz9mMQFjlaePpT63zrswU",
  },
});

//Trending movies
export const getTrendyMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

//Search movies
export const searchMovies = async (query) => {
  const response = await api.get(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};

//Movie details
export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

//Movie credits
export const getMovieCredits = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data;
};

//Movie reviews
export const getMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
