import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../utils/GlobalStyle';
import { Layout } from './layout/Layout';

const HomePage = lazy(() => import('pages/home/Home'));
const MoviesPage = lazy(() => import('pages/movies/Movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h2>No found</h2>} />
        </Route>
      </Routes>
    </>
  );
};
