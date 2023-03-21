import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
  font-weight: bolder;
  font-size: larger;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 35px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 50px;
`;
