import styled from "styled-components";

export const MealImg = styled.img`
  height: 200px;
  width: 200px;
  //   background-size: cover;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1500px) {
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }
`;
