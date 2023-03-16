import { lazy } from 'react';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
// import { Cast } from './cast/Cast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { Reviews } from './reviews/Reviews';

const HomePage = lazy(() => import('pages/Home'));
const MoviesPage = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
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
          <Route path="*" element={<h2>Nof found</h2>} />
        </Route>
      </Routes>
    </>
  );
};
