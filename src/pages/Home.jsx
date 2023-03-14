import { useEffect, useState } from "react";

import { TrendingMovieList } from "components/TrendingMovieList";
import { getTrendingMovies } from "fetch";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => setMovies(data))
    }, []);

    return (
      <main>
        <h1>Trending today</h1>
        <TrendingMovieList movies ={movies} />
      </main>
    );
  };