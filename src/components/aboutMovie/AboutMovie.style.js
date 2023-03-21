import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 15px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    gap: 30px;
  }
`;

export const BackButton = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-top: -25px;
  margin-bottom: 20px;
  width: fit-content;
  padding: 7px 20px;
  border-radius: 4px;
  background-color: blue;
  color: #ffffff;
  font-size: medium;
  font-weight: bolder;
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  @media screen and (min-width: 768px) {
    margin-left: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
`;
