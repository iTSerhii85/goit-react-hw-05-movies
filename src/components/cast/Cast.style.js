import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Card = styled.li`
  max-width: 190px;
  height: 270px;
  padding: 10px;
  background-color: #82d1e2;
  border-radius: 5px;
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
  overflow-wrap: break-word;

  h4 {
    margin-top: 10px;
    margin-bottom: 0;
    color: black;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
