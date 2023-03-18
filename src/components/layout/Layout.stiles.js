import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid gray;
  box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 12px 14px 0px rgba(0, 0, 0, 0.68);
  margin-bottom: 20px;
  z-index: 100;
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 50px;
  font-size: larger;
  font-weight: bolder;
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border-top: 2px solid gray;
  text-align: center;
  box-shadow: 1px -11px 14px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px -11px 14px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px -11px 14px 0px rgba(0, 0, 0, 0.68);
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 1 auto;
`;
