import styled from "styled-components";

export const FilimUlComponent = styled.ul`
  display: flex;
  width: 1200px;
  gap: 20px;
  flex-wrap: wrap;
  background-color: lightgreen;
  list-style: none;
  padding: 20px;

  :hover {
    opacity: 0.75;
  }

  li {
    background-color: limegreen;
    padding: 20px;
    position: relative;
    border: green solid 2px;
    border-radius: 10px;

    img {
      width: 160px;
      height: 260px;
      border: 2px solid black;
    }

    p {
      position: absolute;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: 700;
      font-size: 20px;
      top: 50%;
      left: 50%;
    }
  }
`;

export const FilimForm = styled.form`
  padding-top: 100px;
`;
