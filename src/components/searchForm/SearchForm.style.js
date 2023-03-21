import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  top: 10px;
  left: 500px;
  z-index: 1000;
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
