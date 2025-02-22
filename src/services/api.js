const API_KEY = "56981871a7d905319c77bf6b93f321b8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      // remove all characters not appropriate in the string
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
