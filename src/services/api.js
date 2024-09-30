import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/trending/movie/day",
//   params: { language: "en-US" },
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzNlMmE5NjUyNmQ4NThhYTk0OWQwNGUxZGZjMTQyOCIsIm5iZiI6MTcyNzcwNTA3Ni43OTU3MzYsInN1YiI6IjY2ZmFhZTFmOWM2ODZhNDYwMjEzMzc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PThkySpvlnWX7j8Gc7Wi8zgRb_wR5YX5xXY0LqHspws",
//   },
// };
// export const fetchTrends = async () => await axios.request(options);

const AUTH_KEY = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzNlMmE5NjUyNmQ4NThhYTk0OWQwNGUxZGZjMTQyOCIsIm5iZiI6MTcyNzcwNTA3Ni43OTU3MzYsInN1YiI6IjY2ZmFhZTFmOWM2ODZhNDYwMjEzMzc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PThkySpvlnWX7j8Gc7Wi8zgRb_wR5YX5xXY0LqHspws",
  },
};

export const fetchTrends = async () =>
  await axios.get("https://api.themoviedb.org/3/trending/movie/day", AUTH_KEY);

export const fetchMoviesByQuery = async (query) =>
  await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    AUTH_KEY
  );

export const fetchMovieById = async (movieId) =>
  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, AUTH_KEY);

export const fetchCastById = async (movie_id) =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    AUTH_KEY
  );

export const fetchReviewsById = async (movie_id) =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    AUTH_KEY
  );
