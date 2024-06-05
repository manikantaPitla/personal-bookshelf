import styled from "styled-components";

export const BookCard = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    height: 35px;
    border-radius: 4px;
    outline: none;
    border: none;
    background-color: #4caf50;
    color:#fff;
    cursor: pointer;
  }
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
