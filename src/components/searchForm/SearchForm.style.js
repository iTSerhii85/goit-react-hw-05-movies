import styled from 'styled-components';

export const Form = styled.form`
  /* position: relative; */
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-30%);
    z-index: 1000;
  }

  @media screen and (min-width: 1280px) {
    transform: translateX(-30%);
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
  font-size: 18px;
  font-weight: normal;
  padding: 4px 10px;
  border: 0;
  border-bottom: 3px solid gray;
  outline: 0;

  &:focus {
    border-bottom: 3px solid blue;
  }
`;
