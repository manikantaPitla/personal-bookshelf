import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

export const BooksDisplay = styled.ul`
  flex: 1;
  list-style: none;
  display: flex;
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const NavBanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;

  h1 {
    font-size: 22px;
  }

  button {
    width: fit-content;
    padding: 0px 30px;
    height: 35px;
    border-radius: 4px;
    outline: none;
    border: none;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
  }
`;
