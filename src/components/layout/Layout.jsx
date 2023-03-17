import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Footer, Header, Main, Nav, Wrapper } from './Layout.stiles';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: 'black' };

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <Nav>
            <NavLink to="" style={setActive}>
              Home
            </NavLink>
            <NavLink to="movies" style={setActive}>
              Movies
            </NavLink>
          </Nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>2023</Footer>
    </Wrapper>
  );
};
