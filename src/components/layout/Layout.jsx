import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Footer,
  Header,
  Loader,
  Main,
  Nav,
  Wrapper,
} from './Layout.stiles';

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
          <Suspense fallback={<Loader>Loading</Loader>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>
        Developed by{' '}
        <Link to="https://github.com/iTSerhii85" target="_blank">
          iTSerhii
        </Link>{' '}
        <span>|</span> 2023 <span>|</span>
      </Footer>
    </Wrapper>
  );
};
