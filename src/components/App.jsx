import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} />
        <Route path="*" element={<h2>Nof found</h2>} />
      </Route>
    </Routes>
    </>
  );
};
