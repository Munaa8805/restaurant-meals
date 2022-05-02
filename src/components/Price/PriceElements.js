import styled from "styled-components";

export const PriceTitleDescreption = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  h1 {
    color: #e67e22;
    text-transform: uppercase;
    font-size: 1rem;
  }
  p {
    color: rgb(54, 51, 51);
    font-size: 3rem;
    font-weight: bold;
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    p {
      font-size: 2rem;
    }
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 40px 0;
`;
export const PriceWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  // background: #00ff00;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const PriceCard = styled.div`
  background: ${({ bg }) => (!bg ? "#fdf2e9" : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  // max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(230, 125, 34, 0.5);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const PriceTitle = styled.h1`
  color: #e67e22;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
`;
export const PriceDesc = styled.p`
  color: #999;
  font-size: 1rem;
  font-weight: 400;
`;
export const PricePrice = styled.h1`
  color: #333;
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
`;
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const PriceContent = styled.p`
  font-size: 1.1rem;
  color: #666;
`;
export const BtnWrapper = styled.div`
  width: 100%;
`;
