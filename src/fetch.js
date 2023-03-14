import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '7c6a11c2d8e8524ccfd41d8aedf2bd73';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovies(value) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export { getTrendingMovies, getMovies };
