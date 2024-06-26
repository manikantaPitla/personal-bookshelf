import styled from "styled-components";

export const InputEl = styled.input`
  outline: none;
  border: 1px solid 4px;
  border-radius: 4px;
  padding: 4px 10px;
  height: 35px;
  min-width: 300px;

  @media screen and (max-width: 400px) {
    min-width: 100px;
    flex: 1;
  }
`;
