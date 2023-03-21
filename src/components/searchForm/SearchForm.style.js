import styled from 'styled-components';

export const Form = styled.form`
  /* position: relative; */
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 10px;
    left: 25%;
    /* transform: translateX(-60%); */
    z-index: 1000;
  }

  @media screen and (min-width: 1280px) {
    left: 20%;
  }
`;

export const Button = styled.button`
  background-color: blue;
  padding: 7px 20px;
  color: #ffffff;
  font-size: medium;
  font-weight: bolder;
  color: #ffffff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border: none;
`;

export const Input = styled.input`
  width: 50%;
  font-size: 18px;
  font-weight: normal;
  padding: 4px 5px;
  border: 0;
  border-bottom: 3px solid gray;
  outline: 0;

  &:focus {
    border-bottom: 3px solid blue;
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
  }
  @media screen and (min-width: 1280px) {
    width: fit-content;
    padding: 4px 10px;
  }
`;
