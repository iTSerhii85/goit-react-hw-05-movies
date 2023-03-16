import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: 'black' };

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="" style={setActive}>
            Home
          </NavLink>
          <br />
          <NavLink to="movies" style={setActive}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>2023</footer>
    </>
  );
};
