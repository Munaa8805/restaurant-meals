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
  @media screen and (max-width: 1450px) {
    height: 180px;
    width: 180px;
  }
  @media screen and (max-width: 1350px) {
    height: 160px;
    width: 160px;
  }
  @media screen and (max-width: 1200px) {
    height: 140px;
    width: 140px;
  }
  @media screen and (max-width: 1100px) {
    height: 120px;
    width: 120px;
  }
  @media screen and (max-width: 1000px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 900px) {
    height: 180px;
    width: 180px;
  }
  @media screen and (max-width: 850px) {
    height: 160px;
    width: 160px;
  }
`;
