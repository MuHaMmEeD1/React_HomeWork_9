import styled from "styled-components";

export const HeaderComponent = styled.header`
  position: fixed;
  display: flex;
  gap: 20px;

  top: 0;
  left: 0;
  padding: 20px;
  background-color: darkgreen;
  width: 100vw;

  z-index: 1;
  a {
    color: white;
  }
`;
