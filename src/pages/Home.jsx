import { useEffect, useState } from "react";
import { getTrendingMovies } from "fetch";
import { MovieList } from "components/movieList/MovieList";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => setMovies(data))
    }, []);

    return (
      <main>
        <h1>Trending today</h1>
          <MovieList movies ={movies} />
      </main>
    );
  };