import styled from "styled-components";

export const FilimDetalDiv = styled.div`
  background-color: lightgreen;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 260px;
  }

  div {
    display: flex;
    gap: 30px;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;

      :nth-child(2) {
        position: relative;
        bottom: 35px;
      }
    }
  }
`;
