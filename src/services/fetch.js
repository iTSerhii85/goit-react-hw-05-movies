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

async function getMovies(value, p) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: `${KEY}`,
        query: `${value}`,
        page: `${p}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieBiId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getCastBiId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getReviewsBiId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getTrendingMovies,
  getMovies,
  getMovieBiId,
  getCastBiId,
  getReviewsBiId,
};
